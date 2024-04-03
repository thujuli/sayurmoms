"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { getCarousel } from "@/lib/contentful";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/use-media-query";

import whatsapp from '@/public/images/Vector.png'

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ShoppingBasket } from "lucide-react";

interface IJumbotronProps { }

const Jumbotron: React.FunctionComponent<IJumbotronProps> = (props) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [jumbotron, setJumbotron] = React.useState<any[]>([]);
  const [emblaRef] = useEmblaCarousel(
    { loop: true, direction: "ltr", dragFree: true },
    [Autoplay({ delay: 1000, stopOnInteraction: false })]
  );
  const fetchJumbotron = async () => {
    try {
      const res = await getCarousel();
      if (Array.isArray(res)) {
        const newCarousel = res.map((val, idx) => {
          if (typeof val.image?.fields?.file?.url === "string") {
            return `https:${val.image.fields.file.url}`;
          } else {
            return "";
          }
        });
        setJumbotron(newCarousel);
      } else {
        throw new Error("Response is not an array.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchJumbotron();
  }, []);

  return isDesktop ? (
    <div className="relative z-10">
      <div ref={emblaRef} dir="ltr">
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {jumbotron.map((val, idx) => (
              <CarouselItem key={idx}>
                <div className="relative h-[800px]">
                  <Image
                    src={val}
                    alt="Image Jumbotron"
                    fill
                    quality={100}
                    sizes="100vh"
                    className="contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Show prev/next buttons only if autoplay is not working */}
          <CarouselPrevious className="left-6 top-1/2 -translate-y-1/4 cursor-pointer bg-black text-white"></CarouselPrevious>
          <CarouselNext className="right-8 top-1/2 -translate-y-1/2 cursor-pointer bg-black text-white"></CarouselNext>
        </Carousel>
      </div>
      {/* Gunakan untuk button cek sekarang */}
      {jumbotron.map(
        (val, idx) =>
          idx === 0 && (
            <div key={idx} className="absolute top-4 right-4">
              {/* Kode tombol "Cek Sekarang" */}
              <button
                className={`bg-[#232323] text-white px-4 py-2 rounded-[50px] relative top-[650px] left-[-1130px] md:${idx !== 0 ? "hidden" : ""
                  }`}
              >
                Cek Sekarang
              </button>
              <div className="absolute top-[500px] right-16 cursor-pointer">
                <Image
                  src={whatsapp}
                  alt="WhatsApp Icon"
                  width={124}
                  height={124}
                  className="border-2 border-solid border-white rounded-[75%] bg-gradient-to-r from-[#25CF43] to-[#61FD7D]"
                />
              </div>
            </div>
          )
      )}
      {/* Gunakan untuk Pesan Sekarang */}
      <div className="absolute top-[200px] right-[-65px] transform -rotate-90 flex justify-center items-center bg-[#232323] text-[#F8F8F8] font-bold">
        <span>
          <ShoppingBasket className="mr-2" />
        </span>
        <span>
          Pesan Sekarang
        </span>
      </div>
    </div >
  ) : (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="embla_container flex relative z-10">
        {jumbotron.map((imageUrl, index) => (
          <div className="flex-[0_0_100%] min-w-0 rounded-b-3xl" key={index}>
            <Image
              src={imageUrl}
              alt={`Jumbotron Image ${index}`}
              className="w-full rounded-b-3xl"
              width={390}
              height={220}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jumbotron;
