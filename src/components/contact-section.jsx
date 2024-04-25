import React from "react";
import { Cormorant, Overpass } from "next/font/google";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";

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

export default function ContactSection() {
  return (
    <>
      <div className="md:col-span-2 lg:col-span-3 text-center mb-10">
        <h2 className={`${cormorant.className} text-8xl md:text-9xl`}>
          Contact*
        </h2>
      </div>
      <div className="justify-center items-center">
        <ContactForm />
      </div>
    </>
  );
}
