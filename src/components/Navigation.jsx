import Logo from "../assets/logo.png";
import bellIcon from "../assets/bell.svg";
import Profile from "../assets/Ellipse 40.png";
import { Link } from "react-router-dom";
// import React from "react";
// import search from "../assets/search.png";
import PropTypes from "prop-types";
import menu from "../assets/menu.png";

Navigation.propTypes = {
  searchBar: PropTypes.bool,
  logo: PropTypes.bool,
  menubtn: PropTypes.bool,
  toggleSidebar: PropTypes.func,
};

const search = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    fill="white"
    width="21"
    height="21"
    viewBox="0 0 50 50"
  >
    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
  </svg>
);

export default function Navigation({
  searchBar,
  logo,
  menubtn,
  toggleSidebar,
}) {
  return (
    <div className="font-gotham sticky top-0 p-5 flex justify-start items-center bg-red z-40">
      {menubtn ? (
        <img
          className="w-5 md:hidden"
          src={menu}
          alt=""
          onClick={toggleSidebar}
        />
      ) : (
        ""
      )}
      {logo ? (
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      ) : (
        <Link className=" w-[30%] md:hidden mx-5" to="/">
          <img src={Logo} alt="logo" />
        </Link>
      )}
      {searchBar ? (
        <div className="relative mx-4 w-auto hidden sm:flex items-center md:w-[40%]">
          <input
            type="text"
            placeholder="Ask Me Anything"
            className="bg-white1 p-2 px-3 pe-10 border rounded-full bg-red focus:outline-none text-white focus:text-white placeholder-white text-sm w-full"
          />
          <span className="absolute right-3">{search}</span>
        </div>
      ) : (
        ""
      )}

      <div className="flex items-center justify-end space-x-5 ms-auto ">
        <div>
          <img src={bellIcon} alt="bell" />
        </div>
        <div>
          <img className="cursor-pointer" src={Profile} alt="profile" />
        </div>
        <div className="text-white text-xs">
          <p>Diky</p>
          <p>Admin</p>
        </div>
      </div>
    </div>
  );
}
