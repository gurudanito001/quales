


const LatestArticles = () => {

  return (
    <section className="bg-white px-5 xl:px-28 pt-10 mb-20">
      <header>
        <h5 className="text-primary font-550 mb-8 text-xl md:text-2xl">Read our Latest Articles</h5>
      </header>
      <div className="flex flex-col gap-3">
        <div className="collapse bg-white rounded-xl">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-primary md:text-lg rounded-xl border shadow-md">
            The Role of Automation in Quality Assurance: Tools and Techniques
          </div>
          <div className="collapse-content text-primary text-sm md:text-lg bg-gray-100">
            <p className="p-3">In today &apos;s fast-paced digital landscape, quality assurance (QA) has become more critical than ever. As software development cycles shorten ...</p>
          </div>
        </div>

        <div className="collapse bg-white rounded-xl">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-primary md:text-lg rounded-xl border shadow-md">
            The Shift from Manual to Automated Testing: Challenges and Solutions
          </div>
          <div className="collapse-content text-primary text-sm md:text-lg bg-gray-100">
            <p className="p-3">In the ever-evolving landscape of software development, the shift from manual to automated testing has become a critical strategy for many organizations striving ...</p>
          </div>
        </div>

        <div className="collapse bg-white rounded-xl">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-primary md:text-lg rounded-xl border shadow-md">
            Testing in DevOps: How QA Engineers Can Keep Up with the Speed of Continuous Integration
          </div>
          <div className="collapse-content text-primary text-sm md:text-lg bg-gray-100">
            <p className="p-3">In the dynamic world of software development, the demand for faster delivery and higher quality has never been greater. This pressure is particularly intense for QA engineers ...</p>
          </div>
        </div>

        <div className="collapse bg-white rounded-xl">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-primary md:text-lg rounded-xl border shadow-md">
            Who is a Scrum Master?
          </div>
          <div className="collapse-content text-primary text-sm md:text-lg bg-gray-100">
            <p className="p-3">In the realm of Agile project management, the role of a Scrum Master stands out as a pivotal element for the successful implementation of the Scrum framework. As organizations increasingly ...</p>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default LatestArticles