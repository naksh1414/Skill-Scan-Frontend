// import FeaturedCompany from "./FeaturedCompany";
import TopCompaniesByType from "./TopCompaniesByType";

function CareersSection() {
  return (
    <div className=" p-10 py-7 flex flex-col justify-center items-center">
      <h4 className=" text-[#2A8E9E] font-bold text-lg">CAREERS</h4>
      <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font w-[88%] text-center mt-2 dark:text-white/90">
        Top companies hiring now
      </h2>
      <TopCompaniesByType />
      {/* <FeaturedCompany /> */}
    </div>
  );
}

export default CareersSection;
