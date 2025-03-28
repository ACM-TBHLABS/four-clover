"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col items-center bg-[#DAFFB7]">
      <div className="max-w-[1800px] w-full h-[108px] py-[24px] px-[150px] flex justify-between items-center relative">
        <div
          className="flex items-center hover:cursor-pointer transition-transform duration-300 ease-in-out group hover:scale-[1.05]"
          onClick={() => router.push("/")}
        >
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
          <h1
            className="hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-800"
            onClick={() => router.push("/products")}
          >
            products
          </h1>
          <h1 className="hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-800">
            events
          </h1>
        </div>

        <div className="flex items-center space-x-[20px] font-helvetica text-2xl font-light leading-[27.6px]">
          {/* <h1 className="underline hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-800 ">
          EN
        </h1> */}
          <button className="border px-[20px] py-2 transition-all group hover:scale-[1.02] hover:cursor-pointer hover:bg-black hover:text-white duration-300 ease-in-out rounded-[5px]">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
