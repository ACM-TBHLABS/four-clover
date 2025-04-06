"use client";
import React from "react";

const OurJourney = () => {
  const items = [
    {
      title: "2018",
      description:
        "Four Clover was founded with a mission to revolutionize the dental industry.",
      image: "/landing/hero.png",
    },
    {
      title: "2019",
      description:
        "Launched our first line of premium dental products, setting new standards in quality.",
      image: "/landing/hero.png",
    },
    {
      title: "2020",
      description:
        "Expanded our product range to include cutting-edge dental equipment and supplies.",
      image: "/landing/hero.png",
    },
    {
      title: "2021",
      description:
        "Established partnerships with leading dental organizations and professionals.",
      image: "/landing/hero.png",
    },
    {
      title: "2022",
      description:
        "Launched our exclusive training programs for dental professionals.",
      image: "/landing/hero.png",
    },
    {
      title: "2023",
      description:
        "Established partnerships with leading dental organizations worldwide.",
      image: "/landing/hero.png",
    },
    {
      title: "2024",
      description:
        "Expanding our global presence and enhancing our product offerings.",
      image: "/landing/hero.png",
    },
    {
      title: "2025",
      description:
        "Continuing to innovate and lead the dental industry with our premium products and services.",
      image: "/landing/hero.png",
    },
  ];
  const [selectedItem, setSelectedItem] = React.useState<any>(items[0]);
  return (
    <div className="flex flex-col justify-start items-start">
      <div className="w-full h-fit lg:h-[600px] flex flex-col lg:flex-row-reverse justify-start items-start">
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-start gap-1">
          <img
            src="/about/journey.png"
            alt="vision"
            className="w-full h-[300px] object-cover"
          />
          <p className="w-full text-[18px] lg:text-[24px] font-helvetica font-light">{selectedItem.description}</p>
        </div>
        <div className="w-full lg:w-1/2 h-full flex flex-col px-0 lg:px-[50px] py-[20px] lg:py-[100px]">
          <h1 className="font-helvetica font-normal text-[42px] lg:text-[72px] whitespace-nowrap">
            Our Journey
          </h1>
          <div className="w-full h-full flex flex-row lg:flex-col justify-start items-end overflow-x-scroll gap-8 lg:gap-0 lg:overflow-x-visible">
            {items.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col gap-1 cursor-pointer group"
                  onClick={() => setSelectedItem(item)}
                >
                  <p
                    className={`${selectedItem.title == item.title ? "lg:text-[40px] lg:font-normal" : "lg:text-[18px] lg:font-light lg:text-gray-500"} group-hover:scale-110 group-hover:text-black duration-300`}
                  >
                    {item.title}
                  </p>
                  <div className="lg:hidden min-w-[300px] h-fit flex flex-col justify-center items-start gap-1">
                    <img
                      src="/about/journey.png"
                      alt="vision"
                      className="w-full h-[200px] object-cover"
                    />
                    <p className="w-full text-[18px] lg:text-[24px] font-helvetica font-light">{selectedItem.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
