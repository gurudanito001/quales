"use client"

import Image from "next/image";
import { useState } from "react";
import generateRandomId from "../lib/generateRandomId";
import { XMarkIcon } from "@heroicons/react/24/solid";

const categories = {
  "qa-engineer": ["test-automation", "programming", "api-testing", "feedback", "database-knowledge", "critical-thinking", "documentation", "collaboration", "time-management", "continuous-learning", "ci-cd", "problem-solving"],

  "software-developer": ["object-oriented-programming", "debugging", "algorithmic-thinking", "software-development-life-cycle", "database-knowledge", "attention-to-detail", "version-control", "collaboration", "time-management", "continuous-learning", "creativity", "logic-programming", "front-end", "back-end" ],

  "product-manager": ["communication", "leadership", "organization", "risk-management", "budget", "negotiation", "reporting", "adaptability", "conflict-resolution", "quality-management", "stakeholder-management", "problem-solving", "decision-making", "team-building"],

  "ui-ux-designer": ["creativity", "wireframing-and-prototyping", "visual-design", "information-architecture", "interactive-design", "usability-testing", "empathy", "collaboration", "user-centric-design", "attention-to-detail"],

  "business-analyst": ["analytical-skills", "communication", "business-acumen", "requirement-gathering", "process-mapping", "data-analysis", "decision-making", "collaboration", "domain-knowledge", "attention-to-detail", "documentation", "problem-identification"],

  "scrum-master": ["communication", "leadership", "organization", "risk-management", "scrum-framework-knowledge", "technical-skills", "coaching-and-mentoring", "adaptability", "conflict-resolution", "empathy", "stakeholder-management", "problem-solving", "facilitation-skills", "time-management"],

  "data-analyst": ["analytical-skills", "communication", "business-acumen", "requirement-gathering", "process-mapping", "data-analysis", "decision-making", "collaboration", "domain-knowledge", "attention-to-detail", "documentation", "problem-identification"],
}

const formatCategory = (category: string) => {
  switch (category) {
    case "qa-engineer":
      return "QA Engineer";
    case "software-developer":
      return "Software Developer";
    case "product-manager":
      return "Product Manager";
    case "ui-ux-designer":
      return "UI UX Designer";
    case "business-analyst":
      return "Business Analyst";
    case "scrum-master":
      return "Scrum Master";
    case "data-analyst":
      return "Data Analyst";
    default:
  }
}

const formatSkills = (skill: string) => {
  return skill.replaceAll("-", " ");
}

