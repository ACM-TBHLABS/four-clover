"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { urlFor } from "@/sanity/lib/image";
import { fetchAllPartnerships } from "@/services/api/partnershipService";
import React, { useEffect, useState } from "react";

const PartnersSection = () => {
  const [partnerImages, setPartnerImages] = useState<{ imagePath: string }[]>(
    []
  );

  useEffect(() => {
    const fetchPartnerships = async () => {
      const res = await fetchAllPartnerships();
      // Filter for partnerships with empty descriptions and format as {imagePath: string}
      const formattedImages = res
        .filter(
          (partnership) =>
            !partnership.description || partnership.description.trim() === ""
        )
        .map((partnership) => ({ imagePath: urlFor(partnership.logo).url() }));

      setPartnerImages(formattedImages);
    };

    fetchPartnerships();
  }, []);

  return (
    <div className="p-[24px] md:p-[50px] lg:px-[150px] flex flex-col">
      <h1 className="font-helvetica font-normal text-[32px] md:text-[56px] lg:text-[72px] leading-[1.1]">
        Trusted Collaborators
      </h1>

      <div className="overflow-hidden">
        <InfiniteMovingCards
          items={partnerImages}
          direction="left"
          speed="fast"
        />
      </div>
    </div>
  );
};

export default PartnersSection;
