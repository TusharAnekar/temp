export function Modal({ isOpened, setIsOpened }) {
  const handleClose = () => {
    setIsOpened(false);
  };

  return (
    <div>
      {isOpened && (
        <dialog open>
          <h1>This is a dialog</h1>
          <button onClick={handleClose}>Close</button>
        </dialog>
      )}
    </div>
  );
}
