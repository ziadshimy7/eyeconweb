import React, { useState } from "react";
import logo from "../../assets/main-logo.png";
import { FiSearch } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import NavbarMenu from "./NavbarMenu";
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
      {toggleNavMenu && <NavbarMenu />}
    </div>
  );
};

export default Navbar;
