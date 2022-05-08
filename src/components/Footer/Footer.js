import React from "react";

const Footer = () => {
  return (
    <footer className="flex py-5 justify-center gap-2 mt-3 bg-gray-900 w-full">
      <p className="w-[3rem] h-[3rem] mx-3 text-gray-500 font-graphik-bold border-3 border-gray-500 rounded-full flex justify-center items-center text-xl">
        18+
      </p>

      <p className="text-gray-500 text-base font-graphik flex-[2]">
        Our website is intended for informational purposes only and is not an
        advertisement.
        <br /> © 2018 - 2021
      </p>
    </footer>
  );
};

export default Footer;
