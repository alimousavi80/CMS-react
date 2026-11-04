import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import {
  IoSunnyOutline,
  IoMoonOutline,
  IoNotificationsOutline,
  IoMenuOutline,
  IoClose,
} from "react-icons/io5";

const Header = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      {/* <!---------------------------------- Top bar ----------------------------------> */}

      <header className="flex items-center gap-6">
        <div
          className="lg:hidden neu-icon-btn"
          onClick={() => setIsSideMenuOpen(true)}
        >
          <IoMenuOutline className="size-7" />
        </div>

        <input
          type="search"
          className="neu-input"
          placeholder="Search posts, pages, media"
        />

        {/* <!-- notification buttons --> */}

        {/* <!-- bell notification --> */}

        <div className="relative" id="notification-btn">
          <div className="neu-icon-btn">
            <IoNotificationsOutline className="size-7" />
          </div>

          {/* <!-- notification counts --> */}

          <div className="absolute -bottom-1 -right-1 bg-surface min-w-5.5 min-h-5.5 rounded-full flex items-center justify-center">
            3
          </div>

          {/* <!-- notification box --> */}

          <div
            className="neu-card absolute top-13 hidden"
            id="notification-box"
          >
            <ul className="space-y-2 min-w-50 *:max-w-50 *:break-words *:line-clamp-2 *:overflow-y-auto">
              <li className="neu-well">
                لطفا فلان کار را انجام بدهید و دوره فلان را به سایت اضافه کنید .
              </li>
              <li className="neu-well">دوره ری اکت را به روز رسانی کنید</li>
              <li className="neu-well">به کانت ها پاسخ بدهید</li>
            </ul>
          </div>
        </div>

        {/* <!-- change theme buttons --> */}

        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          id="theme-toggle"
          type="button"
          className="neu-icon-btn"
        >
          <IoSunnyOutline className="hidden dark:block size-7" />

          <IoMoonOutline className="dark:hidden size-7" />
        </button>
      </header>
      {/* <!----------------------------- Mobile Sidemenu -----------------------------> */}
      <div
        onClick={() => setIsSideMenuOpen(false)}
        className={`fixed  inset-0 z-50  transition-opacity bg-black/40 backdrop-blur-xs lg:hidden
        ${isSideMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <aside
          onClick={(e) => e.stopPropagation()}
          className={`transition-transform neu-card w-70 h-full absolute  lg:hidden ${isSideMenuOpen ? "translate-x-0" : "translate-x-70"}`}
        >
          <div className="flex items-center justify-between mb-10">
            <Link to="./" className="px-4 text-xl font-bold">
              پنل مدیریت
            </Link>

            <div
              onClick={() => setIsSideMenuOpen(false)}
              className="neu-icon-btn"
              id="close-mobile-menu-btn"
            >
              <IoClose className="size-7" />
            </div>
          </div>
          <nav className="flex flex-col gap-5">
            <NavLink
              onClick={() => setIsSideMenuOpen(false)}
              to="/"
              className={({ isActive }) =>
                `${isActive ? "neu-nav-item text-accent shadow-neu-inset" : "neu-nav-item"}`
              }
            >
              داشبورد
            </NavLink>
            <NavLink
              onClick={() => setIsSideMenuOpen(false)}
              to="/courses"
              className={({ isActive }) =>
                `${isActive ? "neu-nav-item text-accent shadow-neu-inset" : "neu-nav-item"}`
              }
            >
              دوره ها
            </NavLink>
            <NavLink
              onClick={() => setIsSideMenuOpen(false)}
              to="/users"
              className={({ isActive }) =>
                `${isActive ? "neu-nav-item text-accent shadow-neu-inset" : "neu-nav-item"}`
              }
            >
              کاربران
            </NavLink>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Header;
