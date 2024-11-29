import React from "react";

import { Overpass } from "next/font/google";
import Link from "next/link";

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "700", "800"],
  display: "swap",
  variable: "--oxygen",
});

export default function AboutMe() {
  return (
    <div className="text-black dark:text-gray-300">
      <p
        className={`${overpass.className} text-sm md:text-2xl`}
        style={{ lineHeight: "1.5" }}
      >
        <span>
          As a <strong>self-driven</strong> and <strong>detail-oriented</strong>{" "}
          Full-Stack Web Developer,
        </span>
        <span>
          I have thrived in various domains such as{" "}
          <strong>UX/UI design</strong>, <strong>content creation</strong>, and{" "}
          <strong>web development</strong> both front-end and back-end.
        </span>
      </p>
      <p
        className={`${overpass.className} text-sm md:text-xl`}
        style={{ lineHeight: "1.5" }}
      >
        <span>
          Prior to web development, I have a background in Psychology, and as a
          news anchor, these have given me unique insights into human cognition
          and behavior.
        </span>
        <span>
          I utilize my experience to create user-focused digital solutions and
          communicate effectively with diverse audiences.
        </span>
        These interdisciplinary experiences fuel my curiosity and passion for
        finding creative solutions to complex problems, particularly at the
        intersection of cognitive/neuroscience and computing.{" "}
      </p>
      <p
        className={`${overpass.className} text-sm md:text-xl`}
        style={{ lineHeight: "1.5" }}
      >
        <span>
          This unique blend of experiences, from studying human behavior to
          conveying stories to the public, now shapes my career as a{" "}
          <strong>Full-Stack Web Developer.</strong>
        </span>
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
    </div>
  );
}
