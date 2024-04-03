"use client";

import Image from "next/image";
import * as React from "react";
import bananas from "../../public/images/bananas.jpg";
import bananasMobile from "../../public/images/bananas mobile.png";
import { benefits } from "@/helper";
import {
  Card,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useMediaQuery } from "@/hooks/use-media-query";

interface IBenefitProps { }

const Benefit: React.FunctionComponent<IBenefitProps> = (props) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <div className="min-h-fit relative">
      {/* For  Mobile */}
      <div className="relative z-0 md:-top-[100px]">
        <Image
          src={isDesktop ? bananasMobile : bananas}
          alt={isDesktop ? "Bananas Mobile" : "Bananas"}
          quality={100}
          sizes="(max-width: 640px) 100vw, 640px"
          className={`rounded-b-3xl ${isDesktop
            ? "border border-b-8 border-b-[#FF9A24] shadow-lg"
            : "border border-b-8 border-b-[#E8FE3B] shadow-lg"
            }`}
        />
      </div>

      <div className="absolute text-[#f8f8f8] top-[-60px] md:top-[-30px] left-[-90px] font-bold md:left-[20px]">
        <div className="container text-[20px] md:text-[64px] mx-20 mt-20 -my-2 font-[325px] leading-[normal]">
          <p>Mengapa harus</p>
          <p>Sayurmoms?</p>
        </div>
      </div>
      <div className="absolute md:flex top-[300px] flex justify-center gap-2 md:gap-4 ">
        {benefits.map((val, idx) => (
          <div key={idx}>
            <Card
              className={`${isDesktop ? "bg-[#181818] text-white" : "top-[-200px]"
                }`}
            >
              <CardHeader>
                <div className="flex flex-col items-center">
                  {/* For Image */}
                  <div className="w-7 md:w-11 h-6 md:h-10 flex flex-col relative top-[-10px] md:top-[10px]">
                    <div className="bg-[#CBE023] md:bg-[#CBE023] md:p-2 rounded-xl">
                      <Image
                        src={val.img}
                        alt="alt"
                        width={100}
                        height={20}
                        className="mx-auto md:object-contain"
                      />
                    </div>
                  </div>
                  <CardTitle className="mt-1 md:mt-20">{val.desc}</CardTitle>
                </div>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefit;
