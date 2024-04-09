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
    </>
  );
}
