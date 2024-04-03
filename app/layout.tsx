import Container from "@/components/ui/container";
import "./globals.css";
import { plusJakartaSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Sayurmoms - Pasar Sayur dan Buah Online",
  description:
    "Sayurmoms merupakan toko online yang menyediakan berbagai bahan makanan seperti sayur, buah, daging, ikan-ikanan, frozen food dan aneka bahan kering lainnya.Beroperasi di Surabaya sejak Juni 2020, Sayurmoms telah melayani pelanggan di berbagai kota di pulau Jawa utamanya daerah Surabaya dan sekitarnya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', "${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}", {
            page_path: window.location.pathname,
          })
          `}
        </Script>
      </head>
      <body className={cn(plusJakartaSans.variable, "antialiased font-sans")}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
