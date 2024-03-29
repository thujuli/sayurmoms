import { numberFormat, priceToIDR } from "@/lib/parser";
import Image from "next/image";
import React from "react";
import starIcon from "@/public/icons/star.svg";

interface Props {
  title: string;
  imageUrl: string;
  price: number;
  sold: number;
  rating: number;
  discount?: number;
  link: string;
}

const ProductCard: React.FC<Props> = (props) => {
  const { imageUrl, link, price, rating, sold, title, discount } = props;
  const priceIDR = priceToIDR(price);
  const soldIDN = numberFormat(sold);

  return (
    <div className="relative flex flex-col min-w-[140px] max-w-[140px] h-[236px] p-[10px] rounded-xl border border-[#FE9D3C] overflow-hidden bg-[#FDFDFD]">
      {/* badge */}
      <div className="absolute z-10 top-4 left-0 px-1 py-[2px] bg-[#FE9D3C] rounded-tr-sm rounded-br-sm">
        <p className="text-[#EAEAEA] text-[10px] font-bold">
          Diskon {discount}%
        </p>
      </div>

      {/* image */}
      <div className="relative min-h-[120px] rounded-[10px] bg-[#EAEAEA]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>

      {/* content */}
      <div className="flex flex-col justify-between h-full mt-[6px]">
        <div>
          <p className="line-clamp-2 text-sm font-bold text-[#181818] leading-tight">
            {title}
          </p>
        </div>

        <div>
          {/* Price */}
          <div className="flex justify-between text-[10px] mb-2 font-medium text-[#181818]">
            {discount && (
              <p>Rp.{priceToIDR(price - (price * discount) / 100)}</p>
            )}
            <p>
              {discount ? (
                <s className="text-[#909090]">Rp.{priceIDR}</s>
              ) : (
                priceIDR
              )}
            </p>
          </div>

          {/* Rating and Sold */}
          <div className="grid grid-cols-2">
            {/* Star */}
            <div className="flex gap-[1px] items-center">
              {Array(Math.round(rating))
                .fill(null)
                .map((val, idx) => (
                  <span key={idx}>
                    <Image src={starIcon} alt="Star Icon" />
                  </span>
                ))}
            </div>
            {/* Rating */}
            <span className="text-[10px] font-bold text-[#909090]">
              {rating.toFixed(1)}
            </span>
            {/* Sold */}
            <span className="text-[10px] text-[#909090]">
              {soldIDN} terjual
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
