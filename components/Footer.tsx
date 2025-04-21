"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { InstagramIcon } from "lucide-react";

const Footer = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(true);

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
            <div className="flex justify-between items-center space-x-2 md:space-x-0 mr-4">
              <div className="w-8 h-8 hover:cursor-pointer hover:scale-105 duration-100 transition-all ease-in-out">
                <img
                  src="/socials/line.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="w-8 h-8 hover:cursor-pointer hover:scale-105 duration-100 transition-all ease-in-out"
                onClick={() => {
                  window.open(
                    "https://web.facebook.com/fourclover.co/",
                    "_blank"
                  );
                }}
              >
                <img
                  src="/socials/facebook.png"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-8 h-8 hover:cursor-pointer hover:scale-105 duration-100 transition-all ease-in-out">
                <img
                  src="/socials/insta.png"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop navigation */}
        <div className="hidden h-full md:mt-2 md:flex space-x-8 lg:space-x-[50px] items-start font-helvetica text-lg lg:text-2xl font-normal px-8">
          <div className="flex flex-col">
            <div className="mb-4">
              <h1
                className="text-xl lg:text-2xl font-semibold hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800"
                onClick={() => {
                  router.push("/about");
                }}
              >
                About
              </h1>
            </div>
            <div>
              <h2
                className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light"
                onClick={() => {
                  router.push("/about#vision");
                }}
              >
                Vision
              </h2>
            </div>
            <div>
              <h2
                className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light"
                onClick={() => {
                  router.push("/about#mission");
                }}
              >
                Mission
              </h2>
            </div>
            <div>
              <h2
                className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light"
                onClick={() => {
                  router.push("/about#journey");
                }}
              >
                Journey
              </h2>
            </div>
            <div>
              <h2
                className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light"
                onClick={() => {
                  router.push("/about#team");
                }}
              >
                Teams
              </h2>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-4">
              <h1
                className="text-xl lg:text-2xl font-semibold hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800"
                onClick={() => {
                  router.push("/events");
                }}
              >
                Events
              </h1>
            </div>
            <div>
              <h2
                className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light"
                onClick={() => {
                  router.push("/events#upcoming");
                }}
              >
                Upcoming
              </h2>
            </div>
            <div>
              <h2
                className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light"
                onClick={() => {
                  router.push("/events#highlights");
                }}
              >
                Highlights
              </h2>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-4">
              <h1
                className="text-xl lg:text-2xl font-semibold hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800"
                onClick={() => {
                  router.push("/products");
                }}
              >
                Products
              </h1>
            </div>
            <div>
              <h2
                className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light"
                onClick={() => {
                  router.push("/products");
                }}
              >
                Medical
              </h2>
            </div>
            <div>
              <h2
                className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light"
                onClick={() => {
                  router.push("/products");
                }}
              >
                Dental
              </h2>
            </div>
            <div>
              <h2
                className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light"
                onClick={() => {
                  router.push("/products");
                }}
              >
                Equipment
              </h2>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-4">
              <h1
                className="text-xl lg:text-2xl font-semibold hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800"
                onClick={() => {
                  router.push("/career");
                }}
              >
                Career
              </h1>
            </div>
            <div>
              <h2
                className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light"
                onClick={() => {
                  router.push("/career#team");
                }}
              >
                Our Team
              </h2>
            </div>
            <div>
              <h2
                className="text-lg hover:cursor-pointer transition-transform duration-300 ease-in-out hover:text-slate-800 font-light"
                onClick={() => {
                  router.push("/career#join");
                }}
              >
                Join Us
              </h2>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col gap-8 md:mt-2 text-xl lg:text-2xl font-semibold">
          <h1 className="hidden xl:block">Follow us on</h1>
          <div className="flex justify-center space-x-2 lg:space-x-4 items-center w-full">
            <div className="w-8 h-8 hover:cursor-pointer hover:scale-105 duration-100 transition-all ease-in-out">
              <img
                src="/socials/line.png"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="w-8 h-8 hover:cursor-pointer hover:scale-105 duration-100 transition-all ease-in-out"
              onClick={() => {
                window.open(
                  "https://web.facebook.com/fourclover.co/",
                  "_blank"
                );
              }}
            >
              <img
                src="/socials/facebook.png"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-8 h-8 hover:cursor-pointer hover:scale-105 duration-100 transition-all ease-in-out">
              <img
                src="/socials/insta.png"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      <div className="md:hidden w-full bg-transparent px-7">
        <div className="flex justify-between gap-4 py-4 font-helvetica text-xl font-light w-full">
          <h1
            className="hover:cursor-pointer text-black font-light hover:text-slate-800 text-[15px]"
            onClick={() => {
              router.push("/about");
              setIsMenuOpen(false);
            }}
          >
            About
          </h1>
          <h1
            className="hover:cursor-pointer text-black font-light hover:text-slate-800 text-[15px]"
            onClick={() => {
              router.push("/products");
              setIsMenuOpen(false);
            }}
          >
            Products
          </h1>
          <h1
            className="hover:cursor-pointer text-black font-light hover:text-slate-800 text-[15px]"
            onClick={() => {
              router.push("/events");
              setIsMenuOpen(false);
            }}
          >
            Events
          </h1>
          <h1
            className="hover:cursor-pointer text-black font-light hover:text-slate-800 text-[15px]"
            onClick={() => {
              router.push("/career");
              setIsMenuOpen(false);
            }}
          >
            Career
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
