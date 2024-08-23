import Image from "next/image";
import Link from "next/link";




const HeroSection = ()=>{

  return(
    <section className="bg-white px-5 lg:px-28 pt-20 flex flex-col-reverse md:flex-row items-center">
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
          <Link href="/hire-talents" className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-8" >Register for a Cohort</Link>
        </div>
      </figure>

      <article className="text-base-content md:w-1/2 flex flex-col">
        <header className="flex flex-col">
          <h2 className="text-2xl xl:text-3xl text-primary font-550 mx-auto md:mx-0 text-center md:text-left"> Engage the best talent around the globe </h2>
        </header>
        
        <p className="text-primary xl:max-w-800 mt-6 text-sm lg:text-lg text-center md:text-left">
          Quales Consulting comprises an elite network of the finest freelance Software Developers, Designers, Business Analysts, Product Managers, and Scrum Masters, Data Analysts globally. Leading companies engage freelancers from Quales Consulting for their critical projects.
        </p>
        <div className="hidden md:block">
          <Link href="/hire-talents" className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-8" >Register for a Cohort</Link>
        </div>
      </article>
      
    </section>
  )
}

export default HeroSection;