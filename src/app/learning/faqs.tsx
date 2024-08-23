import Link from "next/link"

const FAQs = () => {

  return (
    <section id="faqs" className="bg-neutral px-5 xl:px-28 py-10 md:py-16">
      <header className="flex mb-5 lg:mb-12">
        <h2 className="text-xl md:text-2xl mx-auto font-550 bg-gradient-to-r max-w-550 text-primary">FAQ&apos;s</h2>
      </header>

      <div className="collapse collapse-arrow bg-base-200 mb-4">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title md:text-xl font-medium border border-primary rounded-2xl bg-white text-primary">Lorem Ipsum</div>
        <div className="collapse-content">
          <p className="py-5">hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-4">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title md:text-xl font-medium border border-primary rounded-2xl bg-white text-primary">Lorem Ipsum</div>
        <div className="collapse-content">
          <p className="py-5">hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-4">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title md:text-xl font-medium border border-primary rounded-2xl bg-white text-primary">Lorem Ipsum</div>
        <div className="collapse-content">
          <p className="py-5">hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-4">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title md:text-xl font-medium border border-primary rounded-2xl bg-white text-primary">Lorem Ipsum</div>
        <div className="collapse-content">
          <p className="py-5">hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-4">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title md:text-xl font-medium border border-primary rounded-2xl bg-white text-primary">Lorem Ipsum</div>
        <div className="collapse-content">
          <p className="py-5">hello</p>
        </div>
      </div>

      <div className="flex justify-center">
        <Link href="/hire-talents" className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-8" >View More</Link>
      </div>
    </section>
  )
}

export default FAQs