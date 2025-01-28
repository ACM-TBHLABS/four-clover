import React from "react";

const Navbar = () => {
  return (
    <div className="w-screen h-[108px] py-[24px] px-[150px] bg-white flex justify-between items-center relative">
      <div className="flex items-center">
        <img src="/logo.png" alt="Four Clover" />
        <h1 className="font-helvetica text-[24px] font-normal leading-[27.6px]">
          Four Clover
        </h1>
      </div>

      <div className="flex items-center space-x-[32px] absolute left-1/2 transform -translate-x-1/2 font-helvetica text-2xl font-light leading-[27.6px]">
        <h1 className="hover:cursor-pointer hover:text-slate-500">training</h1>
        <h1 className="hover:cursor-pointer hover:text-slate-500">about</h1>
        <h1 className="hover:cursor-pointer hover:text-slate-500">products</h1>
        <h1 className="hover:cursor-pointer hover:text-slate-500">events</h1>
      </div>

      <div className="flex items-center space-x-[20px] font-helvetica text-2xl font-light leading-[27.6px]">
        <h1 className="underline">EN</h1>
        <h1 className="border px-[20px] py-2 ">Contact</h1>
      </div>
    </div>
  );
};

export default Navbar;
