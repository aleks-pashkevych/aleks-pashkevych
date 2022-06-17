import React, { useRef } from "react";
import "./modal.css";

function Modal({ closeModal, data }) {
  const inputRef = useRef(null);
  function closeTheModal() {
    data(inputRef.current.value);
    closeModal(false);
  }
  return (
    <div className="modal">
      <input
        ref={inputRef}
        type="text"
        className="form-control block
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none 
                      flex items-center justify-around"
        placeholder="Enter value"
      />
      <button
        type="submit"
        class="
              px-6
              py-2.5
              bg-blue-600
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-blue-700 hover:shadow-lg
              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-blue-800 active:shadow-lg
              transition
              duration-150
              ease-in-out"
        onClick={closeTheModal}
      >
        Save
      </button>
    </div>
  );
}
export default Modal;
