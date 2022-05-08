import React, { useState } from "react";
import logo from "../../assets/main-logo.png";
import { FiSearch } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import profileImage from "../../assets/test-profile.svg";
const Navbar = () => {
  const [toggleNavMenu, setToggleNavMenu] = useState(false);
  const onNavClickHandler = () => {
    setToggleNavMenu((prevState) => !prevState);
  };
  return (
    <div className="bg-gray-900 relative">
      <nav className="h-20 flex justify-around items-center drop-shadow-navDropShadow shadow-cardBoxShadow">
        <div className="image__container h-7.5">
          <img className="max-w-full h-auto" src={logo} alt="logo" />
        </div>
        <div className="flex gap-7 items-center">
          <FiSearch
            size={20}
            className="cursor-pointer font-normal text-lg"
            color="white"
          />
          <p className="font-graphik text-white">PT</p>
          <AiOutlineMenu
            onClick={onNavClickHandler}
            color="white"
            size={20}
            className="cursor-pointer text-lg font-extrabold"
          />
        </div>
      </nav>
      {toggleNavMenu && (
        <div className="absolute h-[370px] bg-gray-900 w-full flex flex-col items-center">
          <button className="flex justify-center items-center gap-2 bg-gray-800 py-2 rounded-lg w-[95%]">
            <img src={profileImage} alt="profile" />
            <span className="text-white font-graphik text-sm ">
              Sign Up or Log in
            </span>
          </button>
          <div className="w-[95%] flex flex-col border-gray-500-2 gap-2 divide-y">
            <p className="text-white py-2">Plants and flowers</p>
            <p className="text-white py-2">Plant care</p>
            <p className="text-white py-2">News</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