const HireTalentsForm = () =>{

  const [formData, setFormData] = useState <{companyName: string, email: string, talentsRequired: {id:string, category: "qa-engineer" | "software-developer" | "product-manager" | "ui-ux-designer" | "business-analyst" | "scrum-master" | "data-analyst" | "", skills: string[], number: number}[], durationOfContract: string, resumptionWindow: string }>({
    companyName: "",
    email: "",
    talentsRequired: [
      //{id: "", category: "", skills: [], number: 0 }
    ],
    durationOfContract: "",
    resumptionWindow: ""
  })

  const [tempTalentData, setTempTalentData] = useState <{id: string, category: "qa-engineer" | "software-developer" | "product-manager" | "ui-ux-designer" | "business-analyst" | "scrum-master" | "data-analyst" | "", skills: string[], number: number}>({
    id: "",
    category: "",
    skills: [],
    number: 0
  })

  const talentCategoryOptions = ()=>{
    let options = Object.keys(categories);
    return options.map( item => {
      return (
        <option key={item} value={item}>{formatCategory(item)}</option>
      )
    })
  }

  const handleClickSkill = (skill: string) =>{
    if(tempTalentData?.skills.includes(skill)){
      let skillsList = tempTalentData.skills;
      skillsList = skillsList.filter( item => item !== skill);
      console.log(skillsList);
      setTempTalentData( prevState =>({
        ...prevState,
        skills: skillsList
      }))
    }else{
      let skillsList = tempTalentData.skills;
      skillsList.push(skill);
      console.log(skillsList);
      setTempTalentData( prevState =>({
        ...prevState,
        skills: skillsList
      }))
    }
  }

  const categorySkills = (category: "qa-engineer" | "software-developer" | "product-manager" | "ui-ux-designer" | "business-analyst" | "scrum-master" | "data-analyst" )=>{
    let categoryList = Object.keys(categories);
    if(categoryList.includes(category)){
      return categories[category].map((item: string) =>{
        return (
          <button onClick={()=>handleClickSkill(item)} className={`${tempTalentData.skills.includes(item) ? "bg-primary text-white" : "bg-white text-primary "}  capitalize h-6 lg:h-10 px-3 lg:px-5 text-xs rounded-full m-1`} key={item}> {formatSkills(item)}</button>
        )
      })
    }
  }

  const handleChangeFormData = (prop: string) => (event: any)=>{
    setFormData( prevState => ({
      ...prevState,
      [prop]: event.target.value
    }))
  }

  const handleChangeTalentData = (prop: string) => (event: any) =>{
    setTempTalentData( prevState => ({
      ...prevState,
      [prop]: event.target.value
    }))
    if(prop === "category"){
      setTempTalentData( prevState => ({
        ...prevState,
        skills: [],
        number: 0
      }))
    }
  }

  const disableSaveButton = () =>{
    if(tempTalentData?.category === "" || tempTalentData?.number < 1 || tempTalentData.skills.length === 0){
      return true
    }else{
      return false
    }
  }

  const disableSubmitButton = () =>{
    if(formData?.companyName === "" || formData?.durationOfContract === "" || formData?.email === "" || formData?.resumptionWindow === "" || formData?.talentsRequired.length < 1){
      return true
    }else{
      return false
    }
  }

  

  const handleSaveTalentData = ()=>{
    if(tempTalentData?.category === "" || tempTalentData?.number < 1 || tempTalentData.skills.length === 0){
      return;
    }
    console.log(tempTalentData);
    let tempData = tempTalentData;
    let randomId = generateRandomId();
    tempData.id = randomId;
    setFormData( prevState => ({
      ...prevState,
      talentsRequired: [...prevState.talentsRequired, tempData]
    }))
    setTempTalentData( prevState => ({
      ...prevState,
      id: "",
      category: "",
      skills: [],
      number: 0
    }))
  }

  const listSelectedTalents = ()=>{
    return formData.talentsRequired.map( item =>{
      return (
        <span className="inline-flex items-center bg-primary text-xs sm:text-sm text-white rounded-full w-auto px-2 py-1 m-1" key={item.id}>{`${item.number} ${formatCategory(item?.category)}${item.number > 1 ? "s" : ""}`} <button onClick={()=>removeSelectedTalents(item?.id)} className="btn btn-xs bg-transparent border-none px-0 ml-1"><XMarkIcon className="w-4 text-red-300" /></button></span>
      )
    })
  }

  const removeSelectedTalents = (id: string) =>{
    let selectedTalents = formData.talentsRequired;
    selectedTalents = selectedTalents.filter( item => item?.id !== id)
    setFormData( prevState => ({
      ...prevState,
      talentsRequired: selectedTalents
    }))
  }

  const submitForm = async () =>{

    const response = await fetch('http://localhost:3000/api/email/hire-talents', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const content = await response.json();
    console.log(content);
  }

  return (
    <section className="bg-white py-32 px-5 lg:px-24 flex flex-col items-center h-screen overflow-y-auto">
      <h2 className="text-primary text-2xl font-light mb-16 text-center">Let’s find you the right talent</h2>

      <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 w-full max-w-550 ">
        <input type="text" value={formData?.companyName} onChange={handleChangeFormData("companyName")} className="grow px-5 placeholder:text-sm h-12" placeholder="Company Name" />
      </label>
      <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 w-full max-w-550">
        <input type="text"  value={formData?.email} onChange={handleChangeFormData("email")}  className="grow px-5 placeholder:text-sm h-12" placeholder="Company Email Address" />
      </label>

      {formData?.talentsRequired.length > 0 && <div className="border p-3 rounded-3xl mb-5 bg-neutral w-full max-w-550"> {listSelectedTalents()} </div>}

      <div className="border p-5 rounded-3xl mb-5 bg-neutral flex flex-col w-full max-w-550">
        <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 max-w-550 lg:max-w-full">
          <select value={tempTalentData.category} onChange={handleChangeTalentData("category")} className={`select bg-transparent focus:border-none w-full ${tempTalentData.category === "" ? "text-gray-400" : "text-black"}`}>
            <option disabled value="">Select Talent Category</option>
            {talentCategoryOptions()}
          </select>
        </label>

        <div className={`mb-3 ${tempTalentData?.category == "" && "hidden"} mb-3 w-full max-w-550`}>{tempTalentData?.category !== "" && categorySkills(tempTalentData?.category)}</div>

        <label className="input input-bordered flex items-center rounded-full bg-form-input-bg w-full max-w-550">
          <input type="number" value={tempTalentData.number === 0 ? "" : tempTalentData.number} onChange={handleChangeTalentData("number")} className="grow px-5 placeholder:text-sm" placeholder="Number of Talents Required" />
        </label>

        <button disabled={disableSaveButton()} onClick={handleSaveTalentData} className="btn btn-sm bg-btn-blue h-10 px-5 rounded-full text-white mx-auto flex items-center mt-4">Save</button>
      </div>


      {/* <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 max-w-550 lg:max-w-full">
        <input type="number" className="grow px-5 placeholder:text-sm" placeholder="Duration of Contract" />
      </label> */}
      <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 w-full max-w-550">
        <select value={formData.durationOfContract} onChange={handleChangeFormData("durationOfContract")} className={`select bg-transparent focus:border-none w-full ${formData?.durationOfContract === "" ? "text-gray-400" : "text-black"}`}>
          <option disabled value="">Duration of Contract</option>
          <option value="3-months">3 months</option>
          <option value="6-months">6 months</option>
          <option value="1-year">1 year</option>
          <option value="2-years">2 years</option>
          <option value="3-years">3 years</option>
          <option value="4-years">4 years</option>
        </select>
      </label>

      <label className="input input-bordered flex items-center gap-2 rounded-full bg-form-input-bg mb-5 w-full max-w-550">
        <select value={formData.resumptionWindow} onChange={handleChangeFormData("resumptionWindow")} className={`select bg-transparent focus:border-none w-full ${formData?.resumptionWindow === "" ? "text-gray-400" : "text-black"}`}>
          <option disabled value="">Resumption Window</option>
          <option value="1-week">1 week</option>
          <option value="2-weeks">2 weeks</option>
          <option value="3-weeks">3 weeks</option>
          <option value="4-weeks">4 weeks</option>
          <option value="5-weeks">5 weeks</option>
          <option value="6-weeks">6 weeks</option>
          <option value="7-weeks">7 weeks</option>
          <option value="8-weeks">8 weeks</option>
        </select>
      </label>





      {/* <button className="btn bg-primary text-white rounded-full mx-auto mt-10 px-14 h-16">Link me up with the Talent </button> */}
      <button disabled={disableSubmitButton()} className="btn bg-primary text-white rounded-full mx-auto mt-10 px-14 h-16" onClick={(e) => {
        e.preventDefault();
        /* */
          try {
            submitForm()
          } catch (error) {
            console.log(error)
          }
        let el: any = document?.getElementById('hire_talent_modal');
        if (!el) { return; }
        el.showModal()
      }}>Link me up with the Talent</button>
      <dialog id="hire_talent_modal" className="modal modal-bottom sm:modal-middle border">
        <div className="modal-box flex flex-col rounded-xl py-8 px-5">
          <Image src="/images/success-avatar.svg" alt="success avatar" width={200} height={200} className="mx-auto" />
          <p className="py-4 text-primary text-center">Thanks for indicating your interest in our talents, we shall connect you with them soon.</p>
          <div className="modal-action flex">
            <form method="dialog" className=" mx-auto">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-primary text-white rounded-full px-8" onClick={()=>{
                  setFormData( prevState =>({
                    ...prevState,
                    companyName: "",
                    email: "",
                    talentsRequired: [],
                    durationOfContract: "",
                    resumptionWindow: ""
                  })) 
              }}>Done</button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  )
}

export default HireTalentsForm;