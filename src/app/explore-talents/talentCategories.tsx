import Image from "next/image"
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";


const TelentCategories = () => {
  return (
    <section className="bg-white px-5 xl:px-28 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4">
        <Link href="/explore-talents/qa-engineers" className="flex flex-col items-center md:border-r  md:border-gray-400 px-3 sm:px-8 pb-8 cursor-pointer">
          <Image src="/images/qaEngineer.svg" className="mx-auto w-24 h-24" width={150} height={150} objectFit="contain" alt="qa-engineer Icon" />
          <h4 className="text-primary font-semibold my-2 text-lg text-center">QA ENGINEERS</h4>
          <p className="text-center text-primary text-sm max-w-56">Our QA Engineers ensure the highest standards of product quality through rigorous testing and meticulous attention to detail. </p>
          <ArrowRightIcon className="w-5 text-primary mt-3 mx-auto md:ml-auto md:mr-0 md:mt-auto" />
        </Link>

        <Link href="/explore-talents/software-developers" className="flex flex-col items-center border-r-0 md:border-r md:border-gray-400 px-8 pb-8 cursor-pointer">
          <Image src="/images/softwareDeveloper.svg" className="mx-auto w-24 h-24" width={150} height={150} objectFit="contain" alt="Software Developer Icon" />
          <h4 className="text-primary font-semibold my-2 text-lg text-center">SOFTWARE DEVELOPERS</h4>
          <p className="text-center text-primary text-sm max-w-56">Our Software Developers create innovative, scalable solutions that drive technological advancements and business growth. </p>
          <ArrowRightIcon className="w-5 text-primary mt-3 mx-auto md:ml-auto md:mr-0" />
        </Link>

        <Link href="/explore-talents/product-managers" className="flex flex-col items-center border-r-0 md:border-r md:border-gray-400 px-8 pb-8 cursor-pointer">
          <Image src="/images/productManager.svg" className="mx-auto w-24 h-24" width={150} height={150} objectFit="contain" alt="Product Manager Icon" />
          <h4 className="text-primary font-semibold my-2 text-lg text-center">PRODUCT MANAGERS</h4>
          <p className="text-center text-primary text-sm max-w-56">Our Product Managers lead projects from concept to completion, aligning product vision with market needs and strategic goals. </p>
          <ArrowRightIcon className="w-5 text-primary mt-3 mx-auto md:ml-auto md:mr-0 md:mt-auto" />
        </Link>

        <Link href="/explore-talents/ui-ux-designers" className="flex flex-col items-center px-8 pb-8 cursor-pointer">
          <Image src="/images/uiuxDesigner.svg" className="mx-auto w-24 h-24" width={150} height={150} objectFit="contain" alt="UI UX designer Icon" />
          <h4 className="text-primary font-semibold my-2 text-lg text-center">UI/UX DESIGNERS</h4>
          <p className="text-center text-primary text-sm max-w-56">Our UI/UX Designers craft intuitive, engaging interfaces that enhance user experiences and elevate brand interaction.</p>
          <ArrowRightIcon className="w-5 text-primary mt-3 mx-auto md:ml-auto md:mr-0 md:mt-auto" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-t-0 md:border-t md:border-gray-400">
        <Link href="/explore-talents/business-analysts" className="flex flex-col items-center border-r-0 md:border-r md:border-gray-400 p-8 cursor-pointer">
          <Image src="/images/businessAnalyst.svg" className="mx-auto w-24 h-24" width={150} height={150} objectFit="contain" alt="Business Analyst Icon" />
          <h4 className="text-primary font-semibold my-2 text-lg text-center">BUSINESS ANALYSTS</h4>
          <p className="text-center text-primary text-sm max-w-56">Our Business Analysts bridge the gap between business needs and technical solutions, driving informed decision-making and efficiency. </p>
          <ArrowRightIcon className="w-5 text-primary mt-3 mx-auto md:ml-auto md:mr-0" />
        </Link>

        <Link href="/explore-talents/scrum-masters" className="flex flex-col items-center border-r-0 md:border-r md:border-gray-400 p-8 cursor-pointer">
          <Image src="/images/scrumMaster.svg" className="mx-auto w-24 h-24" width={150} height={150} objectFit="contain" alt="Scrum Master Icon" />
          <h4 className="text-primary font-semibold my-2 text-lg text-center">SCRUM MASTERS</h4>
          <p className="text-center text-primary text-sm max-w-56">Our Scrum Masters facilitate agile methodologies, ensuring effective team collaboration and timely project delivery.</p>
          <ArrowRightIcon className="w-5 text-primary mt-3 mx-auto md:ml-auto md:mr-0 md:mt-auto" />
        </Link>

        <Link href="/explore-talents/data-analysts" className="flex flex-col items-center p-8 cursor-pointer" >
          <Image src="/images/dataAnalyst.svg" className="mx-auto w-24 h-24" width={150} height={150} objectFit="contain" alt="Data Analyst Icon" />
          <h4 className="text-primary font-semibold my-2 text-lg text-center">DATA ANALYSTS</h4>
          <p className="text-center text-primary text-sm max-w-56">Our Data Analysts transform complex data into actionable insights, supporting data-driven decision-making and strategic planning.</p>
          <ArrowRightIcon className="w-5 text-primary mt-3 mx-auto md:ml-auto md:mr-0 md:mt-auto" />
        </Link>
      </div>
    </section>
  )
}

export default TelentCategories