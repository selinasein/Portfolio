"use client";

import React from "react";
import { Overpass } from "next/font/google";
import Link from "next/link";

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "700", "800"],
  display: "swap",
  variable: "--oxygen",
});

export default function Navbar() {
  return (
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
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
}
