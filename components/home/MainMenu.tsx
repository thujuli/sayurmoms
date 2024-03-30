"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { CircleHelp, MenuIcon, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { logo, nav_link } from "@/helper";

interface IMainMenuProps {}

const MainMenu: React.FunctionComponent<IMainMenuProps> = (props) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return isDesktop ? (
    <div className="">
      <nav className="bg-[#181818] text-white flex items-center justify-between px-6 lg:px-6 3xl:px-0 relative z-30 rounded-b-3xl">
        <Link href="/">
          <Image src={logo} alt="alt" width={199} height={49} quality={100} />
        </Link>
        <ul className="hidden h-full gap-10 lg:flex -ml-10">
          {nav_link.map((link, idx) => (
            <Link
              href={link.href}
              key={idx}
              className="text-sm cursor-pointer flex items-center justify-center -pb-1 transition-all hover:bg-[#CBE023] hover:font-extrabold hover:text-black hover:rounded-full hover:p-2"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div>
          <CircleHelp color="#ffffff" size={20} />
        </div>
      </nav>
    </div>
  ) : (
    <div>
      <Drawer direction="left">
        <DrawerTrigger className="bg-[#181818] min-w-full text-white min-h-10 px-3">
          <div>
            <div className="flex justify-between items-center px-5">
              <MenuIcon />
              <Link href="/">
                <Image
                  src={logo}
                  alt="alt"
                  width={131}
                  height={64}
                  quality={100}
                />
              </Link>
              <div className="bg-[#CBE023] text-[#232323] rounded-md border border-[#F8f8f8] flex">
                <Link href="/">
                  <ShoppingCart size={20} className="text-base" />
                </Link>
              </div>
            </div>
          </div>
        </DrawerTrigger>

        <DrawerContent>
          <nav className="bg-[#181818] text-white min-h-full">
            <Link href="/">
              <Image
                src={logo}
                alt="alt"
                width={199}
                height={49}
                quality={100}
                className="flex justify-center items-center"
              />
            </Link>
            <ul className="block">
              {nav_link.map((link, idx) => (
                <Link
                  href={link.href}
                  key={idx}
                  className="text-sm cursor-pointer flex items-center justify-start p-4 transition-all hover:bg-[#CBE023] hover:font-extrabold hover:text-black hover:rounded-full"
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </nav>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MainMenu;
