import React from "react";
import Modal from "../../common/Modal";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const RemoveBtn = ({ data, onDelete, title }) => {
  const Triger = () => {
    return (
      <button className="neu-btn py-2 px-3 neu-chip-delete ">
        <FiTrash2 className="size-5" />
      </button>
    );
  };
  return (
    <Modal
      Triger={<Triger />}
      mainBtn={"حذف"}
      title={`حذف ${title}`}
      onSubmit={() => onDelete(data.id)}
    >
      <p className="mb-8 text-center text-lg">
        {title === "دوره"
          ? `آیا از حذف دوره ${data.CourseName} اطمینان دارید؟`
          : `آیا از حذف کاربر ${data.fullName} اطمینان دارید؟`}
      </p>
    </Modal>
  );
};

export default RemoveBtn;
