import React from "react";
import Link from "next/link";
import {
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { FlipWords } from "./ui/flip-words";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const words = ["Imagination", "Creativity", "Vision", "Concept", "Ideas"];

  return (
    <footer className="bg-black text-white py-5">
      <section className="container">
        <div className="section-container">
          {/* Main heading */}
          <div className="text-start mb-20">
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-white">Let&apos;s turn your</span>{" "}
              <span className="text-white md:hidden inline-block">
                Imagination
              </span>
              <FlipWords
                className="text-white md:inline hidden"
                words={words}
                duration={200}
              />
              <br />
              <span className="text-gray-400">into reality.</span>
            </h2>
          </div>

          {/* Contact and Social */}
          <div className="flex flex-col md:flex-row justify-between md:items-center py-10 border-t border-gray-800">
            <div className="mb-6 md:mb-0">
              <p className="text-gray-400 text-sm mb-2">Email</p>
              <Link
                href="mailto:lidekauv@gmail.com"
                className="text-xl hover:text-gray-300 transition-colors"
              >
                Sovantalide.kauv22@gmail.com
              </Link>
            </div>

            <div className="text-right flex flex-col items-start">
              <p className="text-gray-400 text-sm mb-2">Social</p>
              <div className="flex space-x-6">
                <Link
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  <FaTiktok size={24} />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  <FaLinkedin size={24} />
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  <FaFacebook size={24} />
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  <FaYoutube size={24} />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  <FaInstagram size={24} />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between md:items-center pt-8 border-t border-gray-800 text-gray-500 text-sm">
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 mb-4 md:mb-0">
              <span>Based in Phnom Penh, Cambodia</span>
            </div>
            <div>© {currentYear} 2025 Sovantalide Kauv</div>
          </div>

          {/* Background text */}
          <div className="flex items-center justify-center pointer-events-none w-full">
            <span className="lg:text-[5vw] md:text-[10vw] text-[8vw] font-bold text-white uppercase text-wrap select-none text-center w-full">
              Sovantalide Kauv
            </span>
          </div>
        </div>
      </section>
    </footer>
  );
}
