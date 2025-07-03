"use client";

import React from "react";
import Lottie from "lottie-react";
import CommingSoon from "@lotties/Animation - 1751513835592.json";

export default function page() {
  return (
    <main className="min-h-screen section-container">
      <div className="flex flex-col items-center justify-center h-full gap-6 text-center">
        <Lottie animationData={CommingSoon} loop={true} />
        <p className="text-2xl">
          This page is being worked on and will be available soon.
        </p>
      </div>
    </main>
  );
}
