import React, { useEffect, useState } from "react";

const AddUserFields = ({ newUser, onChange }) => {
  const inputChangeHandler = (key, value) => {
    const User = {
      ...newUser,
      [key]: value,
    };
    onChange(User);
  };

  return (
    <form id="course-form" className="flex flex-col gap-3 min-w-xs sm:min-w-sm" noValidate>
      <div className="flex flex-col gap-2">
        <label htmlFor="course-name" className="text-sm font-medium">
          نام و نام خانوادگی
        </label>
        <input
          name="fullName"
          onChange={(e) => {
            inputChangeHandler(e.target.name, e.target.value);
          }}
          value={newUser.fullName}
          type="text"
          className="neu-input"
          autoComplete="off"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="course-name" className="text-sm font-medium">
          یوزرنیم
        </label>
        <input
          name="userName"
          onChange={(e) => {
            inputChangeHandler(e.target.name, e.target.value);
          }}
          value={newUser.userName}
          type="text"
          className="neu-input"
          autoComplete="off"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="course-creator" className="text-sm font-medium">
          ایمیل
        </label>
        <input
          onChange={(e) => {
            inputChangeHandler(e.target.name, e.target.value.trim());
          }}
          value={newUser.email}
          name="email"
          type="text"
          className="neu-input"
          autoComplete="off"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="course-price" className="text-sm font-medium">
          شماره همراه
        </label>
        <input
          value={newUser.phoneNumber}
          onChange={(e) => {
            inputChangeHandler(e.target.name, e.target.value);
          }}
          name="phoneNumber"
          type="number"
          inputMode="numeric"
          className="neu-input pe-1"
          required
        />
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
              name="role"
              value="commonuser"
              className="peer sr-only"
              required
            />
            <span className="neu-chip neu-chip-warning cursor-pointer px-4 py-2 text-sm opacity-60 peer-checked:opacity-100 peer-checked:shadow-neu-inset peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-accent">
              کاربر عادی
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
            />
            <span className="neu-chip neu-chip-success cursor-pointer px-4 py-2 text-sm opacity-60 peer-checked:opacity-100 peer-checked:shadow-neu-inset peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-accent">
              مدیر
            </span>
          </label>
        </div>
      </div>
    </form>
  );
};

export default AddUserFields;
