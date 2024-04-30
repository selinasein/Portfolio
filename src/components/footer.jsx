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

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Footer() {
  return (
    <footer className="w-full text-center mt-10 p-5 bg-slate-100  inset-x-0 bottom-0 relative">
      <button
        className="absolute right-5 bottom-20 w-10 up-button"
        onClick={scrollToTop}
      >
        <img src="/icons/up-button.png" alt="up-button" />
      </button>
      <p
        className={`${overpass.className} flex items-center justify-center mt-5 first-letter:md:mt-8 gap-5`}
      >
        Copyright 2023 By Selina Sein Park
      </p>
      <div
        className={`${overpass.className} flex items-center justify-center mt-5 first-letter:md:mt-8 gap-5`}
      >
        <Link href={"https://www.linkedin.com/in/selinasein"}>
          <div>
            <button className="flex items-center justify-center px-4 py-2 rounded-md border border-black bg-white text-neutral-700 text-sm md:text-md hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] transition duration-200">
              <img
                src="/icons/linkedin.png"
                width={20}
                alt="LinkedIn"
                className="mr-2"
              />
              <span>LinkedIn</span>
            </button>
          </div>
        </Link>
        <Link href={"https://github.com/selinasein"}>
          <div>
            <button className="flex items-center justify-center px-4 py-2 rounded-md border border-black bg-white text-neutral-700 text-sm md:text-md hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] transition duration-200">
              <img
                src="/icons/github.png"
                width={20}
                alt="LinkedIn"
                className="mr-2"
              />
              <span>GitHub</span>
            </button>
          </div>
        </Link>
        <Link href="/files/Resume.pdf">
          <button className="flex items-center justify-center px-4 py-2 rounded-md border border-black bg-white text-neutral-700 text-sm md:text-md hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] transition duration-200">
            <img
              src="/icons/resume.png"
              width={20}
              alt="Resume"
              className="mr-2"
            />
            <span>Resume</span>
          </button>
        </Link>
      </div>
    </footer>
  );
}
