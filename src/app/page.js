"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Bebas_Neue, Cormorant, Overpass } from "next/font/google";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

const skillset = [
  {
    category: "Programming Languages",
    name: "JavaScript (ES6), TypeScript, Python, PHP, C#, HTML5, CSS/SCSS",
  },
  {
    category: "Library/Frameworks",
    name: "ReactJS, jQuery, Node.js, Express.js, Next.js, Tailwind CSS",
  },
  {
    category: "Database-related",
    name: "MySQL, PostgreSQL, GraphQL, Drizzle ORM, Mercurious",
  },
  {
    category: "UX/UI Design",
    name: "Adobe XD, Figma, Illustrator",
  },
  {
    category: "Project Management",
    name: "GitHub, GitLab, Agile Methodology, Trello",
  },
];

const bebasNeue = Bebas_Neue({
  weight: "400",
  preload: false,
  display: "swap",
  variable: "--bebas-neue",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  display: "swap",
  variable: "--cormorant",
});

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "700", "800"],
  display: "swap",
  variable: "--oxygen",
});

export default function Home() {
  return (
    <>
      {/* top navigation */}
      <header className="m-auto py-5 px-10 flex">
        <h1
          className={`text-2xl ${overpass.className} font-bold mt-5 uppercase`}
        >
          Selina Sein Park
        </h1>
        <ul
          className={`menu menu-vertical rounded-box relative ml-auto text-lg ${overpass.className} font-bold uppercase`}
        >
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </header>
      {/* main body */}
      <div
        className={`w-full h-full text-center justify-center items-center py-5 px-10`}
      >
        {/* Title: Introduction */}
        <div
          className={`title-header ${cormorant.className} mt-5 md:mt-0 text-5xl md:text-9xl`}
        >
          <div className="flex text-center justify-center items-center">
            <p>Hi, I&apos;m </p>
            <div className="avatar hidden md:block">
              <div className="md:w-60 mask mask-hexagon">
                <img src="/images/profile.jpg" />
              </div>
            </div>
            <p className="md:hidden">&nbsp;</p>
            <p>Selina Park.</p>
          </div>
          <p>Full Stack Developer</p>
          <div className="avatar md:hidden mt-10">
            <div className="w-60 mask mask-hexagon">
              <img src="/images/profile.jpg" />
            </div>
          </div>
        </div>

        {/* About Me */}
        <section
          className="about-me mt-10 md:mt-16 p-5 md:p-48 grid grid-flow-row gap-4"
          id="about-me"
        >
          <p
            className={`${overpass.className} text-sm md:text-2xl`}
            style={{ lineHeight: "1.5" }}
          >
            <span>
              As a <strong>self-driven</strong> and{" "}
              <strong>detail-oriented</strong> Full-Stack Web Developer,
            </span>
            <span>
              I have thrived in various domains such as{" "}
              <strong>UX/UI design</strong>, <strong>content creation</strong>,
              and <strong>web development</strong> both front-end and back-end.
            </span>
          </p>
          <p
            className={`${overpass.className} text-sm md:text-xl`}
            style={{ lineHeight: "1.5" }}
          >
            <span>
              Prior to web development, I have a background in Psychology, and
              as a news anchor, these have given me unique insights into human
              cognition and behavior.
            </span>
            <span>
              I utilize my experience to create user-focused digital solutions
              and communicate effectively with diverse audiences.
            </span>
            These interdisciplinary experiences fuel my curiosity and passion
            for finding creative solutions to complex problems, particularly at
            the intersection of cognitive/neuroscience and computing.{" "}
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
                    src="/images/linkedin.png"
                    width={20}
                    alt="LinkedIn"
                    className="mr-2"
                  />
                  <span>Connect with me</span>
                </button>
              </div>
            </Link>
            <Link href={"https://github.com/selinasein"}>
              <div>
                <button className="flex items-center justify-center px-4 py-2 rounded-md border border-black bg-white text-neutral-700 text-sm md:text-md hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] transition duration-200">
                  <img
                    src="/images/github.png"
                    width={20}
                    alt="LinkedIn"
                    className="mr-2"
                  />
                  <span>GitHub</span>
                </button>
              </div>
            </Link>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="project-title mt-20 grid md:grid-cols-5"
        >
          <div className="md:col-span-5 text-center">
            <h2 className={`${cormorant.className} text-8xl md:text-9xl`}>
              Projects*
            </h2>
          </div>
          <div className="mt-5 md:mt-10 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden md:col-span-5">
            <InfiniteMovingCards
              items={skillset}
              direction="right"
              speed="slow"
            />
          </div>
          <div className="md:col-span-3 about-me">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className={`text-neutral-600 max-w-sm mt-2 text-xl font-bold dark:text-white ${overpass.className} flex justify-center items-center h-full  max-w-sm mt-2`}
                >
                  Cocoon - Career development app
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className={`text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 ${overpass.className}`}
                >
                  TypeScript, Next.js, PostgreSQL, AWS Lambda, Redux, Amazon
                  Textract, LangChain, Tailwind CSS, OpenAI API
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-10">
                  <Image
                    src="/images/cocoon_thumbnail.png"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://www.cocoon.quest/"
                    target="__blank"
                    className={`px-4 py-2 rounded-xl text-xs font-normal dark:text-white ${overpass.className}`}
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className={`px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold ${overpass.className}`}
                  >
                    Read More
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
          <div
            className={`md:py-20 md:px-5 flex items-center justify-center md:col-span-2 md:mr-32 ${overpass.className} md:text-2xl about-me`}
          >
            <p>
              Cocoon is a <strong>career development app</strong> that harnesses
              the <strong>power of AI</strong>. It scans resumes and analyzes
              skills to recommend courses and programs relevant to users'
              desired job industry. Cocoon aims to not only{" "}
              <strong>help people realize their full potential</strong>, but
              also <strong>provide a comprehensive roadmap</strong> to achieve
              their career goals.
            </p>
          </div>
          <div
            className={`md:py-20 md:px-5 flex items-center justify-center md:col-span-2 md:ml-36 ${overpass.className} md:text-2xl about-me`}
          >
            <p>
              A rebuild of the GSA homepage was carried out using JavaScript,
              Next.js, Tailwind CSS, and Framer Motion. The website now features{" "}
              <strong>a responsive design with a modern aesthetic.</strong>
            </p>
          </div>
          <div className="md:col-span-3 about-me">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className={`text-neutral-600 max-w-sm mt-2 text-xl font-bold dark:text-white ${overpass.className} flex justify-center items-center h-full  max-w-sm mt-2`}
                >
                  GSA Homepage Rebuild
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className={`text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 ${overpass.className}`}
                >
                  JavaScript, Next, Tailwind CSS, Framer-motion
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-10">
                  <Image
                    src="/images/GSA-rebuild.png"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://acit-4770-p3-selinasein-hzojn32wz-selina-seins-projects.vercel.app/"
                    target="__blank"
                    className={`px-4 py-2 rounded-xl text-xs font-normal dark:text-white ${overpass.className}`}
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className={`px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold ${overpass.className}`}
                  >
                    Read More
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </section>
      </div>
    </>
  );
}
