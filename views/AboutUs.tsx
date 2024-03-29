import Container from "@/components/ui/container";
import Image from "next/image";
import React from "react";
import photo from "@/public/about_us.png";
import mobilePhoto from "@/public/about_mobile.png";
import { ShoppingCart, UsersRound, Rocket, LineChart } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="py-3 lg:py-24">
      <Container>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-[1280px] lg:pr-12 order-2 lg:order-1">
            <Image src={photo} alt="about_us" className="w-full h-auto" />
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 order-1 lg:order-2 text-center md:text-left">
            <h2 className="text-[#909090] text-base lg:text-3xl font-medium mb-0 md:mb-2">
              Tentang Kami
            </h2>
            <h1 className="text-[#A7BB09] lg:text-black text-2xl lg:text-5xl font-extrabold mb-8">
              Sayurmoms
            </h1>
            <div className="relative mb-8">
              <div className="lg:hidden absolute inset-0 -z-10 flex justify-center items-center">
                <Image
                  src={mobilePhoto}
                  alt="about_mobile"
                  width={500}
                  height={300}
                  objectFit="contain"
                />
              </div>
              <div className="grid grid-cols-4 gap-2 lg:gap-4 z-10 px-2 lg:px-0">
                {[
                  { icon: ShoppingCart, number: "45rb+", text: "Orders" },
                  { icon: UsersRound, number: "7rb+", text: "Customers" },
                  { icon: Rocket, number: "4", text: "Channels" },
                  { icon: LineChart, number: "60", text: "Avg Orders per Day" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-3xl md:rounded-[48px] w-[80px] h-[120px] lg:w-[170px] lg:h-[220px] lg:p-6 flex flex-col text-center items-center justify-center space-y-1 lg:space-y-4 transition duration-300 ease-in-out hover:bg-[#1F1F1F] hover:border-2 hover:border-[#A7BB09] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.25)]"
                  >
                    <div>
                      <item.icon
                        className="w-4 h-4 lg:w-6 lg:h-6 relative lg:static -top-2 lg:top-0 text-black transition duration-300 ease-in-out group-hover:text-[#A7BB09]"
                      />
                    </div>
                    <p className="text-[#A7BB09] text-xl lg:text-3xl font-extrabold lg:font-semibold transition duration-300 ease-in-out group-hover:font-extrabold">
                      {item.number}
                    </p>
                    <p className="text-[#909090] text-[10px] lg:text-base relative lg:static -bottom-1 lg:top-0 transition duration-300 ease-in-out group-hover:text-white group-hover:font-bold">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-4 mx-4 lg:mx-0 lg:px-0">
              <p className="text-black text-[10px] lg:text-xl mb-3 lg:mb-6">
                Sayurmoms merupakan pasar online yang menyediakan berbagai bahan
                makanan seperti sayur, buah, daging, ikan, frozen food, bumbu
                dapur dan aneka bahan makanan kering lainnya.
              </p>
              <p className="text-black text-[10px] lg:text-xl">
                Beroperasi di kota Surabaya sejak Juni 2020, Sayurmoms kini
                telah melayani banyak pelanggan di berbagai kota di pulau Jawa.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;