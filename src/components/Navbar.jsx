import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";
import logo from "../assets/logo.png";
export const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="px-14 py-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <img className="w-[150px]" src={logo} alt="" />
        </Link>
        <button
          onClick={() => setDarkTheme(!darkTheme)}
        >
          <img
            src={darkTheme ? "/icons/Dark.svg" : "/icons/Light.svg"}
            alt=""
            className="w-[30px]"
          />
        </button>
      </div>
      <Search />
    </div>
  );
};
