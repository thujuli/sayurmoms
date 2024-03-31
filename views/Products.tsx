import Image from "next/image";
import React from "react";
import backgroundMobile from "@/public/images/products-mobile-bg.png";
import backgroundDesktop from "@/public/images/products-desktop-bg.png";
import { fetchCategories, fetchProducts } from "@/lib/data";
import ProductsCategories from "@/components/home/ProductsCategories";

const Products: React.FC = async () => {
  const [categories, products] = await Promise.all([
    fetchCategories(),
    fetchProducts(),
  ]);

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
        <ProductsCategories categories={categories} products={products} />
      </div>
    </section>
  );
};

export default Products;
