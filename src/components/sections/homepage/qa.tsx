import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";

import profileImage from "@assets/profile.jpg";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function QA() {
  return (
    <section
      aria-label="qa-section"
      className="container mx-auto my-20 grid lg:grid-cols-5 grid-cols-1 gap-6"
    >
      <section aria-label="qa" className="lg:col-span-3 col-span-1">
        <h3 className="text-5xl font-semibold">Find Your</h3>
        <TextAnimate
          animation="fadeIn"
          by="word"
          duration={0.4}
          className="text-5xl font-semibold text-gray-400"
        >
          Answers here.
        </TextAnimate>

        <Accordion
          type="single"
          collapsible
          className="space-y-4 mt-10"
          defaultValue="q-1"
        >
          <AccordionItem value="q-1">
            <AccordionTrigger>
              What types of events do you cover?
            </AccordionTrigger>
            <AccordionContent>
              We cover a wide range of events including weddings, corporate
              events, private parties, concerts, and more.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q-2">
            <AccordionTrigger>
              Do you offer both photography and videography?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we offer comprehensive packages that include both photography
              and videography services.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q-3">
            <AccordionTrigger>
              How far in advance should I book your services?
            </AccordionTrigger>
            <AccordionContent>
              We recommend booking as soon as your event date is confirmed,
              typically 6-12 months in advance for weddings and large events.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q-4">
            <AccordionTrigger>
              What is your photographic style?
            </AccordionTrigger>
            <AccordionContent>
              Our style is primarily candid and photojournalistic, focusing on
              capturing authentic moments.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q-5">
            <AccordionTrigger>
              What is your videographic style?
            </AccordionTrigger>
            <AccordionContent>
              Our videographic style is cinematic and documentary, aiming to
              create a timeless narrative of your event.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q-6">
            <AccordionTrigger>
              How many photographers/videographers will be at my event?
            </AccordionTrigger>
            <AccordionContent>
              This depends on your chosen package and the size of your event,
              but typically we provide one main photographer and one assistant.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="q-7">
            <AccordionTrigger>
              How long does it take to receive our photos/videos?
            </AccordionTrigger>
            <AccordionContent>
              Delivery times vary by service and season, but typically 4-6 weeks
              for photos and 8-12 weeks for videos.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <section
        aria-label="Send email card"
        className="lg:col-span-2 col-span-1"
      >
        <Card className="p-8">
          <CardTitle className="space-y-4">
            <Image
              src={profileImage}
              alt="hero"
              width={64}
              height={64}
              className="rounded-full size-16 object-cover"
            />
            <div>
              <p className="text-4xl font-semibold text-gray-400">
                Let&apos;s Talk More
              </p>
              <p className="text-4xl font-semibold">Send me an email!</p>
            </div>
          </CardTitle>
          <CardDescription className="font-medium text-primary">
            Learn more about how I can turn your story into reality
          </CardDescription>
          <CardFooter className="flex items-center justify-start px-0">
            <BlurFade>
              <ShimmerButton className="w-fit duration-200 shadow-lg rounded-full my-5 space-x-4">
                <HiOutlineMail size={25} />
                <p className="text-lg font-semibold">Email me</p>
              </ShimmerButton>
            </BlurFade>
          </CardFooter>
        </Card>
      </section>
    </section>
  );
}
