"use client"

import Image from "next/image"
import { UserIcon, ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomPrevArrow, CustomNextArrow } from "./customArrows";



const settings = {
  dots: true,
  infinite: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <CustomPrevArrow/>,
  nextArrow: <CustomNextArrow/>,
  arrows: true,
};

const settings2 = {
  fade: true, // Enable fade effect
  autoplay: true,
  autoplaySpeed: 13000,
  infinite: true,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false, // Optional: Show navigation dots
};


const MissionVision = () => {

  return (
    <section className="bg-white md:bg-neutral lg:px-28 flex flex-col items-center">
      <div className="bg-neutral md:bg-white grid grid-cols-1 md:grid-cols-2 py-10 md:mt-14 w-full">
        <article className="text-primary flex flex-col md:border-r md:border-gray-400 p-10">
          <h3 className="text-center text-xl font-550 text-primary mb-5 md:mb-7 px-5">Mission Statement</h3>
          <p className="max-w-md text-center mx-auto">We aim to be world class by establishing a revered ecosystem of young technology stars, mentors, partners, and clients across multiple streams of Technology/Business related fields and bringing them to a global standard of technological relevance, readiness and leadership. We do this through Quales learning - that helps us create technology mavericks and Quales Consulting - that helps us support organisations with their technology needs/resources.</p>
        </article>

        <article className="text-primary flex flex-col p-10">
          <h3 className="text-center text-xl font-550 text-primary mb-5 md:mb-7 px-5">Vision Statement</h3>
          <p className="max-w-md text-center mx-auto">We aim to be a world class organisation supporting the growth of the technology landscape across Africa. We aim to take the best of Africa to the world.</p>
        </article>
      </div>


      <div className="py-10 md:py-14 px-5">
        <h3 className="text-center text-xl xl:text-2xl font-550 text-primary px-5 lg:px-28 pb-7 md:pb-10">Core Values</h3>

        <div className="">
          <span className="inline-block text-primary border-2 border-primary rounded-2xl bg-transparent text-sm md:text-lg px-3 md:px-5 py-3 mx-2 my-1 w-auto">Duty of Care</span>
          <span className="inline-block text-primary border-2 border-primary rounded-2xl bg-transparent text-sm md:text-lg px-3 md:px-5 py-3 mx-2 my-1">Hunger for Growth</span>
          <span className="inline-block text-primary border-2 border-primary rounded-2xl bg-transparent text-sm md:text-lg px-3 md:px-5 py-3 mx-2 my-1">Ownership and Initiative</span>
          <span className="inline-block text-primary border-2 border-primary rounded-2xl bg-transparent text-sm md:text-lg px-3 md:px-5 py-3 mx-2 my-1">Client-Value Creation</span>
          <span className="inline-block text-primary border-2 border-primary rounded-2xl bg-transparent text-sm md:text-lg px-3 md:px-5 py-3 mx-2 my-1">Teamwork</span>
          <span className="inline-block xl:hidden text-primary border-2 border-primary rounded-2xl bg-transparent text-sm md:text-lg px-3 md:px-5 py-3 my-1">Grit and Drive</span>
        </div>

        <div className="mt-3 hidden xl:flex">
          <span className="mx-auto inline-block text-primary border-2 border-primary rounded-2xl bg-transparent text-sm md:text-lg px-3 md:px-5 py-3 my-1">Grit and Drive</span>
        </div>
      </div>

      <div className="bg-white">
        <h3 className="text-xl xl:text-2xl font-550 text-primary px-5 xl:px-28 pt-10 pb-7 md:pt-14 md:pb-10 text-center md:text-left">Our Leadership</h3>


        <div className=" flex px-5 sm:px-12 lg:px-0 xl:px-44 pb-10 lg:pb-14 w-screen">
          <Slider {...settings} className="mx-auto lg:mx-0 w-full flex">
            <div className="mx-auto">
              <div className="flex flex-col-reverse lg:flex-row lg:gap-8">
                <article className="flex flex-col w-full lg:max-w-550 my-auto ml-auto">
                  <h4 className="text-xl lg:text-3xl mx-auto lg:mx-0 lg:mr-auto font-550 bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 text-transparent bg-clip-text my-4">Ayobami Elutade</h4>
                  <div className="text-lg text-primary font-light text-center lg:text-left mb-4 w-full">
                    <Slider {...settings2} className="w-full overflow-x-clip">
                      <p className="w-full mt-8">Ayo is a co-founder at Quales with 12+ years of experience in management and technical expertise cutting across Energy, Fintech, Banking, Telecoms sectors playing a key role as a Senior Engineer and Management in helping these institutions generate multi million dollars in revenue.</p>

                      <p className="w-full mt-8">He holds a degree in Computer Technology and Business Administration, along with various business courses and technology certifications. An alumnus of Harvard Business School, University of South Wales, and Babcock University, his educational background has been pivotal in founding Quales Consulting. Driven by a mission to build human capacity and facilitate gainful employment for talents, he has also played a crucial role in forging strategic partnerships to grow the company.</p>

                      <p className="w-full mt-8">
                        In his leadership role, he oversees Human Resources, Operations, Software Engineering, and Partnerships, focusing on enabling the company&apos;s vision and ensuring operational excellence. His initiatives have significantly contributed to the company&apos;s strategic expansion and sustained success.
                      </p>
                    </Slider>
                  </div>
                </article>

                <figure className="h-80 w-80 bg-[url('/images/ayo-avatar.png')] bg-cover bg-center rounded-full mx-auto lg:mx-0 lg:mr-auto">
                </figure>
              </div>
            </div>

            <div className="mx-auto">
              <div className="flex flex-col-reverse lg:flex-row lg:gap-8">
                <article className="flex flex-col w-full lg:max-w-550 my-auto ml-auto">
                  <h4 className="text-xl lg:text-3xl mx-auto lg:mx-0 lg:mr-auto font-550 bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 text-transparent bg-clip-text my-4">Bob Oghumah</h4>
                  <div className="text-lg text-primary font-light text-center lg:text-left mb-4 w-full">
                    <Slider {...settings2} className="w-full overflow-x-clip">
                      <p className="w-full mt-8">Bob Oghumah is a seasoned, dynamic, and results-driven Software Quality Assurance Engineer based in Dublin, Ireland, with over a decade of extensive experience across diverse sectors including Telecommunications, FinTech, E-Commerce, Legal-Tech, Health-Tech, and Consulting. His areas of expertise at Quales include Leadership, QA consultancy, and Engineering.</p>

                      <p className="w-full mt-8">With a proven track record of delivering robust solutions and driving organizational success through strategic QA initiatives, Bob is renowned for his ability to implement cutting-edge QA testing methodologies. His meticulous approach to software testing has resulted in significant reductions in defects and an unparalleled level of customer satisfaction. As a visionary leader, Bob has spearheaded the establishment of various high-performing technology teams, leveraging his exceptional leadership skills to foster innovation and drive efficiency.</p>

                      <p className="w-full mt-8">
                        His qualifications and certifications include a BSc. in Computer Science and an MSc. in Computing.
                      </p>
                    </Slider>
                  </div>
                </article>

                <figure className="h-80 w-80 bg-[url('/images/bob-avatar.png')] bg-cover bg-center rounded-full mx-auto lg:mx-0 lg:mr-auto">
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