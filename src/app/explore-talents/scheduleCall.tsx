import Link from "next/link";


const ScheduleCall = ()=>{
  return(
    <section className="bg-section-blue text-section-red px-5 lg:px-28 py-20 lg:py-36 flex flex-col md:flex-row">
      <article>
        <h3 className="font-bold text-2xl lg:text-4xl">Looking for something more specific?</h3>
        <p className="font-light text-lg mt-5">Sometimes you need an engineer with a more specific set of skills to fit your project needs. Let&apos;s see if we can help</p>
      </article>
      <Link href="https://calendly.com/ayobami-/discuss-about-prospective-talent?month=2024-07" target="_blank" className="btn bg-gray-900 text-white rounded-full px-8 mr-auto md:mr-0 md:ml-auto mt-8">Schedule a Call</Link>
    </section>
  )
}

export default ScheduleCall