import { MessageCircleQuestion } from "lucide-react";
import CareersSection from "../components/HomePageComponents/CareersSection";
import HeroSection from "../components/HomePageComponents/HeroSection";
import HowItWorks from "../components/HomePageComponents/HowItWorks";
import Testimonials from "../components/HomePageComponents/Testimonials";
import TryItNow from "../components/HomePageComponents/TryItNow";
import WhatWeOffer from "../components/HomePageComponents/WhatWeOffer";
import ContactForm from "../components/HomePageComponents/ContactForm";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReviewSection from "../components/HomePageComponents/ReviewSection";
import { Helmet } from "react-helmet-async";
function Home() {
  const scrollToContactForm = () => {
    const element = document.getElementById("contact-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-[#f5f9f9] dark:bg-[#023247] overflow-x-hidden">
      {/* <div
        onClick={scrollToContactForm}
        className="bg-[#2A8E9E] rounded-full fixed bottom-5 right-5 md:bottom-7 md:right-10 flex justify-center items-center cursor-pointer"
      >
        <MessageCircleQuestion className="w-9 h-9 text-white/90 m-2" />
      </div> */}
      <Helmet>
        <title>Skill Scan</title>
      </Helmet>
      <HeroSection />
      <WhatWeOffer />
      <CareersSection />
      <HowItWorks />
      <Testimonials />
      <ContactForm />
      <TryItNow />
      <ReviewSection />
    </div>
  );
}

export default Home;
