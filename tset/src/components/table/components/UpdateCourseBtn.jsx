import React, { useEffect, useReducer, useState } from "react";
import Modal from "../../common/Modal";
import { FiEdit } from "react-icons/fi";

const reducer = (course, action) => {
  console.log(course, action);

  switch (action.type) {
    case "courseName": {
      return {
        ...course,
        courseName: action.value,
      };
    }
    case "creator": {
      return {
        ...course,
        creator: action.value,
      };
    }
    case "price": {
      return {
        ...course,
        price: action.value,
      };
    }
    case "status": {
      return {
        ...course,
        status: action.value,
      };
    }
    default: {
      return course;
    }
  }
};

const UpdateCourseBtn = ({ newCourse, onChange, onUpdate, data, onClose }) => {
  console.log(newCourse.courseName);
  console.log(newCourse.creator);

  const [course, dispach] = useReducer(reducer, {
    courseName: newCourse.courseName,
    creator: newCourse.creator,
    price: newCourse.price,
    status: newCourse.status,
    category: "فرانت اند",
  });

  // useEffect(() => {
  //   onChange(course);
  // }, [course]);

  // const inputChangeHandler = (key, value) => {
  //   const Course = {
  //     ...newCourse,
  //     [key]: value,
  //   };
  //   onChange(Course);
  // };

  const Triger = () => {
    return (
      <button type="button" className="neu-btn py-2 px-3 neu-chip-warning">
        <FiEdit className="size-5" />
      </button>
    );
  };

  return (
    <Modal
      Triger={<Triger />}
      title={"به روز رسانی دوره"}
      mainBtn={"ویرایش"}
      onSubmit={() => {
        onUpdate(data.id);
      }}
      onClose={onClose}
      onOpen={() =>
        onChange({
          courseName: data.courseName,
          creator: data.creator,
          price: data.price,
          status: data.status,
          category: data.category,
        })
      }
    >
      <form
        id="course-form"
        className="flex flex-col gap-6 min-w-xs sm:min-w-sm"
        noValidate
      >
        <div className="flex flex-col gap-2 items-start">
          <label htmlFor="course-name" className="text-sm font-medium">
            نام دوره
          </label>
          <input
            name="courseName"
            // onChange={(e) => {
            //   inputChangeHandler(e.target.name, e.target.value);
            // }}
            onChange={(e) =>
              dispach({ type: "courseName", value: e.target.value })
            }
            id="course-name"
            value={newCourse.courseName}
            type="text"
            className="neu-input"
            autoComplete="off"
            required
          />
        </div>

        <div className="flex flex-col gap-2 items-start">
          <label htmlFor="course-creator" className="text-sm font-medium">
            مدرس
          </label>
          <input
            // onChange={(e) => {
            //   inputChangeHandler(e.target.name, e.target.value);
            // }}
            onChange={(e) =>
              dispach({ type: "creator", value: e.target.value })
            }
            name="creator"
            id="course-creator"
            value={newCourse.creator}
            type="text"
            className="neu-input"
            autoComplete="off"
            required
          />
        </div>

        <div className="flex flex-col gap-2 items-start">
          <label htmlFor="course-price" className="text-sm font-medium">
            قیمت
          </label>
          <input
            onChange={(e) => dispach({ type: "price", value: e.target.value })}
            // onChange={(e) => {
            //   inputChangeHandler(e.target.name, e.target.value);
            // }}
            name="price"
            value={newCourse.price}
            type="text"
            inputMode="numeric"
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
                onChange={(e) =>
                  dispach({ type: "status", value: e.target.value })
                }
                // onChange={(e) => {
                //   inputChangeHandler(e.target.name, e.target.value);
                // }}
                type="radio"
                name="status"
                value="تکمیل شده"
                className="peer sr-only"
                id="complete-radio-item"
                checked={newCourse.status === "تکمیل شده"}
                required
              />
              <span className="neu-chip neu-chip-success cursor-pointer px-4 py-2 text-sm opacity-60 peer-checked:opacity-100 peer-checked:shadow-neu-inset peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-accent">
                تکمیل شده
              </span>
            </label>

            <label>
              <input
                onChange={(e) =>
                  dispach({ type: "status", value: e.target.value })
                }
                // onChange={(e) => {
                //   inputChangeHandler(e.target.name, e.target.value);
                // }}
                type="radio"
                name="status"
                value="در حال ضبط"
                className="peer sr-only"
                id="recording-radio-item"
                checked={newCourse.status === "در حال ضبط"}
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
