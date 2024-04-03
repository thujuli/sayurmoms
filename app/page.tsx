import Banner from "@/views/Banner";
import Categories from "@/views/Categories";
import Products from "@/views/Products";
import AboutUs from "@/views/AboutUs";
import Footer from "@/views/Footer";
import Testimoni from "@/views/Testimoni";
import MainMenu from "@/components/home/MainMenu";
import Jumbotron from "@/components/home/Jumbotron";

export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <MainMenu />
      <Jumbotron />
      <Categories />
      <Products />
      <Banner />
      <AboutUs />
      <Testimoni />
      <Footer />
    </>
  );
}
