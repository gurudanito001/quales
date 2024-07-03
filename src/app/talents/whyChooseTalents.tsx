import Image from "next/image"
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/solid";


const WhyChooseTalents = () => {

  return (
    <section className="bg-white px-5 xl:px-28 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col mb-5 items-center md:ml-auto">
          <header className=" w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-64 h-56 shadow-md border border-gray-200 rounded-lg">
            <article className=" flex flex-col items-center relative -mt-12">
              <span className=" rounded-full h-28 w-28 bg-gray-200 flex items-center content-center mb-3">
                <UserIcon className="text-gray-500 w-20 mx-auto" />
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                {/* <Image src="/images/codeIcon.png" width={15} height={15} objectFit="contain" alt="Code Icon" /> */}
                <span className="text-primary font-semibold ml-1">Software Test Engineer</span> 
                <span className="text-primary font-light ml-1">Previously worked with:</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-center">
          <header className=" w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-64 h-56 shadow-md border border-gray-200 rounded-lg">
            <article className=" flex flex-col items-center relative -mt-12">
              <span className=" rounded-full h-28 w-28 bg-gray-200 flex items-center content-center mb-3">
                <UserIcon className="text-gray-500 w-20 mx-auto" />
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                {/* <Image src="/images/codeIcon.png" width={15} height={15} objectFit="contain" alt="Code Icon" /> */}
                <span className="text-primary font-semibold ml-1">Software Test Engineer</span> 
                <span className="text-primary font-light ml-1">Previously worked with:</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-center md:mr-auto">
          <header className=" w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-64 h-56 shadow-md border border-gray-200 rounded-lg">
            <article className=" flex flex-col items-center relative -mt-12">
              <span className=" rounded-full h-28 w-28 bg-gray-200 flex items-center content-center mb-3">
                <UserIcon className="text-gray-500 w-20 mx-auto" />
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                {/* <Image src="/images/codeIcon.png" width={15} height={15} objectFit="contain" alt="Code Icon" /> */}
                <span className="text-primary font-semibold ml-1">Software Test Engineer</span> 
                <span className="text-primary font-light ml-1">Previously worked with:</span>
              </div>
            </article>
          </div>
        </div>
      </div>


      <div className="px-5 py-28 flex flex-col-reverse md:flex-row items-center">
        <article className="text-base-content md:w-3/5">
          <header >
            <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 inline text-transparent bg-clip-text"> Why Choose Quales Talents? </h3>
          </header>

          <p className="text-primary max-w-600 mt-6 text-sm lg:text-lg">
          Experience unparalleled expertise and immediate impact with our rigorously vetted, top-tier technology professionals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            <div className=" bg-gray-200 p-5 rounded-2xl">Expertly Trained Professionals</div>
            <div className=" bg-gray-200 p-5 rounded-2xl">Immediate Value Delivery</div>
            <div className=" bg-gray-200 p-5 rounded-2xl">Innovative Problem Solvers</div>
            <div className=" bg-gray-200 p-5 rounded-2xl">Diverse Skill Sets</div>
            <div className=" bg-gray-200 p-5 rounded-2xl">Proven Track Record</div>
            <div className=" bg-gray-200 p-5 rounded-2xl">Dedicated Support Team</div>
          </div>
          <button className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 md:ml-auto mt-8">Hire Talents</button>
        </article>
        <figure className=" md:w-2/5 mb-10 md:mb-0">
          <Image
            src={`/images/leverage-section-image.png`}
            className="w-100"
            style={{ height: "auto", objectFit: "contain" }}
            alt="Product Image"
            width={700}
            height={700}
          />
        </figure>
      </div>

    </section>
  )
}

export default WhyChooseTalents