import React, { useEffect, useRef, useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";

const notifications = [
  {
    id: 1,
    text: "لطفاً دوره‌ی جدید را به سایت اضافه کنید.",
    time: "۵ دقیقه پیش",
  },
  { id: 2, text: "دوره‌ی ری‌اکت را به‌روزرسانی کنید.", time: "۱ ساعت پیش" },
  { id: 3, text: "به کامنت‌ها پاسخ بدهید.", time: "دیروز" },
];

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={boxRef}>
      <button
        type="button"
        className="neu-icon-btn"
        onClick={() => setIsOpen((perv) => !perv)}
      >
        <IoNotificationsOutline className="size-7" />
      </button>

      <span className="pointer-events-none absolute -bottom-1 -right-1 flex min-h-5.5 min-w-5.5 items-center justify-center rounded-full bg-surface text-sm shadow-neu-sm">
        {notifications.length}
      </span>

      {isOpen && (
        <div className="neu-card absolute left-0 top-14 z-40 w-72 max-w-[calc(100vw-2rem)]">
          <h3 className="mb-3 font-semibold">اعلان‌ها</h3>
          <ul className="space-y-2">
            {notifications.map((item) => (
              <li key={item.id} className="neu-well">
                <p className="line-clamp-2 wrap-break-word">{item.text}</p>
                <span className="mt-1 block text-xs text-ink-muted">
                  {item.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notification;
