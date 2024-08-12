import NavBar from "../(home)/navbar";
import HeroSection from "./heroSection";
import MissionVision from "./mission-vission";
import Partners from "../(home)/partners";
import LatestArticles from "../(home)/ourLatestArticles";
import Footer from "../(home)/footer";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'About Us | Quales Consulting',
  description: "At Quales Consulting, we cultivate exceptional tech talent ready to tackle the challenges of today's digital world. With a focus on quality and continuous learning, we ensure our experts deliver outstanding results and drive business success.",
};



const AboutUs = () => {

  return (
    <main className="bg-white">
    <NavBar/>
    <HeroSection />
    <MissionVision />
    <Partners />
    <LatestArticles />
    <Footer />
    </main>
    
  )
}

export default AboutUs