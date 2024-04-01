"use client";
import Container from "@/components/ui/container";
import React from "react";
import Image from "next/image";
import { FAQ_ITEMS } from "@/lib/faq";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const Footer = () => {
  return (
    <section
      id="faq_footer"
      className="bg-cover min-h-[3763px] flex justify-center items-center"
      style={{ backgroundImage: "url('/images/Footer.png')" }}
    >
      <Container>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-8">
            <Image src="/images/FAQ.png" alt="FAQ icon" width={486} height={480} />
            <h2 className="font-sans-jakarta text-6xl font-bold leading-[75.52px] text-left">
              Frequently<br />
              Asked<br />
              Questions
            </h2>
          </div>
          <Accordion type="single" collapsible>
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="w-[1216.6px] bg-[#181818] rounded-[40px] mb-5">
                <AccordionTrigger className="font-sans-jakarta text-4xl py-7 ml-10 font-extrabold leading-[47.52px] text-left text-white">
                  <span>{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-3xl leading-9 text-white">
                  <div className="py-4">
                    <div className="border-b border-[#cbe023] ml-10 mb-4 w-[1120px]" />
                    <div className="mr-[60px] ml-12 font-medium whitespace-pre-line">
                      {item.answer.split('\n').map((line, i) => (
                        <p key={i} className="mb-2">
                          {line.startsWith('•') ? '• ' : ''}{line.replace(/^•\s*/, '')}
                        </p>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
};

export default Footer;