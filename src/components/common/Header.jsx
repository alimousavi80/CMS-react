import React from "react";
import { Link, NavLink } from "react-router";
import {
  IoSunnyOutline,
  IoMoonOutline,
  IoNotificationsOutline,
  IoMenuOutline,
} from "react-icons/io5";

const Header = () => {
  return (
    <>
      {/* <!---------------------------------- Top bar ----------------------------------> */}

      <header className="flex items-center gap-6">
        <div className="lg:hidden neu-icon-btn" id="bars-menu">
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

        <button id="theme-toggle" type="button" className="neu-icon-btn">
          <IoSunnyOutline className="hidden dark:block size-7" />

          <IoMoonOutline className="dark:hidden size-7" />
        </button>
      </header>
      {/* <!----------------------------- Mobile Sidemenu -----------------------------> */}
      <div
        id="overlay-mobile"
        className="fixed opacity-0 inset-0 z-50 pointer-events-none transition-opacity bg-black/40 backdrop-blur-xs"
      >
        <aside
          className="transition-transform neu-card w-70 h-full absolute translate-x-70 lg:hidden"
          id="side-menu-mobile"
        >
          <div className="flex items-center justify-between mb-10">
            <Link to="./" className="px-4 text-xl font-bold">
              پنل مدیریت
            </Link>

            <div className="neu-icon-btn" id="close-mobile-menu-btn">
              <svg className="size-7.5">
                <use href="#x-mark-icon"></use>
              </svg>
            </div>
          </div>
          <nav className="flex flex-col gap-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "neu-nav-item text-accent shadow-neu-inset" : "neu-nav-item"}`
              }
            >
              داشبورد
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `${isActive ? "neu-nav-item text-accent shadow-neu-inset" : "neu-nav-item"}`
              }
            >
              دوره ها
            </NavLink>
            <NavLink
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
