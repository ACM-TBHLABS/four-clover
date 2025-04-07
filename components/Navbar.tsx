"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
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
    <div
      className={`w-full flex flex-col items-center ${
        isLandingPage ? "bg-[#DAFFB7]" : ""
      }`}
    >
      <div className="max-w-[1600px] w-full h-auto py-4 px-4 md:px-6 lg:px-12 xl:px-[150px] md:h-[108px] md:py-[24px] flex justify-between items-center relative">
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

        {/* Mobile menu button */}
        <div className="md:hidden h-full flex items-center justify-center gap-[12px]">
          <button
            className="border border-black px-4 py-1 transition-all hover:bg-black hover:text-white duration-300 ease-in-out rounded-[5px]"
            onClick={() => {
              router.push("/contact");
            }}
          >
            Contact
          </button>
          <button
            className="flex items-center p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {!isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-[32px] absolute left-1/2 transform -translate-x-1/2 font-helvetica text-lg lg:text-2xl font-light leading-tight lg:leading-[27.6px]">
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

        {/* Desktop contact button */}
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

      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-transparent border-t border-black px-7">
          <div className="flex flex-col py-4 space-y-4 font-helvetica text-xl font-light">
            <h1
              className="hover:cursor-pointer text-black font-light hover:text-slate-800 text-[18px]"
              onClick={() => {
                router.push("/about");
                setIsMenuOpen(false);
              }}
            >
              about
            </h1>
            <h1
              className="hover:cursor-pointer text-black font-light hover:text-slate-800 text-[18px]"
              onClick={() => {
                router.push("/products");
                setIsMenuOpen(false);
              }}
            >
              products
            </h1>
            <h1
              className="hover:cursor-pointer text-black font-light hover:text-slate-800 text-[18px]"
              onClick={() => {
                router.push("/events");
                setIsMenuOpen(false);
              }}
            >
              events
            </h1>
            <h1
              className="hover:cursor-pointer text-black font-light hover:text-slate-800 text-[18px]"
              onClick={() => {
                router.push("/career");
                setIsMenuOpen(false);
              }}
            >
              career
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
