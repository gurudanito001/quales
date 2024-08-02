"use client"

import Image from "next/image"
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false
};

const WhyChooseTalents = () => {
  const router = useRouter();
  return (
    <section className="bg-white pb-16">
      <div className=" flex sm:px-12 xl:px-72 bg-neutral2 py-32">
        <Slider {...settings}  className="mx-auto md:mx-0 w-full">
          <div>
            <div className="flex flex-col md:flex-row gap-8">
              <h3 className="text-xl md:text-3xl mx-auto md:mx-0 mr-auto font-semibold bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 text-transparent bg-clip-text inline md:hidden">Adewale Abdulrasaq Habeeb</h3>
              <figure className="h-80 w-80 lg:h-96 lg:w-96 border shadow-md bg-[url('/images/habeeb.png')] bg-no-repeat bg-cover bg-center flex items-center content-center rounded-lg mx-auto md:mx-0">
              </figure>
              <article className="flex flex-col md:w-max my-auto">
                <h3 className="text-xl md:text-3xl mr-auto font-semibold bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 text-transparent bg-clip-text hidden md:inline mb-2">Adewale Abdulrasaq Habeeb</h3>
                <h6 className="text-primary font-semibold text-lg text-center md:text-left">PowerBI Specialist</h6>
                <p className="text-lg text-primary text-center md:text-left mb-4"> <strong>Experience:</strong> 7 years</p>
                <Image className="mx-auto md:mx-0" alt="continent image" src="/images/africa.svg" width={150} height={150} />
              </article>
            </div>
          </div>


          <div>
            <div className="flex flex-col md:flex-row gap-8">
              <h3 className="text-xl md:text-3xl mx-auto md:mx-0 mr-auto font-semibold bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 text-transparent bg-clip-text inline md:hidden">Moses Ayankoya</h3>
              <figure className="h-80 w-80 lg:h-96 lg:w-96 border shadow-md bg-[url('/images/moses.jpg')] bg-no-repeat bg-cover bg-center flex items-center content-center rounded-lg mx-auto md:mx-0">
              </figure>
              <article className="flex flex-col md:w-max my-auto">
                <h3 className="text-xl md:text-3xl mr-auto font-semibold bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 text-transparent bg-clip-text hidden md:inline mb-2">Moses Ayankoya</h3>
                <h6 className="text-primary font-semibold text-lg text-center md:text-left">Senior iOS Developer</h6>
                <p className="text-lg text-primary text-center md:text-left mb-4"> <strong>Experience:</strong> 9+ years</p>
                <Image className="mx-auto md:mx-0" alt="continent image" src="/images/africa.svg" width={150} height={150} />
              </article>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row gap-8">
              <h3 className="text-xl md:text-3xl mx-auto md:mx-0 mr-auto font-semibold bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 text-transparent bg-clip-text inline md:hidden">Ashu Tyagi</h3>
              <figure className="h-80 w-80 lg:h-96 lg:w-96 bg-white shadow-md flex items-center content-center rounded-lg mx-auto md:mx-0">
                <UserIcon className="text-gray-500 w-52 mx-auto" />
              </figure>
              <article className="flex flex-col md:w-max my-auto">
                <h3 className="text-xl md:text-3xl mr-auto font-semibold bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 text-transparent bg-clip-text hidden md:inline mb-2">Ashu Tyagi</h3>
                <h6 className="text-primary font-semibold text-lg text-center md:text-left">Senior Android Engineer</h6>
                <p className="text-lg text-primary text-center md:text-left mb-4"> <strong>Experience:</strong> 6+ years</p>
                <Image className="mx-auto md:mx-0" alt="continent image" src="/images/asia.svg" width={150} height={150} />
              </article>
            </div>
          </div>
        </Slider>
      </div>
      






      {/* <div className="grid grid-cols-1 md:grid-cols-3 bg-neutral md:bg-white py-10">
        <div className="flex flex-col mb-5 items-center">
          <header className=" w-64 h-24 shadow-md border border-gray-200 rounded-lg bg-white"></header>
          <div className=" w-64 h-56 shadow-md border border-gray-200 rounded-lg bg-white">
            <article className="flex flex-col items-center relative -mt-12 px-5">
              <span className=" rounded-full h-20 w-20 bg-[url('/images/habeeb.png')] bg-center bg-cover mb-3">
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-lg">ADEWALE ABDULRASAQ HABEEB</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary font-semibold ml-1">PowerBI Specialist</span> 
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

      </div> */}


      <div className="px-5 md:py-10 flex flex-col-reverse md:flex-row items-center mt-14 lg:mt-0 xl:px-28">
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