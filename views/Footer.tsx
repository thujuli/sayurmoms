"use client";
import React from "react";
import Image from "next/image";
import { FAQ_ITEMS } from "@/lib/faq";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Globe, Phone } from "lucide-react";
import sayurmoms from "@/public/images/logo_footer.png";
import shopee from "@/public/images/shopee.png";
import tokopedia from "@/public/images/tokopedia.png";
import bca from "@/public/images/bca.png";
import ovo from "@/public/images/ovo.png";
import shopee_pay from "@/public/images/shopee_pay.png";
import tractor from "@/public/images/tractor.png";

const Footer = () => {
  return (
    <section
      id="faq_footer"
      className="relative bg-cover flex justify-center items-start pt-[100px]"
      style={{ backgroundImage: "url('/images/footer.png')" }}
    >
        <div className="flex flex-col items-center">
          {/* FAQ */}
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="/images/FAQ.png"
              alt="FAQ icon"
              width={486}
              height={480}
            />
            <h2 className="font-sans-jakarta text-6xl font-bold leading-[75.52px] text-left">
              Frequently
              <br />
              Asked
              <br />
              Questions
            </h2>
          </div>
          <div className="pt-10">
            <Accordion type="multiple">
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="w-[1216.6px] bg-[#181818] rounded-[40px] mb-5"
                >
                  <AccordionTrigger className="font-sans-jakarta text-4xl py-11 ml-10 font-extrabold leading-[47.52px] text-left text-white">
                    <span>{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-3xl leading-10 text-white">
                    <div className="py-4">
                      <div className="border-b border-[#cbe023] ml-10 mb-4 w-[1120px]" />
                      <div className="mr-[60px] ml-12 pt-4 font-medium whitespace-pre-line">
                        {item.answer.split("\n").map((line, i) => (
                          <p key={i} className="mb-2">
                            {line.startsWith("•") ? "• " : ""}
                            {line.replace(/^•\s*/, "")}
                          </p>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Footer */}
          <div className="w-full h-[1720px] bg-[#F8F8F8] rounded-[35px] mt-[100px] flex flex-col">
            <div className="grid grid-cols-3 justify-between lg:w-full lg:px-32 lg:pt-32">
              <div className="flex flex-col items-start gap-20">
                <Image
                  src={sayurmoms}
                  alt="Sayurmoms Logo"
                  width={460}
                  height={171}
                />
                <div className="flex flex-col gap-8">
                  <h3 className="text-4xl font-bold text-black mb-4">
                    Kontak Kami
                  </h3>
                  <div className="flex gap-4 items-center">
                    <Globe className="text-[#707070]" size={40} />
                    <p className="text-3xl text-[#707070]">
                      sayurmoms.take.app
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Phone className="text-[#707070]" size={40} />
                    <p className="text-3xl text-[#707070]">(021) 456345079</p>
                  </div>
                </div>
                <div className="flex flex-col gap-8">
                  <h3 className="text-4xl font-bold text-black mb-4">
                    E-Commerce
                  </h3>
                  <div className="flex gap-8">
                    <Image
                      src={shopee}
                      alt="Shopee Logo"
                      width={145}
                      height={46}
                    />
                    <Image
                      src={tokopedia}
                      alt="Tokopedia Logo"
                      width={155}
                      height={46}
                    />
                  </div>
                </div>
              </div>
              <div className="flex  pl-32 flex-col gap-6">
                <h3 className="text-4xl font-bold text-black mb-4">Kategori</h3>
                <p className="text-3xl text-[#707070]">Buah-Buahan</p>
                <p className="text-3xl text-[#707070]">Sayur-Sayuran</p>
                <p className="text-3xl text-[#707070]">Daging</p>
                <p className="text-3xl text-[#707070]">Seafood</p>
                <p className="text-3xl text-[#707070]">Frozen Food</p>
                <p className="text-3xl text-[#707070]">Bumbu Dapur</p>
                <p className="text-3xl text-[#707070]">Bahan Olahan</p>
              </div>
              <div className="flex flex-col pl-12 items-start gap-20 w-[414px]">
                <div className="flex flex-col gap-6">
                  <h3 className="text-4xl font-bold text-black mb-4">
                    Userful Links
                  </h3>
                  <p className="text-3xl text-[#707070]">Payment & Tax</p>
                  <p className="text-3xl text-[#707070]">Terms of Services</p>
                  <p className="text-3xl text-[#707070]">Discount</p>
                </div>
                <div className="flex flex-col gap-8">
                  <h3 className="text-4xl font-bold text-black">
                    Metode Pembayaran
                  </h3>
                  <div className="flex gap-4 items-center">
                    <Image src={bca} alt="BCA Logo" width={142} height={44} />
                    <Image src={ovo} alt="OVO Logo" width={122} height={38} />
                    <Image
                      src={shopee_pay}
                      alt="ShopeePay Logo"
                      width={126}
                      height={71}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 lg:h-[1282px] lg:w-full">
            <Image
              src={tractor}
              alt="Tractor Image"
              fill
              objectFit="cover"
            />
          </div>
        </div>
    </section>
  );
};

export default Footer;
