import Link from "next/link"

const FAQs = () => {

  return (
    <section id="faqs" className="bg-neutral px-5 xl:px-28 py-28">
      <header className="flex mb-5 lg:mb-12">
        <h2 className="text-xl md:text-2xl mx-auto font-550 bg-gradient-to-r max-w-550 text-primary">FAQ&apos;s</h2>
      </header>

      <div className="collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-2xl">
        <input type="checkbox" name="my-accordion-1" />
        <div className="collapse-title md:text-lg font-550 bg-white text-primary">What courses does Quales Academy offer?</div>
        <div className="collapse-content bg-white border-t border-t-primary">
          <p className="py-5 text-primary text-sm md:text-lg font-light">We offer specialized courses in QA Engineering and Scrum Mastery, designed to equip you with the skills needed to excel in the tech industry.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-2xl">
        <input type="checkbox" name="my-accordion-2" />
        <div className="collapse-title md:text-lg font-550 bg-white text-primary">Who are the instructors at Quales Academy?</div>
        <div className="collapse-content bg-white border-t border-t-primary">
          <p className="py-5 text-primary text-sm md:text-lg font-light">Our instructors are industry experts with extensive experience in QA Engineering, Scrum, and other tech-related fields. They bring real-world insights to every class.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-2xl">
        <input type="checkbox" name="my-accordion-3" />
        <div className="collapse-title md:text-lg font-550 bg-white text-primary">How long do the courses take to complete?</div>
        <div className="collapse-content bg-white border-t border-t-primary">
          <p className="py-5 text-primary text-sm md:text-lg font-light">The duration of our courses varies, with most taking between 5 to 8 weeks to complete, including hands-on projects and assessments.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-2xl">
        <input type="checkbox" name="my-accordion-4" />
        <div className="collapse-title md:text-lg font-550 bg-white text-primary">Is the curriculum updated regularly?</div>
        <div className="collapse-content bg-white border-t border-t-primary">
          <p className="py-5 text-primary text-sm md:text-lg font-light">Yes, our curriculum is regularly updated to reflect the latest industry trends, technologies, and best practices.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200 mb-4 border border-primary rounded-2xl">
        <input type="checkbox" name="my-accordion-5" />
        <div className="collapse-title md:text-lg font-550 bg-white text-primary">What kind of certification will I receive after completing a course?</div>
        <div className="collapse-content bg-white border-t border-t-primary">
          <p className="py-5 text-primary text-sm md:text-lg font-light">Upon successful completion, you&apos;ll receive a recognized certification from ISTQB/ ISQI, demonstrating your expertise to potential employers.
          </p>
        </div>
      </div>


      <div className="flex justify-center">
        <Link href="/learning/faqs" className="btn bg-primary text-white text-xs md:text-sm rounded-full px-9 mx-auto md:mx-0 mt-8" >View More</Link>
      </div>
    </section>
  )
}

export default FAQs