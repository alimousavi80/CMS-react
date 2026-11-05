import React, { useEffect, useState } from "react";

const AddCourseFields = ({ newCourse, onChange }) => {
  const inputChangeHandler = (key, value) => {
    const Course = {
      ...newCourse,
      [key]: value,
    };
    onChange(Course);
  };

  const [priceInWords, setPriceInWords] = useState();

  const priceCounter = (price) => {
    const ones = [
      "",
      "یک",
      "دو",
      "سه",
      "چهار",
      "پنج",
      "شش",
      "هفت",
      "هشت",
      "نه",
      "ده",
      "یازده",
      "دوازده",
      "سیزده",
      "چهارده",
      "پانزده",
      "شانزده",
      "هفده",
      "هجده",
      "نوزده",
    ];
    const tens = [
      "",
      "",
      "بیست",
      "سی",
      "چهل",
      "پنجاه",
      "شصت",
      "هفتاد",
      "هشتاد",
      "نود",
    ];
    const hundreds = [
      "",
      "صد",
      "دویست",
      "سیصد",
      "چهارصد",
      "پانصد",
      "ششصد",
      "هفتصد",
      "هشتصد",
      "نهصد",
    ];
    const scales = ["", "هزار", "میلیون", "میلیارد"];

    const threeDigits = (n) => {
      const parts = [];
      if (n >= 100) parts.push(hundreds[Math.floor(n / 100)]);
      n %= 100;
      if (n >= 20) {
        parts.push(tens[Math.floor(n / 10)]);
        n %= 10;
      }
      if (n > 0) parts.push(ones[n]);
      return parts.join(" و ");
    };

    const numberToWords = (num) => {
      if (num === 0) return "صفر";
      const parts = [];
      let i = 0;
      while (num > 0) {
        const chunk = num % 1000;
        if (chunk) parts.unshift((threeDigits(chunk) + " " + scales[i]).trim());
        num = Math.floor(num / 1000);
        i++;
      }
      return parts.join(" و ");
    };

    // ارقام فارسی و عربی را به انگلیسی تبدیل می‌کنیم
    const fixed = price
      .replace(/[۰-۹]/g, (d) => d.charCodeAt(0) - 1776)
      .replace(/[٠-٩]/g, (d) => d.charCodeAt(0) - 1632);

    // هر چیزی غیر از رقم (نقطه، ویرگول، حروف، منفی) حذف می‌شود
    // و حداکثر ۱۲ رقم (تا هزار میلیارد) مجاز است
    const digits = fixed.replace(/\D/g, "").slice(0, 12);
    price = digits;

    setPriceInWords(digits ? numberToWords(Number(digits)) + " تومان" : "");
  };

  return (
    <form
      id="course-form"
      className="flex flex-col gap-5  min-w-xs sm:min-w-sm "
      noValidate
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="course-name" className="text-sm font-medium">
          نام دوره
        </label>
        <input
          name="courseName"
          onChange={(e) => {
            inputChangeHandler(e.target.name, e.target.value);
          }}
          value={newCourse.courseName}
          type="text"
          className="neu-input"
          placeholder="مثلاً: آموزش ری‌اکت"
          autoComplete="off"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="course-creator" className="text-sm font-medium">
          مدرس
        </label>
        <input
          onChange={(e) => {
            inputChangeHandler(e.target.name, e.target.value);
          }}
          value={newCourse.creator}
          name="creator"
          type="text"
          className="neu-input"
          placeholder="نام مدرس"
          autoComplete="off"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="course-price" className="text-sm font-medium">
          قیمت
        </label>
        <input
          value={newCourse.price}
          onChange={(e) => {
            inputChangeHandler(e.target.name, e.target.value);
            priceCounter(e.target.value);
          }}
          name="price"
          type="number"
          inputMode="numeric"
          className="neu-input pe-1"
          placeholder="5000000"
          autoComplete="off"
          required
        />
        <div className="flex justify-between">
          <span
            id="price-counter"
            className="pointer-events-none min-h-5 flex max-w-xs items-center text-sm text-ink-muted"
          >
            {priceInWords}
          </span>
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
