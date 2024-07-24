"use client"

import Image from "next/image"
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";


const WhyChooseTalents = () => {
  const router = useRouter();
  return (
    <section className="bg-white py-16 xl:px-28">
      <div className="grid grid-cols-1 md:grid-cols-3 bg-neutral md:bg-white py-10">
        <div className="flex flex-col mb-5 items-center">
          <header className=" w-64 h-24 shadow-md border border-gray-200 rounded-lg bg-white"></header>
          <div className=" w-64 h-56 shadow-md border border-gray-200 rounded-lg bg-white">
            <article className="flex flex-col items-center relative -mt-12 px-5">
              <span className=" rounded-full h-20 w-20 bg-[url('/images/habeeb.png')] bg-center bg-cover mb-3">
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-lg">ADEWALE ABDULRASAQ HABEEB</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary font-semibold ml-1">Software Test Engineer</span> 
                <span className="text-primary font-light ml-1">Previously worked with:</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-center">
          <header className=" w-64 h-24 shadow-md border border-gray-200 rounded-lg bg-white"></header>
          <div className=" w-64 h-56 shadow-md border border-gray-200 rounded-lg bg-white">
            <article className="flex flex-col items-center relative -mt-12 px-5">
              <span className=" rounded-full h-20 w-20 bg-[url('/images/moses.jpg')] bg-center bg-cover mb-3">
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-lg">MOSES <br/> AYANKOYA</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary font-semibold ml-1">Automation Engineer</span> 
                <span className="text-primary font-light ml-1">Previously worked with:</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-center">
          <header className=" w-64 h-24 shadow-md border border-gray-200 rounded-lg bg-white"></header>
          <div className=" w-64 h-56 shadow-md border border-gray-200 rounded-lg bg-white">
            <article className="flex flex-col items-center relative -mt-12 px-5">
              <span className=" rounded-full h-28 w-28 bg-neutral text-primary flex items-center content-center mb-3">
                <UserIcon className="text-gray-500 w-20 mx-auto" />
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary font-semibold ml-1">Software Test Engineer</span> 
                <span className="text-primary font-light ml-1">Previously worked with:</span>
              </div>
            </article>
          </div>
        </div>

      </div>


      <div className="px-5 md:py-10 flex flex-col-reverse md:flex-row items-center mt-14 lg:mt-0">
        <article className="flex flex-col text-base-content lg:w-1/2 mx-auto">
          <header className="flex">
            <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 inline text-transparent bg-clip-text mx-auto lg:mx-0"> Why Choose Quales Talents? </h3>
          </header>

          <p className="text-primary max-w-600 mt-6 text-sm lg:text-lg text-center lg:text-left">
          Experience unparalleled expertise and immediate impact with our rigorously vetted, top-tier technology professionals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            <div className="bg-neutral text-primary p-5 rounded-2xl">Expertly Trained Professionals</div>
            <div className="bg-neutral text-primary p-5 rounded-2xl">Immediate Value Delivery</div>
            <div className="bg-neutral text-primary p-5 rounded-2xl">Innovative Problem Solvers</div>
            <div className="bg-neutral text-primary p-5 rounded-2xl">Diverse Skill Sets</div>
            <div className="bg-neutral text-primary p-5 rounded-2xl">Proven Track Record</div>
            <div className="bg-neutral text-primary p-5 rounded-2xl">Dedicated Support Team</div>
          </div>
        </article>
        <figure className="lg:w-1/2 mb-10 md:mb-0 hidden lg:block">
          <Image
            src={`/images/our-community.svg`}
            className="w-100"
            style={{ height: "auto", objectFit: "contain" }}
            alt="Product Image"
            width={700}
            height={700}
          />
        </figure>
      </div>
      
      <div className="flex">
        <button className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto mt-8" onClick={()=>router.push("/hire-talents")}>Hire Talents</button>
      </div>

    </section>
  )
}

export default WhyChooseTalents