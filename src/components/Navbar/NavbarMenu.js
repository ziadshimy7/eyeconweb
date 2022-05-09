import React from "react";
import profileImage from "../../assets/test-profile.svg";

const NavbarMenu = ({ isToggled }) => {
  return (
    <div className="absolute animate-shiftLeft h-[370px] bg-gray-900 w-full flex flex-col items-center transition-all">
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
  );
};

export default NavbarMenu;
