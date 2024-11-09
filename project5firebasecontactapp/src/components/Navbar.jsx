import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="w-full shadow-md h-[104px] bg-white ">
        <div className="flex max-w-[1240px] justify-between items-center h-[104px] mx-auto">
          <img className="" src={logo} alt="logo" />
          <div className="h-14 border-black rounded-lg border-2 text-[24px] w-[270px] flex items-center justify-center">
            Digital Contact Logs
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
