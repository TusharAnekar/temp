import { useEffect, useState } from "react";

import "./home.css";
import { CategoriesService } from "../../services/CategoriesService";
import { ProductsService } from "../../services/ProductsService";

export function Home() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [checkbox, setCheckbox] = useState([]);

  async function getData() {
    try {
      const categoryResponse = await CategoriesService();
      const productsResponse = await ProductsService();

      const {
        data: { categories },
        status,
      } = categoryResponse;

      const {
        data: { products },
      } = productsResponse;

      if (status === 200) {
        setCategories(categories);
        setProducts(products);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function handleCheckbox(e) {
    const checkboxValueSelected = e.target.value.toLowerCase()
    checkbox.includes(checkboxValueSelected)
      ? setCheckbox(
          checkbox.filter((checkboxValue) => checkboxValue !== checkboxValueSelected)
        )
      : setCheckbox([...checkbox, checkboxValueSelected]);
  }

  const checkboxFilteredData = checkbox.length ? products.filter(({category}) => checkbox.includes(category.toLowerCase())) : products

  return (
    <>  
      <h1>Home</h1>
      <div>
        {categories.map(({ _id, categoryName }) => (
          <label key={_id}>
            <input
              type="checkbox"
              value={categoryName}
              onClick={handleCheckbox}
            />
            {categoryName}
          </label>
        ))}
      </div>

      <div className="books_container">
        {checkboxFilteredData.map(({ _id, name, author, category, img }) => (
          <div key={_id} className="book_container">
            <img src={img} alt={`${name} cover`} />
            <p>{name}</p>
            <p>{author}</p>
            <p>{category}</p>
          </div>
        ))}
      </div>
    </>
  );
}
