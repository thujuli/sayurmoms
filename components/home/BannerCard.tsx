"use client";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  imageUrl: string;
  link: string;
}

const BannerCard: React.FC<Props> = (props) => {
  const { imageUrl, link, title } = props;

  return (
    <AspectRatio ratio={15 / 8}>
      <a href={link} target="_blank">
        <Image src={imageUrl} alt={title} fill sizes="100vw" />
      </a>
    </AspectRatio>
  );
};

export default BannerCard;
