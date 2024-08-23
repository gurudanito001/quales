
import Image from "next/image";
import { ArrowLongRightIcon, ArrowLongDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const HowToEnroll =()=>{

  return(
    <section id="howToEnroll" className="py-28 bg-neutral px-5 xl:px-28">
      <h2 className="text-center text-xl md:text-2xl font-semibold mb-3 text-primary">How To Enroll</h2>
      <p className="text-md md:text-lg text-center text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula.</p>

      <div className="flex flex-col mt-14">
        <div className="flex flex-col md:flex-row md:gap-3 justify-center w-full">

          <div className="w-56 xl:w-full max-w-72 h-full flex flex-col items-center bg-base p-4 xl:p-12 my-3 shadow mx-auto md:mx-0 md:ml-auto rounded-xl md:min-h-80">
            <span className="w-20 h-20 md:w-28 md:h-28 flex items-center bg-white rounded-full">
              <Image src="/images/explore-programs.svg" className="mx-auto w-10 h-10 md:w-14 md:h-14" width={50} height={50} objectFit="contain" alt="Calendar Icon" />
            </span>
            <h6 className="text-primary mt-4 text-center font-550">Explore Programs</h6>
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light"> Start by exploring our courses we offer, including QA Engineering and Scrum Mastery. </p>
          </div>

          <div className="w-auto flex items-center justify-center">
            <ArrowLongRightIcon className="text-primary w-8 hidden md:inline" />
            <ArrowLongDownIcon className="text-primary w-8 inline md:hidden" />
          </div>



          <div className="w-56 xl:w-full max-w-72 h-full flex flex-col items-center bg-base p-4 xl:p-12 my-3 shadow mx-auto md:mx-0 rounded-xl md:min-h-80">
            <span className="w-20 h-20 md:w-28 md:h-28 flex items-center bg-white rounded-full">
              <Image src="/images/choose-course.svg" className="mx-auto w-10 h-10 md:w-14 md:h-14" width={50} height={50} objectFit="contain" alt="List Icon" />
            </span>
            <h6 className="text-primary mt-4 text-center font-550">Choose Course</h6>
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light">Once you’ve identified the course that fits your goals, review the course details carefully.</p>
          </div>

          <div className="w-auto flex items-center justify-center">
            <ArrowLongRightIcon className="text-primary w-8 hidden md:inline" />
            <ArrowLongDownIcon className="text-primary w-8 inline md:hidden" />
          </div>



          <div className="w-56 xl:w-full max-w-72 h-full flex flex-col items-center bg-base p-4 xl:p-12 my-3 shadow mx-auto md:mx-0 md:mr-auto rounded-xl md:min-h-80">
            <span className="w-20 h-20 md:w-28 md:h-28 flex items-center bg-white rounded-full">
              <Image src="/images/register-online.svg" className="mx-auto w-10 h-10 md:w-14 md:h-14" width={50} height={50} objectFit="contain" alt="List Icon" />
            </span>
            <h6 className="text-primary mt-4 text-center font-550">Register Online</h6>
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light px-1">Click on the “Register for a Cohort” button on your chosen course page and fill the form</p>
          </div>
        </div>

        {/* <div className="w-auto flex items-center justify-center sm:hidden lg:flex">
          <ArrowLongRightIcon className="text-primary w-8 hidden md:inline" />
          <ArrowLongDownIcon className="text-primary w-8 inline md:hidden" />
        </div> */}

        <div className="flex flex-col md:flex-row md:gap-3 justify-center w-full">

          <div className="w-56 xl:w-full max-w-72 h-full flex flex-col items-center bg-base p-4 xl:p-12 my-3 shadow mx-auto md:mx-0 md:ml-auto rounded-xl md:min-h-80">
            <span className="w-20 h-20 md:w-28 md:h-28 flex items-center bg-white rounded-full">
              <Image src="/images/make-payment.svg" className="mx-auto w-10 h-10 md:w-14 md:h-14" width={50} height={50} objectFit="contain" alt="Calendar Icon" />
            </span>
            <h6 className="text-primary mt-4 text-center font-550">Make Payment</h6>
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light"> Promptly complete your payment to secure your spot in the upcoming cohort, as spaces are often limited.</p>
          </div>

          <div className="w-auto flex items-center justify-center">
            <ArrowLongRightIcon className="text-primary w-8 hidden md:inline" />
            <ArrowLongDownIcon className="text-primary w-8 inline md:hidden" />
          </div>



          <div className="w-56 xl:w-full max-w-72 h-full flex flex-col items-center bg-base p-4 xl:p-12 my-3 shadow mx-auto md:mx-0 rounded-xl md:min-h-80">
            <span className="w-20 h-20 md:w-28 md:h-28 flex items-center bg-white rounded-full">
              <Image src="/images/onboarding-process.svg" className="mx-auto w-10 h-10 md:w-14 md:h-14" width={50} height={50} objectFit="contain" alt="List Icon" />
            </span>
            <h6 className="text-primary mt-4 text-center font-550">Onboarding Process</h6>
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light">You’ll receive an official welcome email from Quales Academy with course date and pre-course details.</p>
          </div>

          <div className="w-auto flex items-center justify-center">
            <ArrowLongRightIcon className="text-primary w-8 hidden md:inline" />
            <ArrowLongDownIcon className="text-primary w-8 inline md:hidden" />
          </div>



          <div className="w-56 xl:w-full max-w-72 h-full flex flex-col items-center bg-base p-4 xl:p-12 my-3 shadow mx-auto md:mx-0 md:mr-auto rounded-xl md:min-h-80">
            <span className="w-20 h-20 md:w-28 md:h-28 flex items-center bg-white rounded-full">
              <Image src="/images/get-started.svg" className="mx-auto w-10 h-10 md:w-14 md:h-14" width={50} height={50} objectFit="contain" alt="List Icon" />
            </span>
            <h6 className="text-primary mt-4 text-center font-550">Get Started</h6>
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light px-2"> On the course start date, log in to Zoom and join the class with the provided credentials.</p>
          </div>
        </div>
      </div>


      <div className="flex justify-center">
        <Link href="/hire-talents" className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-8" >View More</Link>
      </div>



      
    </section>
  )
}

export default HowToEnroll