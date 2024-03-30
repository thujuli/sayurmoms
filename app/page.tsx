import Banner from "@/views/Banner";
import Categories from "@/views/Categories";
import Products from "@/views/Products";
import AboutUs from "@/views/AboutUs";
import Testimoni from "@/views/Testimoni";

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
