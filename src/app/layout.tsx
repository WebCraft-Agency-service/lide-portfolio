import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LideKauv Sovantalide",
  description:
    "Hi! I am Lide - a freelancer mixed-media specialist based out from Phnom Penh, Cambodia",
  keywords: [
    "Lide",
    "LideKauv",
    "Sovantalide",
    "Freelancer",
    "Mixed-media",
    "Phnom Penh",
    "Cambodia",
  ],
  authors: [{ name: "LideKauv" }],
  publisher: "LideKauv",
  alternates: {
    languages: {
      en: "https://lidekauv.com",
    },
    canonical: "https://lidekauv.com",
    types: {
      website: "https://lidekauv.com",
      portfolio: "https://lidekauv.com",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <section className="container my-10">
          <Navbar />
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
