"use client";
import React, { useState, useEffect } from "react";
import { fetchAllPartnerships } from "@/services/api/partnershipService";
import { urlFor } from "@/sanity/lib/image";
import { Partnership } from "@/types/partnership";

const SpotlightSection = () => {
  const [partnerships, setPartnerships] = useState<Partnership[]>([]);

  useEffect(() => {
    const fetchPartnerships = async () => {
      const res = await fetchAllPartnerships();
      setPartnerships(res);
    };
    fetchPartnerships();
  }, []);

  return (
    <div className="px-[24px] md:px-[50px] lg:px-[150px] py-[50px] md:py-[50px] lg:py-[100px]">
      <div className="w-full flex flex-col gap-8 lg:gap-[100px]">
        <div className="flex flex-col gap-5 md:gap-8">
          <h1 className="font-helvetica font-normal text-[32px] md:text-[56px] lg:text-[72px] leading-[1.1]">
            Collaborating for Innovation
          </h1>
          <h1 className="font-helvetica font-light text-[18px] md:text-[24px] lg:text-[32px] w-full lg:w-1/2">
            Our journey toward advancing dental solutions is powered by leading
            institutions and businesses that share our vision for innovation,
            quality, and excellence.
          </h1>
        </div>
        <div className="w-full flex flex-col gap-[32px]">
          <h1 className="font-helvetica font-normal text-[32px] md:text-[56px] lg:text-[72px] leading-[1.1]">
            Spotlight Partnerships
          </h1>

          <div className="flex flex-col justify-start items-start gap-[50px] md:gap-5 lg:gap-8">
            {partnerships
              ?.filter(
                (partnership) =>
                  partnership.description &&
                  partnership.description.trim() !== ""
              )
              .slice(0, 2)
              .map((partnership) => (
                <div
                  className="flex flex-col md:flex-row gap-5 lg:gap-8 justify-between"
                  key={partnership._id}
                >
                  <div className="flex flex-col-reverse md:flex-col md:w-1/2 gap-1">
                    <div className="mt-auto">
                      <h1 className="hidden md:block font-helvetica font-normal text-[16px] md:text-[24px] lg:text-[32px]">
                        {partnership.name}
                      </h1>
                      <h1 className="font-helvetica font-light text-[16px] lg:text-[18px] leading-[1.1]">
                        {partnership.description}
                      </h1>
                    </div>
                    {/* this one is just to preserve the bottom space */}
                    <img
                      src={urlFor(partnership.logo).url()}
                      alt={partnership.name}
                      className="w-fit h-[40px] lg:h-[80px] object-contain md:opacity-0"
                    />
                  </div>
                  <div className="flex flex-col gap-[8px] md:w-1/2 justify-start items-start">
                    <img
                      src={urlFor(partnership.coverPhoto).url()}
                      alt={partnership.name}
                      className="w-full h-[150px] md:h-[200px] lg:h-[300px] object-cover"
                    />
                    <img
                      src={urlFor(partnership.logo).url()}
                      alt={partnership.name}
                      className="hidden md:block w-fit h-[40px] lg:h-[80px] object-contain"
                    />
                  </div>
                </div>
              ))}

            <div className="flex flex-col md:flex-row gap-[50px] md:gap-5 lg:gap-8 justify-between">
              {partnerships
                ?.filter(
                  (partnership) =>
                    partnership.description &&
                    partnership.description.trim() !== ""
                )
                .slice(2, 4)
                .map((partnership) => (
                  <div
                    className="flex flex-col-reverse md:flex-col md:w-1/2 gap-1 lg:gap-5"
                    key={partnership._id}
                  >
                    <div className="flex flex-col-reverse md:flex-col gap-2">
                      <img
                        src={urlFor(partnership.coverPhoto).url()}
                        alt={partnership.name}
                        className="w-full md:h-[200px] lg:h-[300px] object-cover"
                      />
                      <img
                        src={urlFor(partnership.logo).url()}
                        alt={partnership.name}
                        className="w-fit hidden md:block h-[40px] lg:h-[80px] object-contain"
                      />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                      <img
                        src={urlFor(partnership.logo).url()}
                        alt={partnership.name}
                        className="w-fit md:hidden h-[40px] lg:h-[80px] object-contain"
                      />
                      <h1 className="font-helvetica font-light text-[16px] lg:text-[18px] leading-[1.2]">
                        {partnership.description}
                      </h1>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotlightSection;
