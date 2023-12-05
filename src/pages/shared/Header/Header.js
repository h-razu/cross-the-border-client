import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo/logo.png";
import { authContext } from "../../../Context/AuthContext/AuthProvider";

const Header = () => {
  const activeLinkStyle = {
    backgroundColor: "transparent",
    color: "#48A615",
  };

  const { user, logOut } = useContext(authContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => console.log(err));
  };

  const menuItems = (
    <>
      <li>
        <NavLink
          to="/"
          className="font-semibold text-xl"
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className="font-semibold text-xl"
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
        >
          Services
        </NavLink>
      </li>
      {user?.uid ? (
        <>
          <li>
            <NavLink
              to="/addService"
              className="font-semibold text-xl"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            >
              Add Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reviews"
              className="font-semibold text-xl"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            >
              My Reviews
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              to="/login"
              className="font-semibold text-xl"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className="font-semibold text-xl"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            >
              Register
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <nav className="navbar bg-white shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="w-60 h-20">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      {user?.uid && (
        <div className="dropdown dropdown-end ml-auto">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} alt="" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <p className="font-semibold text-xl">{user?.displayName}</p>
            </li>
            <div className="divider my-1"></div>
            <li>
              <button onClick={handleLogOut} className="btn btn-ghost">
                Log Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
