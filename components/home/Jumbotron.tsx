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

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface IJumbotronProps {}

const Jumbotron: React.FunctionComponent<IJumbotronProps> = (props) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [jumbotron, setJumbotron] = React.useState<any[]>([]);
  const [emblaRef] = useEmblaCarousel(
    { loop: true, direction: "ltr", dragFree: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
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
    <div>
      <div ref={emblaRef} dir="ltr">
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {jumbotron.map((val, idx) => (
              <CarouselItem key={idx}>
                <div className="relative h-[750px]">
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
    </div>
  ) : (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="embla_container flex">
        {jumbotron.map((imageUrl, index) => (
          <div className="flex-[0_0_100%] min-w-0 rounded-b-lg" key={index}>
            <Image
              src={imageUrl}
              alt={`Jumbotron Image ${index}`}
              className="w-full"
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
