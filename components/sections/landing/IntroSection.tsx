// a nice landing page
"use client";
import React from "react";
import { useRouter } from "next/navigation";

const IntroSection = () => {
  const router = useRouter();
  return (
    <div className="px-[24px] md:px-[50px] lg:px-[150px]">
      <div className="flex xl:hidden flex-col gap-[12px]">
        <h1 className="font-helvetica text-[18px] font-normal">
          We are committed to pioneering <br /> technological advancements that
          drive <br /> innovation within the dental industry.
        </h1>
        <button
          className="hover:bg-black hover:text-white transition-all duration-300 ease-in-out w-fit lg:w-[280px] p-2 lg:py-[16px] md:px-[24px] border-solid border-black border-[0.5px] rounded-[5px] text-center font-helvetica font-normal text-[20px] md:text-[24px]"
          onClick={() => {
            router.push("/contact");
          }}
        >
          Partner With Us
        </button>
      </div>

      <div className="py-[50px] lg:py-[100px] flex flex-col md:flex-row gap-[50px] justify-between cursor-default">
        <div className="flex-1 flex flex-col gap-1 md:gap-2 lg:gap-3 transition-transform duration-300 ease-in-out group">
          <h1 className="font-helvetica font-normal text-[32px] lg:text-[64px] flex items-baseline leading-none">
            10+
            <span className="font-helvetica font-normal text-[28px] lg:text-[42px] lg:ml-2">
              &nbsp;years
            </span>
          </h1>
          <h1 className="font-helvetica font-light text-[28px] lg:text-[42px]">
            of Experience
          </h1>
          <hr />
          <p className="font-helvetica font-light text-[18px] text-[#666666] leading-tight">
            Delivering top-notch dental instruments to healthcare providers
            globally.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-1 md:gap-2 lg:gap-3 transition-transform duration-300 ease-in-out group">
          <h1 className="font-helvetica font-normal text-[32px] lg:text-[64px] flex items-baseline leading-none">
            100+
          </h1>
          <h1 className="font-helvetica font-light text-[28px] lg:text-[42px]">
            Product Lines
          </h1>
          <hr />
          <p className="font-helvetica font-light text-[18px] text-[#666666] leading-tight">
            Trusted by hospitals and clinics across multiple regions.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-1 md:gap-2 lg:gap-3 transition-transform duration-300 ease-in-out group">
          <h1 className="font-helvetica font-normal text-[32px] lg:text-[64px] flex items-baseline leading-none">
            500+
          </h1>
          <h1 className="font-helvetica font-light text-[28px] lg:text-[42px]">
            Happy Client
          </h1>
          <hr />
          <p className="font-helvetica font-light text-[18px] text-[#666666] leading-tight">
            Offering a wide range of dental equipment to meet every need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
