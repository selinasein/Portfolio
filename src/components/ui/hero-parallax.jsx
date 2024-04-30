"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Overpass } from "next/font/google";
import { Cormorant } from "next/font/google";

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

export const HeroParallax = ({ project }) => {
  const imageRow = project.images;
  const reversedImageRow = [...imageRow].reverse();

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 500]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -500]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [30, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-1200, 130]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-full w-full overflow-hidden py-40 antialiased flex flex-col self-auto [perspective:700px] [transform-style:preserve-3d] relative mb-20"
    >
      <ProjectDetail project={project} />

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-20">
          {imageRow.map((image, index) => (
            <ProductCard
              project={project}
              image={image}
              translate={translateX}
              key={index}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-10 ">
          {reversedImageRow.map((image, index) => (
            <ProductCard
              project={project}
              image={image}
              translate={translateXReverse}
              key={index}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-20">
          {imageRow.map((image, index) => (
            <ProductCard
              project={project}
              image={image}
              translate={translateX}
              key={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const ProjectDetail = ({ project }) => {
  const landingPageImage = project.images.find(
    (image) => image.title === "Landing Page"
  );
  return (
    <div className="max-w-7xl relative w-full top-0 text-center flex justify-center items-center flex-col z-10">
      <h1
        className={`${cormorant.className} text-7xl md:text-9xl font-bold dark:text-white`}
      >
        {project.title}*
      </h1>
      <p
        className={`${overpass.className} max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200`}
      >
        {project.description}
      </p>
      <div className="mt-4 md:mx-32 items-center justify-center flex flex-row flex-wrap gap-3">
        {project.skills.map((skill) => {
          return (
            <div className="flex flex-wrap text-center items-center justify-center px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0)]">
              {skill}
            </div>
          );
        })}
      </div>
      <div className="rounded-xl overflow-hidden">
        <Link
          href={project.link}
          className="flex items-center justify-center mt-10 md:mt-16 text-lg md:text-2xl font-bold rounded-xl"
        >
          <div className="relative rounded-xl shadow-2xl md:w-1/2 group">
            <img
              src={landingPageImage.img}
              alt={project.title}
              className="w-full h-auto transition duration-300 rounded-xl ease-in-out group-hover:opacity-10"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out gap-3">
              <img
                src="/icons/external-link.png"
                alt={project.title}
                className="w-5 h-5"
              />
              <span
                className={`${overpass.className} text-black text-lg font-semibold`}
              >
                Visit the Website!
              </span>
            </div>
          </div>
        </Link>
      </div>
      <p
        className={`${overpass.className} mt-16 md:mx-40 text-sm md:text-base  dark:text-neutral-200`}
      >
        {project.explanation}
      </p>
    </div>
  );
};

export const ProductCard = ({ project, image, translate, i }) => {
  console.log(image);
  return (
    <motion.div
      style={{
        x: translate,
      }}
      key={i}
      className="group/product h-60 w-[35rem] relative flex-shrink-0"
    >
      <Image
        src={image.img}
        width={1375}
        height={738}
        className="object-left-top absolute inset-0 shadow-lg"
        alt={image.title}
      />

      <div className="absolute inset-0 h-full w-full opacity-0 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {project.title}
      </h2>
    </motion.div>
  );
};
