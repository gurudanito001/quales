"use client"

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { data } from "./page";


const CourseInfoForm = ({formData, setFormData}: {formData: data, setFormData: (state: any)=>void}) =>{

  


  const handleChangeFormData = (prop: string) => (event: any)=>{
    setFormData( (prevState: any) => ({
      ...prevState,
      [prop]: event.target.value
    }))
  }

  const disableSubmitButton = () =>{
    if(formData?.currentlyWorking === "" || formData?.plan === "" || formData?.howDoYouIntendToPay === "" || formData?.whyTakeCourse === "" || formData?.howDidYouHearAboutUs === "" || formData?.refererNameAndPhone === "" ){
      return true
    }else{
      return false
    }
  }
  return (
    <section className="bg-white py-32 px-5 lg:px-24 flex flex-col items-center h-screen overflow-y-auto">
      <h1 className="text-primary text-3xl mb-10 w-full max-w-550">Register for a Cohort</h1>
      <div className="flex items-center mb-5 w-full max-w-550">
        <h2 className="text-primary text-lg font-light mr-auto">Let&apos;s help choose the best plan for you. </h2>
        <Link href=""  className="btn bg-green-600 text-white rounded-full px-8 h-12">View Learning Plans</Link>
      </div>
      

      <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 w-full max-w-550">
        <select value={formData.currentlyWorking} onChange={handleChangeFormData("currentlyWorking")} className={`select bg-transparent focus:border-none w-full ${formData?.currentlyWorking === "" ? "text-gray-400" : "text-black"}`}>
          <option disabled value="" className="text-red-900">I Currently Work as a {formData?.programType === "scrum-mastery" ? "Scrum Master" : "Software Tester"} </option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>

      <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 w-full max-w-550">
        <select value={formData.plan} onChange={handleChangeFormData("plan")} className={`select bg-transparent focus:border-none w-full ${formData?.plan === "" ? "text-gray-400" : "text-black"}`}>
          <option disabled value="">Which Plan Would You Like to Choose</option>
          {formData?.programType === "software-quality-assurance" && <option value="basic">Basic</option>}
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
          {formData?.programType === "scrum-mastery" && <option value="gold">Gold</option>}
          {formData?.programType === "scrum-mastery" && <option value="platinum">Platinum</option>}
        </select>
      </label>

      <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 w-full max-w-550">
        <select value={formData.howDoYouIntendToPay} onChange={handleChangeFormData("howDoYouIntendToPay")} className={`select bg-transparent focus:border-none w-full ${formData?.howDoYouIntendToPay === "" ? "text-gray-400" : "text-black"}`}>
          <option disabled value="" className="text-red-900">How Do You Intend to Pay and Take up the Course</option>
          <option value="1-3 months">In the next 1 - 3 months</option>
          <option value="4-6 months">In the next 4 - 6 months</option>
          <option value="7-9 months">In the next 7 - 9 months</option>
        </select>
      </label>

      <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 w-full max-w-550">
        <select value={formData.whyTakeCourse} onChange={handleChangeFormData("whyTakeCourse")} className={`select bg-transparent focus:border-none w-full ${formData?.whyTakeCourse === "" ? "text-gray-400" : "text-black"}`}>
          <option disabled value="">Tell us Why You Want to take this Course</option>
          <option value="career change">I&apos;m a Considering a Career Change</option>
          <option value="interested in software testing">Interested in {formData?.programType === "scrum-mastery" ? "Scrum Mastery" : "Software Testing"} as I am not confident of any other competencies</option>
          <option value="exploring my options">Just exploring my options</option>
        </select>
      </label>

      <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 w-full max-w-550">
        <select value={formData.howDidYouHearAboutUs} onChange={handleChangeFormData("howDidYouHearAboutUs")} className={`select bg-transparent focus:border-none w-full ${formData?.howDidYouHearAboutUs === "" ? "text-gray-400" : "text-black"}`}>
          <option disabled value="">How Did You Learn About Us</option>
          <option value="ads">Quales Instagram/LinkedIn/Twitter Ads</option>
          <option value="quales representative">A Quales Representative</option>
          <option value="previous participant">A Previous Participant of the Program</option>
          <option value="">Other</option>
        </select>
      </label>
      {formData?.howDidYouHearAboutUs !== "ads" && formData?.howDidYouHearAboutUs !== "quales representative" && formData?.howDidYouHearAboutUs !== "previous participant" &&
      <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 w-full max-w-550">
        <input type="text"  value={formData?.howDidYouHearAboutUs} onChange={handleChangeFormData("howDidYouHearAboutUs")}  className="grow px-5 placeholder:text-sm h-12" placeholder="Tell us how you heard about Us" />
      </label>}

      <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 w-full max-w-550">
        <input type="text"  value={formData?.refererNameAndPhone} onChange={handleChangeFormData("refererNameAndPhone")}  className="grow px-5 placeholder:text-sm h-12" placeholder="Referrer's Name and Phone Number" />
      </label>




      <button disabled={disableSubmitButton()} className="btn bg-primary text-white rounded-full mx-auto mt-10 px-14 h-12" onClick={(e) => {
        e.preventDefault();
        setFormData( (prevState: any) =>({
          ...prevState,
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          gender: "",
          course: "",
          university: "",
          programType: ""
        }))
        let el: any = document?.getElementById('qa_modal');
        if (!el) { return; }
        el.showModal()
      }}>Register</button>

      <dialog id="qa_modal" className="modal">
        <div className="modal-box flex flex-col rounded-xl py-14 px-5 w-11/12 max-w-5xl h-full max-h-550">
          <Image src="/images/success-avatar.svg" alt="success avatar" width={200} height={200} className="mx-auto mt-auto" />
          <p className="py-4 text-primary text-center max-w-800 mx-auto">Thanks you for your interest in our classes, you have successfully registered for Cohort #, would you like to proceed to make payment?</p>
          <div className="modal-action flex mb-auto">
            <form method="dialog" className="mx-auto">
              <button className="btn bg-primary text-white rounded-full px-8">Done</button>
              <button className="btn bg-gray-300 text-gray-700 rounded-full px-8 ml-4" onClick={()=>console.log("pay")}>Pay</button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  )
}

export default CourseInfoForm;