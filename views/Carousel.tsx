import Jumbotron from "@/components/home/Jumbotron";
import { fetchCarousel } from "@/lib/data";
import React from "react";

const Carousel: React.FC = async () => {
  const carousel = await fetchCarousel();

  return <Jumbotron carousel={carousel} />;
};

export default Carousel;
