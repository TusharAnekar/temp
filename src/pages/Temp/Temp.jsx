import { useState } from "react";

import "./temp.css"

import "react-responsive-modal/styles.css";
import Modal from "react-responsive-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FavoriteIcon from '@mui/icons-material/Favorite';

export function Temp() {
  const [open, setOpen] = useState(false);
  const [heart, setHeart] = useState(false)

  const onCloseModal = () => setOpen(false);
  const closeIcon = (
    <svg fill="currentColor" viewBox="0 0 20 20" width={28} height={28}>
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

    function handleHeart () {
      setHeart(!heart)
      toast.success("This is like message")
    }

  return (
    <>
      <div>
        <button onClick={() => setOpen(true)}>Open Modal</button>
        <Modal open={open} onClose={onCloseModal} center closeIcon={closeIcon}>
          <p>Modal</p>
          <form action="">
            <label htmlFor="">
              <input type="text" name="name" />
              Name
            </label>
          </form>
        </Modal>
      </div>

      <div>
        <button onClick={() => toast.success("This is toast message")}>
          Open Toast Message
        </button>
        <ToastContainer />
      </div>

      <FavoriteTwoToneIcon className={heart ? "heart-icon" : "icon"} onClick={handleHeart}/>

      <FavoriteIcon className={heart ? "heart-icon" : "icon"} onClick={handleHeart}/>
    </>
  );
}
