"use client";

import React from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/magicui/text-animate";
import { services, services_list } from "@/lib/data";

export default function Services() {
  return (
    <section className="container my-20 grid lg:grid-cols-2 gap-10 items-center">
      <section aria-label="services-header-text" className="space-y-2">
        <TextAnimate
          animation="slideDown"
          className="text-4xl font-semibold text-gray-400"
        >
          Specialise Services that
        </TextAnimate>
        <TextAnimate animation="slideUp" className="text-4xl font-semibold">
          Sharpen your Story.
        </TextAnimate>
        <div className="my-20">
          <p className="text-lg font-semibold">My personal Creative toolbox</p>
          <div className="flex items-center gap-4 mt-2">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: (idx + 1) * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className="flex items-center gap-2 shadow-lg rounded-3xl hover:scale-110 transition-all duration-200"
                  aria-label={service.title}
                >
                  <service.icon size={35} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section aria-label="services-list">
        <ul className="flex flex-col gap-4">
          {services_list.map((service, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: (idx + 1) * 0.2 }}
              viewport={{ once: true }}
            >
              <div
                className="flex items-center gap-5 rounded-3xl p-2"
                aria-label={service.title}
              >
                <Button className="rounded-full w-10 h-10 shadow-lg">
                  <service.icon size={20} />
                </Button>
                <p className="text-2xl font-semibold">{service.title}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </section>
    </section>
  );
}
