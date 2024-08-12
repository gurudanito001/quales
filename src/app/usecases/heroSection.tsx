"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";



const HeroSection = ()=>{
  const router = useRouter();
  return(
    <section className="bg-white px-5 lg:px-28 py-10 flex flex-col md:flex-row items-center">
      

      <article className="text-base-content md:w-1/2 flex flex-col">
        <header className="flex flex-col">
          <h1 className="text-2xl xl:text-3xl font-550 bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 inline text-transparent bg-clip-text mx-auto md:mx-0 text-center md:text-left">Real-World Success </h1>
          <h1 className="text-xl xl:text-3xl font-550 bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 inline text-transparent bg-clip-text mx-auto md:mx-0 text-center md:text-left">
            Stories with Quales Consulting</h1>
        </header>
        
        <p className="text-primary max-w-600 mt-6 text-sm lg:text-lg text-center md:text-left">
          Explore real-world success stories where Quales Consulting has driven innovation and efficiency. See how we&apos;ve transformed our clients&apos; projects and businesses with our expertise.
        </p>
      </article>

      <figure className=" md:w-1/2 mb-10 md:mb-0">
        <Image
          src={`/images/our-community.svg`}
          className="w-100"
          style={{ height: "auto", objectFit: "contain" }}
          alt="Two Business men shaking hands in a professional environment"
          width={700}
          height={700}
        />
      </figure>
      
    </section>
  )
}

export default HeroSection