
import NavBar from "../(home)/navbar";
import HeroSection from "./heroSection";
import Partners from "../(home)/partners";
import UseCasesSection from "./useCases";
import ExecutionProcess from "../(home)/executionProcess";
import HiringProcess from "../(home)/hiringProcess";
import LatestArticles from "../(home)/ourLatestArticles";
import Footer from "../(home)/footer";





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