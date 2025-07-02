import React from "react";
import { Marquee } from "@/components/magicui/marquee";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import ProjectCard from "@/components/projectCard";

import Project1 from "@assets/project1.jpg";
import Project2 from "@assets/project2.jpg";
import Project3 from "@assets/project3.jpg";
import Project4 from "@assets/project4.jpg";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export interface RecentWork {
  name: string;
  image: StaticImport | string;
  description: string;
  link: string;
}

const designTools = [
  { name: "Adobe Photoshop" },
  { name: "Adobe Illustrator" },
  { name: "Figma" },
  { name: "Adobe XD" },
  { name: "Sketch" },
  { name: "Procreate" },
  { name: "Canva" },
  { name: "InDesign" },
];

export const recentWorks: Array<RecentWork> = [
  {
    name: "UI/UX Design for E-commerce website",
    image: Project1,
    description:
      "This is a design for an e-commerce website, it is a simple and clean design, with a modern and trendy look.",
    link: "",
  },
  {
    name: "Web App Design for a Fitness program",
    image: Project2,
    description:
      "This is a design for a fitness app, it is a simple and clean design, with a modern and trendy look.",
    link: "",
  },
  {
    name: "Web App Design for a Food Delivery",
    image: Project3,
    description:
      "This is a design for a food delivery app, it is a simple and clean design, with a modern and trendy look.",
    link: "",
  },
  {
    name: "Web App Design for a Social Media",
    image: Project4,
    description:
      "This is a design for a social media app, it is a simple and clean design, with a modern and trendy look.",
    link: "",
  },
];

export default function TrustedBy() {
  return (
    <section className="my-20 space-y-20">
      <section
        aria-label="design-skills"
        className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center gap-6"
      >
        <h2 className="text-xl col-span-1">
          Recently Work <span className="font-semibold text-primary">With</span>
        </h2>
        <div className="md:col-span-3 col-span-1 space-y-6 relative">
          <Marquee pauseOnHover className="[--duration:20s]">
            {designTools.map((tool, idx) => (
              <div
                key={idx}
                className="flex items-center mx-4 px-4 py-2 rounded-md"
              >
                <span className="font-semibold text-3xl">{tool.name}</span>
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </section>
      <section>
        <h2 className="text-5xl col-span-1 font-semibold">My Recent Works</h2>
        <div
          aria-label="my-recent-works-list-4 items"
          className="grid lg:grid-cols-2 grid-cols-1 gap-6 my-5"
        >
          {recentWorks.map((work, idx) => (
            <BlurFade key={idx}>
              <ProjectCard idx={idx} {...work} />
            </BlurFade>
          ))}
          <div className="col-span-2 flex justify-center items-center">
            <Button
              variant="ghost"
              className="w-fit rounded-full text-base px-4 py-2 hover:scale-105 transition-all duration-200"
            >
              View All Works <ArrowUpRight />
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
}
