"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { fetchAllPartnerships } from "@/services/api/partnershipService";
import { usePartnerships } from "@/services/query/usePartnerships";
import { urlFor } from "@/sanity/lib/image";
import { Partnership } from "@/types/partnership";

const SpotlightSection = () => {
  // const { data: partnerships, isLoading, error } = usePartnerships();

  const [partnerships, setPartnerships] = useState<Partnership[]>([]);

  useEffect(() => {
    const fetchPartnerships = async () => {
      const res = await fetchAllPartnerships();
      setPartnerships(res);
    };
    fetchPartnerships();
  }, []);

  // if (isLoading) return <p>Loading partnerships...</p>;
  // if (error) return <p>Error loading partnerships</p>;

  return (
    <div className="px-[24px] md:px-[150px] py-[100px]">
      <div className="w-full flex flex-col gap-[100px]">
        <div className="flex flex-col gap-[32px]">
          <h1 className="font-helvetica font-normal text-[32px] md:text-[72px] md:leading-[82.79px]">
            Collaborating for Innovation
          </h1>
          <h1 className="font-helvetica font-light text-[16px] md:text-[32px] w-full md:w-1/2">
            Our journey toward advancing dental solutions is powered by leading
            institutions and businesses that share our vision for innovation,
            quality, and excellence.
          </h1>
        </div>
        <div className="w-full flex flex-col gap-[32px]">
          <h1 className="font-helvetica font-normal text-[32px] md:text-[72px] leading-[82.79px]">
            Spotlight Partnerships
          </h1>

          <div className="flex flex-col gap-[32px]">
            {partnerships
              ?.filter(
                (partnership) =>
                  partnership.description &&
                  partnership.description.trim() !== ""
              )
              .map((partnership) => (
                <div className="md:hidden flex flex-col" key={partnership._id}>
                  <div className="flex flex-col w-full gap-[8px]">
                    <div className="flex flex-col gap-[8px] items-start">
                      <img
                        src={urlFor(partnership.coverPhoto).url()}
                        alt={partnership.name}
                        className="w-full h-[300px] object-cover"
                      />
                      <img
                        src={urlFor(partnership.logo).url()}
                        alt={partnership.name}
                        className="w-auto h-[80px] object-contain"
                      />
                    </div>
                    <div className="w-full">
                      <h1 className="font-helvetica font-light text-[18px]">
                        {partnership.description}
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="flex-col gap-[32px] hidden md:flex">
            {partnerships
              ?.filter(
                (partnership) =>
                  partnership.description &&
                  partnership.description.trim() !== ""
              )
              .slice(0, 2)
              .map((partnership) => (
                <div
                  className="flex flex-row gap-[32px] justify-between"
                  key={partnership._id}
                >
                  <div className="h-[300px] flex flex-col w-1/2">
                    <div className="mt-auto w-[590px]">
                      <h1 className="font-helvetica font-normal text-[16px] md:text-[32px]">
                        {partnership.name}
                      </h1>
                      <h1 className="font-helvetica font-light text-[18px]">
                        {partnership.description}
                      </h1>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[8px] w-1/2 justify-end items-end">
                    <div className="flex flex-col gap-[8px]">
                      <img
                        src={urlFor(partnership.coverPhoto).url()}
                        alt={partnership.name}
                        className="w-[590px] h-[300px] object-cover"
                      />
                      <img
                        src={urlFor(partnership.logo).url()}
                        alt={partnership.name}
                        className="w-fit h-[80px] object-fit"
                      />
                    </div>
                  </div>
                </div>
              ))}

            <div className="flex flex-row gap-[32px] justify-between">
              {partnerships
                ?.filter(
                  (partnership) =>
                    partnership.description &&
                    partnership.description.trim() !== ""
                )
                .slice(2, 4)
                .map((partnership) => (
                  <div
                    className="flex flex-col w-1/2 gap-[32px]"
                    key={partnership._id}
                  >
                    <div className="flex flex-col gap-[8px]">
                      <img
                        src={urlFor(partnership.coverPhoto).url()}
                        alt={partnership.name}
                        className="w-[590px] h-[300px] object-cover"
                      />
                      <img
                        src={urlFor(partnership.logo).url()}
                        alt={partnership.name}
                        className="w-fit h-[80px] object-fit"
                      />
                    </div>
                    <div className="w-[590px]">
                      <h1 className="font-helvetica font-normal text-[16px] md:text-[32px]">
                        {partnership.name}
                      </h1>
                      <h1 className="font-helvetica font-light text-[18px]">
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
