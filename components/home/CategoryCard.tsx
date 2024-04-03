import Image from "next/image";
import React from "react";
import background from "@/public/images/category-card-bg.png";
import { ArrowRight } from "lucide-react";

interface Props {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

const CategoryCard: React.FC<Props> = (props) => {
  const { description, imageUrl, link, title } = props;
  return (
    <div className="group relative w-full h-[90px] lg:h-[392px] rounded-2xl lg:rounded-3xl lg:shadow-md border border-[#F79420] lg:border-[#E2E8F0] lg:hover:border-[#F79420]">
      <Image
        alt="Category Card Background Image"
        src={background}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute flex gap-4 w-full h-full py-[7px] lg:pt-[27px] lg:pb-[37px] pr-[11px] lg:pr-[42px] lg:pl-2">
        <div className="relative w-1/2">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col justify-evenly lg:justify-between w-1/2">
          <p className="font-bold text-[14px] lg:text-[40px] text-[#232323] leading-none lg:leading-normal">
            {title}
          </p>
          <p className="text-[9px] lg:text-2xl text-[#808080]">{description}</p>
          <a href={link} target="_blank" className="hidden lg:flex justify-end">
            <button className="flex justify-center items-center w-[62px] h-[62px] rounded-2xl border border-[#909090] group-hover:border-[#F79420] bg-[#E6E6E6] group-hover:bg-[#CBE023]">
              <ArrowRight height={30} width={30} color="#000000" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
