"use client";
import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { getCarousel } from "@/lib/contentful";
import Image from "next/image";
import { img_jumbotron } from "@/helper";

interface IJumbotronProps {}

const Jumbotron: React.FunctionComponent<IJumbotronProps> = (props) => {
  const [jumbotron, setJumbotron] = React.useState<any[]>([]);
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
  return (
    <div>
      <div>
        <Carousel opts={{ loop: true, duration: 25 }}>
          <CarouselContent>
            {img_jumbotron.map((val, idx) => (
              <CarouselItem key={idx}>
                <Image src={val.img} alt="alt" className="w-full h-full" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div></div>
    </div>
  );
};

export default Jumbotron;
