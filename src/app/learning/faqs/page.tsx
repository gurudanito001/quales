
import NavBar from "../home/navbar";
import Footer from "@/app/(home)/footer";


const Faq = () => {

  return (
    <>
      <main className="bg-white">
        <NavBar />
        <section className="bg-white px-5 xl:px-28 py-14">
          <header className="flex mb-8">
            <h2 className="text-center text-lg md:text-xl font-semibold mb-3 text-primary">Frequently Asked Questions </h2>
          </header>

          <div className="collapse collapse-arrow bg-base-200 mb-8 border border-primary rounded-2xl">
            <input type="checkbox" name="my-accordion-1" />
            <div className="collapse-title md:text-lg font-550 bg-white text-primary">What courses does Quales Academy offer?</div>
            <div className="collapse-content bg-white border-t border-t-primary">
              <p className="py-5 text-primary text-sm md:text-lg font-light">We offer specialized courses in QA Engineering and Scrum Mastery, designed to equip you with the skills needed to excel in the tech industry.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 mb-8 border border-primary rounded-2xl">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title md:text-lg font-550 bg-white text-primary">Who are the instructors at Quales Academy?</div>
            <div className="collapse-content bg-white border-t border-t-primary">
              <p className="py-5 text-primary text-sm md:text-lg font-light">Our instructors are industry experts with extensive experience in QA Engineering, Scrum, and other tech-related fields. They bring real-world insights to every class.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 mb-8 border border-primary rounded-2xl">
            <input type="checkbox" name="my-accordion-3" />
            <div className="collapse-title md:text-lg font-550 bg-white text-primary">How long do the courses take to complete?</div>
            <div className="collapse-content bg-white border-t border-t-primary">
              <p className="py-5 text-primary text-sm md:text-lg font-light">The duration of our courses varies, with most taking between 5 to 8 weeks to complete, including hands-on projects and assessments.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 mb-8 border border-primary rounded-2xl">
            <input type="checkbox" name="my-accordion-4" />
            <div className="collapse-title md:text-lg font-550 bg-white text-primary">Is the curriculum updated regularly?</div>
            <div className="collapse-content bg-white border-t border-t-primary">
              <p className="py-5 text-primary text-sm md:text-lg font-light">Yes, our curriculum is regularly updated to reflect the latest industry trends, technologies, and best practices.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 mb-8 border border-primary rounded-2xl">
            <input type="checkbox" name="my-accordion-5" />
            <div className="collapse-title md:text-lg font-550 bg-white text-primary">What kind of certification will I receive after completing a course?</div>
            <div className="collapse-content bg-white border-t border-t-primary">
              <p className="py-5 text-primary text-sm md:text-lg font-light">Upon successful completion, you&apos;ll receive a recognized certification from ISTQB/ ISQI, demonstrating your expertise to potential employers.
              </p>
            </div>
          </div>







          <div className="collapse collapse-arrow bg-base-200 mb-8 border border-primary rounded-2xl">
            <input type="checkbox" name="my-accordion-1" />
            <div className="collapse-title md:text-lg font-550 bg-white text-primary">Can I take the courses online?</div>
            <div className="collapse-content bg-white border-t border-t-primary">
              <p className="py-5 text-primary text-sm md:text-lg font-light">Yes, all our courses are available online, allowing you to learn at your own pace from anywhere in the world.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 mb-8 border border-primary rounded-2xl">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title md:text-lg font-550 bg-white text-primary">What are the prerequisites for enrolling in a course?</div>
            <div className="collapse-content bg-white border-t border-t-primary">
              <p className="py-5 text-primary text-sm md:text-lg font-light">Our courses are designed for both beginners and experienced professionals. Specific prerequisites are outlined in each course description.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 mb-8 border border-primary rounded-2xl">
            <input type="checkbox" name="my-accordion-3" />
            <div className="collapse-title md:text-lg font-550 bg-white text-primary">Do you offer any financial aid or scholarships?</div>
            <div className="collapse-content bg-white border-t border-t-primary">
              <p className="py-5 text-primary text-sm md:text-lg font-light">Yes, we offer scholarships and flexible payment plans to help make our courses accessible to everyone (T&C&apos;s applicable).
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 mb-8 border border-primary rounded-2xl">
            <input type="checkbox" name="my-accordion-4" />
            <div className="collapse-title md:text-lg font-550 bg-white text-primary">How can I apply for a course at Quales Academy?</div>
            <div className="collapse-content bg-white border-t border-t-primary">
              <p className="py-5 text-primary text-sm md:text-lg font-light">You can apply online through our website. Simply fill out the enrollment form and choose your preferred course.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 mb-8 border border-primary rounded-2xl">
            <input type="checkbox" name="my-accordion-5" />
            <div className="collapse-title md:text-lg font-550 bg-white text-primary">What support do you offer to students during the course?</div>
            <div className="collapse-content bg-white border-t border-t-primary">
              <p className="py-5 text-primary text-sm md:text-lg font-light">We provide comprehensive support, including access to instructors for Q&A sessions, peer collaboration through forums, and dedicated customer service to assist with any issues.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 mb-8 border border-primary rounded-2xl">
            <input type="checkbox" name="my-accordion-4" />
            <div className="collapse-title md:text-lg font-550 bg-white text-primary">Will I have access to course materials after completing the course?</div>
            <div className="collapse-content bg-white border-t border-t-primary">
              <p className="py-5 text-primary text-sm md:text-lg font-light">Yes, you&apos;ll have lifetime access to course materials, including videos, assignments, and resources, even after you&apos;ve completed the course.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 mb-8 border border-primary rounded-2xl">
            <input type="checkbox" name="my-accordion-5" />
            <div className="collapse-title md:text-lg font-550 bg-white text-primary">What career opportunities can I expect after completing a course at Quales Academy?</div>
            <div className="collapse-content bg-white border-t border-t-primary">
              <p className="py-5 text-primary text-sm md:text-lg font-light">Our graduates have gone on to secure roles in top tech companies globally. We also provide job placement assistance, including resume reviews and interview preparation, to help you succeed.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Faq