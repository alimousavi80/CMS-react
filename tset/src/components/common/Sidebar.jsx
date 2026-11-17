import React from "react";
import { Link, NavLink } from "react-router";

const Sidebar = () => {
  return (
    <>
      {/* <!--------------------------------- Sidebar ---------------------------------> */}
      <aside className="neu-card w-64 h-full shrink-0 flex-col gap-8 hidden lg:flex">
        <a href="./index.html" className="px-4 text-xl font-bold">
          پنل مدیریت
        </a>
        <nav className="flex flex-col gap-3">
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
    </>
  );
};

export default Sidebar;
