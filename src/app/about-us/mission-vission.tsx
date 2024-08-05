"use client"

import Image from "next/image"
import { UserIcon, ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
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
  prevArrow: <button type="button" className="slick-prev text-gray-700"></button>,
  
};

const MissionVision = () => {
  return (
    <section className="bg-white md:bg-neutral lg:px-28 flex flex-col items-center">
      <div className="bg-neutral md:bg-white grid grid-cols-1 md:grid-cols-2 py-10 md:mt-14 w-full">
        <article className="text-primary flex flex-col md:border-r md:border-gray-400 p-10">
          <h3 className="text-center text-xl font-semibold text-primary mb-5 md:mb-7 px-5">Mission Statement</h3>
          <p className="max-w-md text-center mx-auto">We aim to be world class by establishing a revered ecosystem of young technology stars, mentors, partners, and clients across multiple streams of Technology/Business related fields and bringing them to a global standard of technological relevance, readiness and leadership. We do this through Quales learning - that helps us create technology mavericks and Quales Consulting - that helps us support organisations with their technology needs/resources.</p>
        </article>

        <article className="text-primary flex flex-col p-10">
          <h3 className="text-center text-xl font-semibold text-primary mb-5 md:mb-7 px-5">Vision Statement</h3>
          <p className="max-w-md text-center mx-auto">We aim to be a world class organisation supporting the growth of the technology landscape across Africa. We aim to take the best of Africa to the world.</p>
        </article>
      </div>


      <div className="py-10 md:py-14 px-5">
        <h3 className="text-center text-xl xl:text-2xl font-semibold text-primary px-5 lg:px-28 pb-7 md:pb-10">Core Values</h3>

        <div>
          <span className="inline-block text-primary border border-primary rounded-2xl bg-transparent text-sm md:text-lg px-3 md:px-7 py-3 mx-2 my-1">Duty of Care</span>
          <span className="inline-block text-primary border border-primary rounded-2xl bg-transparent text-sm md:text-lg px-3 md:px-7 py-3 mx-2 my-1">Hunger for Growth</span>
          <span className="inline-block text-primary border border-primary rounded-2xl bg-transparent text-sm md:text-lg px-3 md:px-7 py-3 mx-2 my-1">Ownership and Initiative</span>
          <span className="inline-block text-primary border border-primary rounded-2xl bg-transparent text-sm md:text-lg px-3 md:px-7 py-3 mx-2 my-1">Client-Value Creation</span>
          <span className="inline-block text-primary border border-primary rounded-2xl bg-transparent text-sm md:text-lg px-3 md:px-7 py-3 mx-2 my-1">Teamwork</span>
          <span className="inline-block text-primary border border-primary rounded-2xl bg-transparent text-sm md:text-lg px-3 md:px-7 py-3 mx-2 my-1">Grit and Drive</span>
        </div>
      </div>

      <div className="bg-white">
        <h3 className="text-xl xl:text-2xl font-semibold text-primary px-5 xl:px-28 pt-10 pb-7 md:pt-14 md:pb-10 text-center md:text-left">Our Leadership</h3>


        <div className=" flex px-5 sm:px-12 xl:px-60 pb-10 md:pb-14 w-screen">
          <Slider {...settings} className="mx-auto md:mx-0 w-full flex">
            <div className="mx-auto">
              <div className="flex flex-col-reverse md:flex-row gap-8">
                <article className="flex flex-col md:w-max my-auto ml-auto">
                  <h3 className="text-xl md:text-3xl mx-auto md:mx-0 md:mr-auto font-semibold bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 text-transparent bg-clip-text mb-4">Ayobami Elutade</h3>
                  <p className="text-lg text-primary font-light text-center md:text-left mb-4 max-w-xl">
                    Ayo is a co-founder at Quales with 12+ years of experience in management and technical expertise cutting across Energy, Fintech, Banking, Telecoms sectors playing a key role as a Senior Engineer and Management in helping these institutions generate multi million dollars in revenue.
                  </p>
                </article>

                <figure className="h-80 w-80 bg-neutral2  bg-[url('/images/ayo-avatar.png')] bg-cover bg-center rounded-full mx-auto md:mx-0 md:mr-auto">
                </figure>
              </div>
            </div>

            <div className="mx-auto">
              <div className="flex flex-col-reverse md:flex-row gap-8">
                <article className="flex flex-col md:w-max my-auto ml-auto">
                  <h3 className="text-xl md:text-3xl mx-auto md:mx-0 md:mr-auto font-semibold bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 text-transparent bg-clip-text mb-4">Bob Oghumah</h3>
                  <p className="text-lg text-primary font-light text-center md:text-left mb-4 max-w-xl">
                    Bob Oghumah is a seasoned, dynamic, and results-driven Software Quality Assurance Engineer based in Dublin, Ireland, with over a decade of extensive experience across diverse sectors including Telecommunications, FinTech, E-Commerce, Legal-Tech, Health-Tech, and Consulting. His areas of expertise 
                  </p>
                </article>

                <figure className="h-80 w-80 bg-neutral2  bg-[url('/images/bob-avatar.png')] bg-cover bg-center rounded-full mx-auto md:mx-0 md:mr-auto">
                </figure>
              </div>
            </div>

            <div className="mx-auto">
              <div className="flex flex-col-reverse md:flex-row gap-8">
                <article className="flex flex-col md:w-max my-auto ml-auto">
                  <h3 className="text-xl md:text-3xl mx-auto md:mx-0 md:mr-auto font-semibold bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 text-transparent bg-clip-text mb-4">Akinola Odunlade</h3>
                  <p className="text-lg text-primary font-light text-center md:text-left mb-4 max-w-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proin dictum orci non nisi rhoncus, eu dignissim libero efficitur. Nullam a mollis dui. Sed eget malesuada enim. 
                  </p>
                </article>

                <figure className="h-80 w-80 border shadow-md bg-neutral2 flex  rounded-lg mx-auto md:mx-0 md:mr-auto">
                  <UserIcon className="w-48 m-auto text-gray-600" />
                </figure>
              </div>
            </div>

          </Slider>
        </div>
      </div>
    </section>
  )
}

export default MissionVision