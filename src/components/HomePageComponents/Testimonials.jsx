function Testimonials() {
  return (
    <div className="px-10 md:px-20 py-10 flex flex-col items-center gap-5 mb-5">
      <h4 className=" text-[#2A8E9E] font-bold text-lg">TESTIMONIALS</h4>
      <h3 className=" text-[#1D1E20] dark:text-white/90 text-4xl lg:text-5xl text-center">
        Trusted by <span className="font-bold">professionals</span> worldwide
      </h3>
      <p className=" text-[#023247]/70 dark:text-white/80 md:w-[33%] text-center">
        Join countless individuals and businesses who have transformed their
        careers with Skill Scan.
      </p>
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <div className="bg-[#EFF5F5] rounded-2xl p-8">
          <p className="text-[#023247]">
            “Skill Scan has been a game-changer for my career. The insights and
            tools provided helped me land my dream job.”
          </p>
          <div className="text-[#023247] font-semibold flex flex-col items-end mt-3">
            <h4>~ John</h4>
            <p>Software Engineer</p>
          </div>
        </div>
        <div className="bg-[#EFF5F5] rounded-2xl p-8">
          <p className="text-[#023247]">
            “The platform's user-friendly interface and comprehensive resources
            made it easy for me to enhance my skills and advance in my career.”
          </p>
          <div className="text-[#023247] font-semibold flex flex-col items-end mt-2">
            <h4>~ Emily</h4>
            <p>Data Analyst</p>
          </div>
        </div>
        <div className="bg-[#EFF5F5] rounded-2xl p-8">
          <p className="text-[#023247]">
            “Thanks to Skill Scan, I was able to network with industry leaders
            and gain valuable insights that propelled my career forward.”
          </p>
          <div className="text-[#023247] font-semibold flex flex-col items-end mt-2">
            <h4>~ Michael</h4>
            <p>Project Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
