"use client";
import React, { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fetchAllFAQs } from "@/services/api/faqsService";
import { ArrowUpRight } from "lucide-react";

const FAQSection = () => {
  const [faqs, setFaqs] = React.useState<any[]>([]);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const res = await fetchAllFAQs();
        setFaqs(res);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };
    fetchFAQs();
  }, []);

  if (!faqs) {
    return (
      <div className="w-full flex flex-col items-center justify-center overflow-x-hidden">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="py-[50px] pb-[100px] px-[24px] md:px-[50px] lg:px-[150px] flex flex-col gap-2 md:gap-[20px]">
      <h1 className="font-helvetica font-normal text-[32px] md:text-[56px] lg:text-[72px] leading-[1.1]">
        FAQs
      </h1>
      <Accordion type="multiple">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={faq._id}
            value={`item-${index + 1}`}
            className="border-b-[1px] border-solid border-[#5a5a5a]"
          >
            <AccordionTrigger className="py-[20px] flex items-start justify-betweeen">
              <ul className="flex flex-col gap-[12px]">
                <li className="flex justify-start items-start gap-1 font-helvetica font-normal text-[18px] md:text-[24px] leading-[1.1]">
                  <span className="block">{index + 1}.</span>
                  <span className="block">{faq.question}</span>
                </li>
              </ul>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex justify-start items-start gap-1 font-helvetica font-normal text-[20px] md:text-[24px] leading-none">
                <p className="block opacity-0">{index + 1}.</p>
                <div className="block">
                  <p className="mb-8">{faq.answer}</p>
                  <div className="w-full flex flex-col justify-start items-start gap-1">
                    <p className="font-helvetica font-normal text-[20px] md:text-[24px] leading-[1.1]">
                      References:
                    </p>
                    {faq.ref_links && faq.ref_links.length > 0 && (
                      <div className="font-light hover:underline group">
                        {faq.ref_links?.map((link: string, i: number) => (
                          <a
                            key={i}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.split("https://www.")[1]}
                            <span className="inline-block group-hover:-translate-y-[2px] group-hover:translate-x-[2px] transition-transform duration-300 ease-in-out">
                              <ArrowUpRight className="inline-block ml-1" />
                            </span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
