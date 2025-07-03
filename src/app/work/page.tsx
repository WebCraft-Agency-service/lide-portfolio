import { BlurFade } from "@/components/magicui/blur-fade";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import ProjectCard from "@/components/projectCard";
import { Works } from "@/lib/data";
import React from "react";
import { HiOutlineMail } from "react-icons/hi";

export default function page() {
  return (
    <main className="min-h-screen section-container my-20">
      <section className="space-y-4">
        <h1 className="font-semibold text-6xl text-center">
          My most <br /> recent work
        </h1>
        <article
          aria-label="work-description"
          className="text-center text-lg font-medium"
        >
          Vibrant visuals that tell powerful stories ✨ <br /> Projects from
          recent years captured across the globe.
        </article>
      </section>

      <section
        aria-label="recent-works-list items"
        className="grid lg:grid-cols-2 grid-cols-1 gap-6 my-10"
      >
        {Works.map((work, idx) => (
          <ProjectCard key={idx} idx={idx} {...work} />
        ))}
      </section>

      <section
        aria-label="let's connect"
        className="border-2 border-gray-200 w-full rounded-2xl md:p-6 p-2 flex flex-col items-center justify-center gap-6 my-10"
      >
        <div className="text-center">
          <p className="text-6xl font-semibold text-gray-400">
            Like what you see?
          </p>
          <p className="text-6xl font-semibold text-primary">
            Let&apos;s connect ✨
          </p>
        </div>
        <BlurFade>
          <ShimmerButton className="w-fit duration-200 shadow-lg rounded-full my-5 space-x-4">
            <HiOutlineMail size={25} />
            <p className="text-lg font-semibold">Email me</p>
          </ShimmerButton>
        </BlurFade>
      </section>
    </main>
  );
}
