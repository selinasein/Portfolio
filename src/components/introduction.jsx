"use client";

import React from "react";
import { Cormorant } from "next/font/google";

const cormorant = Cormorant({
  subsets: ["latin"],
  display: "swap",
  variable: "--cormorant",
});

export default function Introduction() {
  return (
    <div
      className={`title-header ${cormorant.className} mt-5 md:mt-0 text-5xl md:text-9xl fade-in-after-few-seconds text-black dark:text-gray-300`}
    >
      <div className="flex flew-row text-center justify-center items-center">
        <p className="md:hidden">Hi, I&apos;m Selina.</p>

        <p className="hidden md:block">Hi, I&apos;m </p>
        <div className="avatar hidden md:block">
          <div className="md:w-60 mask mask-hexagon">
            <img src="/images/profile.jpg" />
          </div>
        </div>
        <p className="md:hidden">&nbsp;</p>
        <p className="hidden md:block">Selina Park.</p>
      </div>
      <p className="text-5xl md:text-9xl">Full Stack Developer</p>
      <div className="avatar md:hidden mt-10">
        <div className="w-60 mask mask-hexagon">
          <img src="/images/profile.jpg" />
        </div>
      </div>
    </div>
  );
}
