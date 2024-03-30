"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import backgroundMobile from "@/public/images/products-mobile-bg.png";
import backgroundDesktop from "@/public/images/products-desktop-bg.png";
import { fetchCategories, fetchProducts } from "@/lib/data";
import ProductCard from "@/components/home/ProductCard";
import CategoryButton from "@/components/home/CategoryButton";

const Products: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [productsByCategory, setProductsByCategory] = useState<any[]>([]);
  const [categorySelected, setCategorySelected] = useState("");

  useEffect(() => {
    setProductsCategories();
  }, []);

  const setProductsCategories = async () => {
    const [getProducts, getCategories] = await Promise.all([
      fetchProducts(),
      fetchCategories(),
    ]);

    if (getCategories && getProducts) {
      const newCategories = getCategories.map(
        (category: any) => category.title
      );
      const newProductsByCategories = getProducts.filter(
        (product: any) => product.category === newCategories[0]
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
    <section id="products" className="relative w-full h-[434px] lg:h-[1360px]">
      {/* Background */}
      <Image
        src={backgroundMobile}
        alt="Products Mobile Background"
        fill
        sizes="100vw"
        quality={100}
        className="lg:hidden object-fill"
      />
      <Image
        src={backgroundDesktop}
        alt="Products Desktop Background"
        fill
        sizes="100vw"
        quality={100}
        className="hidden lg:block object-fill"
      />

      <div className="absolute top-10 lg:top-1/2 lg:-translate-y-1/2 left-1/2 -translate-x-1/2 w-full space-y-5 lg:space-y-[60px] px-2 lg:px-[60px]">
        {/* Heading */}
        <div className="text-center leading-none lg:leading-loose">
          <p className="lg:mb-[10px] text-[12px] lg:text-[40px] text-[#232323]">
            4 Pilihan Teratas
          </p>
          <p className="text-xl lg:text-[64px] font-bold text-[#181818]">
            Produk Unggulan
          </p>
        </div>
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
      </div>
    </section>
  );
};

export default Products;
