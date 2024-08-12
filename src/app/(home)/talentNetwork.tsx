
import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";


const TalentNetwork = ()=>{
  return(
    <section className=" bg-white px-5 lg:px-28 py-28 grid grid-cols-1 md:grid-cols-2">

      <article className="text-base-content flex flex-col order-1 md:order-2">
        <header className="mt-auto flex">
          <h2 className="text-2xl md:text-3xl font-550 bg-gradient-to-r max-w-550  from-slate-700 to-purple-400 inline text-transparent bg-clip-text mx-auto md:mx-0">Talents Within our Network</h2>
        </header>

        <p className="text-primary max-w-600 mt-6 text-sm lg:text-lg font-light text-center md:text-left">
          Our network boasts a diverse group of highly skilled professionals specializing in QA Engineering, Scrum Mastery, Data Science, and Software Development. Each talent is meticulously vetted and trained to ensure they bring unparalleled expertise and value to your organization. Discover the power of a workforce dedicated to excellence and innovation.
        </p>
        <Link href="/explore-talents" className="btn bg-primary hidden md:inline-flex items-center text-white text-sm md:text-lg md:font-medium font-normal rounded-full w-48 mt-8 mb-auto">Explore Talents</Link>
      </article>
      
      <div className="grid grid-cols-2 mb-5 md:mb-0 gap-5 order-2 md:order-1 mt-10 md:mt-0">
        <div className="flex flex-col mb-5 items-end ">
          <header className=" w-40 h-16 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-40 min-h-40 shadow-md border border-gray-200 rounded-lg">
            <article className=" flex flex-col items-center relative -mt-12">
              <span className=" rounded-full h-20 w-20 bg-[url('/images/habeeb.png')] bg-center bg-cover mb-3">
              </span>
              <h6 className="text-primary text-center leading-tight mb-2 font-550 uppercase text-sm">Adewale <br/> Abdulrasaq <br/> Habeeb</h6>
              <div className="mt-2 px-5 text-primary text-sm font-light text-center"> 
                <Image src="/images/codeIcon.svg" width={15} height={15} objectFit="contain" alt="Code Icon" className="mr-2 inline"/>
                <span className="mt-1">Data Analyst</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-start ">
          <header className=" w-40 h-16 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-40 min-h-40 shadow-md border border-gray-200 rounded-lg">
            <article className=" flex flex-col items-center relative -mt-12">
              <span className="rounded-full h-20 w-20 bg-[url('/images/moses.jpg')] bg-center bg-cover mb-3">
              </span>
              <h6 className="text-primary text-center leading-tight mb-2 font-550 uppercase text-sm">Moses <br /> Ayankoya</h6>
              <div className="mt-5 px-5 text-primary text-sm font-light text-center"> 
                <Image src="/images/codeIcon.svg" width={15} height={15} objectFit="contain" alt="Code Icon" className="mr-2 inline"/>
                <span className="mt-1">Mobile App Developer (IOS)</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-end ">
          <header className=" w-40 h-16 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-40 min-h-40 shadow-md border border-gray-200 rounded-lg">
            <article className=" flex flex-col items-center relative -mt-12">
              <span className=" rounded-full h-20 w-20 bg-gray-200 flex items-center content-center mb-3">
                <UserIcon className="text-gray-500 w-10 mx-auto" />
              </span>
              <h6 className="text-primary text-center leading-tight mb-2 font-550 uppercase text-sm">Ashu <br /> Tyagi</h6>
              <div className="mt-5 px-2 text-primary text-sm font-light text-center"> 
                <Image src="/images/codeIcon.svg" width={15} height={15} objectFit="contain" alt="Code Icon" className="mr-2 inline"/>
                <span className="mt-1">Mobile App Developer (Android)</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-start ">
          <header className=" w-40 h-16 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-40 min-h-40 shadow-md border border-gray-200 rounded-lg">
            <article className=" flex flex-col items-center relative -mt-12">
              <span className="rounded-full h-20 w-20 bg-[url('/images/abati-1.jpg')] bg-center bg-cover mb-3">
              </span>
              <h6 className="text-primary text-center leading-tight mb-2 font-550 uppercase text-sm">Abati Adeotan Senayon</h6>
              <div className="mt-5 px-2 text-primary text-sm font-light text-center"> 
                <Image src="/images/codeIcon.svg" width={15} height={15} objectFit="contain" alt="Code Icon" className="mr-2 inline"/>
                <span className="mt-1">Software Test Engineer</span>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div className="flex order-3">
        <Link href="/explore-talents" className="btn bg-primary md:hidden text-white text-sm md:text-lg font-normal md:font-medium rounded-full w-48 mt-8 mx-auto">Explore Talents</Link>
      </div>

      


    </section>
  )
}

export default TalentNetwork