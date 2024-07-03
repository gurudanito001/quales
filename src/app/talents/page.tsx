import Image from "next/image";
import NavBar from "../(home)/navbar";
import Roles from "./roles";
import Partners from "../(home)/partners";
import WhyChooseTalents from "./whyChooseTalents";
import HiringProcess from "../(home)/hiringProcess";
import OurGraduates from "./ourGraduates";
import LatestArticles from "../(home)/ourLatestArticles";
import Footer from "../(home)/footer";
import ScheduleCall from "./scheduleCall";


export default function Home() {
  return (
    <main className="bg-white">
      <NavBar/>
      <Roles />
      <Partners/>
      <WhyChooseTalents />
      <HiringProcess />
      <OurGraduates />
      <ScheduleCall />
      <LatestArticles />
      <Footer />
    </main>
  );
}
