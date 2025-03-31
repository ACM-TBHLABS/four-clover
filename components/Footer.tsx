import React from "react";

const Footer = () => {
  return (
    <div className="w-screen h-[200px] py-[50px] px-[150px] bg-white flex justify-between items-center relative border-t-[1px] border-solid border-[#CBCBCB]">
      <div className="flex items-center hover:cursor-pointer transition-transform duration-300 ease-in-out group hover:scale-105">
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
        <button className="border px-[20px] py-2 transition-all group hover:scale-[1.02] hover:cursor-pointer hover:bg-black hover:text-white duration-300 ease-in-out rounded-[5px]">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Footer;
