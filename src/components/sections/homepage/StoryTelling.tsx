"use client";

import Image from "next/image";
import React from "react";

import heroImage from "@assets/hero.jpg";
import { motion } from "motion/react";
import { TypingAnimation } from "@/components/magicui/typing-animation";

export default function StoryTelling() {
  return (
    <section
      aria-label="story-telling"
      className="container mx-auto my-30 space-y-6"
    >
      <div className="space-y-2" aria-label="story-telling-title">
        <h2 className="text-5xl font-semibold text-gray-400">
          Turning Your Imagination into
        </h2>
        <TypingAnimation startOnView className="text-5xl font-semibold">
          real definition
        </TypingAnimation>
      </div>
      <div
        aria-label="story-telling-content"
        className="grid lg:grid-cols-2 gap-6"
      >
        <div aria-label="story-telling-content-left">
          <Image
            src={heroImage}
            alt="hero"
            width={400}
            height={400}
            className="object-cover aspect-square rounded-2xl shadow-2xl group-hover:scale-105 transition-all duration-500 ease-in-out"
          />
          <div className="my-5">
            <p className="text-lg font-semibold">Sovantalide Kauv</p>
            <p className="text-lg">Videographer, Creative </p>
          </div>
        </div>
        <div
          aria-label="story-telling-content-right"
          className="space-y-4 font-medium lg:mt-10 mt-10"
        >
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The art of storytelling, for both videographers and photographers,
            is the powerful ability to weave a compelling narrative through
            visual means.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.4 }}
            viewport={{ once: true }}
          >
            It is about curating images to evoke emotion and reveal truth. A
            photograph tells a story in a single, frozen frame, hinting at past
            and future. A video unfolds the narrative in real-time, using
            movement, sound, and dynamic sequences to immerse the viewer.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Whether through a click or a rolling record, the goal is to tell a
            story that resonates.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
