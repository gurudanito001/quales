import Link from "next/link";
import NavBar from "@/app/(home)/navbar";
import { UserIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Footer from "@/app/(home)/footer";

export default async function Page({params}: {params: {category: string}}) {

  const formatCategory = (category: string)=>{
    let result = category.replaceAll("-", " ")
    return result
  }
  return(

    <>
    <NavBar />
    <section className="flex flex-col bg-white px-5 xl:px-28 mt-10">

      <div className="breadcrumbs text-sm mb-10">
        <ul>
          <li><Link href="/explore-talents" className="text-primary text-xl">Talents</Link></li>
          <li><Link href={`/explore-talents/${params?.category}`} className="text-primary font-bold  text-xl capitalize">{formatCategory(params?.category)}</Link></li>
        </ul>
      </div>


      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="flex flex-col mb-5 items-center lg:mx-auto">
          <header className=" w-44 sm:w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-44 sm:w-64 pb-5 shadow-md border border-gray-200 rounded-lg">
            <article className="flex flex-col items-center relative -mt-12 px-3 sm:px-5">
              <span className=" rounded-full h-28 w-28 bg-gray-200 flex items-center content-center mb-3">
                <UserIcon className="text-gray-500 w-20 mx-auto" />
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-sm sm:text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary text-xs sm:text-sm sm:font-bold text-center">Software Test Engineer</span> 
                <span className="text-primary text-xs sm:text-sm font-light">Previously worked with:</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-center lg:mx-auto">
          <header className=" w-44 sm:w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-44 sm:w-64 pb-5 shadow-md border border-gray-200 rounded-lg">
            <article className="flex flex-col items-center relative -mt-12 px-3 sm:px-5">
              <span className=" rounded-full h-28 w-28 bg-gray-200 flex items-center content-center mb-3">
                <UserIcon className="text-gray-500 w-20 mx-auto" />
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-sm sm:text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary text-xs sm:text-sm sm:font-bold text-center">Software Test Engineer</span> 
                <span className="text-primary text-xs sm:text-sm font-light">Previously worked with:</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-center lg:mx-auto">
          <header className=" w-44 sm:w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-44 sm:w-64 pb-5 shadow-md border border-gray-200 rounded-lg">
            <article className="flex flex-col items-center relative -mt-12 px-3 sm:px-5">
              <span className=" rounded-full h-28 w-28 bg-gray-200 flex items-center content-center mb-3">
                <UserIcon className="text-gray-500 w-20 mx-auto" />
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-sm sm:text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary text-xs sm:text-sm sm:font-bold text-center">Software Test Engineer</span> 
                <span className="text-primary text-xs sm:text-sm font-light">Previously worked with:</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-center lg:mx-auto">
          <header className=" w-44 sm:w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-44 sm:w-64 pb-5 shadow-md border border-gray-200 rounded-lg">
            <article className="flex flex-col items-center relative -mt-12 px-3 sm:px-5">
              <span className=" rounded-full h-28 w-28 bg-gray-200 flex items-center content-center mb-3">
                <UserIcon className="text-gray-500 w-20 mx-auto" />
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-sm sm:text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary text-xs sm:text-sm sm:font-bold text-center">Software Test Engineer</span> 
                <span className="text-primary text-xs sm:text-sm font-light">Previously worked with:</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-center lg:mx-auto">
          <header className=" w-44 sm:w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-44 sm:w-64 pb-5 shadow-md border border-gray-200 rounded-lg">
            <article className="flex flex-col items-center relative -mt-12 px-3 sm:px-5">
              <span className=" rounded-full h-28 w-28 bg-gray-200 flex items-center content-center mb-3">
                <UserIcon className="text-gray-500 w-20 mx-auto" />
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-sm sm:text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary text-xs sm:text-sm sm:font-bold text-center">Software Test Engineer</span> 
                <span className="text-primary text-xs sm:text-sm font-light">Previously worked with:</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-center lg:mx-auto">
          <header className=" w-44 sm:w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-44 sm:w-64 pb-5 shadow-md border border-gray-200 rounded-lg">
            <article className="flex flex-col items-center relative -mt-12 px-3 sm:px-5">
              <span className=" rounded-full h-28 w-28 bg-gray-200 flex items-center content-center mb-3">
                <UserIcon className="text-gray-500 w-20 mx-auto" />
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-sm sm:text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary text-xs sm:text-sm sm:font-bold text-center">Software Test Engineer</span> 
                <span className="text-primary text-xs sm:text-sm font-light">Previously worked with:</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-center lg:mx-auto">
          <header className=" w-44 sm:w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-44 sm:w-64 pb-5 shadow-md border border-gray-200 rounded-lg">
            <article className="flex flex-col items-center relative -mt-12 px-3 sm:px-5">
              <span className=" rounded-full h-28 w-28 bg-gray-200 flex items-center content-center mb-3">
                <UserIcon className="text-gray-500 w-20 mx-auto" />
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-sm sm:text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary text-xs sm:text-sm sm:font-bold text-center">Software Test Engineer</span> 
                <span className="text-primary text-xs sm:text-sm font-light">Previously worked with:</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-center lg:mx-auto">
          <header className=" w-44 sm:w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-44 sm:w-64 pb-5 shadow-md border border-gray-200 rounded-lg">
            <article className="flex flex-col items-center relative -mt-12 px-3 sm:px-5">
              <span className=" rounded-full h-28 w-28 bg-gray-200 flex items-center content-center mb-3">
                <UserIcon className="text-gray-500 w-20 mx-auto" />
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-sm sm:text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary text-xs sm:text-sm sm:font-bold text-center">Software Test Engineer</span> 
                <span className="text-primary text-xs sm:text-sm font-light">Previously worked with:</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-center lg:mx-auto">
          <header className=" w-44 sm:w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-44 sm:w-64 pb-5 shadow-md border border-gray-200 rounded-lg">
            <article className="flex flex-col items-center relative -mt-12 px-3 sm:px-5">
              <span className=" rounded-full h-28 w-28 bg-gray-200 flex items-center content-center mb-3">
                <UserIcon className="text-gray-500 w-20 mx-auto" />
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-sm sm:text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary text-xs sm:text-sm sm:font-bold text-center">Software Test Engineer</span> 
                <span className="text-primary text-xs sm:text-sm font-light">Previously worked with:</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-center lg:mx-auto">
          <header className=" w-44 sm:w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-44 sm:w-64 pb-5 shadow-md border border-gray-200 rounded-lg">
            <article className="flex flex-col items-center relative -mt-12 px-3 sm:px-5">
              <span className=" rounded-full h-28 w-28 bg-gray-200 flex items-center content-center mb-3">
                <UserIcon className="text-gray-500 w-20 mx-auto" />
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-sm sm:text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary text-xs sm:text-sm sm:font-bold text-center">Software Test Engineer</span> 
                <span className="text-primary text-xs sm:text-sm font-light">Previously worked with:</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-center lg:mx-auto">
          <header className=" w-44 sm:w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-44 sm:w-64 pb-5 shadow-md border border-gray-200 rounded-lg">
            <article className="flex flex-col items-center relative -mt-12 px-3 sm:px-5">
              <span className=" rounded-full h-28 w-28 bg-gray-200 flex items-center content-center mb-3">
                <UserIcon className="text-gray-500 w-20 mx-auto" />
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-sm sm:text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary text-xs sm:text-sm sm:font-bold text-center">Software Test Engineer</span> 
                <span className="text-primary text-xs sm:text-sm font-light">Previously worked with:</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-center lg:mx-auto">
          <header className=" w-44 sm:w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-44 sm:w-64 pb-5 shadow-md border border-gray-200 rounded-lg">
            <article className="flex flex-col items-center relative -mt-12 px-3 sm:px-5">
              <span className=" rounded-full h-28 w-28 bg-gray-200 flex items-center content-center mb-3">
                <UserIcon className="text-gray-500 w-20 mx-auto" />
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-sm sm:text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary text-xs sm:text-sm sm:font-bold text-center">Software Test Engineer</span> 
                <span className="text-primary text-xs sm:text-sm font-light">Previously worked with:</span>
              </div>
            </article>
          </div>
        </div>


      </div>

      <div className="join mx-auto mt-8 mb-12 gap-3">
        <button className=" btn btn-sm bg-primary text-white border-none shadow-none px-2 mr-5"> <ChevronLeftIcon className="w-4" /> </button>
        <button className="join-item btn btn-sm shadow-none bg-transparent border-white border-b-primary border-b-2 px-2">1</button>
        <button className="join-item btn btn-sm shadow-none bg-transparent border-white px-2">2</button>
        <button className="join-item btn btn-sm shadow-none bg-transparent border-white px-2">3</button>
        <button className="join-item btn btn-sm shadow-none bg-transparent border-white px-2">4</button>
        <button className="join-item btn btn-sm shadow-none bg-transparent border-white px-2">5</button>
        <button className="join-item btn btn-sm shadow-none bg-transparent border-white px-2">......</button>
        <button className="join-item btn btn-sm shadow-none bg-transparent border-white px-2">10</button>
        <button className=" btn btn-sm bg-primary text-white border-none shadow-none px-2 ml-5"> <ChevronRightIcon className="w-4" /> </button>
      </div>
    </section>

    <Footer />

    </>
  )
}


