import Image from "next/image";


const StoryWithNumbers = () =>{

  return(
    <section className="bg-white px-5 xl:px-28 pt-10">
        <header>
          <h3 className="text-center text-xl md:text-2xl font-550 mb-3 text-primary">Our Story with Numbers</h3>
          <p className="text-sm md:text-lg text-center text-primary max-w-4xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proin dictum orci non nisi rhoncus, eu dignissim libero efficitur. Nullam a mollis dui.  </p>
        </header>

        <div className="grid grid-cols-2 text-primary py-12 gap-y-14 lg:px-36">

          <article className="fle flex-col mb-5">
            <h3 className="text-4xl md:text-6xl font-550 text-center">50+</h3>
            <p className="text-sm md:text-xl text-center">Clients supported</p>
            <Image src="/images/quales-support-icon.svg" className="mx-auto mt-3 h-14" width={50} height={50} objectFit="contain" alt="Code Icon"/>
          </article>

          <article className="fle flex-col mb-5">
            <h3 className="text-4xl md:text-6xl font-550 text-center">500+</h3>
            <p className="text-sm md:text-xl text-center">Projects completed</p>
            <Image src="/images/quales-project-icon.svg" className="mx-auto mt-3 h-14" width={50} height={50} objectFit="contain" alt="Code Icon"/>
          </article>

          <article className="fle flex-col mb-5">
            <h3 className="text-4xl md:text-6xl font-550 text-center">300+</h3>
            <p className="text-sm md:text-xl text-center">Talents Provided</p>
            <Image src="/images/quales-talents-icon.svg" className="mx-auto mt-3 h-14" width={50} height={50} objectFit="contain" alt="Code Icon"/>
          </article>

          <article className="fle flex-col mb-5">
            <h3 className="text-4xl md:text-6xl font-550 text-center">50+</h3>
            <p className="text-sm md:text-xl text-center">Countries supported</p>
            <Image src="/images/quales-countries-icon.svg" className="mx-auto mt-3 h-14" width={50} height={50} objectFit="contain" alt="Code Icon"/>
          </article>
          
        </div>
    </section>
  )
}

export default StoryWithNumbers;