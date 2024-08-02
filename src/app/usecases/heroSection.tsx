"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";



const HeroSection = ()=>{
  const router = useRouter();
  return(
    <section className="bg-white px-5 lg:px-28 py-10 flex flex-col md:flex-row items-center">
      

      <article className="text-base-content md:w-1/2 flex flex-col">
        <header className="flex flex-col">
          <h3 className="text-2xl xl:text-3xl font-semibold bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 inline text-transparent bg-clip-text mx-auto md:mx-0">Real-World Success </h3>
          <h3 className="text-2xl xl:text-3xl font-semibold bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 inline text-transparent bg-clip-text mx-auto md:mx-0">
            Stories with Quales Consulting</h3>
        </header>
        
        <p className="text-primary max-w-600 mt-6 text-sm lg:text-lg text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proin dictum orci non nisi rhoncus, eu dignissim libero efficitur. Nullam a mollis dui. Sed eget malesuada enim. 
        </p>
      </article>

      <figure className=" md:w-1/2 mb-10 md:mb-0">
        <Image
          src={`/images/our-community.svg`}
          className="w-100"
          style={{ height: "auto", objectFit: "contain" }}
          alt="Product Image"
          width={700}
          height={700}
        />
      </figure>
      
    </section>
  )
}

export default HeroSection