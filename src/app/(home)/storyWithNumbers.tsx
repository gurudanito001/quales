import Image from "next/image";


const StoryWithNumbers = () =>{

  return(
    <section className="bg-white px-5 xl:px-28 pt-10">
        <header>
          <h2 className="text-center text-xl md:text-2xl font-550 mb-3 text-primary">Our Story with Numbers</h2>
          <p className="text-sm md:text-lg text-center text-primary max-w-4xl mx-auto">Explore the impact of our outsourcing services through compelling numbers. Our stats reveal the success, efficiency, and transformation we&apos;ve delivered to our clients at Quales Consulting. </p>
        </header>

        <div className="grid grid-cols-2 text-primary py-12 gap-y-14 lg:px-36">

          <article className="fle flex-col mb-5">
            <h3 className="text-4xl md:text-6xl font-550 text-center">14+</h3>
            <p className="text-sm md:text-xl text-center">Clients supported</p>
            <Image src="/images/quales-support-icon.svg" className="mx-auto mt-3 h-14" width={50} height={50} objectFit="contain" alt="Shaking Hands Icon"/>
          </article>

          <article className="fle flex-col mb-5">
            <h3 className="text-4xl md:text-6xl font-550 text-center">35+</h3>
            <p className="text-sm md:text-xl text-center">Projects completed</p>
            <Image src="/images/quales-project-icon.svg" className="mx-auto mt-3 h-14" width={50} height={50} objectFit="contain" alt="Folder Icon"/>
          </article>

          <article className="fle flex-col mb-5">
            <h3 className="text-4xl md:text-6xl font-550 text-center">58+</h3>
            <p className="text-sm md:text-xl text-center">Talents Provided</p>
            <Image src="/images/quales-talents-icon.svg" className="mx-auto mt-3 h-14" width={50} height={50} objectFit="contain" alt="Talents in two rows icon"/>
          </article>

          <article className="fle flex-col mb-5">
            <h3 className="text-4xl md:text-6xl font-550 text-center">4+</h3>
            <p className="text-sm md:text-xl text-center">Countries supported</p>
            <Image src="/images/quales-countries-icon.svg" className="mx-auto mt-3 h-14" width={50} height={50} objectFit="contain" alt="World Globe Icon"/>
          </article>
          
        </div>
    </section>
  )
}

export default StoryWithNumbers;