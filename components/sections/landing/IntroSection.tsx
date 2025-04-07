// a nice landing page
"use client";
import React from "react";
import { useRouter } from "next/navigation";

const IntroSection = () => {
  const router = useRouter();
  return (
    <div className="px-[24px] md:px-[150px]">
      <div className="flex xl:hidden flex-col gap-[12px]">
        <h1 className="font-helvetica text-[18px] font-normal">
          We are committed to pioneering <br /> technological advancements that
          drive <br /> innovation within the dental industry.
        </h1>
        <button
          className="hover:bg-black hover:text-white transition-all duration-300 md:hover:scale-105 ease-in-out w-fit md:w-[280px] py-[16px] px-[24px] border-solid border-black border-[0.5px] rounded-[5px] text-center font-helvetica font-normal text-[20px] md:text-[24px] leading-[27.6px]"
          onClick={() => {
            router.push("/contact");
          }}
        >
          Partner With Us
        </button>
      </div>

      <div className="py-[100px] flex flex-col md:flex-row gap-[50px] justify-between cursor-default">
        <div className="flex flex-col gap-0 md:gap-[12px] transition-transform duration-300 ease-in-out group">
          <h1 className="font-helvetica font-normal text-[32px] md:text-[72px] md:leading-[82.79px] flex items-baseline">
            10+
            <span className="font-helvetica font-light text-[28px] md:text-[42px] md:leading-[48.2px] ml-2">
              &nbsp;years
            </span>
          </h1>
          <h1 className="font-helvetica font-light text-[28px] md:text-[42px] md:leading-[48.2px]">
            of Experience
          </h1>
          <hr className="my-[12px]" />
          <h1 className="font-helvetica font-normal text-[18px] md:leading-[20.7px] text-[#666666]">
            Delivering top-notch dental instruments to <br /> healthcare
            providers globally.
          </h1>
        </div>
        <div className="flex flex-col gap-[12px] transition-transform duration-300 ease-in-out group">
          <h1 className="font-helvetica font-normal text-[32px] md:text-[72px] md:leading-[82.79px] flex items-baseline">
            100+
          </h1>
          <h1 className="font-helvetica font-light text-[28px] md:text-[42px] md:leading-[48.2px]">
            Product Lines
          </h1>
          <hr />
          <h1 className="font-helvetica font-light text-[18px] md:leading-[20.7px] text-[#666666]">
            Trusted by hospitals and clinics across <br /> multiple regions.
          </h1>
        </div>
        <div className="flex flex-col gap-[12px] transition-transform duration-300 ease-in-out group">
          <h1 className="font-helvetica font-normal text-[32px] md:text-[72px] md:leading-[82.79px] flex items-baseline">
            500+
            {/* <span className="font-helvetica font-light text-[28px] md:text-[42px] md:leading-[48.2px] ml-2">
              &nbsp;years
            </span> */}
          </h1>
          <h1 className="font-helvetica font-light text-[28px] md:text-[42px] md:leading-[48.2px]">
            Happy Clients
          </h1>
          <hr />
          <h1 className="font-helvetica font-light text-[18px] md:leading-[20.7px] text-[#666666]">
            Offering a wide range of dental equipment to <br /> meet every need.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
