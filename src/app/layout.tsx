import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

// const kantumruyPro = Kantumruy_Pro({
//   variable: "--font-kantumruy-pro",
//   subsets: ["latin", "khmer"],
// });

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased container my-5`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
