"use client";
import { numberFormat, priceToIDR } from "@/lib/parser";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import starIcon from "@/public/icons/star.svg";
import { CategoryData, ProductData } from "@/lib/types";
import CategoryButton from "./CategoryButton";

interface ProductCardProps {
  imageUrl: string;
  link: string;
  price: number;
  rating: number;
  sold: number;
  title: string;
  discount?: number;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { imageUrl, link, price, rating, sold, title, discount } = props;
  const priceIDR = priceToIDR(price);
  const soldIDN = numberFormat(sold);

  return (
    <div className="relative flex flex-col min-w-[140px] max-w-[140px] lg:min-w-[415px] lg:max-w-[415px] h-[270px] lg:h-[784px] p-[10px] lg:p-[25px] rounded-xl lg:rounded-[40px] border lg:border-2 border-[#FE9D3C] overflow-hidden bg-[#FDFDFD]">
      {/* badge */}
      <div className="absolute z-10 top-4 lg:top-[45px] left-0 px-1 lg:px-[6px] py-[2px] lg:py-[5px] bg-[#FE9D3C] rounded-tr-sm lg:rounded-tr-[10px] rounded-br-sm lg:rounded-br-[10px]">
        <p className="text-[#EAEAEA] text-[10px] lg:text-2xl font-bold">
          Diskon {discount}%
        </p>
      </div>

      {/* image */}
      <div className="relative min-h-[120px] lg:min-h-[350px] rounded-[10px] lg:rounded-[20px] bg-[#EAEAEA]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>

      {/* content */}
      <div className="flex flex-col justify-between h-full mt-[6px] lg:mt-6">
        <div>
          <p className="line-clamp-2 text-sm lg:text-4xl font-bold text-[#181818] leading-tight lg:leading-snug">
            {title}
          </p>
        </div>

        <div>
          {/* Price */}
          <div className="flex justify-between text-[10px] lg:text-[30px] mb-2 lg:mb-10 font-medium text-[#181818]">
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
          <div className="grid grid-cols-2 lg:gap-y-5 mb-1 lg:mb-5">
            {/* Star */}
            <div className="flex gap-[1px] items-center">
              {Array(Math.round(rating))
                .fill(null)
                .map((val, idx) => (
                  <span key={idx}>
                    <Image
                      src={starIcon}
                      alt="Star Icon"
                      width={32}
                      height={32}
                    />
                  </span>
                ))}
            </div>
            {/* Rating */}
            <span className="text-[10px] lg:text-2xl font-bold text-[#909090]">
              {rating.toFixed(1)}
            </span>
            {/* Sold */}
            <span className="text-[10px] lg:text-[22px] text-[#909090]">
              {soldIDN} terjual
            </span>
          </div>

          {/* Button */}
          <a href={link} target="_blank">
            <button
              type="button"
              className="px-5 lg:px-[50px] py-1 lg:py-6 rounded-lg lg:rounded-[20px] bg-[#181818] text-sm lg:text-[30px] text-[#FDFDFD]"
            >
              Beli
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

interface ProductsCategoriesProps {
  categories?: CategoryData[];
  products?: ProductData[];
}

const ProductsCategories: React.FC<ProductsCategoriesProps> = (props) => {
  const { categories: getCategories, products: getProducts } = props;

  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [productsByCategory, setProductsByCategory] = useState<any[]>([]);
  const [categorySelected, setCategorySelected] = useState("");

  useEffect(() => {
    setProductsCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setProductsCategories = async () => {
    if (getCategories && getProducts) {
      const newCategories = getCategories.map(
        (category: CategoryData) => category.title
      );
      const newProductsByCategories = getProducts.filter(
        (product: ProductData) => product.category === newCategories[0]
      );

      setProducts(getProducts);
      setProductsByCategory(newProductsByCategories);
      setCategories(newCategories);
      setCategorySelected(newCategories[0]);
    }
  };

  const onHandleSelectCategory = (category: string) => {
    setCategorySelected(category);
    const newProductsByCategories = products.filter(
      (product) => product.category === category
    );
    setProductsByCategory(newProductsByCategories);
  };

  return (
    <>
      {/* Select Category */}
      <div className="flex justify-center">
        <div className="flex gap-1 lg:gap-10 flex-nowrap overflow-x-auto no-scrollbar">
          {categories.map((category, idx) => (
            <CategoryButton
              key={idx}
              name={category}
              active={categorySelected}
              onClick={() => {
                onHandleSelectCategory(category);
              }}
            />
          ))}
        </div>
      </div>
      {/* Products */}
      <div className="flex justify-center">
        <div className="flex gap-[10px] lg:gap-10 flex-nowrap overflow-x-auto no-scrollbar">
          {productsByCategory.map((product: any, idx) => (
            <ProductCard
              key={idx}
              imageUrl={product.imageUrl}
              link={product.link}
              price={product.price}
              rating={product.rating}
              sold={product.sold}
              title={product.title}
              discount={product.discount}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsCategories;
