import "./App.css";
import Mockman from "mockman-js";
import {Routes, Route} from "react-router-dom"
import { Header } from "./components/Header";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/mockman" element={<Mockman/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
