import Image from "next/image";
import NavBar from "./navbar";
import HeroSection from "./heroSection";
import CoursePackages from "./course-packages";
import LearningPlans from "./learningPlans";
import HowToEnroll from "./how-to-enroll";
import Testimonials from "./testimonials";
import StoryWithNumbers from "./story-with-numbers";
import FAQs from "./faqs";
import Footer from "../(home)/footer";
import Partners from "../(home)/partners";
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Learning | Quales Consulting',
  description: 'Quales Consulting comprises an elite network of the finest freelance Software Developers, Designers, Business Analysts, Product Managers, and Scrum Masters, Data Analysts globally. Leading companies engage freelancers from Quales Consulting for their critical projects.',
};


export default function Home() {
  return (
    <main className="bg-white">
    <NavBar/>
    <HeroSection />
    <Partners />
    <CoursePackages />
    <LearningPlans />
    <HowToEnroll />
    <Testimonials />
    <StoryWithNumbers />
    <FAQs />
    <Footer />
    </main>
  );
}
