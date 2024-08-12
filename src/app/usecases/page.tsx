
import NavBar from "../(home)/navbar";
import HeroSection from "./heroSection";
import Partners from "../(home)/partners";
import UseCasesSection from "./useCases";
import ExecutionProcess from "../(home)/executionProcess";
import HiringProcess from "../(home)/hiringProcess";
import LatestArticles from "../(home)/ourLatestArticles";
import Footer from "../(home)/footer";


import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Use Cases | Quales Consulting',
  description: "Explore real-world success stories where Quales Consulting has driven innovation and efficiency. See how we've transformed our clients' projects and businesses with our expertise.",
};





const UseCases = () => {

  return (
    <main className="bg-white">
      <NavBar/>
      <HeroSection />
      <Partners />
      <UseCasesSection />
      <ExecutionProcess />
      <HiringProcess />
      <LatestArticles />
      <Footer />
    </main>
  )
}

export default UseCases