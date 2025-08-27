import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
function TryItNow() {
  return (
    <div className="px-10 z-10 pb-14">
      <div className="flex rounded-3xl shadow-lg p-7 md:p-14 items-center justify-between flex-col bg-[#023247] dark:bg-white">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2">
            <p className=" text-[#2A8E9E] font-bold text-lg">TRY IT NOW</p>
            <h2 className="text-4xl lg:text-5xl leading-tight font text-white/90 dark:text-[#023247] md:w-[75%]">
              Ready to Elevate Your Career?
            </h2>
            <p className="my-5 text-[#fff]/60 dark:text-[#023247]/80">
              Empowering professionals with advanced resume tools, personalized
              career guidance, and modern job search solutions.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 md:w-1/2">
            <Link
              to={"/resume-builder"}
              className="py-2 px-5 bg-[#2A8E9E] hover:bg-[#1f6d7a]  rounded-2xl text-white"
            >
              Get Started Now
            </Link>
            {/* <button className="flex gap-2 items-center border-2 border-[#fff]/90 rounded-2xl py-2 px-5 text-[#fff]/90  dark:border-[#023247] dark:text-[#023247]">
              Learn More
              <ArrowUpRight className="w-5 h-5" />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TryItNow;
