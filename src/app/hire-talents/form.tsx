"use client"

import Image from "next/image";
import { useState } from "react";

const HireTalentsForm = () =>{

  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    talentsRequired: [],
    skillSet: "",
    resumptionWindow: ""
  })

  return (
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
  )
}

export default HireTalentsForm;