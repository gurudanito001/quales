
import Image from "next/image";
import Link from "next/link";


const OurGraduates = ()=>{
  return(
    <section className="bg-white px-5 lg:px-28 py-10 flex flex-col-reverse md:flex-row items-center">
      <figure className=" md:w-1/2 mb-10 md:mb-0">
        <Image
          src={`/images/our-community.svg`}
          className="w-100"
          style={{ height: "auto", objectFit: "contain" }}
          alt="Product Image"
          width={700}
          height={700}
        />

        <div className="md:hidden flex">
          <Link href="/hire-talents" className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-8">Hire Talents</Link>
        </div>
      </figure>

      <article className="text-base-content md:w-1/2 flex flex-col">
        <header className="flex flex-col">
          <h3 className="text-2xl xl:text-3xl font-550 bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 inline text-transparent bg-clip-text mx-auto md:mx-0"> Our Graduates Work </h3>
          <h3 className="text-2xl xl:text-3xl font-550 bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 inline text-transparent bg-clip-text mx-auto md:mx-0">
            for Top Companies Worldwide</h3>
        </header>
        
        <p className="text-primary max-w-600 mt-6 text-sm lg:text-lg text-center md:text-left">
        Quales Consulting graduates excel globally, contributing to top tech startups and multinational corporations. Recognized for their skills and dedication, they drive success and innovation in the tech industry. Connect with our top-tier talent today.
        </p>
        <div className="hidden md:block">
          <Link href="/hire-talents" className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-8" >Hire Talents</Link>
        </div>
      </article>
      
    </section>
  )
}

export default OurGraduates