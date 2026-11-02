import React, { useState } from "react";
import Modal from "../../common/Modal";
import { FiEdit } from "react-icons/fi";

const UpdateCourseBtn = ({ data }) => {
  const [courseNameInput, setCourseNameInput] = useState(data.courseName);
  const [creatorInput, setCreatorInput] = useState(data.creator);
  const [priceInput, setPriceInput] = useState(data.price);

  const Triger = () => {
    return (
      <button type="button" className="neu-btn py-2 px-3 neu-chip-warning">
        <FiEdit className="size-5" />
      </button>
    );
  };
  return (
    <Modal Triger={<Triger />} title={"به روز رسانی دوره"} mainBtn={"ویرایش"}>
      <form id="course-form" className="flex flex-col gap-6 w-sm" novalidate>
        <div className="flex flex-col gap-2 items-start">
          <label for="course-name" className="text-sm font-medium">
            نام دوره
          </label>
          <input
            id="course-name"
            value={courseNameInput}
            onChange={(e) => setCourseNameInput(e.target.value)}
            type="text"
            className="neu-input"
            autoComplete="off"
            required
          />
        </div>

        <div className="flex flex-col gap-2 items-start">
          <label for="course-creator" className="text-sm font-medium">
            مدرس
          </label>
          <input
            id="course-creator"
            value={creatorInput}
            onChange={(e) => setCreatorInput(e.target.value)}
            type="text"
            className="neu-input"
            autoComplete="off"
            required
          />
        </div>

        <div className="flex flex-col gap-2 items-start">
          <label for="course-price" className="text-sm font-medium">
            قیمت
          </label>
          <input
            id="course-price"
            value={priceInput}
            onChange={(e) => setPriceInput(e.target.value)}
            type="text"
            inputmode="numeric"
            className="neu-input pe-16"
            required
          />
          <span
            id="price-counter"
            className="pointer-events-none min-h-5 flex items-center text-sm text-ink-muted"
          ></span>
        </div>

        <fieldset className="flex flex-col gap-3 items-start">
          <span className="mb-1 text-sm font-medium">وضعیت</span>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="status"
                value="تکمیل شده"
                className="peer sr-only"
                id="complete-radio-item"
                // {courseStatus === "تکمیل شده" ? "checked" : ""}
                required
              />
              <span className="neu-chip neu-chip-success cursor-pointer px-4 py-2 text-sm opacity-60 peer-checked:opacity-100 peer-checked:shadow-neu-inset peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-accent">
                تکمیل شده
              </span>
            </label>

            <label>
              <input
                type="radio"
                name="status"
                value="در حال ضبط"
                className="peer sr-only"
                id="recording-radio-item"
                // {courseStatus === "تکمیل شده" ? "" : "checked"}
              />
              <span className="neu-chip neu-chip-warning cursor-pointer px-4 py-2 text-sm opacity-60 peer-checked:opacity-100 peer-checked:shadow-neu-inset peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-accent">
                در حال ضبط
              </span>
            </label>
          </div>
        </fieldset>
      </form>
    </Modal>
  );
};

export default UpdateCourseBtn;
