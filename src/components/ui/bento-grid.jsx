"use client";

import Link from "next/link";
import { cn } from "../../../utils/cn";
import React from "react";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  link,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border justify-between flex flex-col space-y-4 mt-5",
        className
      )}
    >
      <Link
        href=""
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
      >
        <img
          src={header}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 20%",
          }}
        />
      </Link>

      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <Link href={link}>
          <img src="/icons/link.png" className="h-4 w-4 text-neutral-500" />
        </Link>
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 mb-2">
          {description}
        </div>
      </div>
    </div>
  );
};