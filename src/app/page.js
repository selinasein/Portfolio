"use client";

import React from "react";
import { Toaster } from "sonner";
import { Cormorant, Overpass } from "next/font/google";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import {
  IconAddressBook,
  IconBorderAll,
  IconHome,
  IconUser,
} from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Introduction from "@/components/introduction";
import AboutMe from "@/components/about-me";
import Projects from "@/components/projects";
import ContactSection from "@/components/contact-section";

const navItems = [
  {
    name: "Home",
    link: "#home",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About Me",
    link: "#about-me",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: (
      <IconBorderAll className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Contact",
    link: "#contact",
    icon: (
      <IconAddressBook className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];

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
      <FloatingNav navItems={navItems} />

      <header className="m-auto py-3 px-5 md:py-5 md:px-10 flex">
        <h1
          className={`text-lg md:text-2xl ${overpass.className} font-bold mt-5 uppercase flex-auto`}
        >
          Selina Sein Park
        </h1>
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
      {/* main body */}
      <section
        className={`w-full h-full text-center justify-center items-center py-5 px-10`}
        id="home"
      >
        <Introduction />
      </section>

      {/* About Me */}
      <section
        className="about-me mt-10 md:mt-16 p-5 md:p-48 grid grid-flow-row gap-4 text-center"
        id="about-me"
      >
        <AboutMe />
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="project-title mt-20 mb-48 grid md:grid-cols-2 lg:grid-cols-3"
      >
        <Projects />
      </section>

      {/* Contact Form */}
      <section id="contact" className="project-title mt-20">
        <ContactSection />
      </section>
    </>
  );
}
