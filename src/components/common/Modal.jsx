import React, { useState } from "react";
import ModalFooter from "./components/ModalFooter";
import ModalHeader from "./components/ModalHeader";

const Modal = ({ Triger, children, title, mainBtn, onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div onClick={openModal}>{Triger}</div>
      <div
        id="modal-container"
        className={`${isOpen ? "flex" : "hidden"} fixed inset-0 z-50 items-center justify-center bg-black/10 p-4 backdrop-blur-[2px]`}
      >
        <div dir="rtl" className="neu-card w-fit max-w-md">
          <ModalHeader onClose={closeModal} title={title} />
          {children}
          <ModalFooter
            onClose={closeModal}
            mainBtn={mainBtn}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default Modal;
