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
import faq_mobile from "@/public/images/faq_footer_mobile.png";
import FAQ from "@/public/images/FAQ.png";
import { eventGA } from "@/lib/gtag";

const Footer = () => {
  return (
    <section
      id="faq_footer"
      className="relative bg-none lg:bg-cover flex justify-center items-start pt-[30px] lg:pt-[100px]"
      style={{ backgroundImage: "url('/images/footer.png')" }}
    >
      <style jsx>{`
        @media (max-width: 1023px) {
          #faq_footer {
            background-image: none !important;
          }
        }
      `}</style>
      <div className="flex flex-col items-center">
        {/* FAQ */}
        <div className="flex items-center gap-2 lg:gap-4 -mb-2 lg:mb-8">
          {/* <div className="block lg:hidden relative -left-5"> */}
          <Image
            src={FAQ}
            alt="FAQ icon"
            width={400}
            height={400}
            className="w-[122px] h-[120px] lg:w-[486px] lg:h-[480px]"
          />
          {/* </div> */}
          <h2 className="font-sans-jakarta text-[22px] mr-8 lg:mr-0 lg:text-6xl font-extrabold lg:font-bold lg:leading-[75.52px] text-left">
            {`Frequently `}
            <br className="hidden lg:block" />
            Asked
            <br />
            Questions
          </h2>
        </div>
        <div className="pt-6 lg:pt-10">
          <Accordion type="multiple">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                onClick={() => {
                  eventGA({
                    action: "event_click_landing",
                    category: "faq",
                    label: "faq_" + item.prefix,
                  });
                }}
                className="w-[340px] py-2 lg:py-0 bg-[#181818] rounded-[10px] mb-3 lg:mb-5 lg:w-[1216.6px] lg:rounded-[40px]"
              >
                <AccordionTrigger className="font-sans-jakarta text-base py-2 pl-4 pr-1 lg:pr-0 font-normal leading-[20px] text-left text-white lg:text-4xl lg:py-11 lg:ml-10 lg:leading-[47.52px] lg:font-extrabold">
                  <span>{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="leading-3 text-white lg:leading-10">
                  <div className="py-2 lg:py-4">
                    <div className="border-b border-[#cbe023] ml-4 mb-2 w-[90%] lg:ml-10 lg:mb-4 lg:w-[1120px]" />
                    <div className="mr-4 ml-4 pt-2 font-normal -mb-6 lg:mb-0 text-[10px] lg:text-3xl whitespace-pre-line lg:mr-[60px] lg:ml-12 lg:pt-4 lg:font-medium">
                      {item.answer.split("\n").map((line, i) => (
                        <p key={i} className="mb-1 lg:mb-2">
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
        <div className="block lg:hidden mt-6">
          <Image
            src={faq_mobile}
            alt="FAQ Footer Mobile"
            width={397}
            height={135}
          />
        </div>

        {/* Footer */}
        <div className="w-full lg:h-[1720px] bg-[#F8F8F8] rounded-[35px] mt-[15px] lg:mt-[100px] flex flex-col lg:block">
          <div className="lg:grid lg:grid-cols-3 lg:justify-between lg:w-full lg:px-24 lg:pt-32 gap-8">
            {/* Mobile */}
            <div className="flex flex-col relative lg:hidden p-6 h-[700px]">
              <div className="flex flex-col items-start mb-6">
                <Image
                  src={sayurmoms}
                  alt="Sayurmoms Logo"
                  width={200}
                  height={67}
                  className="mb-4"
                />
                <div>
                  <h3 className="text-lg font-bold mb-2">Kontak kami</h3>
                  <div className="flex flex-row items-center text-gray-400">
                    <div className="flex items-center mr-4">
                      <Globe className="h-5 w-5 mr-2" />
                      <p className="text-sm">sayurmoms.take.app</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-2" />
                      <p className="text-sm">(021) 456345079</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-bold mb-4">Kategori</h3>
                  <p className="text-sm text-[#707070] mb-2">Buah-Buahan</p>
                  <p className="text-sm text-[#707070] mb-2">Sayur-Sayuran</p>
                  <p className="text-sm text-[#707070] mb-2">Daging</p>
                  <p className="text-sm text-[#707070] mb-2">Seafood</p>
                  <p className="text-sm text-[#707070] mb-2">Frozen Food</p>
                  <p className="text-sm text-[#707070] mb-2">Bumbu Dapur</p>
                  <p className="text-sm text-[#707070]">Bahan Olahan</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Userful Links</h3>
                  <p className="text-sm text-[#707070] mb-2">Payment & Tax</p>
                  <p className="text-sm text-[#707070] mb-2">
                    Terms of Services
                  </p>
                  <p className="text-sm text-[#707070] mb-6">Discount</p>
                  <h3 className="text-lg font-bold mb-3">E-Commerce</h3>
                  <div className="flex flex-col pr-20 gap-2">
                    <Image
                      src={shopee}
                      alt="Shopee Logo"
                      width={90}
                      height={32}
                      className="h-7"
                    />
                    <Image
                      src={tokopedia}
                      alt="Tokopedia Logo"
                      width={90}
                      height={32}
                      className="-ml-1 w-24 h-8"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-16">
                <h3 className="text-lg font-bold mb-4">Metode Pembayaran</h3>
                <div className="flex items-center">
                  <Image src={bca} alt="BCA Logo" width={80} height={25} />
                  <Image
                    src={ovo}
                    alt="OVO Logo"
                    width={69}
                    height={22}
                    className="mx-4"
                  />
                  <Image
                    src={shopee_pay}
                    alt="ShopeePay Logo"
                    width={71}
                    height={40}
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full">
                <Image
                  src={tractor}
                  alt="Tractor Image"
                  layout="responsive"
                  width={428}
                  height={143}
                  objectFit="cover"
                  style={{ marginTop: "40px" }}
                />
              </div>
            </div>
            {/* Desktop */}
            <div className="lg:flex flex-col items-start gap-8 hidden">
              <Image
                src={sayurmoms}
                alt="Sayurmoms Logo"
                width={460}
                height={171}
              />
              <div className="flex flex-col gap-8">
                <h3 className="mt-4 text-4xl font-bold text-black mb-4">
                  Kontak Kami
                </h3>
                <div className="flex flex-row lg:flex-col flex-wrap gap-5 lg:gap-8 items-center">
                  <div className="flex gap-4 items-center">
                    <Globe className="text-[#707070] h-10 w-10" />
                    <p className="text-3xl text-[#707070]">
                      sayurmoms.take.app
                    </p>
                  </div>
                  <div className="flex lg:-ml-14 gap-4 items-center">
                    <Phone className="text-[#707070] h-10 w-10" />
                    <p className="text-3xl text-[#707070]">(021) 456345079</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8 lg:mt-[100px]">
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
            <div className="hidden lg:flex flex-col items-center lg:items-start lg:pl-32 lg:gap-10">
              <h3 className="text-4xl font-bold text-black mb-4">Kategori</h3>
              <p className="text-3xl text-[#707070]">Buah-Buahan</p>
              <p className="text-3xl text-[#707070]">Sayur-Sayuran</p>
              <p className="text-3xl text-[#707070]">Daging</p>
              <p className="text-3xl text-[#707070]">Seafood</p>
              <p className="text-3xl text-[#707070]">Frozen Food</p>
              <p className="text-3xl text-[#707070]">Bumbu Dapur</p>
              <p className="text-3xl text-[#707070]">Bahan Olahan</p>
            </div>
            <div className="flex flex-col items-center lg:items-start lg:pl-12 lg:gap-8 w-full lg:w-auto">
              <div className="hidden lg:flex flex-col lg:gap-10">
                <h3 className="text-2xl lg:text-4xl font-bold text-black mb-4">
                  Userful Links
                </h3>
                <p className="text-3xl text-[#707070]">Payment & Tax</p>
                <p className="text-3xl text-[#707070]">Terms of Services</p>
                <p className="text-3xl text-[#707070]">Discount</p>
              </div>
              <div className="hidden lg:flex flex-col gap-8 lg:mt-32">
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
          <Image src={tractor} alt="Tractor Image" fill objectFit="cover" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
