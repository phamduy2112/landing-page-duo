import Image from "next/image";
import Header from "./layout/header";
import HeroSection from "./section/hero.section";
import FeaturesSection from "./section/feature.section";
import WhyDETSection from "./section/why.section";
import ServicesSection from "./section/service.section";
import CoursesSection from "./section/course.section";
import CoreValueSection from "./section/core-value.section";
import TeamSection from "./section/team.section";
import TestimonialsSection from "./section/testimonials.section";
import IntroVideoSection from "./section/intro-video.section";
import FAQSection from "./section/faq.section";
import FormSection from "./section/form-section";
import Footer from "./layout/footer";

export default function Home() {
  return (
    <>
    <Header />
    <HeroSection/>
    <FeaturesSection/>
    <WhyDETSection/>
    <ServicesSection/>
    <CoursesSection/>
    <CoreValueSection/>
    <TeamSection/>
    <TestimonialsSection/>
    <IntroVideoSection/>
    <FAQSection/>
    <FormSection/>
    <Footer/>
    </>
  );
}
