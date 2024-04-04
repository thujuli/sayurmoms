"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/use-media-query";
import whatsapp from "@/public/images/Vector.png";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Globe, ShoppingBasket } from "lucide-react";
import { CarouselData, CategoryData } from "@/lib/types";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

import shopee from "@/public/images/shopee.png";
import tokopedia from "@/public/images/tokopedia.png";
import Link from "next/link";


interface IJumbotronProps {
  carousel?: CarouselData[];
}

const Jumbotron: React.FunctionComponent<IJumbotronProps> = (props) => {
  const { carousel } = props;
  const [dropdownVisible, setDropdownVisible] = React.useState<boolean>(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [jumbotron, setJumbotron] = React.useState<any[]>([]);
  const [emblaRef] = useEmblaCarousel(
    { loop: true, direction: "ltr", dragFree: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const setFetchCarousel = async () => {
    if (carousel) {
      setJumbotron(carousel);
    }
  };

  React.useEffect(() => {
    setFetchCarousel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isDesktop ? (
    <div className="relative z-10">
      <div ref={emblaRef} dir="ltr">
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {jumbotron.map((val: any, idx) => (
              <CarouselItem key={idx} className="relative">
                <AspectRatio ratio={48 / 25}>
                  <Image
                    src={val.imageUrl}
                    alt="Image Jumbotron"
                    fill
                    quality={100}
                    sizes="100vw"
                    className="contain"
                  />
                </AspectRatio>
                {/* Kode tombol "Cek Sekarang" */}
                <a href={val.link} target="_blank">
                  <button
                    className={`absolute z-20 bottom-[13%] left-[10.5%] bg-[#232323] text-white px-4 py-2 rounded-[50px]`}
                  >
                    Cek Sekarang
                  </button>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Show prev/next buttons only if autoplay is not working */}
          <CarouselPrevious className="left-6 top-1/2 -translate-y-1/4 cursor-pointer bg-black text-white"></CarouselPrevious>
          <CarouselNext className="right-8 top-1/2 -translate-y-1/2 cursor-pointer bg-black text-white"></CarouselNext>
        </Carousel>
      </div>
      {jumbotron.map(
        (val, idx) =>
          idx === 0 && (
            <div key={idx} className="absolute top-[-70px] right-[5px]">
              <Link className="fixed top-[500px] right-16" href='https://api.whatsapp.com/'>
                <Image
                  src={whatsapp}
                  alt="WhatsApp Icon"
                  width={124}
                  height={124}
                  className="border-8 border-solid border-white rounded-[50%] bg-gradient-to-r from-[#25CF43] to-[#61FD7D]"
                />
              </Link>
            </div>
          )
      )}
      {/* Gunakan untuk Pesan Sekarang */}
      <div className="fixed top-[200px] right-[-65px] transform -rotate-90 flex justify-center items-center bg-[#232323] text-[#F8F8F8] font-bold cursor-pointer" onClick={toggleDropdown}>
        <span>
          <ShoppingBasket className="mr-2" />
        </span>
        <span>Pesan Sekarang</span>
      </div>
      {dropdownVisible && (
        <div className="fixed top-[135px] right-[25px] px-2 py-5 shadow-md z-10 bg-[#F3F6EA] rounded-l-xl">
          <div className="block">
            <a
              href="https://shopee.co.id/sayurmoms.id"
              className="block mb-2 w-[119px]"
              target="_blank"
            >
              <Image
                src={shopee}
                alt="Shopee Logo"
                width={119}
                height={46}
              />
            </a>
          </div>
          <div className="block">
            <a
              href="https://www.tokopedia.com/sayurmoms"
              className="block mb-2 w-[127px]"
              target="_blank"
            >
              <Image
                src={tokopedia}
                alt="Tokopedia Logo"
                width={127}
                height={32}
                className="-ml-1 w-24 h-8"
              />
            </a>
          </div>
          <div className="block">
            <a
              href="https://sayurmoms.take.app/"
              target="_blank"
            >
              <div className="flex items-center">
                <Globe color="#909090" className="mr-1" />
                <span className="text-[16px] text-center tracking-[0.4px]">sayurmoms.take.app</span>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div className="overflow-hidden relative top-[30px]" ref={emblaRef}>
      <div className="embla_container flex relative z-0">
        {jumbotron.map((val: any, index) => (
          <div className="flex-[0_0_100%] min-w-0 rounded-b-3xl" key={index}>
            <AspectRatio ratio={39 / 22}>
              <Image
                src={val.imageUrl}
                alt={`Jumbotron Image ${index}`}
                fill
                sizes="100vw"
                className="w-full rounded-b-3xl"
              />
            </AspectRatio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jumbotron;
