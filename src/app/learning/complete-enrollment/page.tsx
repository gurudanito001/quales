"use client"


import NavBar from "../home/navbar";
import { Metadata } from 'next';
import RegisterForCohortSlider from "../register-for-cohort/registerForCohortSlider";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
 
/* export const metadata: Metadata = {
  title: 'Learning | Quales Consulting',
  description: 'Quales Consulting comprises an elite network of the finest freelance Software Developers, Designers, Business Analysts, Product Managers, and Scrum Masters, Data Analysts globally. Leading companies engage freelancers from Quales Consulting for their critical projects.',
}; */

export interface data {
  email: string, programType: "scrum-mastery" | "software-quality-assurance" | "", cohort: string,  plan: "basic" | "standard" | "premium" | "gold" | "platinum" | ""
}

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState <data>({
    email: "",
    programType: "",
    plan: "",
    cohort: "",
  })


  const paymentLinks = {
    "scrum-mastery": {
      basic: "https://paystack.com/buy/basic-plan-software-quality-assurance-package-atabvi",
      standard: "https://paystack.com/buy/standard-plan-scrum-master-package-ycdkmh",
      premium: "https://paystack.com/buy/premium-plan-scrum-master-package-wynrel",
      gold: "https://paystack.com/buy/gold-plan-scrum-master-package-oshqjl",
      platinum: "https://paystack.com/buy/platinum-plan-scrum-master-package-oqkumz"
    },
    "software-quality-assurance": {
      basic: "https://paystack.com/buy/basic-plan-software-quality-assurance-package-atabvi",
      standard: "https://paystack.com/buy/standard-plan-software-quality-assurance-package-hnsfku",
      premium: "https://paystack.com/buy/premium-plan-software-quality-assurance-package-jelkmh",

      gold: "https://paystack.com/buy/gold-plan-scrum-master-package-oshqjl",
      platinum: "https://paystack.com/buy/platinum-plan-scrum-master-package-oqkumz"
    }
  }

  const handleChangeFormData = (prop: string) => (event: any)=>{
    setFormData( (prevState: any) => ({
      ...prevState,
      [prop]: event.target.value
    }))
  }

  const disableSubmitButton = () =>{
    if(formData?.email === "" || formData?.plan === "" || formData?.programType === "" || formData?.cohort === "" ){
      return true
    }else{
      return false
    }
  }

  const handleClickPay = (e: any) =>{
    e.preventDefault();
    console.log(formData)
    if(formData.programType === ""){
      return;
    }
    if(formData.programType === "scrum-mastery"){
      console.log(formData)
      if( formData.plan !== "" && ["standard", "premium", "gold", "platinum"].includes(formData.plan)){
        console.log("paying222!!!")
        router.push(paymentLinks["scrum-mastery"][formData.plan])
      }
    } else if(formData.programType === "software-quality-assurance"){
      if( formData.plan !== "" && ["basic", "standard", "premium"].includes(formData.plan)){
        router.push(paymentLinks["software-quality-assurance"][formData.plan])
      }
    }
  }
  return (
    <>
      <div className="w-screen z-50 absolute top-0 left-0"><NavBar /></div>


      <section className="grid grid-cols-1 xl:grid-cols-2 max-h-screen">
        <RegisterForCohortSlider />
        <section className="bg-white py-32 px-5 lg:px-24 flex flex-col items-center h-screen overflow-y-auto">
      <h1 className="text-primary text-3xl mb-10 w-full max-w-550">Complete Enrollment</h1>
      <div className="flex items-center mb-5 w-full max-w-550">
        <h2 className="text-primary text-lg font-light mr-auto">Let&apos;s help choose the best plan for you, click here to find out. </h2>
        <Link href="/learning/learningplans"  className="btn bg-green-600 text-white rounded-full px-8 h-12">View Learning Plans</Link>
      </div>
      

      <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 w-full max-w-550">
        <input type="email"  value={formData?.email} onChange={handleChangeFormData("email")}  className="grow px-5 placeholder:text-sm placeholder:text-red-900 h-12" placeholder="Email Address" />
      </label>

      <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 w-full max-w-550">
        <select value={formData.programType} onChange={handleChangeFormData("programType")} className={`select bg-transparent focus:border-none w-full ${formData?.programType === "" ? "text-red-900" : "text-black"}`}>
          <option disabled value="">Program Type</option>
          <option value="software-quality-assurance">Software Quality Assurance</option>
          <option value="scrum-mastery">Scrum Mastery</option>
        </select>
      </label>

      <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 w-full max-w-550">
        <select value={formData.plan} onChange={handleChangeFormData("plan")} className={`select bg-transparent focus:border-none w-full ${formData?.plan === "" ? "text-red-900" : "text-black"}`}>
          <option disabled value="">Which Plan Would You Like to Choose</option>
          {formData?.programType === "software-quality-assurance" && <option value="basic">Basic Plan</option>}
          <option value="standard">Standard Plan</option>
          <option value="premium">Premium Plan</option>
          {formData?.programType === "scrum-mastery" && <option value="gold">Gold Plan</option>}
          {formData?.programType === "scrum-mastery" && <option value="platinum">Platinum Plan</option>}
        </select>
      </label>

      <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 w-full max-w-550">
        <select value={formData.cohort} onChange={handleChangeFormData("cohort")} className={`select bg-transparent focus:border-none w-full ${formData?.cohort === "" ? "text-red-900" : "text-black"}`}>
          <option disabled value="">Cohort</option>
          <option value="cohort-19">Cohort 19</option>
          <option value="cohort-20">Cohort 20</option>
          <option value="cohort-21">Cohort 21</option>
        </select>
      </label>


      <button disabled={disableSubmitButton()} className="btn bg-primary text-white rounded-full mx-auto mt-10 px-14 h-12" onClick={handleClickPay}>Proceed to Payment</button>
    </section>
      </section>
    </>
  );
}
