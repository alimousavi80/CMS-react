import React from "react";
import { IoClose } from "react-icons/io5";

const ModalHeader = ({ onClose, title }) => {
  return (
    <div className="mb-6 flex items-center justify-between gap-4">
      <h2 id="course-modal-title" className="text-lg font-semibold">
        {title}
      </h2>
      <button
        onClick={onClose}
        type="button"
        className="neu-icon-btn close-modal-btn"
      >
        <IoClose className="size-7" />
      </button>
    </div>
  );
};

export default ModalHeader;
