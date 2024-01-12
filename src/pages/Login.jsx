import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
// import React from 'react'

const profileIcon = (
  <svg
    className="w-4 h-4 text-grey"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
  </svg>
);

const passIcon = (
  <svg
    className="w-4 h-4"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="100"
    height="100"
    viewBox="0 0 50 50"
    fill="white"
  >
    <path d="M42,21H8c-1.654,0-3,1.346-3,3v23c0,1.654,1.346,3,3,3h34c1.654,0,3-1.346,3-3V24C45,22.346,43.654,21,42,21z M13,38 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C15,37.105,14.105,38,13,38z M21,38c-1.105,0-2-0.895-2-2 c0-1.105,0.895-2,2-2s2,0.895,2,2C23,37.105,22.105,38,21,38z M29,38c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2 C31,37.105,30.105,38,29,38z M37,38c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C39,37.105,38.105,38,37,38z M12,19v-4.01 C12,7.827,17.827,2,24.99,2h0.02C32.173,2,38,7.827,38,14.99V19h-2v-4.01C36,8.93,31.069,4,25.01,4h-0.02C18.931,4,14,8.93,14,14.99 V19H12z"></path>
  </svg>
);

const showPassIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 text-greytext"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
    />
  </svg>
);

const hidePassIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 text-greytext"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div className="flex sm:items-center justify-center h-screen bg-grey">
      <div className="flex flex-col sm:flex-row justify-center items-center rounded border w-screen sm:h-[60%] lg:w-3/5">
        <div className="flex justify-center items-center w-screen sm:w-1/2 bg-white h-full rounded-s py-[20%] sm:py-0">
          <div className="py-10 px-5 w-4/5 space-y-5">
            <div>
              <h1 className="text-2xl">Login</h1>
              <p className="text-xs my-2 text-greytext">
                sign in to your account
              </p>
            </div>

            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray bg-greytext border rounded-e-0 border-grey rounded-s-md ">
                {profileIcon}
              </span>
              <input
                type="text"
                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 block flex-1 min-w-0 w-full text-sm border-grey p-2.5 focus:bg-blue-100"
                placeholder="username"
              />
            </div>
            {/* --------- */}

            {/* --------------------------------------------------------- */}
            <div className="relative flex">
              <span className="inline-flex items-center px-3 text-sm text-gray bg-greytext border rounded-e-0 border-grey rounded-s-md ">
                {passIcon}
              </span>
              <input
                type={showPassword ? "text" : "password"}
                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-90 block flex-1 min-w-0 w-full text-sm border-grey p-2.5 pr-10 focus:bg-blue-100"
                placeholder="Password"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer inline-flex items-center px-3 text-sm text-gray rounded-s-md border-grey"
              >
                {showPassword ? showPassIcon : hidePassIcon}
              </span>
            </div>
            {/* --------------------------------------------------------- */}
            <div>
              <Link to="/dashboard">
                <button className="text-white bg-black p-2 px-8 rounded hover:bg-gray-800">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-screen sm:w-1/2 bg-red h-full rounded-e">
          <div className="flex flex-col justify-center items-center py-10 px-5">
            <img className="w-40" src={logo} alt="" />
            <p className="text-center text-white my-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus placeat molestiae optio obcaecati assumenda
              cupiditate, quae quidem iste id amet qui molestias, soluta dicta
              inventore vero, illo voluptatibus similique necessitatibus. Alias
              magnam ab repudiandae ex aut autem. Deleniti deserunt est
              inventore distinctio, excepturi iure optio ullam reiciendis ipsum
              dolorem cum!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
