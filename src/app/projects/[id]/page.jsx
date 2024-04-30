"use client";

import React from "react";
import { Overpass } from "next/font/google";
import { Cormorant } from "next/font/google";
import Link from "next/link";
import { getProjectById } from "@/assets/helpers";
import { HeroParallax } from "@/components/ui/hero-parallax";

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "700", "800"],
  display: "swap",
  variable: "--oxygen",
});

export default function PostPage({ params }) {
  const project = getProjectById(params.id);

  return (
    <div className="">
      <header className="m-auto flex py-3 px-5 md:py-5 md:px-10">
        <Link
          href={"/"}
          className={`text-lg md:text-2xl ${overpass.className} font-bold mt-5 uppercase flex-auto`}
        >
          <h1>Selina Sein Park</h1>
        </Link>
        <ul
          className={`menu menu-vertical rounded-box relative place-self-end md:ml-auto text-sm md:text-lg ${overpass.className} font-bold uppercase`}
        >
          <li>
            <Link href="/#about-me">About Me</Link>
          </li>
          <li>
            <Link href="/#projects">Projects</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </header>

      <div className={`text-center items-center justify-center`}>
        <div>
          <HeroParallax project={project} />
        </div>
      </div>
    </div>
  );
}
