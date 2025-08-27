import heroBG from "../assets/HomePage/hero-section-bg.png";
import waitingGIF from "../assets/Animation - 1736759730296 (1).gif";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
function ATSScore() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="min-h-screen py-10 px-5 flex flex-col items-center bg-[#f5f9f9] dark:bg-[#023247]">
      <Helmet>
        <title>Skill Scan | ATS Score</title>
      </Helmet>
      <img
        src={heroBG}
        className="absolute top-0 right-0 h-[90vh]  pointer-events-none"
        alt=""
      />
      <div className="w-4/5 md:pl-14 lg:pl-20">
        <h2 className="text-4xl  dark:text-white/90 text-center md:text-start">
          Optimize Your Resume with{" "}
          <span className="font-bold">ATS Insights.</span>
        </h2>
        <p className="md:w-[90%] text-black/70 dark:text-white/70 mt-3  text-center md:text-start">
          Ensure your resume stands out and passes through Applicant Tracking
          Systems effortlessly.
        </p>
      </div>
      <div className="flex rounded-3xl shadow-lg p-7 md:p-14 items-center justify-around bg-white z-[90] w-4/5 mt-10">
        <div className="flex flex-col justify-center items-center">
          <img src={waitingGIF} alt="" className="w-44 h-44 rounded-full" />
          <h2 className="text-[#023247] font-bold text-5xl mt-5 text-center">
            Coming Soon!
          </h2>
          <p className="text-[#023247]/80 mt-3  text-center">
            Stay connected and explore our other exciting features in the
            meantime.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ATSScore;
