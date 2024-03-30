import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

interface CardTestimoniProps {
  avatar: string;
  testimonial: string;
  name: string;
  company: string;
  rating: number;
}

const CardTestimoni: React.FC<CardTestimoniProps> = ({
  avatar,
  testimonial,
  name,
  company,
  rating,
}) => {
  return (
    <div className="bg-[#191919]/30 backdrop-blur-md justify-center items-center text-center rounded-[20px] md:rounded-[75px] border-t-2 border-l-2 border-[#A7BB09] p-2 md:p-8 w-[165px] md:w-[600px] h-[180px] md:h-[450px] relative">
      <div className="flex items-center justify-center mb-1 md:mb-6 h-[40px] md:h-[136px] mt-3">
        <div className="relative w-[53px] md:w-[127px] h-[53px] md:h-[127px]">
          <Image src={avatar} alt="Avatar" layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="pt-3 md:pt-4 h-[50px] md:h-[120px]">
        <p className="text-white text-[10px] md:text-xl line-clamp-3">
          {testimonial}
        </p>
      </div>
      <div className="flex items-center pt-8 md:pb-8 justify-center h-[15px] md:h-[40px]">
        <p className="text-[#909090] lg:text-white font-thin lg:font-medium mr-3 md:mr-8 text-[8px] md:text-xl">
          {name}
        </p>
        <div className="h-3 md:h-8 border-l" />
        <p className="text-[#909090] lg:text-white ml-3 md:ml-4 text-[8px] md:text-xl">
          {company}
        </p>
      </div>
      <div className="flex items-center justify-center pt-4 lg:pt-0 h-[15px] md:h-[40px]">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-[11px] md:w-8 h-[11px] md:h-8 md:mr-2 ${
              i < Math.floor(rating + 0.5) ? "fill-[#A7BB09]" : "fill-[#909090]"
            }`}
            fill="none"
            strokeWidth="0"
          />
        ))}
        <span className="text-[#909090] ml-1 md:ml-2 font-bold lg:font-semibold text-[7px] md:text-2xl">
          {rating.toFixed(1)}
        </span>
      </div>
    </div>
  );
};

export default CardTestimoni;
