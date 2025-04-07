import React from "react";

const AddressSection = () => {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="border-b">
        <h1 className="font-helvetica font-normal text-[24px] md:text-[32px]">
          Addresses
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-[24px] md:gap-[50px] justify-between">
        <div className="flex flex-col gap-[4px] font-helvetica font-normal text-[13px] md:text-[18px]">
          <h1>Head Office</h1>
          <h1>
            No. 23, 3rd Floor, Kabar Aye Pagoda Road, Bahan Township, Yangon,
            Myanmar
          </h1>
          <h1>+95 9 765 432 109</h1>
          <h1>info@fourclovermm.com</h1>
        </div>
        <div className="flex flex-col gap-[4px] font-helvetica font-normal text-[13px] md:text-[18px]">
          <h1>Location</h1>
          <h1>Room 502, Unity Tower, Nat Mauk Road, Bahan, Yangon, Myanmar</h1>
          <h1>+95 9 765 432 109</h1>
          <h1>info@fourclovermm.com</h1>
        </div>
      </div>
    </div>
  );
};

export default AddressSection;
