"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { InstagramIcon } from "lucide-react";

const Footer = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`w-full flex flex-col items-center border-t border-gray-300`}
    >
      <div className="max-w-[1400px] w-full py-4 px-4 md:px-[50px] lg:px-[100px] h-full md:py-[50px] flex justify-between items-start relative">
        <div
          className="flex items-center hover:cursor-pointer transition-transform duration-300 ease-in-out group"
          onClick={() => router.push("/")}
        >
          <img
            src="/logo.png"
            alt="Four Clover"
            className="h-8 md:h-auto transition-transform duration-300 ease-in-out"
          />
          <h1 className="block md:block font-helvetica text-lg lg:text-xl font-normal leading-tight md:leading-[27.6px] transition-transform duration-300 ease-in-out">
            Four Clover
          </h1>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden h-full flex items-center justify-center gap-3">
          <div className="flex flex-col gap-8 md:mt-2 text-xl lg:text-2xl font-semibold">
            <div className="flex justify-between items-center space-x-2 md:space-x-0">
              <div className="w-8 h-8">
                <img
                  src="/socials/line.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-8 h-8">
                <img
                  src="/socials/facebook.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-8 h-8">
                <img
                  src="/socials/insta.png"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
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
        <div className="hidden h-full md:mt-2 md:flex space-x-8 lg:space-x-[50px] items-start font-helvetica text-lg lg:text-2xl font-normal px-8">
          <div className="flex flex-col">
            <div className="mb-4">
              <h1 className="text-xl lg:text-2xl font-semibold hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800">
                About
              </h1>
            </div>
            <div>
              <h2 className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light">
                Vision
              </h2>
            </div>
            <div>
              <h2 className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light">
                Mission
              </h2>
            </div>
            <div>
              <h2 className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light">
                Journey
              </h2>
            </div>
            <div>
              <h2 className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light">
                Teams
              </h2>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-4">
              <h1 className="text-xl lg:text-2xl font-semibold hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800">
                Events
              </h1>
            </div>
            <div>
              <h2 className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light">
                Upcoming
              </h2>
            </div>
            <div>
              <h2 className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light">
                Highlights
              </h2>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-4">
              <h1 className="text-xl lg:text-2xl font-semibold hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800">
                Products
              </h1>
            </div>
            <div>
              <h2 className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light">
                Medical
              </h2>
            </div>
            <div>
              <h2 className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light">
                Dental
              </h2>
            </div>
            <div>
              <h2 className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light">
                Equipment
              </h2>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-4">
              <h1 className="text-xl lg:text-2xl font-semibold hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800">
                Career
              </h1>
            </div>
            <div>
              <h2 className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light">
                Our Team
              </h2>
            </div>
            <div>
              <h2 className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light">
                Join Us
              </h2>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col gap-8 md:mt-2 text-xl lg:text-2xl font-semibold">
          <h1 className="hidden xl:block">Follow us on</h1>
          <div className="flex justify-center space-x-2 lg:space-x-4 items-center w-full">
            <div className="w-8 h-8">
              <img
                src="/socials/line.png"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-8 h-8">
              <img
                src="/socials/facebook.png"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-8 h-8">
              <img
                src="/socials/insta.png"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-transparent px-7">
          <div className="flex flex-col py-4 space-y-4 font-helvetica text-xl font-light">
            <h1
              className="hover:cursor-pointer text-black font-light hover:text-slate-800 text-[18px]"
              onClick={() => {
                router.push("/about");
                setIsMenuOpen(false);
              }}
            >
              About
            </h1>
            <h1
              className="hover:cursor-pointer text-black font-light hover:text-slate-800 text-[18px]"
              onClick={() => {
                router.push("/products");
                setIsMenuOpen(false);
              }}
            >
              Products
            </h1>
            <h1
              className="hover:cursor-pointer text-black font-light hover:text-slate-800 text-[18px]"
              onClick={() => {
                router.push("/events");
                setIsMenuOpen(false);
              }}
            >
              Events
            </h1>
            <h1
              className="hover:cursor-pointer text-black font-light hover:text-slate-800 text-[18px]"
              onClick={() => {
                router.push("/career");
                setIsMenuOpen(false);
              }}
            >
              Career
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
