import React from "react";

const ModalFooter = ({ onClose, mainBtn, onSubmit }) => {
  const submitHandler = () => {
    onSubmit();
    onClose();
  };

  return (
    <div className="flex justify-around mt-7">
      <button
        onClick={submitHandler}
        type="button"
        className={` neu-btn ${mainBtn === "ویرایش" ? "neu-chip-warning" : mainBtn === "حذف" ? "neu-chip-delete" : mainBtn === "افزودن" ? "neu-chip-success" : null}`}
      >
        {mainBtn}
      </button>
      <button type="button" onClick={onClose} className="neu-btn">
        انصراف
      </button>
    </div>
  );
};

export default ModalFooter;
