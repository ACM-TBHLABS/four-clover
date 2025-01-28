import React from "react";

const PartnersSection = () => {
  return (
    <div className="py-[100px] px-[150px] flex flex-col gap-[10px]">
      <h1 className="font-helvetica font-normal text-[72px] leading-[82.79px]">
        Our Esteemed Partners
      </h1>
      <div className="flex justify-between my-[50px]">
        <img
          src="/landing/partner1.png"
          alt=""
          className="w-[200px] object-contain"
        />
        <img
          src="/landing/partner2.png"
          alt=""
          className="w-[200px] object-contain"
        />
        <img
          src="/landing/partner3.png"
          alt=""
          className="w-[200px] object-contain"
        />
        <img
          src="/landing/partner4.png"
          alt=""
          className="w-[200px] object-contain"
        />
      </div>
    </div>
  );
};

export default PartnersSection;
