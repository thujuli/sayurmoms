"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";
import * as React from "react";
import bananas from "../../public/images/bananas.jpg";
import { benefits } from "@/helper";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface IBenefitProps {}

const Benefit: React.FunctionComponent<IBenefitProps> = (props) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  console.log(isDesktop);

  return isDesktop ? (
    // Desktop view
    <div className="min-h-fit relative">
      <div className="relative -top-[110px]">
        <Image
          src={bananas}
          alt="alt"
          quality={100}
          sizes="80vh"
          className="rounded-b-3xl border border-b-8 border-b-[#FF9A24] shadow-lg"
        />
      </div>
      <div className="absolute text-[#f8f8f8] top-[100px] left-[20px]">
        <div className="container text-[64px] mx-20 mt-20 -my-2 font-[325px] leading-[normal]">
          <p>Mengapa harus</p>
          <p>Sayurmoms?</p>
        </div>
      </div>
      <div className="absolute flex gap-[10px] top-[500px] justify-center ">
        {benefits.map((val, idx) => (
          <Card
            key={idx}
            className="inline-flex m-8 border border-collapse border-orange-500 rounded-xl"
          >
            <CardTitle className="flex-1 flex justify-center items-center ">
              <div className="bg-[#CBE023] p-3 rounded-2xl flex-wrap">
                <Image
                  src={val.img}
                  alt="alt"
                  width={30}
                  height={30}
                  quality={100}
                />
              </div>
            </CardTitle>
            <CardContent className="mt-7 text-[32px] text-center text-[#181818] font-[415px]">
              {val.desc}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  ) : (
    // Mobile view
    <div className="min-h-fit relative">
      <div className="relative -top-[20px]">
        <Image
          src={bananas}
          alt="alt"
          quality={100}
          sizes="80vh"
          className="rounded-b-3xl border border-b-8 border-b-[#FF9A24] shadow-lg"
        />
      </div>
      <div className="absolute text-[#f8f8f8] top-[100px] left-[20px]">
        <div className="container text-[20px] -mt-24 -my-2 font-[325px] leading-[normal]">
          <p>Mengapa harus</p>
          <p>Sayurmoms?</p>
        </div>
      </div>
      <div className="flex flex-row flex-1 w-fit">
        {benefits.map((val, idx) => (
          <Card
            key={idx}
            className="m-2 w-auto border border-collapse border-orange-500 rounded-xl"
          >
            <div className="bg-[#CBE023] p-3 rounded-2xl mx-auto mt-3">
              <Image
                src={val.img}
                alt="alt"
                width={30}
                height={30}
                quality={100}
              />
            </div>
            <div className="p-4 text-center text-[20px] text-[#181818] font-[325px]">
              {val.desc}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Benefit;
