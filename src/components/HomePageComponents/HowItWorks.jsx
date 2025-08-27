import stepOne from "../../assets/HomePage/1.png";
import stepTwo from "../../assets/HomePage/2.png";
import stepThree from "../../assets/HomePage/3.png";
function HowItWorks() {
  return (
    <div className="bg-[#023247] dark:bg-white p-10 md:p-20 mb-14 mt-10">
      <div className="">
        <p className=" text-[#2A8E9E] font-bold text-lg">
          HOW IT WORKS (3 STEPS)
        </p>
        <h2 className="text-4xl md:text-4xl lg:text-5xl leading-tight font md:w-[60%] !text-white/90 dark:!text-[#023247]">
          Streamline your career growth with these simple steps.
        </h2>
      </div>
      <div className="mt-10 flex flex-col md:flex-row gap-5">
        <div className="bg-[#0C3A4E] p-8 rounded-2xl w-full">
          <img src={stepOne} alt="" className="h-20 mb-2" />
          <h4 className="text-white/90 font-medium text-lg">
            Set Up Your Profile
          </h4>
          <p className="text-white/60">
            Build a complete career profile that highlights your achievements
            and preferences.
          </p>
        </div>
        <div className="bg-[#0C3A4E] p-8 rounded-2xl w-full">
          <img src={stepTwo} alt="" className="h-20 mb-2" />
          <h4 className="text-white/90 font-medium text-lg">
            Build Your Resume
          </h4>
          <p className="text-white/60">
            Use our AI-powered tool to craft resumes that stand out to
            recruiters.
          </p>
        </div>
        <div className="bg-[#0C3A4E] p-8 rounded-2xl w-full">
          <img src={stepThree} alt="" className="h-20 mb-2" />
          <h4 className="text-white/90 font-medium text-lg">Get Discovered</h4>
          <p className="text-white/60">
            Apply for jobs or share your unique ATS-friendly resume to make
            lasting impressions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
