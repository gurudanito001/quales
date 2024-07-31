"use client"

import { UserIcon } from "@heroicons/react/24/solid";
import NavBar from "../(home)/navbar";
import Image from "next/image";
import { useState } from "react";

const HireTalents = ()=>{
  /* const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    talentsRequired: [],
    skillSet: "",
    resumptionWindow: ""
  }) */


  return(
    <>
    <NavBar />

    <section className="grid grid-cols-1 xl:grid-cols-2 min-h-screen">
      <div className="hidden xl:block bg-primary text-white py-44 p-8">
        <h3 className="text-2xl font-semibold lg:mx-14">Leverage Quales Talents<br/>to Seamlessly Ensure Project Success</h3>
        
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


      <form className="bg-white py-32 px-5 lg:px-24 flex flex-col">
        <h5 className="text-primary text-2xl font-light mb-16">Let’s find you the right talent</h5>

        <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 max-w-550 lg:max-w-full">
          <input type="text" className="grow px-5 placeholder:text-sm" placeholder="Company Name" />
        </label>
        <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 max-w-550 lg:max-w-full">
          <input type="text" className="grow px-5 placeholder:text-sm" placeholder="Company Email Address" />
        </label>
        <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 max-w-550 lg:max-w-full">
          <select className="select bg-transparent w-full text-gray-400">
            <option disabled selected>Talents Required</option>
          </select>
        </label>
        <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 max-w-550 lg:max-w-full">
          <input type="text" className="grow px-5 placeholder:text-sm" placeholder="Skill Set" />
        </label>
        <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 max-w-550 lg:max-w-full">
          <select className="select bg-transparent w-full text-gray-400">
            <option disabled selected>Resumption Window</option>
          </select>
        </label>

        {/* <button className="btn bg-primary text-white rounded-full mx-auto mt-10 px-14 h-16">Link me up with the Talent </button> */}
          <button className="btn bg-primary text-white rounded-full mx-auto mt-10 px-14 h-16" onClick={(e) => {
            e.preventDefault()
            let el: any = document?.getElementById('hire_talent_modal');
            if(!el){return;}
            el.showModal()
          }}>Link me up with the Talent</button>
          <dialog id="hire_talent_modal" className="modal modal-bottom sm:modal-middle border">
            <div className="modal-box flex flex-col rounded-xl py-8 px-5">
              <Image src="/images/success-avatar.svg" alt="success avatar" width={200} height={200} className="mx-auto" />
              <p className="py-4 text-primary text-center">Thanks for indicating your interest in our talents, we shall connect you with them soon.</p>
              <div className="modal-action flex">
                <form method="dialog" className=" mx-auto">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn bg-primary text-white rounded-full px-8">Done</button>
                </form>
              </div>
            </div>
          </dialog>
      </form>
    </section>
    </>
    
  )
}

export default HireTalents