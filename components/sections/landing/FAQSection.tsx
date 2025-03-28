import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <div className="my-[100px] mx-[24px] md:mx-[150px] flex flex-col gap-[20px]">
      <h1 className="font-helvetica font-normal text-[32px] md:text-[72px] leading-[82.79px]">
        FAQs
      </h1>
      <Accordion type="multiple">
        <AccordionItem
          value="item-1"
          className="border-b-[1px] border-solid border-[#5a5a5a] "
        >
          <AccordionTrigger className="py-[20px]">
            <h1 className="font-helvetica font-normal text-[20px] md:text-[24px] leading-[27.6px]">
              1. Does Four Clover provide support and maintenance?
            </h1>
          </AccordionTrigger>
          <AccordionContent>
            <h1 className="font-helvetica font-normal text-[20px] md:text-[24px] leading-[27.6px] py-[20px] ml-6 transition-transform">
              Yes, Four Clover offers comprehensive support and maintenance
              services for all the dental products we supply. Our dedicated
              support team is available to assist with any issues or concerns.
              We also provide regular maintenance packages to ensure your
              equipment operates at its best.
            </h1>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="border-b-[1px] border-solid border-[#5a5a5a] "
        >
          <AccordionTrigger className="py-[20px]">
            <h1 className="font-helvetica font-normal text-[20px] md:text-[24px] leading-[27.6px]">
              2. How can I request a quotation for dental products?
            </h1>
          </AccordionTrigger>
          <AccordionContent>
            <h1 className="font-helvetica font-normal text-[20px] md:text-[24px] leading-[27.6px] py-[20px] ml-6">
              To request a quotation, simply fill out the form on our Products
              page, providing the details of the products you're interested in.
              Our team will get back to you with a customized quote based on
              your needs.
            </h1>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="border-b-[1px] border-solid border-[#5a5a5a] "
        >
          <AccordionTrigger className="py-[20px]">
            <h1 className="font-helvetica font-normal text-[20px] md:text-[24px] leading-[27.6px]">
              3. Do you offer international shipping?
            </h1>
          </AccordionTrigger>
          <AccordionContent>
            <h1 className="font-helvetica font-normal text-[20px] md:text-[24px] leading-[27.6px] py-[20px] ml-6">
              Yes, we offer product training for all our dental equipment. Our
              experts will guide you through the setup, operation, and
              maintenance of your products. Contact us for more information on
              training schedules and availability.
            </h1>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQSection;
