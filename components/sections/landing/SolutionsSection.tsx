import React from "react";

const SolutionsSection = () => {
  return (
    <div className="py-[100px] flex flex-col gap-[50px]">
      <div className="px-[150px]">
        <h1 className="font-helvetica font-normal text-[72px] leading-[82.79px]">
          Our Solutions
        </h1>
        <h1 className="font-helvetica font-light text-[32px] leading-[36.8px]">
          Our comprehensive range of dental solutions is designed to ensure{" "}
          <br />
          precision and durability.
        </h1>
      </div>

      <div className="flex flex-col gap-[20px]">
        <div className="w-screen relative ">
          <img
            src="/landing/chairs.png"
            alt="chairs"
            className="w-full h-[687.75px] object-cover"
          />

          <div className="absolute "></div>

          <div className="absolute left-[150px] top-10 flex flex-col gap-[8px]">
            <h1 className="font-helvetica font-light text-[56px] leading[56px] w-[120px] rounded-[1000px] border-solid border-black border-[1px] gap-[10px] text-center">
              1
            </h1>
            <h1 className="font-helvetica font-light text-[56px] leading-[64.4px]">
              Chairs
            </h1>
            <h1 className="font-helvetica font-light text-[24px] leading-[27.6px]">
              Seamless Adjustability & Ergonomic Comfort
            </h1>
          </div>

          <div className="absolute hover:scale-[1.02] bg-white bg-opacity-20 backdrop-blur-lg right-[50px] bottom-10 rounded-[1000px] border-solid border-black border-[1px] py-[12px] px-[32px] text-center transition-all duration-300 ease-in-out  hover:cursor-pointer hover:bg-black hover:text-white hover:bg-opacity-100 hover:backdrop-blur-sm">
            <h1 className="font-helvetica font-light text-[32px] leading-[32px] text-center">
              View Products
            </h1>
          </div>
        </div>

        <div className="flex gap-[20px]">
          <div className="bg-red-500 w-1/2 h-[903px]">
            <div className="w-full relative h-full bg-blue-500 overflow-hidden">
              <img
                src="/landing/scanners.png"
                alt="chairs"
                className="w-full"
              />
              <div className="absolute left-[150px] top-10 flex flex-col gap-[8px]">
                <h1 className="font-helvetica font-light text-[56px] leading[56px] w-[120px] rounded-[1000px] border-solid border-black border-[1px] gap-[10px] text-center">
                  2
                </h1>
                <h1 className="font-helvetica font-light text-[56px] leading-[64.4px]">
                  3D Scanners
                </h1>
                <h1 className="font-helvetica font-light text-[24px] leading-[27.6px]">
                  High-Definition Scanning
                </h1>
              </div>

              <div className="absolute hover:scale-[1.02] bg-white bg-opacity-20 backdrop-blur-lg right-[50px] bottom-10 rounded-[1000px] border-solid border-black border-[1px] py-[12px] px-[32px] text-center transition-all duration-300 ease-in-out  hover:cursor-pointer hover:bg-black hover:text-white hover:bg-opacity-100 hover:backdrop-blur-sm">
                <h1 className="font-helvetica font-light text-[32px] leading-[32px] text-center">
                  View Products
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-red-500 w-1/2 h-[903px]">
            <div className="w-full relative h-full bg-blue-500 overflow-hidden">
              <img
                src="/landing/aligners.png"
                alt="chairs"
                className="w-full h-full object-cover"
              />
              <div className="absolute left-[150px] top-10 flex flex-col gap-[8px]">
                <h1 className="font-helvetica font-light text-[56px] leading[56px] w-[120px] rounded-[1000px] border-solid border-black border-[1px] gap-[10px] text-center">
                  3
                </h1>
                <h1 className="font-helvetica font-light text-[56px] leading-[64.4px]">
                  Dental Aligners
                </h1>
                <h1 className="font-helvetica font-light text-[24px] leading-[27.6px]">
                  Discrete and Effective
                </h1>
              </div>

              <div className="absolute hover:scale-[1.02] bg-white bg-opacity-20 backdrop-blur-lg right-[50px] bottom-10 rounded-[1000px] border-solid border-black border-[1px] py-[12px] px-[32px] text-center transition-all duration-300 ease-in-out  hover:cursor-pointer hover:bg-black hover:text-white hover:bg-opacity-100 hover:backdrop-blur-sm">
                <h1 className="font-helvetica font-light text-[32px] leading-[32px] text-center">
                  View Products
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-500 w-screen">
          <div className="w-full relative ">
            <img
              src="/landing/implants.png"
              alt="implants"
              className="w-full h-[687.75px] object-cover"
            />
            <div className="absolute left-[150px] top-10 flex flex-col gap-[8px]">
              <h1 className="font-helvetica font-light text-[56px] leading[56px] w-[120px] rounded-[1000px] border-solid border-black border-[1px] gap-[10px] text-center">
                4
              </h1>
              <h1 className="font-helvetica font-light text-[56px] leading-[64.4px]">
                Implants
              </h1>
              <h1 className="font-helvetica font-light text-[24px] leading-[27.6px]">
                Long-Lasting Confidence
              </h1>
            </div>

            <div className="absolute hover:scale-[1.02] bg-white bg-opacity-20 backdrop-blur-lg right-[50px] bottom-10 rounded-[1000px] border-solid border-black border-[1px] py-[12px] px-[32px] text-center transition-all duration-300 ease-in-out  hover:cursor-pointer hover:bg-black hover:text-white hover:bg-opacity-100 hover:backdrop-blur-sm">
              <h1 className="font-helvetica font-light text-[32px] leading-[32px] text-center">
                View Products
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;
