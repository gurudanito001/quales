
import { UserIcon } from "@heroicons/react/24/solid";
import NavBar from "../(home)/navbar";
import HireTalentsForm from "./form";
import HireTalentSlider from "./sideSlider";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire Talents | Quales Consulting',
  description: "Leverage Quales Talents to Seamlessly Ensure Project Success",
  
};

const HireTalents = ()=>{
  
  return(
    <main className="bg-white w-full overflow-x-hidden">
    <div className="w-screen z-50 absolute top-0 left-0"><NavBar /></div>
    

    <section className="grid grid-cols-1 xl:grid-cols-2 max-h-screen">
      <HireTalentSlider />
      <HireTalentsForm />
    </section>
    </main>
    
  )
}

export default HireTalents