import Banner from "@/views/Banner";
import Categories from "@/views/Categories";
import Products from "@/views/Products";
import AboutUs from "@/views/AboutUs";
import Testimoni from "@/views/Testimoni";

export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <Categories />
      <Products />
      <Banner />
      <AboutUs />
      <Testimoni />
    </>
  );
}
