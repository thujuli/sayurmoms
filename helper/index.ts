// Import Image Logo
import img from "../public/images/Logo Sayurmoms-responsive.png";

// Import group image for benefits
import apple from "../public/images/Apple.png";
import shopping from "../public/images/Group.png";
import money from "../public/images/Group 1231.png";
import verified from "../public/images/Group 1233.png";

// Navigation links
export const nav_link = [
  {
    href: "/",
    to: "home",
    label: "Beranda",
  },
  {
    href: "/",
    to: "categories",
    label: "Produk Unggulan",
  },
  {
    href: "/",
    to: "about_us",
    label: "Tentang Kami",
  },
  {
    href: "/",
    to: "products",
    label: "Produk",
  },
  {
    href: "/",
    to: "testimoni",
    label: "Ulasan",
  },
  {
    href: "/",
    to: "faq_footer",
    label: "FAQ",
  },
];
// Kasih gambar disini
export const logo = img;

// Benefit
export const benefits = [
  {
    img: apple,
    desc: "Segar dan Berkualitas",
  },
  {
    img: shopping,
    desc: "Pengiriman Cepat",
  },
  {
    img: money,
    desc: "Pesan Mudah, Harga Hemat",
  },
  {
    img: verified,
    desc: "Lengkap dan Terpercaya",
  },
];

// Code lainnya selain dari contentful atau yg manual masukkan di Index
