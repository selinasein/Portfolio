"use client";

import React, { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Bebas_Neue, Cormorant, Overpass } from "next/font/google";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { skillset } from "@/assets/skillsets";
import { projects } from "@/assets/projects";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { ContactForm } from "@/components/contact-form";

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
      <Toaster />
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
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="project-title mt-20 mb-48 grid md:grid-cols-2 lg:grid-cols-3"
        >
          <div className="md:col-span-2 lg:col-span-3 text-center">
            <h2 className={`${cormorant.className} text-8xl md:text-9xl`}>
              Projects*
            </h2>
          </div>
          <div className="mt-5 md:mt-10 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden md:col-span-2 lg:col-span-3">
            <InfiniteMovingCards
              items={skillset}
              direction="right"
              speed="slow"
            />
            <BentoGrid className="max-w-5xl mx-auto mt-5">
              {projects.map((project, i) => (
                <BentoGridItem
                  key={i}
                  title={project.title}
                  description={project.description}
                  header={project.image}
                  link={project.link}
                  className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="project-title mt-20">
          <div className="md:col-span-2 lg:col-span-3 text-center mb-10">
            <h2 className={`${cormorant.className} text-8xl md:text-9xl`}>
              Contact*
            </h2>
            <div className="mt-5 flex items-center place-content-center">
              <Link href="mailto:neulmisscj@gmail.com?subject=Inquiry from Selina Park's Portfolio">
                <button className="flex items-center justify-center px-4 py-2 rounded-md border border-black bg-white text-neutral-700 text-sm md:text-md hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] transition duration-200">
                  <img
                    src="/icons/email.png"
                    width={20}
                    alt="Email"
                    className="mr-2"
                  />
                  <span>Email</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="justify-center items-center">
            <ContactForm />
          </div>
        </section>
      </div>
    </>
  );
}
