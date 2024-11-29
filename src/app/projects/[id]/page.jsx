"use client";

import React from "react";
import { getProjectById } from "@/assets/helpers";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Navbar from "@/components/navbar";

export default function PostPage({ params }) {
  const project = getProjectById(params.id);

  return (
    <div className="dark:bg-zinc-900 bg-slate-200">
      <Navbar />
      <HeroParallax project={project} />
    </div>
  );
}
