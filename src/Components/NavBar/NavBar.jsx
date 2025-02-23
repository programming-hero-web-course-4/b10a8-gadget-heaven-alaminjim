import { NavLink, useLocation } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";

const NavBar = () => {
  const location = useLocation();
  return (
    <div
      className={`navbar rounded-t-md ${
        location.pathname === "/" ? "bg-[#9538E2]" : ""
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ${
              location.pathname === "/"
                ? " text-white font-semibold "
                : "text-black font-semibold"
            }`}
          >
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "underline" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-purple-700" : ""
                }
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-purple-700" : ""
                }
                to="/statistics"
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-purple-700" : ""
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
        <a
          className={`text-xl ml-8 font-bold ${
            location.pathname === "/" ? "text-white" : "text-black"
          }`}
        >
          Gadget_Heaven
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className={`menu menu-horizontal  px-1 ${
            location.pathname === "/"
              ? "text-white font-semibold"
              : "text-black font-semibold"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-purple-700" : "")}
              to="/products"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-purple-700" : "")}
              to="/statistics"
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-purple-700" : "")}
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end ml-3.5 space-x-3.5 ">
        <button
          className={` rounded-full ${
            location.pathname === "/"
              ? "bg-white w-8 h-8"
              : "w-8 h-8 border-[1px] pr-1"
          }`}
        >
          <TiShoppingCart className="ml-2"></TiShoppingCart>
        </button>
        <button
          className={` rounded-full ${
            location.pathname === "/"
              ? "bg-white w-8 h-8"
              : "w-8 h-8 border-[1px] pr-1"
          }`}
        >
          <FaRegHeart className="ml-2"></FaRegHeart>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
