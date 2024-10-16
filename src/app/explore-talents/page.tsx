import Image from "next/image";
import NavBar from "../(home)/navbar";
import TalentCategories from "./talentCategories";
import Partners from "../(home)/partners";
import WhyChooseTalents from "./whyChooseTalents";
import HiringProcess from "../(home)/hiringProcess";
import OurGraduates from "./ourGraduates";
import LatestArticles from "../(home)/ourLatestArticles";
import Footer from "../(home)/footer";
import ScheduleCall from "./scheduleCall";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Explore Talents | Quales Consulting',
  description: "Experience unparalleled expertise and immediate impact with our rigorously vetted, top-tier technology professionals.",
};


export default function Home() {
  return (
    <main className="bg-white w-full overflow-x-hidden">
      <NavBar/>
      <TalentCategories />
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
