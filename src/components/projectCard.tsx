"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { RecentWork } from "@/lib/data";

type ProjectCardProps = {
  idx: number;
} & RecentWork;

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <Link
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
      title="Click to view the project"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: (props.idx + 1) * 0.4 }}
        viewport={{ once: true }}
      >
        <div className="relative rounded-2xl overflow-hidden min-h-[367px]">
          <Image
            src={props.image}
            alt={props.name}
            width={400}
            height={400}
            className="object-cover w-full h-full group-hover:scale-105 transition-all duration-500 ease-in-out"
          />
          <article className="font-semibold text-lg text-primary-foreground absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-primary to-transparent w-full">
            {props.name}
          </article>
        </div>
      </motion.div>
    </Link>
  );
}
