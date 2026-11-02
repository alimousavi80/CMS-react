import React from "react";
import Modal from "../../common/Modal";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const RemoveCourseBtn = ({ data, onDelete }) => {
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
      title={"حذف دوره"}
      onSubmit={() => onDelete(data.id)}
    >
      <p className="mb-8 text-center text-lg">
        آیا از حذف دوره {data.courseName} اطیمنان دارید؟
      </p>
    </Modal>
  );
};

export default RemoveCourseBtn;
