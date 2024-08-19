
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
    <div className=" sticky top-0 left-0 w-screen"><NavBar /></div>
    

    <section className="grid grid-cols-1 xl:grid-cols-2 min-h-screen">
      <div className="hidden xl:block text-white bg-[url('/images/hire-talent-bg.png')] bg-cover bg-center bg-no-repeat">
          <div className="h-full bg-overlay flex items-center content-center py-44 p-8">
            <h2 className="text-3xl font-550 lg:mx-14 my-auto text-center">Leverage Quales Talents<br/>to Seamlessly Ensure Project Success</h2>
          </div>
      </div>

      <HireTalentsForm />
    </section>
    </>
    
  )
}

export default HireTalents