
import { UserIcon } from "@heroicons/react/24/solid";
import NavBar from "../(home)/navbar";
import HireTalentsForm from "./form";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire Talents | Quales Consulting',
  description: "Leverage Quales Talents to Seamlessly Ensure Project Success",
};

const HireTalents = ()=>{
  
  return(
    <>
    <NavBar />

    <section className="grid grid-cols-1 xl:grid-cols-2 min-h-screen">
      <div className="hidden xl:block bg-primary text-white py-44 p-8">
        <h2 className="text-2xl font-semibold lg:mx-14">Leverage Quales Talents<br/>to Seamlessly Ensure Project Success</h2>
        
        <div className="flex mt-14 gap-10">
          <div className="flex flex-col mb-5 items-center ml-auto bg-white rounded-lg">
            <header className="w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
            <div className=" w-64 pb-5 shadow-md border border-gray-200 rounded-lg">
              <article className="flex flex-col items-center relative -mt-12 px-5">
                <span className="rounded-lg h-36 w-40 bg-gray-200 flex items-center content-center mb-3">
                  <UserIcon className="text-gray-500 w-20 mx-auto" />
                </span>
                <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-lg">Abati Adeotan Senayon</h6>
                <div className="flex flex-col items-center">
                  <span className="text-primary font-semibold ml-1">Software Test Engineer</span>
                  <span className="text-primary font-light ml-1">3 years of experience</span>
                </div>
              </article>
            </div>
          </div>

          <div className="flex flex-col mb-5 items-center mr-auto bg-white rounded-lg">
            <header className=" w-64 h-24 shadow-md border border-gray-200 rounded-lg"></header>
            <div className=" w-64 pb-5 shadow-md border border-gray-200 rounded-lg">
              <article className="flex flex-col items-center relative -mt-12 px-5">
                <span className="rounded-lg h-36 w-40 bg-gray-200 flex items-center content-center mb-3">
                  <UserIcon className="text-gray-500 w-20 mx-auto" />
                </span>
                <h6 className="text-primary text-center leading-tight mt-3 mb-2 font-semibold uppercase text-lg">Abati Adeotan Senayon</h6>
                <div className="flex flex-col items-center">
                  <span className="text-primary font-semibold ml-1">Software Test Engineer</span>
                  <span className="text-primary font-light ml-1">3 years of experience</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <HireTalentsForm />
    </section>
    </>
    
  )
}

export default HireTalents