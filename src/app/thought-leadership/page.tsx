
import NavBar from "../(home)/navbar";
import Footer from "../(home)/footer";
import { Metadata } from 'next';
import Articles from "./articles";

export const metadata: Metadata = {
  title: 'Thought Leadership | Quales Consulting',
  description: "Gain valuable career insights and stay ahead with the latest industry trends. Our thought leadership offers expert analysis and practical advice for your professional growth.",
};


const ThoughtLeadership = () => {

  
  return (
    <main className="bg-white">
      <NavBar/>
      <section className="bg-white px-5 xl:px-28">
        <header className="flex flex-col py-8 md:py-14">
          <h2 className="text-xl md:text-3xl mx-auto md:mx-0 font-550 bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 inline text-transparent bg-clip-text">Delve Deep into Real-time Career </h2>
          <h2 className="text-xl md:text-3xl mx-auto md:mx-0 font-550 bg-gradient-to-r max-w-550 from-slate-700 to-purple-400 inline text-transparent bg-clip-text">Insights and Industry Trends.</h2>
          <p className="text-primary max-w-3xl mt-5 text-center md:text-left">Gain valuable career insights and stay ahead with the latest industry trends. Our thought leadership offers expert analysis and practical advice for your professional growth. </p>
        </header>

        <Articles />
        
      </section>
      <Footer />
    </main>
  )
}

export default ThoughtLeadership