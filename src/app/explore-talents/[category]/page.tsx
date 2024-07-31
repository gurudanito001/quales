"use client"

import Link from "next/link";
import NavBar from "@/app/(home)/navbar";
import { UserIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Footer from "@/app/(home)/footer";
import { usePathname, useRouter } from "next/navigation";

export default function Page({params}: {params: {category: string}}) {
  const pathname = usePathname();
  const router = useRouter();
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
        <div className="flex flex-col mb-5 items-center lg:mx-auto cursor-pointer" onClick={()=>router.push(`${pathname}/jfghfdgpdg4t34t3`)}>
          <header className=" w-44 sm:w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-44 sm:w-64 pb-5 shadow-md border border-gray-200 rounded-lg">
            <article className="flex flex-col items-center relative -mt-16 px-3 sm:px-5">
              <span className=" rounded-full h-28 w-28 bg-[url('/images/abati-1.jpg')] bg-no-repeat bg-cover bg-center">
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-sm sm:text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary text-xs sm:text-sm sm:font-bold text-center">Software Test Engineer</span> 
                <span className="text-primary text-xs sm:text-sm font-light">Previously worked with:</span>
                <span className="text-primary text-sm font-semibold">APPZONE, NIGERIA</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-center lg:mx-auto cursor-pointer" onClick={()=>router.push(`${pathname}/jfghfdgpdg4t34t3`)}>
          <header className=" w-44 sm:w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-44 sm:w-64 pb-5 shadow-md border border-gray-200 rounded-lg">
            <article className="flex flex-col items-center relative -mt-16 px-3 sm:px-5">
              <span className=" rounded-full h-28 w-28 bg-[url('/images/abati-1.jpg')] bg-no-repeat bg-cover bg-center">
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-sm sm:text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary text-xs sm:text-sm sm:font-bold text-center">Software Test Engineer</span> 
                <span className="text-primary text-xs sm:text-sm font-light">Previously worked with:</span>
                <span className="text-primary text-sm font-semibold">APPZONE, NIGERIA</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-center lg:mx-auto cursor-pointer" onClick={()=>router.push(`${pathname}/jfghfdgpdg4t34t3`)}>
          <header className=" w-44 sm:w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-44 sm:w-64 pb-5 shadow-md border border-gray-200 rounded-lg">
            <article className="flex flex-col items-center relative -mt-16 px-3 sm:px-5">
              <span className=" rounded-full h-28 w-28 bg-[url('/images/abati-1.jpg')] bg-no-repeat bg-cover bg-center">
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-sm sm:text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary text-xs sm:text-sm sm:font-bold text-center">Software Test Engineer</span> 
                <span className="text-primary text-xs sm:text-sm font-light">Previously worked with:</span>
                <span className="text-primary text-sm font-semibold">APPZONE, NIGERIA</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-center lg:mx-auto cursor-pointer" onClick={()=>router.push(`${pathname}/jfghfdgpdg4t34t3`)}>
          <header className=" w-44 sm:w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-44 sm:w-64 pb-5 shadow-md border border-gray-200 rounded-lg">
            <article className="flex flex-col items-center relative -mt-16 px-3 sm:px-5">
              <span className=" rounded-full h-28 w-28 bg-[url('/images/abati-1.jpg')] bg-no-repeat bg-cover bg-center">
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-sm sm:text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary text-xs sm:text-sm sm:font-bold text-center">Software Test Engineer</span> 
                <span className="text-primary text-xs sm:text-sm font-light">Previously worked with:</span>
                <span className="text-primary text-sm font-semibold">APPZONE, NIGERIA</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-center lg:mx-auto cursor-pointer" onClick={()=>router.push(`${pathname}/jfghfdgpdg4t34t3`)}>
          <header className=" w-44 sm:w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-44 sm:w-64 pb-5 shadow-md border border-gray-200 rounded-lg">
            <article className="flex flex-col items-center relative -mt-16 px-3 sm:px-5">
              <span className=" rounded-full h-28 w-28 bg-[url('/images/abati-1.jpg')] bg-no-repeat bg-cover bg-center">
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-sm sm:text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary text-xs sm:text-sm sm:font-bold text-center">Software Test Engineer</span> 
                <span className="text-primary text-xs sm:text-sm font-light">Previously worked with:</span>
                <span className="text-primary text-sm font-semibold">APPZONE, NIGERIA</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-center lg:mx-auto cursor-pointer" onClick={()=>router.push(`${pathname}/jfghfdgpdg4t34t3`)}>
          <header className=" w-44 sm:w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-44 sm:w-64 pb-5 shadow-md border border-gray-200 rounded-lg">
            <article className="flex flex-col items-center relative -mt-16 px-3 sm:px-5">
              <span className=" rounded-full h-28 w-28 bg-[url('/images/abati-1.jpg')] bg-no-repeat bg-cover bg-center">
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-sm sm:text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary text-xs sm:text-sm sm:font-bold text-center">Software Test Engineer</span> 
                <span className="text-primary text-xs sm:text-sm font-light">Previously worked with:</span>
                <span className="text-primary text-sm font-semibold">APPZONE, NIGERIA</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-center lg:mx-auto cursor-pointer" onClick={()=>router.push(`${pathname}/jfghfdgpdg4t34t3`)}>
          <header className=" w-44 sm:w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-44 sm:w-64 pb-5 shadow-md border border-gray-200 rounded-lg">
            <article className="flex flex-col items-center relative -mt-16 px-3 sm:px-5">
              <span className=" rounded-full h-28 w-28 bg-[url('/images/abati-1.jpg')] bg-no-repeat bg-cover bg-center">
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-sm sm:text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary text-xs sm:text-sm sm:font-bold text-center">Software Test Engineer</span> 
                <span className="text-primary text-xs sm:text-sm font-light">Previously worked with:</span>
                <span className="text-primary text-sm font-semibold">APPZONE, NIGERIA</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-center lg:mx-auto cursor-pointer" onClick={()=>router.push(`${pathname}/jfghfdgpdg4t34t3`)}>
          <header className=" w-44 sm:w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-44 sm:w-64 pb-5 shadow-md border border-gray-200 rounded-lg">
            <article className="flex flex-col items-center relative -mt-16 px-3 sm:px-5">
              <span className=" rounded-full h-28 w-28 bg-[url('/images/abati-1.jpg')] bg-no-repeat bg-cover bg-center">
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-sm sm:text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary text-xs sm:text-sm sm:font-bold text-center">Software Test Engineer</span> 
                <span className="text-primary text-xs sm:text-sm font-light">Previously worked with:</span>
                <span className="text-primary text-sm font-semibold">APPZONE, NIGERIA</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-center lg:mx-auto cursor-pointer" onClick={()=>router.push(`${pathname}/jfghfdgpdg4t34t3`)}>
          <header className=" w-44 sm:w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-44 sm:w-64 pb-5 shadow-md border border-gray-200 rounded-lg">
            <article className="flex flex-col items-center relative -mt-16 px-3 sm:px-5">
              <span className=" rounded-full h-28 w-28 bg-[url('/images/abati-1.jpg')] bg-no-repeat bg-cover bg-center">
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-sm sm:text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary text-xs sm:text-sm sm:font-bold text-center">Software Test Engineer</span> 
                <span className="text-primary text-xs sm:text-sm font-light">Previously worked with:</span>
                <span className="text-primary text-sm font-semibold">APPZONE, NIGERIA</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-center lg:mx-auto cursor-pointer" onClick={()=>router.push(`${pathname}/jfghfdgpdg4t34t3`)}>
          <header className=" w-44 sm:w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-44 sm:w-64 pb-5 shadow-md border border-gray-200 rounded-lg">
            <article className="flex flex-col items-center relative -mt-16 px-3 sm:px-5">
              <span className=" rounded-full h-28 w-28 bg-[url('/images/abati-1.jpg')] bg-no-repeat bg-cover bg-center">
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-sm sm:text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary text-xs sm:text-sm sm:font-bold text-center">Software Test Engineer</span> 
                <span className="text-primary text-xs sm:text-sm font-light">Previously worked with:</span>
                <span className="text-primary text-sm font-semibold">APPZONE, NIGERIA</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-center lg:mx-auto cursor-pointer" onClick={()=>router.push(`${pathname}/jfghfdgpdg4t34t3`)}>
          <header className=" w-44 sm:w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-44 sm:w-64 pb-5 shadow-md border border-gray-200 rounded-lg">
            <article className="flex flex-col items-center relative -mt-16 px-3 sm:px-5">
              <span className=" rounded-full h-28 w-28 bg-[url('/images/abati-1.jpg')] bg-no-repeat bg-cover bg-center">
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-sm sm:text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary text-xs sm:text-sm sm:font-bold text-center">Software Test Engineer</span> 
                <span className="text-primary text-xs sm:text-sm font-light">Previously worked with:</span>
                <span className="text-primary text-sm font-semibold">APPZONE, NIGERIA</span>
              </div>
            </article>
          </div>
        </div>

        <div className="flex flex-col mb-5 items-center lg:mx-auto cursor-pointer" onClick={()=>router.push(`${pathname}/jfghfdgpdg4t34t3`)}>
          <header className=" w-44 sm:w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
          <div className=" w-44 sm:w-64 pb-5 shadow-md border border-gray-200 rounded-lg">
            <article className="flex flex-col items-center relative -mt-16 px-3 sm:px-5">
              <span className=" rounded-full h-28 w-28 bg-[url('/images/abati-1.jpg')] bg-no-repeat bg-cover bg-center">
              </span>
              <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-sm sm:text-lg">Abati Adeotan Senayon</h6>
              <div className="flex flex-col items-center">
                <span className="text-primary text-xs sm:text-sm sm:font-bold text-center">Software Test Engineer</span> 
                <span className="text-primary text-xs sm:text-sm font-light">Previously worked with:</span>
                <span className="text-primary text-sm font-semibold">APPZONE, NIGERIA</span>
              </div>
            </article>
          </div>
        </div>


      </div>

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
    </section>

    <Footer />

    </>
  )
}


