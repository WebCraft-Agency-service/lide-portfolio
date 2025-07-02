import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ShinyButton } from "@/components/magicui/shiny-button";
import Image from "next/image";
import React from "react";

import profileImage from "@assets/profile.jpg";
import { BlurFade } from "@/components/magicui/blur-fade";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { GoDotFill } from "react-icons/go";
import BlurText from "@/components/BlurText/BlurText";
import { TextAnimate } from "@/components/magicui/text-animate";
import TiltedCard from "@/components/TiltedCard/TiltedCard";

import heroImage from "@assets/hero.jpg";

export default function Hero() {
  return (
    <section
      id="hero-section"
      aria-label="hero-section"
      className="mt-20 grid lg:grid-cols-2 gap-10 items-center"
    >
      <section>
        <ShinyButton className="w-fit px-4 py-2 duration-200 shadow-sm rounded-full my-5">
          <span className="flex items-center gap-2 capitalize font-semibold text-sm">
            <GoDotFill size={20} className="text-green-400" />
            <AnimatedGradientText className="text-sm font-medium">
              Available for Inquiries
            </AnimatedGradientText>
          </span>
        </ShinyButton>
        <div className="flex flex-col gap-8">
          <div>
            <BlurText
              text="Create"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-6xl font-semibold text-gray-400 mb-8"
            />
            <BlurText
              text="A Better Story"
              delay={250}
              animateBy="words"
              direction="top"
              className="text-6xl font-semibold mb-8"
            />
          </div>
          <TextAnimate
            className="text-2xl font-semibold"
            animation="blurInUp"
            by="word"
            once
          >
            Let&apos;s do it Now! ✨
          </TextAnimate>
          <TextAnimate
            className="text-lg font-semibold"
            animation="blurInUp"
            by="word"
            once
          >
            Hi! I am Lide - a freelancer mixed-media specialist based out from
            Phnom Penh, Cambodia
          </TextAnimate>
          <TextAnimate
            className="text-lg font-semibold"
            animation="blurInUp"
            by="word"
            once
          >
            I turn story into reality.
          </TextAnimate>
          <BlurFade>
            <ShimmerButton className="w-fit px-2 py-2 duration-200 shadow-lg rounded-full my-5 space-x-4">
              <Image
                src={profileImage}
                alt="hero"
                width={40}
                height={40}
                className="rounded-full size-10 object-cover"
              />
              <p className="text-lg font-semibold">Send me a message</p>
            </ShimmerButton>
          </BlurFade>
        </div>
      </section>
      <section>
        <BlurFade className="md:block hidden">
          <TiltedCard
            imageSrc={heroImage}
            altText="Lide Kauv profile hero"
            captionText="Lide Kauv"
            rotateAmplitude={10}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            imageWidth={400}
            imageHeight={400}
            containerWidth={500}
            containerHeight={500}
          />
        </BlurFade>
      </section>
    </section>
  );
}
