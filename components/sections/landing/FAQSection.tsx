import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <div className="my-[100px] mx-[150px] flex flex-col gap-[20px]">
      <h1 className="font-helvetica font-normal text-[72px] leading-[82.79px]">
        FAQs
      </h1>
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger className="border-b-[1px] border-solid border-[#5a5a5a] py-[20px]">
            <h1 className="font-helvetica font-normal text-[24px] leading-[27.6px]">
              1. Does Four Clover provide support and maintenance?
            </h1>
          </AccordionTrigger>
          <AccordionContent>
            <h1 className="font-helvetica font-normal text-[24px] leading-[27.6px] py-[20px] ml-6">
              Yes.
            </h1>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="border-b-[1px] border-solid border-[#5a5a5a] py-[20px]">
            <h1 className="font-helvetica font-normal text-[24px] leading-[27.6px]">
              2. How can I request a quotation for dental products?
            </h1>
          </AccordionTrigger>
          <AccordionContent>
            <h1 className="font-helvetica font-normal text-[24px] leading-[27.6px] py-[20px] ml-6">
              Yes.
            </h1>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="border-b-[1px] border-solid border-[#5a5a5a] py-[20px]">
            <h1 className="font-helvetica font-normal text-[24px] leading-[27.6px]">
              3. Do you offer international shipping?
            </h1>
          </AccordionTrigger>
          <AccordionContent>
            <h1 className="font-helvetica font-normal text-[24px] leading-[27.6px] py-[20px] ml-6">
              Yes.
            </h1>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQSection;
