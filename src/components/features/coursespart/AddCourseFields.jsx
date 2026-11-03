import React, { useState } from "react";

const AddCourseFields = ({ newCourse, onChange }) => {
  const radioInputsHandler = (e) => {
    console.log(e.target.checked);
  };

  const inputChangeHandler = (key, value) => {
    const Course = {
      ...newCourse,
      [key]: value,
    };
    onChange(Course);
  };

  return (
    <form id="course-form" className="flex flex-col gap-5 min-w-xs" novalidate>
      <div className="flex flex-col gap-2">
        <label for="course-name" className="text-sm font-medium">
          نام دوره
        </label>
        <input
          name="courseName"
          onChange={(e) => {
            inputChangeHandler(e.target.name, e.target.value.trim());
          }}
          type="text"
          className="neu-input"
          placeholder="مثلاً: آموزش ری‌اکت"
          autocomplete="off"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label for="course-creator" className="text-sm font-medium">
          مدرس
        </label>
        <input
          onChange={(e) => {
            inputChangeHandler(e.target.name, e.target.value.trim());
          }}
          name="creator"
          type="text"
          className="neu-input"
          placeholder="نام مدرس"
          autocomplete="off"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label for="course-price" className="text-sm font-medium">
          قیمت
        </label>
        <input
          onChange={(e) => {
            inputChangeHandler(e.target.name, Number(e.target.value));
          }}
          name="price"
          type="number"
          inputmode="numeric"
          className="neu-input pe-1"
          placeholder="5000000"
          required
        />
        <div className="flex justify-between">
          <span
            id="price-counter"
            className="pointer-events-none min-h-5 flex items-center text-sm text-ink-muted"
          ></span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="mb-1 text-sm font-medium">وضعیت</label>
        <div className="flex gap-4">
          <label>
            <input
              onChange={(e) => {
                inputChangeHandler(e.target.name, e.target.value);
              }}
              type="radio"
              name="status"
              value="تکمیل شده"
              className="peer sr-only"
              required
            />
            <span className="neu-chip neu-chip-success cursor-pointer px-4 py-2 text-sm opacity-60 peer-checked:opacity-100 peer-checked:shadow-neu-inset peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-accent">
              تکمیل شده
            </span>
          </label>

          <label>
            <input
              onChange={(e) => {
                inputChangeHandler(e.target.name, e.target.value);
              }}
              type="radio"
              name="status"
              value="در حال ضبط"
              className="peer sr-only"
            />
            <span className="neu-chip neu-chip-warning cursor-pointer px-4 py-2 text-sm opacity-60 peer-checked:opacity-100 peer-checked:shadow-neu-inset peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-accent">
              در حال ضبط
            </span>
          </label>
        </div>
      </div>
    </form>
  );
};

export default AddCourseFields;
