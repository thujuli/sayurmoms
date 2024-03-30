import CategoryCard from "@/components/home/CategoryCard";
import { fetchCategories } from "@/lib/data";
import React from "react";

const Categories: React.FC = async () => {
  const categories = await fetchCategories();

  return (
    <section
      className="px-5 lg:px-[70px] py-[30px] lg:py-[60px]"
      id="categories"
    >
      <div className="mb-5 font-bold text-[20px]  leading-tight lg:hidden">
        <p className="text-[#181818] leading-tight">Apa saja product</p>
        <p className="text-[#A7BB09]">Saryurmoms?</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-[22px] gap-y-5 lg:gap-[42px]">
        <div className="hidden lg:flex flex-col justify-center text-[64px] font-bold leading-tight">
          <p className="text-[#181818]">Apa saja product</p>
          <p className="text-[#A7BB09]"> Saryurmoms?</p>
        </div>
        {categories?.map((category: any, idx: number) => (
          <CategoryCard
            key={idx}
            description={category.description}
            imgUrl={category.imgUrl}
            link={category.link}
            title={category.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;
