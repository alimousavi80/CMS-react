import React, { useState } from "react";
import Modal from "../../common/Modal";
import { FiEdit } from "react-icons/fi";

const UpdateUserBtn = ({ newUser, onChange, onUpdate, data, onClose }) => {
  const inputChangeHandler = (key, value) => {
    const user = {
      ...newUser,
      [key]: value,
    };
    onChange(user);
  };

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
      title={"به روزرسانی کاربر"}
      mainBtn={"ویرایش"}
      onSubmit={() => {
        onUpdate(data.id);
      }}
      onClose={onClose}
      onOpen={() =>
        onChange({
          fullName: data.fullName,
          email: data.email,
          phoneNumber: data.phoneNumber,
          role: data.role,
          userName: data.userName,
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
            نام کابر
          </label>
          <input
            name="fullName"
            onChange={(e) => {
              inputChangeHandler(e.target.name, e.target.value);
            }}
            id="course-name"
            value={newUser.fullName}
            type="text"
            className="neu-input"
            autoComplete="off"
            required
          />
        </div>
        <div className="flex flex-col gap-2 items-start">
          <label htmlFor="user-name" className="text-sm font-medium">
            یوزرنیم
          </label>
          <input
            name="userName"
            onChange={(e) => {
              inputChangeHandler(e.target.name, e.target.value);
            }}
            id="user-name"
            value={newUser.userName}
            type="text"
            className="neu-input"
            autoComplete="off"
            required
          />
        </div>

        <div className="flex flex-col gap-2 items-start">
          <label htmlFor="course-creator" className="text-sm font-medium">
            ایمیل
          </label>
          <input
            onChange={(e) => {
              inputChangeHandler(e.target.name, e.target.value);
            }}
            name="email"
            value={newUser.email}
            type="text"
            className="neu-input"
            autoComplete="off"
            required
          />
        </div>

        <div className="flex flex-col gap-2 items-start">
          <label htmlFor="phoneNumber" className="text-sm font-medium">
            شماره همراه
          </label>
          <input
            onChange={(e) => {
              inputChangeHandler(e.target.name, e.target.value);
            }}
            name="phoneNumber"
            value={newUser.phoneNumber}
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
          <span className="mb-1 text-sm font-medium">نقش</span>
          <div className="flex gap-4">
            <label>
              <input
                onChange={(e) => {
                  inputChangeHandler(e.target.name, e.target.value);
                }}
                type="radio"
                name="role"
                value="commonuser"
                className="peer sr-only"
                id="complete-radio-item"
                checked={newUser.role === "commonuser"}
                required
              />
              <span className="neu-chip neu-chip-warning cursor-pointer px-4 py-2 text-sm opacity-60 peer-checked:opacity-100 peer-checked:shadow-neu-inset peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-accent">
                کابر عادی
              </span>
            </label>

            <label>
              <input
                onChange={(e) => {
                  inputChangeHandler(e.target.name, e.target.value);
                }}
                type="radio"
                name="role"
                value="admin"
                className="peer sr-only"
                id="recording-radio-item"
                checked={newUser.role === "admin"}
              />
              <span className="neu-chip neu-chip-success cursor-pointer px-4 py-2 text-sm opacity-60 peer-checked:opacity-100 peer-checked:shadow-neu-inset peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-accent">
                مدیر
              </span>
            </label>
          </div>
        </fieldset>
      </form>
    </Modal>
  );
};

export default UpdateUserBtn;
