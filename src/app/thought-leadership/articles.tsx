"use client"


import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Fragment, useState } from "react";

const Article1 = () => {
  return (
    <Link className="flex flex-col" href="/articles/the-role-of-automation-in-quality-assurance-tools-and-techniques">
      <Image className="w-full max-h-48 object-cover rounded-xl" src="/images/role-of-automation.png" alt="Article Image" width={250} height={200} />
      <h4 className="mt-3 text-lg  font-550 mb-2 leading-5">The Role of Automation in Quality Assurance: Tools and Techniques</h4>
      <p className="text-sm text-primary font-light mb-3 mt-auto">In today&apos;s fast-paced digital landscape, quality assurance (QA) has become more critical than ever. As software development cycles shorten and the ...</p>
      <div className="flex items-center gap-3">
        <Image src="/images/user-img.png" width={40} height={40} alt="author image" />
        <div className="flex flex-col">
          <span className="text-xs font-550">David Ibekwe</span>
          <span className="text-xs">23rd April, 2024 | 3 min read</span>
        </div>
      </div>
    </Link>
  )
}

const Article2 = () => {
  return (
    <Link className="flex flex-col" href="/articles/the-shift-from-manual-to-automated-testing-challenges-and-solutions">
      <Image className="w-full max-h-48 object-cover rounded-xl" src="/images/shift-from-manual.png" alt="Article Image" width={250} height={200} />
      <h4 className="mt-3 text-lg  font-550 mb-2 leading-5">The Shift from Manual to Automated Testing: Challenges and Solutions</h4>
      <p className="text-sm text-primary font-light mb-3 mt-auto">In the ever-evolving landscape of software development, the shift from manual to automated testing has become a critical strategy for many organizations ...</p>
      <div className="flex items-center gap-3">
        <Image src="/images/user-img.png" width={40} height={40} alt="author image" />
        <div className="flex flex-col">
          <span className="text-xs font-550">David Ibekwe</span>
          <span className="text-xs">3rd May, 2024 | 3 min read</span>
        </div>
      </div>
    </Link>
  )
}

const Article3 = () => {
  return (
    <Link className="flex flex-col" href="/articles/testing-in-devops-how-qa-engineers-can-keep-up-with-the-speed-of-continuous-integration">
      <Image className="w-full max-h-48 object-cover rounded-xl" src="/images/testing-in-devops.png" alt="Article Image" width={250} height={200} />
      <h4 className="mt-3 text-lg  font-550 mb-2 leading-5">Testing in DevOps: How QA Engineers Can Keep Up with the Speed of Continuous Integration</h4>
      <p className="text-sm text-primary font-light mb-3 mt-auto">In the dynamic world of software development, the demand for faster delivery and higher quality has never been greater. This pressure is particularly ... </p>
      <div className="flex items-center gap-3">
        <Image src="/images/user-img.png" width={40} height={40} alt="author image" />
        <div className="flex flex-col">
          <span className="text-xs font-550">David Ibekwe</span>
          <span className="text-xs">16th May, 2024 | 3 min read</span>
        </div>
      </div>
    </Link>
  )
}

const Article4 = () => {
  return (
    <Link className="flex flex-col" href="/articles/who-is-a-scrum-master">
      <Image className="w-full max-h-48 object-cover rounded-xl" src="/images/who-is-a-scrum-master.png" alt="Article Image" width={250} height={200} />
      <h4 className="mt-3 text-lg  font-550 mb-2 leading-5">Who is a Scrum Master?</h4>
      <p className="text-sm text-primary font-light mb-3 mt-auto">In the realm of Agile project management, the role of a Scrum Master stands out as a pivotal element for the successful implementation of the Scrum framework.</p>
      <div className="flex items-center gap-3">
        <Image src="/images/user-img.png" width={40} height={40} alt="author image" />
        <div className="flex flex-col">
          <span className="text-xs font-550">David Ibekwe</span>
          <span className="text-xs">4th June, 2024 | 3 min read</span>
        </div>
      </div>
    </Link>
  )
}

const articles = [
  {
    title: "The Role of Automation in Quality Assurance: Tools and Techniques",
    category: "qa-engineering",
    article: <Article1 />
  },
  {
    title: "The Shift from Manual to Automated Testing: Challenges and Solutions",
    category: "qa-engineering",
    article: <Article2 />
  },
  {
    title: "Testing in DevOps: How QA Engineers Can Keep Up with the Speed of Continuous Integration",
    category: "qa-engineering",
    article: <Article3 />
  },
  {
    title: "Who is a Scrum Master?",
    category: "professional-development",
    article: <Article4 />
  }
]



const Articles = ()=>{

  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");


  const filterArticles = (category: string, search: string) =>{
    let result = articles;
    if(category){
      result = result.filter( item => item?.category === category)
    }
    if(search){
      result = result.filter( item => item?.title.toLowerCase().trim().includes(search.toLowerCase().trim()))
    }

    return result
  }


  return(
  <>
    <section>
          <h4 className="text-xl font-550 text-primary text-center mb-5 md:mb-10">Our Recent Blogs</h4>
          <div className="flex items-center gap-3">
            <button onClick={()=>setCategory("")} className={`btn btn-link btn-xs text-xs text-black no-underline hidden md:inline-flex font-normal  ${category === "" && "font-extrabold text-primary"}`}>All</button>
            <button onClick={()=>setCategory("career-advice")} className={`btn btn-link btn-xs text-xs text-black no-underline hidden md:inline-flex font-normal ${category === "career-advice" && "font-extrabold text-primary"}`}>Career Advice</button>

            <button onClick={()=>setCategory("tech-trends")} className={`btn btn-link btn-xs text-xs text-black no-underline hidden md:inline-flex font-normal ${category === "tech-trends" && "font-extrabold text-primary"}`}>Tech Trends</button>

            <button onClick={()=>setCategory("qa-engineering")} className={`btn btn-link btn-xs text-xs text-black no-underline hidden md:inline-flex font-normal ${category === "qa-engineering" && "font-extrabold text-primary"}`}>QA Engineering</button>

            <button onClick={()=>setCategory("software-development")} className={`btn btn-link btn-xs text-xs text-black no-underline hidden md:inline-flex font-normal ${category === "software-development" && "font-extrabold text-primary"}`}>Software Development</button>

            <button onClick={()=>setCategory("professional-development")} className={`btn btn-link btn-xs text-xs text-black no-underline hidden md:inline-flex font-normal ${category === "professional-development" && "font-extrabold text-primary"}`}>Professional Development</button>

            <label className="input input-bordered flex items-center gap-2 shadow-md rounded-full w-full md:w-96 ml-auto bg-form-input-bg">
              <input type="text" className="grow input-sm" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
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
          {filterArticles(category, search).map( item => {
            return <Fragment key={item.title}>{item?.article}</Fragment>
          })}

          {/* <Article1 />
          <Article2 />
          <Article3 />
          <Article4 /> */}
          
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
  </>
  )
}

export default Articles