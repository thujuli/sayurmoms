import Banner from "@/views/Banner";
import Categories from "@/views/Categories";
import Products from "@/views/Products";
import AboutUs from "@/views/AboutUs";
import Footer from "@/views/Footer";
import Testimoni from "@/views/Testimoni";
import MainMenu from "@/components/home/MainMenu";
import Carousel from "@/views/Carousel";
import Benefit from "@/components/home/Benefit";

export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <MainMenu />
      <Carousel />
      <Benefit />
      <Categories />
      <Products />
      <Banner />
      <AboutUs />
      <Testimoni />
      <Footer />
    </>
  );
}
