"use client";

import React from "react";
import { Toaster } from "sonner";
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
import Navbar from "@/components/navbar";

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

export default function Home() {
  return (
    <div className="dark:bg-zinc-900 bg-slate-200">
      {/* top navigation */}
      <Toaster />
      <FloatingNav navItems={navItems} />
      <Navbar />

      {/* main body */}
      <section
        className={`w-full h-full text-center justify-center items-center py-5 px-10`}
        id="home"
      >
        <Introduction />
      </section>

      {/* About Me */}
      <section
        className="about-me mt-10 md:mt-16 md:p-40 grid grid-flow-row gap-4 text-center"
        id="about-me"
      >
        <AboutMe />
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="fade-in-when-visible mt-20 mb-48 grid md:grid-cols-2 lg:grid-cols-3 "
      >
        <Projects />
      </section>

      {/* Contact Form */}
      <section id="contact" className="fade-in-when-visible mt-20">
        <ContactSection />
      </section>
    </div>
  );
}
