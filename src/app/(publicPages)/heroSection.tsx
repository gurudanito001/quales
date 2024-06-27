"use client"
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import generateRandomId from "../lib/generateRandomId";
import { useRouter } from "next/navigation";




const HeroSection = () => {
  const router = useRouter();



  return (
    <section className=" bg-[url('/images/hero-image.jpg')] bg-cover bg-center bg-no-repeat h-screen max-h-600 lg:max-h-850">
      <div className="h-full bg-overlay flex items-center content-center">
        <article className="relative z-10 w-full text-white text-center mx-auto lg:mb-32 opacity-100 px-3 md:px-5">
          <h3 className=" text-xl md:text-4xl font-semibold mb-3 lg:mb-5 text-white max-w-800 mx-auto">Engage the best talent around the globe</h3>
          <p className="font-light text-sm mb-3 lg:mb-5 lg:text-lg max-w-1000 mx-auto">Quales Consulting comprises an elite network of the finest freelance Software Developers, Designers, Business Analysts, Product Managers, and Scrum Masters, Data Analysts globally. Leading companies engage freelancers from Quales Consulting for their critical projects.</p>
          <div className="flex justify-around gap-2 md:gap-5">
            <button className="btn text-xs md:text-sm glass rounded-full px-9 text-white md:ml-auto">Explore Talents</button>
            <button className="btn text-xs md:text-sm bg-white text-primary rounded-full px-9 md:mr-auto">Hire Talents</button>
          </div>
        </article>
      </div>
    </section>
  )
}

export default HeroSection;