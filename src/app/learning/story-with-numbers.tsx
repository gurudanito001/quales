import Image from "next/image";


const StoryWithNumbers = () =>{

  return(
    <section id="storyWithNumbers" className="bg-primary text-white px-5 xl:px-28 pt-10">
        <header>
          <h2 className="text-center text-xl md:text-2xl font-550 mb-3 ">Our Story with Numbers</h2>
          <p className="text-sm md:text-lg text-center max-w-4xl mx-auto">Discover the impact we&apos;ve made through our impressive stats. Our numbers tell the story of success, growth, and transformation at Quales Academy.</p>
        </header>

        <div className="grid grid-cols-2  py-12 gap-y-14 lg:px-36">

          <article className="fle flex-col mb-5">
            <h3 className="text-4xl md:text-6xl font-550 text-center">58+</h3>
            <p className="text-sm md:text-xl text-center">Talents provided.</p>
            <Image src="/images/talents-provided.svg" className="mx-auto mt-3 h-14" width={50} height={50} objectFit="contain" alt="Shaking Hands Icon"/>
          </article>

          <article className="fle flex-col mb-5">
            <h3 className="text-4xl md:text-6xl font-550 text-center">100+</h3>
            <p className="text-sm md:text-xl text-center">Placements Secured</p>
            <Image src="/images/placements-secured.svg" className="mx-auto mt-3 h-14" width={50} height={50} objectFit="contain" alt="Folder Icon"/>
          </article>
        </div>
    </section>
  )
}

export default StoryWithNumbers;