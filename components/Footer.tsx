"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isLandingPage, setIsLandingPage] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsLandingPage(pathname === "/");
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`w-full flex flex-col items-center border-t`}>
      <div className="max-w-[1600px] w-full h-auto py-4 px-4 md:px-6 lg:px-12 xl:px-[150px] md:h-[108px] md:py-[24px] flex flex-col md:flex-row justify-between md:items-center relative gap-[10px] md:gap-[0px]">
        <div
          className="flex items-center hover:cursor-pointer transition-transform duration-300 ease-in-out group hover:scale-[1.05]"
          onClick={() => router.push("/")}
        >
          <img
            src="/logo.png"
            alt="Four Clover"
            className="h-8 md:h-auto transition-transform duration-300 ease-in-out"
          />
          <h1 className="font-helvetica text-lg md:text-[24px] font-normal leading-tight md:leading-[27.6px] transition-transform duration-300 ease-in-out">
            Four Clover
          </h1>
        </div>

        <div className="flex flex-col gap-[10px] text-gray-500 px-[7px] md:hidden">
          <h1
            className="hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-800"
            onClick={() => router.push("/about")}
          >
            about
          </h1>
          <h1
            className="hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-800"
            onClick={() => router.push("/products")}
          >
            products
          </h1>
          <h1
            className="hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-800"
            onClick={() => router.push("/events")}
          >
            events
          </h1>
          <h1
            className="hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-800"
            onClick={() => router.push("/career")}
          >
            career
          </h1>
        </div>

        <div className="hidden md:flex items-center space-x-4 lg:space-x-[32px] md:absolute left-1/2 transform -translate-x-1/2 font-helvetica text-lg lg:text-2xl font-light leading-tight lg:leading-[27.6px]">
          <h1
            className="hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-800"
            onClick={() => router.push("/about")}
          >
            about
          </h1>
          <h1
            className="hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-800"
            onClick={() => router.push("/products")}
          >
            products
          </h1>
          <h1
            className="hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-800"
            onClick={() => router.push("/events")}
          >
            events
          </h1>
          <h1
            className="hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out hover:text-slate-800"
            onClick={() => router.push("/career")}
          >
            career
          </h1>
        </div>

        <div className="hidden md:flex items-center space-x-[20px] font-helvetica text-lg lg:text-2xl font-light leading-tight lg:leading-[27.6px]">
          <button
            className="border px-3 py-1 lg:px-[20px] lg:py-2 transition-all group hover:scale-[1.02] hover:cursor-pointer hover:bg-black hover:text-white duration-300 ease-in-out rounded-[5px]"
            onClick={() => {
              router.push("/contact");
            }}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
