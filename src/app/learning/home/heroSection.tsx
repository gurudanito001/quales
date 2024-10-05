"use client"

import Image from "next/image";
import Link from "next/link";
import { ArrowUpIcon } from "@heroicons/react/24/solid";




const HeroSection = ()=>{

  const backToTop = () =>{
    if(window){
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }

  return(
    <section id="heroSection" className="bg-white px-5 lg:px-28 pt-20 flex flex-col-reverse md:flex-row items-center">
      <figure className=" md:w-1/2 mb-10 md:mb-0">
        <Image
          src={`/images/learning-herosection.png`}
          className="w-100 xl:max-w-600"
          style={{ height: "auto", objectFit: "contain" }}
          alt="A young man with two thumbs up"
          width={700}
          height={700}
        />

        <div className="md:hidden flex">
          <Link href="/learning/register-for-cohort" className="btn bg-primary text-white text-xs md:text-sm rounded-full px-4 mx-auto md:mx-0 mt-8" >Register for a Cohort</Link>
          <Link href="/learning/complete-enrollment" className="btn bg-secondary-2 text-gray-900 text-xs md:text-sm rounded-full px-4 mx-auto md:mx-0 mt-8" >Complete Enrollment</Link>
        </div>
      </figure>

      <article className="text-base-content md:w-1/2 flex flex-col">
        <header className="flex flex-col">
          <h2 className="text-2xl xl:text-3xl text-primary font-550 mx-auto md:mx-0 text-center md:text-left">Begin your Journey to Success in Tech today </h2>
        </header>
        
        <p className="text-primary xl:max-w-800 mt-6 text-sm lg:text-lg text-center md:text-left">
          Embark on your tech career with Quales Academy, where industry-leading programs equip you with the skills and expertise needed to thrive. Our comprehensive courses in QA Engineering, Scrum Mastery, Data Analytics, and more are designed to fast-track your success. Start learning today and unlock your potential in the ever-evolving tech landscape!
        </p>
        <div className="hidden md:block">
          <Link href="/learning/register-for-cohort" className="btn bg-primary text-white text-xs md:text-sm rounded-full px-4 xl:px-9 mx-auto md:mx-0 mt-8" >Register for a Cohort</Link>

          <Link href="/learning/complete-enrollment" className="btn bg-secondary-2 text-gray-900 text-xs md:text-sm rounded-full px-4 xl:px-9 mx-auto md:mx-0 lg:ml-3 mt-8" >Complete Enrollment</Link>
        </div>
      </article>

      <button onClick={backToTop} className="btn btn-circle fixed bottom-10 right-10 shadow-lg bg-primary z-50"> <ArrowUpIcon className="w-5 text-white" /></button>
      
    </section>
  )
}

export default HeroSection;