import { ArrowUpRight } from "lucide-react";
import heroBG from "../../assets/HomePage/hero-section-bg.png";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-around relative min-h-[100%] md:min-h-[80vh] px-3 md:px-10 mb-16 md:mb-0">
      <img
        src={heroBG}
        className="absolute top-0 right-0 h-[90vh] pointer-events-none"
        alt=""
      />
      <div className="w-full mt-8 md:mt-0 md:w-1/2 flex justify-center items-center text-left flex-col">
        <div className="w-[85%]">
          <h1 className="text-4xl md:text-4xl lg:text-6xl leading-tight font w-[88%] text-[#023247] dark:text-white/90">
            Unlock career possibilities with{" "}
            <span className="font-bold">Skill Scan.</span>
          </h1>
          <p className="w-[90%] text-black/80 dark:text-white/80 mt-3">
            Build better resumes, find tailored jobs, and get your ATS score.
          </p>
          <div className="flex flex-wrap lg:flex-nowrap gap-2 mt-6 z-50">
            <Link
              to={"/resume-builder"}
              className="flex w-full gap-2 items-center py-2 px-5 bg-[#2A8E9E] hover:bg-[#1f6d7a] rounded-2xl text-white justify-between"
            >
              Build Your Resume
              <ArrowUpRight className="w-6 h-6" />
            </Link>
            <Link
              to={"/jobs"}
              className="flex  w-full  gap-2 items-center border-2  rounded-2xl py-2 px-5 text-[#023247] hover:bg-[#2A8E9E]/10 border-[#023247] dark:border-white/90 dark:text-white/90 justify-between"
            >
              Explore Career Options
              <ArrowUpRight className="w-7 h-7" />
            </Link>
            <Link
              to={"/resume-ats-score"}
              className="flex  w-full  gap-2 items-center border-2  rounded-2xl py-2 px-4 text-[#023247] hover:bg-[#2A8E9E]/10  border-[#023247] dark:border-white/90 dark:text-white/90 justify-between"
            >
              ATS Score
              <ArrowUpRight className="w-6 h-6" />
            </Link>
          </div>
          <h2 className="mt-5 text-lg md:text-2xl font-bold flex flex-wrap md:flex-row gap-4 md:gap-10 justify-center md:justify-start items-center w-full dark:text-white/90">
            <span>careers.</span>
            <span>jobs.</span>
            <span>opportunities.</span>
          </h2>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        {/* <img src={heroImg} alt="" className="w-2/3 z-10" /> */}
        <DotLottieReact
          src={
            "https://lottie.host/fa78db5a-2703-46a5-b9a3-8190179628ef/F4emasnO98.lottie"
          }
          loop
          autoplay
          className="w-[100%] z-10"
        />
      </div>
    </div>
  );
}

export default HeroSection;
