import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const isActiveClass =
    " text-orange-500 font-semibold border-b-2 border-orange-500 pb-1";
  const inactiveClass =
    " text-slate-600 hover: text-orange-500 border-b-2 border-transparent pb-1 transition-all";
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold text-orange-600">
            Order Tracker
          </h1>
          <nav className=" flex gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? isActiveClass : inactiveClass
              }
            >
              DashBoard
            </NavLink>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive ? isActiveClass : inactiveClass
              }
            >
              Orders
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
