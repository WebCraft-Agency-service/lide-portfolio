"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProfileImage from "@assets/profile.jpg";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";

import { motion, AnimatePresence } from "framer-motion";
import { Ellipsis } from "lucide-react";

const menuItems = [
  { href: "/work", label: "Work" },
  { href: "/shop", label: "Shop" },
  { href: "/resource", label: "Resource" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setMenuOpen(false);
      } else {
        setMenuOpen(true);
      }
      lastScrollTop = st;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`md:sticky top-10 z-50 flex sm:flex-nowrap flex-wrap gap-5 items-center sm:justify-between justify-center transition-all duration-500 ease-in-out ${
        !menuOpen
          ? "w-fit bg-background/30 backdrop-blur-sm"
          : "md:w-2/3 xl:w-1/2 2xl:w-2/5 bg-background/30 backdrop-blur-sm"
      } mx-auto border-2 border-muted sm:rounded-full rounded-2xl sm:p-2 p-4`}
    >
      <Link
        href={"/"}
        aria-label="portfolio-profile"
        className="flex items-center gap-3"
      >
        <Image
          priority
          src={ProfileImage}
          alt="portfolio-profile"
          width={40}
          height={40}
          className="rounded-full object-cover w-10 h-10"
        />
        <p className="text-lg font-semibold uppercase">Lide Kauv</p>
      </Link>
      <NavigationMenu>
        <AnimatePresence>
          {menuOpen && (
            <NavigationMenuList asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "backInOut" }}
                className="flex items-center space-x-1"
              >
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        aria-label={`portfolio-${item.label.toLowerCase()}`}
                        className="text-base font-semibold capitalize px-3 py-1.5 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors duration-200 block"
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <NavigationMenuLink className="rounded-full" asChild>
                    <Button
                      variant={"outline"}
                      aria-label="portfolio-contact"
                      className="text-base font-semibold capitalize shadow-md rounded-full px-3"
                    >
                      Contact
                    </Button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </motion.div>
            </NavigationMenuList>
          )}

          {!menuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "backInOut" }}
              className="flex items-center space-x-1"
            >
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Button
                      onClick={() => setMenuOpen(true)}
                      variant="ghost"
                      className="rounded-full px-4"
                    >
                      <Ellipsis className="size-8" />
                    </Button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </motion.div>
          )}
        </AnimatePresence>
      </NavigationMenu>
    </nav>
  );
}
