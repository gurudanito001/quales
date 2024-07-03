"use client"

import { useRouter } from "next/navigation";




const HeroSection = () => {
  const router = useRouter();



  return (
    <section className=" bg-[url('/images/hero-image.jpg')] bg-cover bg-center bg-no-repeat h-screen max-h-600 lg:max-h-850">
      <div className="h-full bg-overlay flex items-center content-center">
        <article className="relative z-10 w-full text-white text-center mx-auto lg:mb-32 opacity-100 px-3 md:px-5">
          <h3 className=" text-xl md:text-4xl mb-3 lg:mb-5 text-white max-w-800 mx-auto">Engage the best talent around the globe</h3>
          <p className="font-light text-sm mb-3 lg:mb-8 lg:text-lg max-w-1000 mx-auto">Quales Consulting comprises an elite network of the finest freelance Software Developers, Designers, Business Analysts, Product Managers, and Scrum Masters, Data Analysts globally. Leading companies engage freelancers from Quales Consulting for their critical projects.</p>
          <div className="flex gap-2 md:gap-5">
            <button className="btn md:btn-lg text-sm md:text-lg glass rounded-full px-9 font-light text-white ml-auto">Explore Talents</button>
            <button className="btn md:btn-lg text-sm md:text-lg bg-white text-primary font-light rounded-full px-9 mr-auto">Hire Talents</button>
          </div>
        </article>
      </div>
    </section>
  )
}

export default HeroSection;