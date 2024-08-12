import NavBar from "../(home)/navbar";
import Footer from "../(home)/footer";
import Image from "next/image";
import { UserIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thought Leadership | Quales Consulting',
  description: "Gain valuable career insights and stay ahead with the latest industry trends. Our thought leadership offers expert analysis and practical advice for your professional growth.",
};



const ThoughtLeadership = () => {

  return (
    <main className="bg-white">
      <NavBar/>
      <section className="bg-white px-5 xl:px-28">
        <header className="flex flex-col py-8 md:py-14">
          <h2 className="text-xl md:text-3xl mx-auto md:mx-0 font-550 bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 inline text-transparent bg-clip-text">Delve Deep into Real-time Career </h2>
          <h2 className="text-xl md:text-3xl mx-auto md:mx-0 font-550 bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 inline text-transparent bg-clip-text">Insights and Industry Trends.</h2>
          <p className="text-primary max-w-3xl mt-5 text-center md:text-left">Gain valuable career insights and stay ahead with the latest industry trends. Our thought leadership offers expert analysis and practical advice for your professional growth. </p>
        </header>

        <section>
          <h4 className="text-xl font-550 text-primary text-center mb-5 md:mb-10">Our Recent Blogs</h4>
          <div className="flex items-center gap-3">
            <button className="btn btn-link btn-xs text-xs text-black no-underline hidden md:inline-flex font-normal">All</button>
            <button className="btn btn-link btn-xs text-xs text-black no-underline hidden md:inline-flex font-normal">Career Advice</button>
            <button className="btn btn-link btn-xs text-xs text-black no-underline hidden md:inline-flex font-normal">Tech Trends</button>
            <button className="btn btn-link btn-xs text-xs text-black no-underline hidden md:inline-flex font-normal">QA Engineering</button>
            <button className="btn btn-link btn-xs text-xs text-black no-underline hidden md:inline-flex font-normal">Software Development</button>
            <button className="btn btn-link btn-xs text-xs text-black no-underline hidden md:inline-flex font-normal">Professional Development</button>

            <label className="input input-bordered flex items-center gap-2 shadow-md rounded-full w-full md:w-96 ml-auto bg-form-input-bg">
              <input type="text" className="grow input-sm" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd" />
              </svg>
            </label>
          </div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-8  py-10">
          <article className="">
            <figure className="w-full h-48 shadow-md bg-[url('/images/article-img.png')] bg-no-repeat bg-cover bg-center flex items-center content-center rounded-lg"></figure>
            <h4 className="mt-3 text-lg font-550 mb-2 leading-5">Understanding QA Engineering as a Beginner</h4>
            <p className="text-sm text-primary font-light mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proi</p>
            <div className="flex items-center gap-3">
              <Image src="/images/user-img.png" width={40} height={40} alt="author image" />
              <div className="flex flex-col">
                <span className="text-xs font-550">David Ibekwe</span>
                <span className="text-xs">Nov 24, 2023 | 10 min read</span>
              </div>
            </div>
          </article>

          <article className="">
            <figure className="w-full h-48 shadow-md bg-[url('/images/article-img.png')] bg-no-repeat bg-cover bg-center flex items-center content-center rounded-lg"></figure>
            <h4 className="mt-3 text-lg font-550 mb-2 leading-5">Understanding QA Engineering as a Beginner</h4>
            <p className="text-sm text-primary font-light mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proi</p>
            <div className="flex items-center gap-3">
              <Image src="/images/user-img.png" width={40} height={40} alt="author image" />
              <div className="flex flex-col">
                <span className="text-xs font-550">David Ibekwe</span>
                <span className="text-xs">Nov 24, 2023 | 10 min read</span>
              </div>
            </div>
          </article>

          <article className="">
            <figure className="w-full h-48 shadow-md bg-[url('/images/article-img.png')] bg-no-repeat bg-cover bg-center flex items-center content-center rounded-lg"></figure>
            <h4 className="mt-3 text-lg font-550 mb-2 leading-5">Understanding QA Engineering as a Beginner</h4>
            <p className="text-sm text-primary font-light mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proi</p>
            <div className="flex items-center gap-3">
              <Image src="/images/user-img.png" width={40} height={40} alt="author image" />
              <div className="flex flex-col">
                <span className="text-xs font-550">David Ibekwe</span>
                <span className="text-xs">Nov 24, 2023 | 10 min read</span>
              </div>
            </div>
          </article>

          <article className="">
            <figure className="w-full h-48 shadow-md bg-[url('/images/article-img.png')] bg-no-repeat bg-cover bg-center flex items-center content-center rounded-lg"></figure>
            <h4 className="mt-3 text-lg font-550 mb-2 leading-5">Understanding QA Engineering as a Beginner</h4>
            <p className="text-sm text-primary font-light mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proi</p>
            <div className="flex items-center gap-3">
              <Image src="/images/user-img.png" width={40} height={40} alt="author image" />
              <div className="flex flex-col">
                <span className="text-xs font-550">David Ibekwe</span>
                <span className="text-xs">Nov 24, 2023 | 10 min read</span>
              </div>
            </div>
          </article>

          <article className="">
            <figure className="w-full h-48 shadow-md bg-[url('/images/article-img.png')] bg-no-repeat bg-cover bg-center flex items-center content-center rounded-lg"></figure>
            <h4 className="mt-3 text-lg font-550 mb-2 leading-5">Understanding QA Engineering as a Beginner</h4>
            <p className="text-sm text-primary font-light mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proi</p>
            <div className="flex items-center gap-3">
              <Image src="/images/user-img.png" width={40} height={40} alt="author image" />
              <div className="flex flex-col">
                <span className="text-xs font-550">David Ibekwe</span>
                <span className="text-xs">Nov 24, 2023 | 10 min read</span>
              </div>
            </div>
          </article>

          <article className="">
            <figure className="w-full h-48 shadow-md bg-[url('/images/article-img.png')] bg-no-repeat bg-cover bg-center flex items-center content-center rounded-lg"></figure>
            <h4 className="mt-3 text-lg font-550 mb-2 leading-5">Understanding QA Engineering as a Beginner</h4>
            <p className="text-sm text-primary font-light mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proi</p>
            <div className="flex items-center gap-3">
              <Image src="/images/user-img.png" width={40} height={40} alt="author image" />
              <div className="flex flex-col">
                <span className="text-xs font-550">David Ibekwe</span>
                <span className="text-xs">Nov 24, 2023 | 10 min read</span>
              </div>
            </div>
          </article>

          <article className="">
            <figure className="w-full h-48 shadow-md bg-[url('/images/article-img.png')] bg-no-repeat bg-cover bg-center flex items-center content-center rounded-lg"></figure>
            <h4 className="mt-3 text-lg font-550 mb-2 leading-5">Understanding QA Engineering as a Beginner</h4>
            <p className="text-sm text-primary font-light mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proi</p>
            <div className="flex items-center gap-3">
              <Image src="/images/user-img.png" width={40} height={40} alt="author image" />
              <div className="flex flex-col">
                <span className="text-xs font-550">David Ibekwe</span>
                <span className="text-xs">Nov 24, 2023 | 10 min read</span>
              </div>
            </div>
          </article>

          <article className="">
            <figure className="w-full h-48 shadow-md bg-[url('/images/article-img.png')] bg-no-repeat bg-cover bg-center flex items-center content-center rounded-lg"></figure>
            <h4 className="mt-3 text-lg font-550 mb-2 leading-5">Understanding QA Engineering as a Beginner</h4>
            <p className="text-sm text-primary font-light mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ultrices ligula. Proi</p>
            <div className="flex items-center gap-3">
              <Image src="/images/user-img.png" width={40} height={40} alt="author image" />
              <div className="flex flex-col">
                <span className="text-xs font-550">David Ibekwe</span>
                <span className="text-xs">Nov 24, 2023 | 10 min read</span>
              </div>
            </div>
          </article>
        </div>

        <div className="flex">
          <div className="join items-center mx-auto mt-8 mb-12 gap-3">
            <button className=" btn btn-xs bg-primary text-white border-none shadow-none px-1 mr-5"> <ChevronLeftIcon className="w-4" /> </button>
            <button className="join-item btn btn-sm shadow-none bg-transparent border-white border-b-primary border-b-2 px-1">1</button>
            <button className="join-item btn btn-sm shadow-none bg-transparent border-white px-1">2</button>
            <button className="join-item btn btn-sm shadow-none bg-transparent border-white px-1">3</button>
            <button className="join-item btn btn-sm shadow-none bg-transparent border-white px-1">4</button>
            <button className="join-item btn btn-sm shadow-none bg-transparent border-white px-1">5</button>
            <button className="join-item btn btn-sm shadow-none bg-transparent border-white px-1">......</button>
            <button className="join-item btn btn-sm shadow-none bg-transparent border-white px-1">10</button>
            <button className=" btn btn-xs bg-primary text-white border-none shadow-none px-1 ml-5"> <ChevronRightIcon className="w-4" /> </button>
          </div>
        </div>
        
      </section>
      <Footer />
    </main>
  )
}

export default ThoughtLeadership