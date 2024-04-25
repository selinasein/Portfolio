"use client";

import React from "react";
import { Overpass } from "next/font/google";
import { Cormorant } from "next/font/google";
import Link from "next/link";
import { getProjectById } from "@/assets/helpers";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "700", "800"],
  display: "swap",
  variable: "--oxygen",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  display: "swap",
  variable: "--cormorant",
});

export default function PostPage({ params }) {
  const project = getProjectById(params.id);

  return (
    <>
      <header className="m-auto flex">
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
      <div className={`mt-10 text-center`}>
        <h1 className={`text-7xl ${cormorant.className}`}>{project.title}*</h1>
        <TracingBeam className="px-6">
          <div className="p-5">
            <Image
              src={project.images[0]}
              alt={project.title}
              width={1375}
              height={738}
              className="rounded-lg shadow-lg w-full"
            />
            <Image
              src={project.images[0]}
              alt={project.title}
              width={1375}
              height={738}
              className="rounded-lg shadow-lg w-full"
            />
            <Image
              src={project.images[0]}
              alt={project.title}
              width={1375}
              height={738}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </TracingBeam>
      </div>
    </>
  );
}
