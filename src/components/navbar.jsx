"use client";

import React from "react";
import { Overpass } from "next/font/google";
import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useRouter } from "next/navigation";

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "700", "800"],
  display: "swap",
  variable: "--oxygen",
});

export default function Navbar() {
  const router = useRouter();

  const handleNavigation = (targetId) => {
    if (router.pathname === "/") {
      const section = document.querySelector(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/?scrollTo=${targetId}`);
    }
  };

  return (
    <header className="m-auto flex py-3 px-5 md:py-5 md:px-10 dark:text-gray-300 text-gray-800 bg-transparent">
      <Link
        href={"/"}
        className={`text-lg md:text-2xl ${overpass.className} font-bold mt-5 uppercase flex-auto`}
      >
        <h1>Selina Sein Park</h1>
      </Link>
      <div className="p-5">
        <ThemeSwitcher />
      </div>

      <ul
        className={`menu menu-vertical rounded-box relative place-self-end md:ml-auto text-sm md:text-lg ${overpass.className} font-bold uppercase`}
      >
        <li>
          <button onClick={() => handleNavigation("#about-me")}>
            About Me
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation("#projects")}>
            Projects
          </button>
        </li>
        <li>
          <button onClick={() => handleNavigation("#contact")}>Contact</button>
        </li>
      </ul>
    </header>
  );
}
