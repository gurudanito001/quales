
import Image from "next/image";



const HeroSection = ()=>{
  return(
    <>
      <h1 className="text-xl font-550 text-primary pt-14 md:mb-10 px-5 lg:px-28 text-center md:text-left">About Quales</h1>

      <section className="bg-white px-5 lg:px-28 py-10 flex flex-col md:flex-row items-center">

        <article className="text-base-content md:w-1/2 flex flex-col">
          <header className="flex flex-col">
            <h2 className="text-xl xl:text-3xl font-550 bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 inline text-transparent bg-clip-text mx-auto md:mx-0 text-center md:text-left">Empowering </h2>
            <h2 className="text-xl xl:text-3xl font-550 bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 inline text-transparent bg-clip-text mx-auto md:mx-0 text-center md:text-left">
              Innovation Through Expertise</h2>
          </header>

          <p className="text-primary max-w-600 mt-6 text-sm lg:text-lg text-center md:text-left">
            At Quales Consulting, we cultivate exceptional tech talent ready to tackle the challenges of today&apos;s digital world. With a focus on quality and continuous learning, we ensure our experts deliver outstanding results and drive business success.
          </p>
        </article>

        <figure className=" md:w-1/2 mb-10 md:mb-0">
          <Image
            src={`/images/our-community.svg`}
            className="w-100"
            style={{ height: "auto", objectFit: "contain" }}
            alt="Two Business men shaking hands in a professional environment"
            width={700}
            height={700}
          />
        </figure>

      </section>
    </>
    
  )
}

export default HeroSection