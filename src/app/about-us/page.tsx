import NavBar from "../(home)/navbar";
import HeroSection from "./heroSection";
import MissionVision from "./mission-vission";
import Partners from "../(home)/partners";
import LatestArticles from "../(home)/ourLatestArticles";
import Footer from "../(home)/footer";



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