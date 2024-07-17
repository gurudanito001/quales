"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";


const OurGraduates = ()=>{
  const router = useRouter();
  return(
    <section className="bg-white px-5 lg:px-28 py-20 flex flex-col-reverse md:flex-row items-center">
      <figure className=" md:w-1/2 mb-10 md:mb-0">
        <Image
          src={`/images/our-community.svg`}
          className="w-100"
          style={{ height: "auto", objectFit: "contain" }}
          alt="Product Image"
          width={700}
          height={700}
        />

        <div className="md:hidden flex">
          <button className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-8" onClick={() => router.push("/hire-talents")}>Hire Talents</button>
        </div>
      </figure>

      <article className="text-base-content md:w-1/2 flex flex-col">
        <header >
          <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 inline text-transparent bg-clip-text"> Our Graduates Work </h3> <br/>
          <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 inline text-transparent bg-clip-text">
            for Top Companies Worldwide</h3>
        </header>
        
        <p className="text-primary max-w-600 mt-6 text-sm lg:text-lg">
        Quales Consulting graduates excel globally, contributing to top tech startups and multinational corporations. Recognized for their skills and dedication, they drive success and innovation in the tech industry. Connect with our top-tier talent today.
        </p>
        <div className="hidden md:block">
          <button className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-8" onClick={()=>router.push("/hire-talents")}>Hire Talents</button>
        </div>
      </article>
      
    </section>
  )
}

export default OurGraduates