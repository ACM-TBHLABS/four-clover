import React from "react";

const LeadershipSection = () => {
  return (
    <div className="py-[50px] md:py-[100px] flex flex-col justify-start items-start">
      <h1 className="font-helvetica font-normal text-[42px] md:text-[72px] whitespace-nowrap">
        Leadership
      </h1>
      <div className="w-full h-fit md:h-[500px] flex flex-col md:flex-row justify-start items-stretch gap-8">
        <div className="w-full md:w-[600px] h-full flex flex-col p-3 md:p-5 justify-between items-start bg-gray-100 gap-8">
          <div className="w-full flex flex-col md:flex-row justify-between items-start gap-2">
            <div className="w-full flex justify-between items-start gap-2">
              <div className="w-[65px] h-[65px] flex justify-center items-center bg-gray-300 rounded-full overflow-hidden">
                <img
                  src="/about/doctor1.png"
                  alt="vision"
                  className="w-full full object-cover"
                />
              </div>
              {/* flex-1 is set so that it doesn't push other elements down */}
              <div className="flex-1 w-full h-full flex flex-col justify-start items-start">
                <h1 className="font-helvetica font-normal text-[24px] md:text-[32px] whitespace-nowrap">
                  Dr. Sai
                </h1>
                <p className="font-helvetica font-light text-[18px] leading-[1.2]">
                  CEO & Founder
                </p>
              </div>
            </div>
            <div className="w-full flex justify-start items-start">
              <p className="font-helvetica font-light text-[18px] leading-[1.2]">
                Dr. Sai is the founder of Four Clover with over 20
                years of experience in dental care. His leadership focuses on
                fostering global partnerships and driving innovation in the
                dental industry.
              </p>
            </div>
          </div>
          <p className="font-helvetica font-normal text-[24px] md:text-[32px] leading-[1.2]">
            “Innovation in dental care begins with strong partnerships.”<span className="font-helvetica font-light text-[18px] leading-[1.2] italic">- Dr. Sai</span>
          </p>
        </div>
        <div className="w-full md:w-[600px] h-full flex flex-col p-3 md:p-5 justify-between items-start bg-gray-100 gap-8">
          <div className="w-full flex flex-col md:flex-row justify-between items-start gap-2">
            <div className="w-full flex justify-between items-start gap-2">
              <div className="w-[65px] h-[65px] flex justify-center items-center bg-gray-300 rounded-full overflow-hidden">
                <img
                  src="/about/doctor2.png"
                  alt="vision"
                  className="w-full full object-cover"
                />
              </div>
              {/* flex-1 is set so that it doesn't push other elements down */}
              <div className="flex-1 w-full h-full flex flex-col justify-start items-start">
                <h1 className="font-helvetica font-normal text-[24px] md:text-[32px] whitespace-nowrap">
                  Dr. Phyo
                </h1>
                <p className="font-helvetica font-light text-[18px] leading-[1.2]">
                  COO
                </p>
              </div>
            </div>
            <div className="w-full flex justify-start items-start">
              <p className="font-helvetica font-light text-[18px] leading-[1.2]">
                Dr. Phyo Zaw oversees operations at Four Clover. With a background in oral surgery, she is dedicated to advancing dental care through continuous education and strategic collaborations.
              </p>
            </div>
          </div>
          <p className="font-helvetica font-normal text-[24px] md:text-[32px] leading-[1.2]">
            “Innovation thrives when knowledge meets opportunity.” <span className="font-helvetica font-light text-[18px] leading-[1.2] italic">- Dr. Phyo</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadershipSection;
