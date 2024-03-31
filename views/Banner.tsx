import BannerCard from "@/components/home/BannerCard";
import { fetchBanner } from "@/lib/data";
import React from "react";

const Banner: React.FC = async () => {
  const banner = await fetchBanner();

  return (
    <section id="banner" className="relative w-full ">
      {banner && (
        <BannerCard
          imageUrl={banner.imageUrl}
          link={banner.link}
          title={banner.title}
        />
      )}
    </section>
  );
};

export default Banner;
