import { Link } from "react-router-dom";
import companyImg from "../../assets/HomePage/Group 237657.png";
import { ChevronRight } from "lucide-react";
function TopCompaniesByType() {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row gap-3 lg:gap-5 mt-8">
        <div className="bg-[#F5F9F9] p-7 lg:px-10 rounded-lg shadow-lg">
          <Link to={"/jobs"} className="flex justify-between flex-col h-full">
            <h4 className="text-lg font-bold flex gap-1 items-center">
              MNCs <ChevronRight />
              <ChevronRight />
            </h4>
            <p className="">2K+ are actively hiring</p>
            {/* <img src={companyImg} alt="" className="h-10 mt-3" /> */}
          </Link>
        </div>

        <div className="bg-[#F5F9F9] p-7 px-10 rounded-lg shadow-lg flex justify-between flex-col">
          <Link to={"/jobs"} className="flex justify-between flex-col h-full">
            <h4 className="text-lg font-bold flex gap-1 items-center">
              Product <ChevronRight />
              <ChevronRight />
            </h4>
            <p className="">1K+ are actively hiring</p>
            {/* <img src={companyImg} alt="" className="h-10 mt-3" /> */}
          </Link>
        </div>
        <div className="bg-[#F5F9F9] p-7 px-10 rounded-lg shadow-lg flex justify-between flex-col">
          <Link to={"/jobs"} className="flex justify-between flex-col h-full">
            <h4 className="text-lg font-bold flex gap-1 items-center">
              Banking & Finance <ChevronRight /> <ChevronRight />
            </h4>
            <p className="">350 are actively hiring</p>
            {/* <img src={companyImg} alt="" className="h-10 mt-3" /> */}
          </Link>
        </div>
        <div className="bg-[#F5F9F9] p-7 px-10 rounded-lg shadow-lg flex justify-between flex-col">
          <Link to={"/jobs"} className="flex justify-between flex-col h-full">
            <h4 className="text-lg font-bold flex gap-1 items-center">
              Fintech <ChevronRight /> <ChevronRight />
            </h4>
            <p className="">85 are actively hiring</p>
            {/* <img src={companyImg} alt="" className="h-10 mt-3" /> */}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopCompaniesByType;
