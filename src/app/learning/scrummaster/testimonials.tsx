import Link from "next/link";
import Image from "next/image";

const Testimonials = ({showButton = true}: {showButton?: boolean}) => {

  return (
    <section id="testimonials" className="bg-white px-5 xl:px-28 py-14">
      <header className="flex">
        <h2 className="text-xl md:text-2xl mx-auto font-550 bg-gradient-to-r max-w-550 text-primary mb-5">Testimonials</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className=" flex flex-col items-center xl:items-end">
          <div className="w-64 md:w-56 lg:w-300 xl:w-336 h-full flex flex-col items-center bg-white p-4 xl:p-12 rounded-3xl mb-5 shadow-md">
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light">
              I recently finished a training course that was a great introduction to Scrum mastery, with practical examples used throughout the training that made everything feel relevant and easy to understand. The team was great about sending reminders for lesson times, which helped keep me on track. Additionally, the engaging quizzes made the learning process interactive. I’ve just started my internship, and the onboarding has been both warm and welcoming.
            </p>
            <h5 className="text-primary mt-7 text-center font-550">Danielle Ngaleu</h5>
            <h6 className="text-primary mt-1 text-center text-xs">Cohort 1</h6>
            <figure className="mt-5 w-24 h-24 bg-neutral2 rounded-full">
              {/* <Image
                src={`/images/Adaeze-min.png`}
                className=" w-full h-full rounded-full"
                style={{ objectFit: "cover" }}
                alt="Danielle Ngaleu"
                width={96}
                height={96}
              /> */}
            </figure>
            
          </div>
        </div>

        <div className=" flex flex-col items-center">
          <div className="w-64 md:w-56 lg:w-300 xl:w-336 h-full flex flex-col items-center bg-white p-4 xl:p-12 rounded-3xl mb-5 shadow-md">
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light">
              My journey with Quales through learning Scrum, taking the exam, and completing an internship has been incredibly rewarding. From the classes to the Exam support to my internship with Quales now, it has been all I hoped for and more. The combination of theoretical learning and practical experience has given me a solid foundation in Scrum, and I am excited to continue applying these skills in my career.
            </p>
            <h5 className="text-primary mt-7 md:mt-auto text-center font-550">Sandra Alutu</h5>
            <h6 className="text-primary mt-1 text-center text-xs">Cohort 1</h6>
            <figure className="mt-5 w-24 h-24 bg-neutral2 rounded-full">
              <Image
                src={`/images/sandra.png`}
                className=" w-full h-full rounded-full"
                style={{ objectFit: "cover" }}
                alt="Sandra Alutu"
                width={96}
                height={96}
              />
            </figure>
          </div>
        </div>

        <div className=" flex flex-col items-center xl:items-start">
          <div className="w-64 md:w-56 lg:w-300 xl:w-336 h-full flex flex-col items-center bg-white p-4 xl:p-12 rounded-3xl mb-5 shadow-md">
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light">
              I had an incredible experience with the Quales Scrum Mastery Program from start to finish. The training was comprehensive and hands-on, providing me with the foundational knowledge and practical skills needed to succeed as a Scrum Master. The instructors were knowledgeable, supportive, and always ready to answer questions, making complex concepts easy to understand.
            </p>
            <h5 className="text-primary mt-7 md:mt-auto text-center font-550">Damilare Adedeji</h5>
            <h6 className="text-primary mt-1 text-center text-xs">Cohort 1</h6>
            <figure className="mt-5 w-24 h-24 bg-neutral2 rounded-full">
              <Image
                src={`/images/damilare.png`}
                className=" w-full h-full rounded-full"
                style={{ objectFit: "cover" }}
                alt="Damilare Adedeji"
                width={96}
                height={96}
              />
            </figure>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials