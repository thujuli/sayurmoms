import React from "react";
import CardTestimoni from "@/components/home/CardTestimoni";
import backgroundDesktop from "@/public/images/testimoni-desktop-bg.png";
import backgroundMobile from "@/public/images/testimoni-mobile-bg.png";
import Image from "next/image";
import Container from "@/components/ui/container";
import { testimonials } from "@/lib/testimonialData";

const Testimoni = () => {
  return (
    <section id="testimoni" className="relative">
      {/* Bagian ini hanya akan tampil pada ukuran layar md ke atas */}
      <div className="hidden lg:block relative inset-0 z-0 lg:h-[1018px]">
        <Image
          src={backgroundDesktop}
          alt="Background Testimoni Desktop"
          layout="fill"
          objectFit="cover"
        />
        <Container>
          <div className="relative z-10 py-36">
            <p className="text-white text-center font-medium text-3xl pb-4">
              Ulasan
            </p>
            <h2 className="text-6xl font-extrabold text-center text-white mb-24">
              Apa kata mereka{" "}
              <div className="mt-4">
                tentang <span className="text-[#A7BB09]">Sayurmoms?</span>{" "}
              </div>
            </h2>
            <div className="px-16 flex lg:space-x-12 overflow-x-scroll no-scrollbar">
              {testimonials.slice(0, 8).map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-[600px]">
                  <CardTestimoni {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Bagian ini hanya akan tampil pada ukuran layar dibawah md */}
      <div className="relative md:hidden w-full h-[360px] overflow-hidden z-10">
        <Image
          src={backgroundMobile}
          alt="Background Testimoni Mobile"
          // layout="fill"
          fill
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 py-6">
          <p className="text-white text-center lg:font-medium text-sm lg:text-xl pb-2">
            Ulasan
          </p>
          <h2 className="lg:text-2xl text-xl font-bold lg:font-extrabold text-center text-white mb-6">
            Apa kata mereka
            <div className="lg:mt-1">
              tentang <span className="text-[#A7BB09]">Sayurmoms?</span>
            </div>
          </h2>
          <div className="px-4 flex space-x-6 sm:space-x-8 overflow-x-scroll no-scrollbar">
            {testimonials.slice(0, 8).map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-[165px] sm:w-[200px]">
                <CardTestimoni {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
