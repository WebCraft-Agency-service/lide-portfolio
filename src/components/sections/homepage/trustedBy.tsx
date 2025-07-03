import React from "react";
import { Marquee } from "@/components/magicui/marquee";
import ProjectCard from "@/components/projectCard";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { designTools, Works } from "@/lib/data";

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
          {Works.slice(0, 4).map((work, idx) => (
            <ProjectCard key={idx} idx={idx} {...work} />
          ))}
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <Button
            variant="ghost"
            className="w-fit rounded-full text-base px-4 py-2 hover:scale-105 transition-all duration-200"
          >
            View All Works <ArrowUpRight />
          </Button>
        </div>
      </section>
    </section>
  );
}
