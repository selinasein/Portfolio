"use client";

import React from "react";
import { getProjectById } from "@/assets/helpers";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Navbar from "@/components/navbar";

export default function PostPage({ params }) {
  const project = getProjectById(params.id);

  return (
    <div>
      <Navbar />
      <HeroParallax project={project} />
    </div>
  );
}
