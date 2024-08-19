import Image from "next/image";
import NavBar from "./navbar";
import HeroSection from "./heroSection";
import Partners from "./partners";
import OurCommunity from "./our-community";
import TalentNetwork from "./talentNetwork";
import HiringProcess from "./hiringProcess";
import ExecutionProcess from "./executionProcess";
import OurClientsSay from "./ourClientsSay";
import LatestArticles from "./ourLatestArticles";
import Footer from "./footer";
import StoryWithNumbers from "./storyWithNumbers";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Home | Quales Consulting',
  description: 'Quales Consulting comprises an elite network of the finest freelance Software Developers, Designers, Business Analysts, Product Managers, and Scrum Masters, Data Analysts globally. Leading companies engage freelancers from Quales Consulting for their critical projects.',
};


export default function Home() {
  return (
    <main className="bg-white">
    <NavBar/>
    <HeroSection />
    <Partners />
    <OurCommunity />
    <TalentNetwork />
    <HiringProcess />
    <ExecutionProcess />
    <OurClientsSay />
    <StoryWithNumbers />
    <LatestArticles />
    <Footer />
    </main>
  );
}
