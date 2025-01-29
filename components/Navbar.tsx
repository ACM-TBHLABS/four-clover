import React from "react";

const Navbar = () => {
  return (
    <div className="w-screen h-[108px] py-[24px] px-[150px] bg-white flex justify-between items-center relative">
      <div className="flex items-center hover:cursor-pointer transition-transform duration-300 ease-in-out group hover:scale-[1.05]">
        <img
          src="/logo.png"
          alt="Four Clover"
          className="transition-transform duration-300 ease-in-out"
        />
        <h1 className="font-helvetica text-[24px] font-normal leading-[27.6px] transition-transform duration-300 ease-in-out">
          Four Clover
        </h1>
      </div>

      <div className="flex items-center space-x-[32px] absolute left-1/2 transform -translate-x-1/2 font-helvetica text-2xl font-light leading-[27.6px]">
        <h1 className="hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-800">
          training
        </h1>
        <h1 className="hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-800">
          about
        </h1>
        <h1 className="hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-800">
          products
        </h1>
        <h1 className="hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-800">
          events
        </h1>
      </div>

      <div className="flex items-center space-x-[20px] font-helvetica text-2xl font-light leading-[27.6px]">
        <h1 className="underline transition-transform duration-300 ease-in-out hover:cursor-pointer hover:text-blue-800">
          EN
        </h1>
        <h1 className="border px-[20px] py-2 transition-transform duration-300 ease-in-out group hover:scale-105 hover:cursor-pointer">
          Contact
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
