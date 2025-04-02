"use client";
import { urlFor } from "@/sanity/lib/image";
import { fetchAllPartnerships } from "@/services/api/partnershipService";
import { usePartnerships } from "@/services/query/usePartnerships";
import Image from "next/image";
import React from "react";

const SpotlightSection = () => {
	const { data: partnerships, isLoading, error } = usePartnerships();

	if (isLoading) return <p>Loading partnerships...</p>;
	if (error) return <p>Error loading partnerships</p>;

  return (
    <div className="px-[24px] md:px-[150px] py-[100px]">
      <div className="w-full flex flex-col gap-[100px]">
        <div className="w-full flex flex-col gap-[32px]">
          <h1 className="font-helvetica font-normal text-[32px] md:text-[72px] leading-[82.79px]">
            Collaborating for Innovation
          </h1>
          <h1 className="font-helvetica font-light text-[16px] md:text-[32px] w-1/2">
            Our journey toward advancing dental solutions is powered by leading
            institutions and businesses that share our vision for innovation,
            quality, and excellence.
          </h1>
        </div>
        <div className="w-full flex flex-col gap-[32px]">
          <h1 className="font-helvetica font-normal text-[32px] md:text-[72px] leading-[82.79px]">
            Spotlight Partnerships
          </h1>

          <div className="flex flex-col gap-[32px] md:hidden">
            {partnerships?.map((partner) => (
              <div key={partner._id} className="flex flex-col w-full gap-[8px]">
                <div className="flex flex-col gap-[8px]">
                  <div className="w-full h-[300px] bg-blue-100 relative">
                    <Image src={urlFor(partner.coverPhoto).url()} alt={partner.name} width={1980} height={1024} priority/>
                  </div>
                  <div className="w-full h-[80px] relative">
                    <Image src={urlFor(partner.logo).url()} alt={partner.name} width={200} height={200} priority/>
                  </div>
                </div>
                <div className="w-full">
                  <h1 className="font-helvetica font-light text-[18px]">
                    {partner.name} - {partner.description}
                  </h1>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:flex flex-col gap-[32px]">
            {partnerships?.map((partner, index) => (
              <div key={partner._id} className={`flex flex-row gap-[32px] justify-between ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                <div className="h-[300px] flex flex-col w-1/2">
                  <div className="mt-auto w-[590px]">
                    <h1 className="font-helvetica font-normal text-[16px] md:text-[32px]">
                      {partner.name}
                    </h1>
                    <h1 className="font-helvetica font-light text-[18px]">
                      {partner.description}
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] w-1/2 justify-end items-end">
                  <div className="flex flex-col gap-[8px]">
                    <div className="w-[590px] h-[300px] bg-blue-100 relative">
                      <Image src={urlFor(partner.coverPhoto).url()} alt={partner.name}width={1980} height={1024} priority/>
                    </div>
                    <div className="w-[327px] h-[80px] relative">
                      <Image src={urlFor(partner.logo).url()} alt={partner.name} width={200} height={200} priority/>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotlightSection;
