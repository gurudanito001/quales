import Link from "next/link";
import NavBar from "@/app/(home)/navbar";
import { UserIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Footer from "@/app/(home)/footer";

export default async function Page({ params }: { params: { category: string, userId: string } }) {
  console.log(params)
  const formatCategory = (category: string) => {
    switch (category) {
      case "qa-engineers":
        return "QA Engineers";
      case "software-developers":
        return "Software Developers";
      case "product-managers":
        return "Product Managers";
      case "ui-ux-designers":
        return "UI UX Designers";
      case "business-analysts":
        return "Business Analytics";
      case "scrum-masters":
        return "Scrum Masters";
      case "data-analysts":
        return "Data Analysts";
      default:
    }
  }
  return (

    <>
      <NavBar />
      <section className="bg-white px-5 xl:px-28 mt-10 mb-20">

        <div className="breadcrumbs text-sm mb-16">
          <ul>
            <li><Link href="/explore-talents" className="text-primary lg:text-xl">Talents</Link></li>
            <li><Link href={`/explore-talents/${params?.category}`} className="text-primary lg:text-xl capitalize">{formatCategory(params?.category)}</Link></li>
            <li><Link href={`/explore-talents/${params?.category}/${params?.userId}`} className="text-primary font-bold lg:text-xl capitalize">Talent Information</Link></li>
          </ul>
        </div>


        <div className=" flex flex-col lg:flex-row gap-10">
          <figure className="flex justify-center lg:justify-start">
            <span className=" h-72 w-64 bg-gray-200 flex items-center content-center mb-3">
              <UserIcon className="text-gray-700 w-44 h-44 mx-auto" />
            </span>
          </figure>

          <div>
            <article className="text-primary">
              <h3 className=" text-2xl mb-3">TALENT NAME</h3>
              <p className="font-light">About the talent: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proin dictum orci non nisi rhoncus, eu dignissim libero efficitur. Nullam a mollis dui. Sed eget malesuada enim. Aliquam vitae mi nec nibh interdum commodo eu vitae quam.</p>
            </article>
            <hr className="border-primary mt-5"/>

            <article className="flex mt-2">
              <div className="w-auto border-r border-r-primary text-primary px-3 my-3">
                <h3 className="font-semibold">Currently working with</h3>
                <p className="font-light">Lorem Ipsum</p>
              </div>
              <div className="w-auto border-r border-r-primary text-primary px-3 my-3">
                <h3 className="font-semibold">Location</h3>
                <p className="font-light">Lorem Ipsum</p>
              </div>
              <div className="w-auto text-primary px-3 my-3">
                <h3 className="font-semibold">Geographical map location</h3>
                <p className="font-light">Lorem Ipsum</p>
              </div>
            </article>

            <hr className="border-primary mt-2"/>

            <article className="px-3 py-4">
              <h3 className="font-semibold text-primary mb-4">Tech Stack</h3>
              <div>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">SQL</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Python</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Java</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Jenkins</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Selenium</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Appium</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Jira</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Pytest</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">GitLab</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Circle CI</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Postman</span>
              </div>
            </article>

            <hr className="border-primary"/>

            <article className="px-3 py-4">
              <h3 className="font-semibold text-primary mb-4">Top Skills</h3>
              <div>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Test Automation</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Programming</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">API Testing</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">CI/CD</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Database Knowledge</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Critical Thinking</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Feedback</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Problem Solving</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Documentation</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Collaboration</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Time Management</span>
                <span className="inline-block px-3 py-2 rounded-full font-light bg-base text-primary text-xs lg:text-sm mr-2 mb-2">Continuous Learning</span>
              </div>
            </article>

            <hr className="border-primary"/>

            <h3 className="font-semibold text-primary my-4 px-3">Employment History</h3>




            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-3">
              <header className="flex ">
                <h6 className="text-primary relative -ml-2"><span className="inline-block w-4 h-4 mr-6 rounded-full bg-primary"></span>Lorem Ipsum</h6>
                <time className="ml-auto text-primary  font-light">2022</time>
              </header>
              <li className="border-l  border-dashed border-l-black flex flex-row items-start px-10">
                <div className="timeline-start mb-10">
                  <ul className=" list-disc text-primary marker:text-green list-outside">
                    <li className=" font-light mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proin dictum orci non nisi rhoncus, eu dignissim libero efficitur. Nullam a mollis dui. Sed eget malesuada enim. Aliquam vitae mi nec nibh interdum commodo eu vitae quam. Ut purus sem, porta et eros vitae, placerat ornare augue. Nullam non ipsum libero. Suspendisse finibus dolor id eleifend posuere. Morbi lorem ligula, consectetur ac facilisis vel, fermentum nec sapien. Mauris consequat, enim non lobortis dapibus, dui arcu molestie arcu, tempus molestie augue nisl sit amet ex. Phasellus ac velit massa. Ut placerat scelerisque ex ut rutrum.
                    </li>

                    <li className=" font-light mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proin dictum orci non nisi rhoncus, eu dignissim libero efficitur. Nullam a mollis dui. Sed eget malesuada enim. Aliquam vitae mi nec nibh interdum commodo eu vitae quam. Ut purus sem, porta et eros vitae, placerat ornare augue. Nullam non ipsum libero. Suspendisse finibus dolor id eleifend posuere. Morbi lorem ligula, consectetur ac facilisis vel, fermentum nec sapien. Mauris consequat, enim non lobortis dapibus, dui arcu molestie arcu, tempus molestie augue nisl sit amet ex. Phasellus ac velit massa. Ut placerat scelerisque ex ut rutrum.
                    </li>
                  </ul>
                </div>
              </li>


              <header className="flex ">
                <h6 className="text-primary relative -ml-2"><span className="inline-block w-4 h-4 mr-6 rounded-full bg-primary"></span>Lorem Ipsum</h6>
                <time className="ml-auto text-primary font-light">2022</time>
              </header>
              <li className="border-l  border-dashed border-l-black flex flex-row items-start px-10">
                <div className="timeline-start">
                  <ul className=" list-disc text-primary marker:text-green list-outside">
                    <li className=" font-light mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proin dictum orci non nisi rhoncus, eu dignissim libero efficitur. Nullam a mollis dui. Sed eget malesuada enim. Aliquam vitae mi nec nibh interdum commodo eu vitae quam. Ut purus sem, porta et eros vitae, placerat ornare augue. Nullam non ipsum libero. Suspendisse finibus dolor id eleifend posuere. Morbi lorem ligula, consectetur ac facilisis vel, fermentum nec sapien. Mauris consequat, enim non lobortis dapibus, dui arcu molestie arcu, tempus molestie augue nisl sit amet ex. Phasellus ac velit massa. Ut placerat scelerisque ex ut rutrum.
                    </li>

                    <li className=" font-light">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proin dictum orci non nisi rhoncus, eu dignissim libero efficitur. Nullam a mollis dui. Sed eget malesuada enim. Aliquam vitae mi nec nibh interdum commodo eu vitae quam. Ut purus sem, porta et eros vitae, placerat ornare augue. Nullam non ipsum libero. Suspendisse finibus dolor id eleifend posuere. Morbi lorem ligula, consectetur ac facilisis vel, fermentum nec sapien. Mauris consequat, enim non lobortis dapibus, dui arcu molestie arcu, tempus molestie augue nisl sit amet ex. Phasellus ac velit massa. Ut placerat scelerisque ex ut rutrum.
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <hr className="border-primary mt-5"/>

            <h3 className="font-semibold text-primary my-4 px-3">Education</h3>

            <div className="px-3 mb-4">
              <header className="flex">
                <h6 className="text-primary">Lorem Ipsum</h6>
                <time className="ml-auto text-primary font-light">2020</time>
              </header>
              <p className="text-primary font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. </p>
            </div>

            <div className="px-3 mb-4">
              <header className="flex">
                <h6 className="text-primary">Lorem Ipsum</h6>
                <time className="ml-auto text-primary font-light">2018</time>
              </header>
              <p className="text-primary font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. </p>
            </div>

            <div className="px-3 mb-4">
              <header className="flex">
                <h6 className="text-primary">Lorem Ipsum</h6>
                <time className="ml-auto text-primary font-light">2014</time>
              </header>
              <p className="text-primary font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-gray-black text-white px-5 lg:px-28 py-20 lg:py-36 flex flex-col md:flex-row mb-10">
        <article>
          <h3 className="font-bold text-2xl lg:text-4xl">Looking for something more specific?</h3>
          <p className="font-light text-lg mt-5">Sometimes you need a developer with a more specific set of skills to fit your project needs. Let’s see if we can help</p>
        </article>
        <button className="btn bg-btn-blue border-btn-blue text-white rounded-full px-8 my-auto mr-auto md:mr-0 md:ml-auto">Schedule a Meeting</button>
      </section>

      <Footer />

    </>
  )
}


