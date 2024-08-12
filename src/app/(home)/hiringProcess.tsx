
import Image from "next/image";
import { ArrowLongRightIcon, ArrowLongDownIcon } from "@heroicons/react/24/outline";

const HiringProcess =()=>{ //grid grid-cols-2 lg:grid-cols-4 mt-12 md:mt-20 gap-5

  return(
    <section className="py-28 bg-neutral px-5 xl:px-28">
      <h2 className="text-center text-xl md:text-2xl font-semibold mb-3 text-primary">Our Hiring Process</h2>
      <p className="text-md md:text-lg text-center text-primary">We have gone full circle so you can get to your needs in a simple, straight line</p>

      <div className="flex flex-col lg:flex-row mt-14">

        <div className="flex flex-col sm:flex-row justify-around w-full">

          <div className="w-56 xl:w-full max-w-72 h-full flex flex-col items-center bg-base p-4 xl:p-12 my-3 shadow mx-auto rounded-xl sm:min-h-72">
            <span className="w-20 h-20 md:w-28 md:h-28 flex items-center bg-white rounded-full">
              <Image src="/images/schedule.svg" className="mx-auto w-10 h-10 md:w-14 md:h-14" width={50} height={50} objectFit="contain" alt="Calendar Icon" />
            </span>
            <h6 className="text-primary mt-4 text-center font-550">Schedule Meeting</h6>
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light"> Book a consultation to discuss your specific needs and project requirements. </p>
          </div>

          <div className="w-auto flex items-center justify-center">
            <ArrowLongRightIcon className="text-primary w-8 hidden sm:inline" />
            <ArrowLongDownIcon className="text-primary w-8 inline sm:hidden" />
          </div>



          <div className="w-56 xl:w-full max-w-72 h-full flex flex-col items-center bg-base p-4 xl:p-12 my-3 shadow mx-auto rounded-xl sm:min-h-72">
            <span className="w-20 h-20 md:w-28 md:h-28 flex items-center bg-white rounded-full">
              <Image src="/images/list.svg" className="mx-auto w-10 h-10 md:w-14 md:h-14" width={50} height={50} objectFit="contain" alt="List Icon" />
            </span>
            <h6 className="text-primary mt-4 text-center font-550">Confirm Talents</h6>
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light">Review and select from our pool of pre-vetted, highly skilled professionals.</p>
          </div>
        </div>

        <div className="w-auto flex items-center justify-center sm:hidden lg:flex">
          <ArrowLongRightIcon className="text-primary w-8 hidden sm:inline" />
          <ArrowLongDownIcon className="text-primary w-8 inline sm:hidden" />
        </div>

        <div className="flex flex-col sm:flex-row justify-around w-full">

          <div className="w-56 xl:w-full max-w-72 h-full flex flex-col items-center bg-base p-4 xl:p-12 my-3 shadow mx-auto rounded-xl sm:min-h-72">
            <span className="w-20 h-20 md:w-28 md:h-28 flex items-center bg-white rounded-full">
              <Image src="/images/contract.svg" className="mx-auto w-10 h-10 md:w-14 md:h-14" width={50} height={50} objectFit="contain" alt="Contract Icon" />
            </span>
            <h6 className="text-primary mt-4 text-center font-550">Sign Contract</h6>
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light">Formalize your partnership with a clear and comprehensive contract.</p>
          </div>

          <div className="w-auto flex items-center justify-center">
            <ArrowLongRightIcon className="text-primary w-8 hidden sm:inline" />
            <ArrowLongDownIcon className="text-primary w-8 inline sm:hidden" />
          </div>

          <div className="w-56 xl:w-full max-w-72 h-full flex flex-col items-center bg-base p-4 xl:p-12 my-3 shadow mx-auto rounded-xl sm:min-h-72">
            <span className="w-20 h-20 md:w-28 md:h-28 flex items-center bg-white rounded-full">
              <Image src="/images/suitcase.svg" className="mx-auto w-10 h-10 md:w-14 md:h-14" width={50} height={50} objectFit="contain" alt="Suitcase Icon" />
            </span>
            <h6 className="text-primary mt-4 text-center font-550">Talent Resume</h6>
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light">Your chosen talent starts working on your project, bringing immediate value and expertise.</p>
          </div>
        </div>
      </div>




      
    </section>
  )
}

export default HiringProcess