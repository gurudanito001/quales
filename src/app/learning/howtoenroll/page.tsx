
import NavBar from "../home/navbar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/(home)/footer";


const HowToEnroll = ()=>{

  return (
    <>
<main className="bg-white">
    <NavBar/>
    <section className="bg-white px-5 xl:px-28">
      <header className="mt-10">
        <h2 className="text-center text-lg md:text-xl font-550 mb-3 text-primary">How to Enroll</h2>
        <p className="text-sm md:text-lg text-center text-primary max-w-3xl mx-auto font-light">
          Don&apos;t wait—start your journey with Quales Academy today! With our industry-leading programs, you&apos;ll gain the skills and knowledge needed to thrive in the tech world.
        </p>
      </header>

      <div className="mt-14">
        <article className=" flex flex-col md:flex-row items-start gap-5 lg:gap-10 text-primary md:border-b pb-7 mb-10">
          <Image src="/images/search-large-icon.svg" alt="Search" className="w-20 md:w-32 mx-auto md:mx-0" width={150} height={150} />
          <div>
            <h3 className="md:mt-14 text-xl md:text-2xl font-550 mb-3 md:mb-5 text-center md:text-left">Explore our Diverse Programs</h3>
            <p className="max-w-4xl xl:max-w-5xl text-center md:text-left font-light text-sm md:text-lg ">Start by exploring the range of courses we offer, including QA Engineering and Scrum Mastery. Each course page provides in-depth information about the curriculum, course structure, learning outcomes, and the career paths you can pursue post-certification. Take your time to understand which course best aligns with your career aspirations.</p>
          </div>
        </article>

        <article className="flex flex-col md:flex-row-reverse items-start gap-5 lg:gap-10 text-primary md:border-b pb-7 mb-10">
          <Image src="/images/chooseCourse-large-icon.svg" alt="Search" className="w-20 md:w-32 mx-auto md:mx-0" width={150} height={150} />
          <div>
            <h3 className="md:mt-14 text-xl md:text-2xl font-550 mb-3 md:mb-5 text-center md:text-right">Choose the Right Course for you</h3>
            <p className="max-w-4xl xl:max-w-5xl text-center md:text-left font-light text-sm md:text-lg ">Once you&apos;ve identified the course that fits your goals, review the course details carefully. Look at the course duration, fees, certification opportunities, and prerequisites. This ensures you&apos;re making an informed decision that aligns with your future career plans.</p>
          </div>
        </article>

        <article className=" flex flex-col md:flex-row items-start gap-5 lg:gap-10 text-primary md:border-b pb-7 mb-10">
          <Image src="/images/adduser-large-icon.svg" alt="Search" className="w-20 md:w-32 mx-auto md:mx-0" width={150} height={150} />
          <div>
            <h3 className="md:mt-14 text-xl md:text-2xl font-550 mb-3 md:mb-5 text-center md:text-left">Register Online with Ease</h3>
            <p className="max-w-4xl xl:max-w-5xl text-center md:text-left font-light text-sm md:text-lg ">When you&apos;re ready, click on the “Register for a Cohort” button on your chosen course page. This will lead you to our online registration form. Here, you&apos;ll need to fill out essential details such as your personal information, educational background, contact details and your referee, if you have one. Be sure to double-check your information for accuracy before submitting.</p>
          </div>
        </article>

        <article className=" flex flex-col md:flex-row-reverse items-start gap-5 lg:gap-10 text-primary md:border-b pb-7 mb-10">
          <Image src="/images/secure-large-icon.svg" alt="Search" className="w-20 md:w-32 mx-auto md:mx-0" width={150} height={150} />
          <div>
            <h3 className="md:mt-14 text-xl md:text-2xl font-550 mb-3 md:mb-5 text-center md:text-right">Secure your Spot by Completing Payment</h3>
            <p className="max-w-4xl xl:max-w-5xl text-center md:text-left font-light text-sm md:text-lg ">After submitting your registration, you will receive a confirmation email containing payment instructions. This email will outline the various payment methods available, including online transfers, credit/debit card payments, or instalment options. Promptly complete your payment to secure your spot in the upcoming cohort, as spaces are often limited.</p>
          </div>
        </article>

        <article className=" flex flex-col md:flex-row items-start gap-5 lg:gap-10 text-primary md:border-b pb-7 mb-10">
          <Image src="/images/onboarding-large-icon.svg" alt="Search" className="w-20 md:w-32 mx-auto md:mx-0" width={150} height={150} />
          <div>
            <h3 className="md:mt-14 text-xl md:text-2xl font-550 mb-3 md:mb-5 text-center md:text-left">Confirmation and Onboarding Process</h3>
            <p className="max-w-4xl xl:max-w-5xl text-center md:text-left font-light text-sm md:text-lg ">Once your payment is confirmed, you&apos;ll receive an official welcome email from Quales Academy. This email will include your course start date, login credentials for our Zoom meetings, and any pre-course materials or assignments that will prepare you for your first class. This is your introduction to the exciting journey ahead!</p>
          </div>
        </article>

        <article className=" flex flex-col md:flex-row-reverse items-start gap-5 lg:gap-10 text-primary pb-7 mb-10">
          <Image src="/images/begin-large-icon.svg" alt="Search" className="w-20 md:w-32 mx-auto md:mx-0" width={150} height={150} />
          <div>
            <h3 className="md:mt-14 text-xl md:text-2xl font-550 mb-3 md:mb-5 text-center md:text-right">Begin Your Learning Journey</h3>
            <p className="max-w-4xl xl:max-w-5xl text-center md:text-left font-light text-sm md:text-lg ">On the course start date, log in to Zoom and join the class with the provided credentials, engage with expert instructors, and collaborate with fellow students. Our courses are designed to be interactive and hands-on, ensuring you gain practical experience alongside theoretical knowledge.</p>
          </div>
        </article>
      </div>
    </section>

    <section className="bg-neutral text-primary px-5 lg:px-28 py-20 lg:py-36 flex flex-col md:flex-row mb-10">
      <article>
        <h2 className="font-550 text-2xl lg:text-4xl">In Need of More Assistance</h2>
        <p className="font-light text-sm md:text-lg mt-5 max-w-5xl">We&apos;re here to help! If you have any questions or need further assistance during the enrollment process, don&apos;t hesitate to reach out to our support team at bokafor@quales.tech. We&apos;re committed to ensuring you have all the support you need. </p>
      </article>
      <Link href="/learning/register-for-cohort" className="btn bg-primary text-white rounded-full px-8 mr-auto md:mr-0 md:ml-auto mt-8">Register for a Cohort</Link>
    </section>

    <section className="flex my-10 lg:my-16 px-5">
    <video controls poster="/images/video-banner.svg" className="md:max-w-96 mx-auto lg:max-w-600">
        <source src="movie.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </section>

      
    </main>

    <Footer showScrumMasterLink={true} />
    </>
  )
}

export default HowToEnroll