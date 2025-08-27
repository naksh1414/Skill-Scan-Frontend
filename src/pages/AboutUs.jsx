import heroBG from "../assets/HomePage/hero-section-bg.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
// import QrGeneratorIcon from "../assets/WhatWeOffer/qr-generator-icon.png";
import stepOne from "../assets/HomePage/1.png";
import stepTwo from "../assets/HomePage/2.png";
import stepThree from "../assets/HomePage/3.png";
import stepFour from "../assets/HomePage/4.png";
import stepFive from "../assets/HomePage/5.png";
import stepSix from "../assets/HomePage/6.png";
import stepSeven from "../assets/HomePage/7.png";
import stepEight from "../assets/HomePage/8.png";
import stepNine from "../assets/HomePage/9.png";
import stepTen from "../assets/HomePage/10.png";
import stepEleven from "../assets/HomePage/11.png";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function AboutUs() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="min-h-screen py-10  flex flex-col items-center bg-[#f5f9f9] dark:bg-[#023247]">
      <img
        src={heroBG}
        className="absolute top-0 right-0 h-[90vh]  pointer-events-none"
        alt=""
      />
      <div className="w-4/5 md:pl-14 lg:pl-20">
        <h2 className="text-4xl  dark:text-white/90 text-center md:text-start font-bold">
          About Us
        </h2>
        <p className="md:w-[90%] text-black/70 dark:text-white/70 mt-3  text-center md:text-start">
          Discover the Knack Behind Your Career Growth
        </p>
      </div>
      <div className="flex rounded-3xl shadow-lg p-7 md:p-14 items-center justify-around bg-white z-[90] w-4/5 mt-10">
        <div className="flex flex-col justify-center">
          {/* <img src={waitingGIF} alt="" className="w-44 h-44 rounded-full" /> */}
          {/* <h2 className="text-[#023247] font-bold text-5xl mt-5 text-center">
            Coming Soon!
          </h2> */}
          <p className="text-[#023247]/80 text-start leading-8">
            At Skill Scan, we believe every individual deserves the chance to
            shine — regardless of background, college name, or connections.
            That’s why we’re building a complete career empowerment ecosystem
            for students, freshers, and professionals who want to build a future
            that matters.
          </p>
          <p className="text-[#023247]/80 text-start leading-8 my-3">
            We’re not just another job platform — we are your partner in career
            growth. From creating stunning ATS-ready resumes to discovering
            handpicked job opportunities, and soon, even preparing you for
            AI-powered interviews, Skill Scan is designed with your hustle in
            mind.
          </p>
          <p className="block my-3 mb-5 text-xl font-semibold text-start text-[#2A8E9E]">
            Our Mission?
          </p>
          <p className="text-[#023247]/80 text-start leading-8">
            To simplify and supercharge the job hunt by giving you the right
            tools, at the right time, without the heavy price tags.
          </p>

          <div className="flex gap-3 flex-wrap justify-center my-5">
            <div className="flex flex-col gap-2 mb-5 lg:w-[19%] w-full shadow-md p-8 lg:p-5 rounded-2xl border border-[#023247]/80">
              <img src={icon3} alt="" className="w-10 h-10" />
              <h2 className="text-xl font-bold text-gray-800 my-2">
                Free Resume Builder
              </h2>
              <p className="text-[#023247]/80">
                Create professional, ATS-compliant resumes in minutes
              </p>
            </div>
            <div className="flex flex-col gap-2 mb-5 lg:w-[19%] w-full shadow-md p-8 lg:p-5 rounded-2xl border border-[#023247]/80">
              <img src={icon1} alt="" className="w-10 h-10" />
              <h2 className="text-xl font-bold text-gray-800 my-2">
                Real Jobs, No Spam
              </h2>
              <p className="text-[#023247]/80">
                Explore verified listings tailored to your{" "}
                <br className="flex md:hidden" /> skills
              </p>
            </div>
            <div className="flex flex-col gap-2 mb-5 lg:w-[19%] w-full shadow-md p-8 lg:p-5 rounded-2xl border border-[#023247]/80">
              <img src={icon5} alt="" className="w-10 h-10" />
              <h2 className="text-xl font-bold text-gray-800 my-2">
                Smart QR Generator
              </h2>
              <p className="text-[#023247]/80">
                Add a modern digital touch to your{" "}
                <br className="flex md:hidden" /> resume/profile
              </p>
            </div>
            <div className="flex flex-col gap-2 mb-5 lg:w-[19%] w-full shadow-md p-8 lg:p-5 rounded-2xl border border-[#023247]/80">
              <img src={icon4} alt="" className="w-10 h-10" />
              <h2 className="text-xl font-bold text-gray-800 my-2">
                AI Interview Coach (Soon)
              </h2>
              <p className="text-[#023247]/80">
                Master interviews with confidence &{" "}
                <br className="flex md:hidden" /> clarity
              </p>
            </div>
            <div className="flex flex-col gap-2 mb-5 lg:w-[19%] w-full shadow-md p-8 lg:p-5 rounded-2xl border border-[#023247]/80">
              <img src={icon2} alt="" className="w-10 h-10" />
              <h2 className="text-xl font-bold text-gray-800 my-2">
                Affordable Career Tools
              </h2>
              <p className="text-[#023247]/80">
                No overpriced gimmicks, only what you
                <br className="flex md:hidden" />
                truly need
              </p>
            </div>
          </div>
          <p className="text-[#023247]/80 text-start leading-8">
            We are continuously building, testing, and improving — not just our
            platform, but your chances of success. Whether you’re preparing for
            your first internship or your fifth switch, Skill Scan has your back.
          </p>
        </div>
      </div>
      <div className="bg-[#023247] w-full dark:bg-white p-10 md:p-20 mt-16">
        <div className="">
          {/* <p className=" text-[#2A8E9E] font-bold text-lg">
            HOW IT WORKS (3 STEPS)
          </p> */}
          <h2 className="text-4xl md:text-4xl lg:text-5xl leading-tight !text-white/90 dark:!text-[#023247] text-center">
            Why Choose Skill Scan?
          </h2>
          <p className="leading-tight font !text-white/90 dark:!text-[#023247] text-center mt-8">
            Because we’re not just building tools — we’re building dreams.
            <br></br> In a sea of job boards and generic resume sites, Skill Scan
            rises as a game-changer for modern job seekers.
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-5">
          <div className="bg-[#0C3A4E] p-8 gap-12 rounded-2xl w-full flex items-center">
            <img src={stepOne} alt="" className="h-20 mb-2" />
            <div className="">
              <h4 className="text-white/90 font-semibold text-xl">
                Built for the Underdogs — Like You
              </h4>
              <p className="text-white/60">
                We're not here for corporate elites. We're here for students,
                freshers, dropouts, re-starters — the real fighters.
              </p>
            </div>
          </div>
          <div className="bg-[#0C3A4E] p-8 gap-12 rounded-2xl w-full flex items-center justify-end">
            <div className="flex flex-col items-end">
              <h4 className="text-white/90 font-semibold text-xl">
                Create a Job-Winning Resume in Minutes
              </h4>
              <p className="text-white/60">
                Our free resume builder is optimized for ATS bots and human eyes
                alike. Stylish, professional, and ready to impress.
              </p>
            </div>
            <img src={stepTwo} alt="" className="h-20 mb-2" />
          </div>
          <div className="bg-[#0C3A4E] p-8 gap-12 rounded-2xl w-full flex items-center">
            <img src={stepThree} alt="" className="h-20 mb-2" />
            <div className="">
              <h4 className="text-white/90 font-semibold text-xl">
                Verified Job Listings You Can Trust
              </h4>
              <p className="text-white/60">
                No scams. No bots. Just genuine job opportunities posted and
                reviewed by real people. Start exploring jobs here.
              </p>
            </div>
          </div>
          <div className="bg-[#0C3A4E] p-8 gap-12 rounded-2xl w-full flex items-center justify-end">
            <div className="flex flex-col items-end">
              <h4 className="text-white/90 font-semibold text-xl">
                QR Codes that Work Like Magic
              </h4>
              <p className="text-white/60">
                Create a custom QR code that links directly to your resume or
                LinkedIn — great for your CV, college project, business card or
                even portfolio. Try it on Skill Scan QR.
              </p>
            </div>
            <img src={stepFour} alt="" className="h-20 mb-2" />
          </div>
          <div className="bg-[#0C3A4E] p-8 gap-12 rounded-2xl w-full flex items-center">
            <img src={stepFive} alt="" className="h-20 mb-2" />
            <div className="">
              <h4 className="text-white/90 font-semibold text-xl">
                AI-Powered Interview Coaching (Coming Soon)
              </h4>
              <p className="text-white/60">
                We’re launching an AI interview trainer that gives you real-time
                feedback, practice questions, confidence tips and more — all at
                budget prices.
              </p>
            </div>
          </div>
          <div className="bg-[#0C3A4E] p-8 gap-12 rounded-2xl w-full flex items-center justify-end">
            <div className="flex flex-col items-end">
              <h4 className="text-white/90 font-semibold text-xl">
                Career Tools that Actually Work
              </h4>
              <p className="text-white/60">
                Other platforms offer features. We offer value. From resume
                building to job matching and branding, everything is aligned to
                your growth.
              </p>
            </div>
            <img src={stepSix} alt="" className="h-20 mb-2" />
          </div>
          <div className="bg-[#0C3A4E] p-8 gap-12 rounded-2xl w-full flex items-center">
            <img src={stepSeven} alt="" className="h-20 mb-2" />
            <div className="">
              <h4 className="text-white/90 font-semibold text-xl">
                Real Support. Real People.
              </h4>
              <p className="text-white/60">
                Get human support, not bots. Whether it's resume tips, job
                suggestions, or career advice — we're here to help you, always.
              </p>
            </div>
          </div>
          <div className="bg-[#0C3A4E] p-8 gap-12 rounded-2xl w-full flex items-center justify-end">
            <div className="flex flex-col items-end">
              <h4 className="text-white/90 font-semibold text-xl">
                Built in India, for Global Dreams
              </h4>
              <p className="text-white/60">
                Skill Scan is proudly made in India, designed for every student
                and job-seeker across the globe. Affordable, powerful, and
                accessible.
              </p>
            </div>
            <img src={stepEight} alt="" className="h-20 mb-2" />
          </div>
          <div className="bg-[#0C3A4E] p-8 gap-12 rounded-2xl w-full flex items-center">
            <img src={stepNine} alt="" className="h-20 mb-2" />
            <div className="">
              <h4 className="text-white/90 font-semibold text-xl">
                Designed for Engagement, Built for Speed
              </h4>
              <p className="text-white/60">
                Our platform is lightning-fast, mobile-friendly, and crafted to
                help you achieve your goals without tech headaches.
              </p>
            </div>
          </div>
          <div className="bg-[#0C3A4E] p-8 gap-12 rounded-2xl w-full flex items-center justify-end">
            <div className="flex flex-col items-end">
              <h4 className="text-white/90 font-semibold text-xl">
                Always Evolving, Just Like You
              </h4>
              <p className="text-white/60">
                We constantly update features, resources, and designs based on
                real feedback — because we grow only when you grow.
              </p>
            </div>
            <img src={stepTen} alt="" className="h-20 mb-2" />
          </div>
          <div className="bg-[#0C3A4E] p-8 gap-12 rounded-2xl w-full flex items-center">
            <img src={stepEleven} alt="" className="h-20 mb-2" />
            <div className="">
              <h4 className="text-white/90 font-semibold text-xl">
                You’re Not Just a User — You’re the Hero
              </h4>
              <p className="text-white/60">
                Skill Scan is not the star. You are. We’re just here to give you
                the tools, knowledge, and confidence to shine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
