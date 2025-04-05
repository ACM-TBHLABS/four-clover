'use server';
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fetchAllFAQs } from "@/services/api/faqsService";

const FAQSection = async () => {
  const faqs = await fetchAllFAQs();

  return (
    <div className="my-[100px] mx-[24px] md:mx-[150px] flex flex-col gap-[20px]">
      <h1 className="font-helvetica font-normal text-[32px] md:text-[72px] leading-[82.79px]">
        FAQs
      </h1>
      <Accordion type="multiple">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={faq._id}
            value={`item-${index + 1}`}
            className="border-b-[1px] border-solid border-[#5a5a5a]"
          >
            <AccordionTrigger className="py-[20px]">
              <h1 className="font-helvetica font-normal text-[20px] md:text-[24px] leading-[27.6px]">
                {index + 1}. {faq.question}
              </h1>
            </AccordionTrigger>
            <AccordionContent>
              <h1 className="font-helvetica font-normal text-[20px] md:text-[24px] leading-[27.6px] py-[20px] ml-6">
                {faq.answer}
              </h1>
              {/* Optional: if ref_links exists and you want to show them */}
              {faq.ref_links && faq.ref_links.length > 0 && (
                <ul className="ml-6 mt-2 list-disc text-sm text-blue-600">
                  {faq.ref_links?.map((link: string, i: number) => (
                    <li key={i}>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
