// import test from "node:test";
// import React from "react";
// const testimonials = [
//   {
//     quote:
//       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//     name: "Charles Dickens",
//     title: "A Tale of Two Cities",
//   },
//   {
//     quote:
//       "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
//     name: "William Shakespeare",
//     title: "Hamlet",
//   },
//   {
//     quote: "All that we see or seem is but a dream within a dream.",
//     name: "Edgar Allan Poe",
//     title: "A Dream Within a Dream",
//   },
//   {
//     quote:
//       "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
//     name: "Jane Austen",
//     title: "Pride and Prejudice",
//   },
//   {
//     quote:
//       "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
//     name: "Herman Melville",
//     title: "Moby-Dick",
//   },
// ];

// const PartnersSection = () => {
//   return (
//     <div className="py-[100px] px-[24px] md:px-[150px] flex flex-col gap-[10px]">
//       <h1 className="font-helvetica font-normal text-[32px] md:text-[72px] leading-[82.79px]">
//         Our Esteemed Partners
//       </h1>
//       <div className="flex justify-between my-[50px] bg-red-500">
//         <img
//           src="/landing/partner1.png"
//           alt=""
//           className="w-[100px] md:w-[200px] object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
//         />
//         <img
//           src="/landing/partner2.png"
//           alt=""
//           className="w-[100px] md:w-[200px] object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
//         />
//         <img
//           src="/landing/partner3.png"
//           alt=""
//           className="w-[100px] md:w-[200px] object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
//         />
//         <img
//           src="/landing/partner4.png"
//           alt=""
//           className="w-[100px] md:w-[200px] object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
//         />
//       </div>
//     </div>
//   );
// };

// export default PartnersSection;

"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { urlFor } from "@/sanity/lib/image";
import { fetchAllPartnerships } from "@/services/api/partnershipService";
import { Partnership } from "@/types/partnership";
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
    <div className="py-[100px] px-[24px] md:px-[150px] flex flex-col gap-[10px]">
      <h1 className="font-helvetica font-normal text-[32px] md:text-[72px] leading-[82.79px]">
        Trusted Collaborators
      </h1>

      <div className="my-[24px] md:my-[50px] overflow-hidden">
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
