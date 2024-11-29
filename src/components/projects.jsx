"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Cormorant } from "next/font/google";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { skillset } from "@/assets/skillsets";
import { projects } from "@/assets/projects";

const cormorant = Cormorant({
  subsets: ["latin"],
  display: "swap",
  variable: "--cormorant",
});

export default function Projects() {
  return (
    <>
      <div className="md:col-span-2 lg:col-span-3 text-center ">
        <h2
          className={`${cormorant.className} text-7xl md:text-9xl text-black dark:text-gray-300`}
        >
          Projects*
        </h2>
      </div>
      <div className="mx-10 md:m-0 mt-5 md:mt-10 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden md:col-span-2 lg:col-span-3">
        <div className="items-center justify-center text-center">
          <p
            className={`${cormorant.className} text-lg text-black dark:text-gray-300`}
          >
            I&apos;m good at ...
          </p>
          <InfiniteMovingCards items={skillset} direction="left" speed="slow" />
        </div>

        <BentoGrid className="max-w-6xl mx-auto mt-3 md:mt-10">
          {projects.map((project, i) => (
            <BentoGridItem
              key={i}
              id={project.id}
              title={project.title}
              description={project.description}
              thumbnail={project.thumbnail}
              skills={project.skills}
              className={
                i === 3 || i === 6 ? "md:col-span-2 m-5 md:m-0" : "m-5 md:m-0"
              }
            />
          ))}
        </BentoGrid>
      </div>
    </>
  );
}
