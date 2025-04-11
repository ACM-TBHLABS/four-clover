import { HandHelping } from "lucide-react";
import { ArrowTrendingLines20Filled } from "@fluentui/react-icons";
import React from "react";
import { PeopleTeam16Regular } from "@fluentui/react-icons";

const JoinUsSection = () => {
  return (
    <div className="flex flex-col gap-[50px] py-[100px]">
      <h1 className="font-helvetica font-normal text-[36px] md:text-[72px] uppercase">
        Why Join Us
      </h1>
      <div className="w-full flex flex-col lg:flex-row gap-[50px] justify-between">
        <div className="flex flex-col gap-[8px] w-full lg:w-1/2">
          <PeopleTeam16Regular className="w-[48px] h-[48px]" />
          <h1 className="font-helvetica text-[16px] md:text-[32px] font-normal">
            Collaborative Culture
          </h1>
          <h1 className="font-helvetica text-[20px] md:text-[24px]">
            A supportive team where ideas thrive.
          </h1>
        </div>
        <div className="flex flex-col gap-[8px] w-full lg:w-1/2">
          <HandHelping className="w-[48px] h-[48px]" />
          <h1 className="font-helvetica text-[16px] md:text-[32px] font-normal">
            Purposeful Work
          </h1>
          <h1 className="font-helvetica text-[20px] md:text-[24px]">
            Contribute to meaningful advancements in dentistry.
          </h1>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-[50px] justify-between">
        <div className="flex flex-col gap-[8px] w-full lg:w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="48"
            height="48"
            color="#000000"
            fill="none"
          >
            <path
              d="M11 2C6.58172 2 3 5.54539 3 9.91886C3 11.4118 3.41735 12.8082 4.14286 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M17 5H15C14.0572 5 13.5858 5 13.2929 5.29289C13 5.58579 13 6.05719 13 7V9C13 9.94281 13 10.4142 13.2929 10.7071C13.5858 11 14.0572 11 15 11H17C17.9428 11 18.4142 11 18.7071 10.7071C19 10.4142 19 9.94281 19 9V7C19 6.05719 19 5.58579 18.7071 5.29289C18.4142 5 17.9428 5 17 5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.5 11V13M17.5 11V13M14.5 3V5M17.5 3V5M13 6.5H11M13 9.5H11M21 6.5H19M21 9.5H19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.38287 17.0982C6.291 16.8216 6.24507 16.6833 6.25042 16.5713C6.26174 16.3343 6.41114 16.1262 6.63157 16.0405C6.73579 16 6.88105 16 7.17157 16H14.8284C15.119 16 15.2642 16 15.3684 16.0405C15.5889 16.1262 15.7383 16.3343 15.7496 16.5713C15.7549 16.6833 15.709 16.8216 15.6171 17.0982C15.4473 17.6094 15.3624 17.8651 15.2315 18.072C14.9572 18.5056 14.5272 18.8167 14.0306 18.9408C13.7935 19 13.525 19 12.9881 19H9.01186C8.47495 19 8.2065 19 7.96944 18.9408C7.47283 18.8167 7.04281 18.5056 6.7685 18.072C6.63755 17.8651 6.55266 17.6094 6.38287 17.0982Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M14 19L13.8707 19.6466C13.7293 20.3537 13.6586 20.7072 13.5001 20.9866C13.2552 21.4185 12.8582 21.7439 12.3866 21.8994C12.0816 22 11.7211 22 11 22C10.2789 22 9.91842 22 9.61338 21.8994C9.14175 21.7439 8.74484 21.4185 8.49987 20.9866C8.34144 20.7072 8.27073 20.3537 8.12932 19.6466L8 19"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <h1 className="font-helvetica text-[16px] md:text-[32px] font-normal">
            Innovative Environment
          </h1>
          <h1 className="font-helvetica text-[20px] md:text-[24px]">
            Work with industry-leading technology that transforms patient care.
          </h1>
        </div>
        <div className="flex flex-col gap-[8px] w-full lg:w-1/2">
          <ArrowTrendingLines20Filled className="w-[48px] h-[48px]" />
          {/* <img
            src="/icons/arrowgrowth.png"
            alt=""
            className="w-[48px] h-[48px]"
          /> */}
          <h1 className="font-helvetica text-[16px] md:text-[32px] font-normal">
            Career Growth
          </h1>
          <h1 className="font-helvetica text-[20px] md:text-[24px]">
            Tailored development programs and career advancement opportunities.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default JoinUsSection;
