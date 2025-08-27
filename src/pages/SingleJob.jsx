import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { job as jobUrl } from "../apis/ApiRoutes";
import dayjs from "dayjs";
import heroBG from "../assets/HomePage/hero-section-bg.png";
import {
  Banknote,
  Calendar,
  ChevronRight,
  MapPin,
  Briefcase,
  ArrowLeft,
} from "lucide-react";
import "./SingleBlog.css";
import priceTag from "../assets/priceTag.png";
import jobLevel from "../assets/jobLevel.png";
import JobRecommendation from "../components/JobRecommendation";

function SingleJob() {
  const { id } = useParams();
  const [job, setJob] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${jobUrl}/get-job/${id}`)
      .then((response) => {
        setJob(response.data);
        // console.log(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the job!", error);
        setIsLoading(false);
      });
  }, [id]);

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const renderJobDescription = () => {
    if (!job || !job.description) return null;

    const maxLength = 300;
    if (job.description.length <= maxLength || isDescriptionExpanded) {
      return (
        <>
          {job.description}
          {job.description.length > maxLength && (
            <button
              className="text-[#2A8E9E] underline ml-2"
              onClick={toggleDescription}
            >
              Show Less
            </button>
          )}
        </>
      );
    }

    return (
      <>
        {job.description.substring(0, maxLength)}...
        <button
          className="text-[#2A8E9E] underline ml-2"
          onClick={toggleDescription}
        >
          View More
        </button>
      </>
    );
  };
  const handleGoBack = () => {
    navigate(-1); // This navigates back to the previous page
  };

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen py-10 md:px-5 flex flex-col items-center bg-[#f5f9f9] dark:bg-[#023247]">
      <img src={heroBG} className="absolute top-0 right-0 h-[90vh]" alt="" />
      <div className="w-4/5 md:pl-14 lg:pl-20">
        <h2 className="text-4xl  dark:text-white/90 text-start md:text-start flex gap-2 items-center">
          <ArrowLeft
            onClick={handleGoBack}
            className="w-8 h-8 cursor-pointer"
          />
          Apply <span className="font-bold">Now</span>
        </h2>
        <p className="md:w-[90%] text-black/70 dark:text-white/70 mt-3  text-center md:text-start">
          {job?.title}
        </p>
      </div>
      <div className="flex flex-col md:flex-row rounded-3xl shadow-lg p-4 md:p-14 items-center justify-around bg-white z-[90] w-4/5 mt-10">
        <div className="flex flex-col justify-center items-center md:w-[95%] order-2 md:order-1">
          {isLoading ? (
            "Loading"
          ) : (
            <div>
              <div
                key={job._id}
                className="flex flex-col justify-between w-full"
              >
                <div>
                  <h3 className="text-lg md:text-3xl font-medium text-[#023247]">
                    {job.title}
                  </h3>
                  <h2 className="text-sm mt-2 md:text-base text-[#30a4b6]">
                    {job.company} - {job.location}
                  </h2>
                </div>
                <hr className="mt-3" />
                <div className="mt-3">
                  <p className="mt-2 text-gray-500 w-full">
                    {renderJobDescription()}
                  </p>
                </div>
                <hr className="mt-8" />

                <div className="mt-4">
                  <div className="flex flex-wrap justify-around gap-2 text-sm text-gray-500 md:px-24">
                    <span className="rounded-full w-full md:w-[40%] lg:w-[30%] justify-center px-3 py-1 flex items-center gap-1">
                      <div className="flex items-end justify-end">
                        <img src={priceTag} alt="" className="w-7 h-7 mr-3" />
                      </div>
                      <span className="flex flex-col font-bold text-base">
                        {job.salary !== 0
                          ? `₹${job.salary.toLocaleString()}`
                          : "To Be Discussed"}
                        <span className="font-normal text-sm">/ year</span>
                      </span>
                    </span>

                    <span className="rounded-full w-full md:w-[40%] lg:w-[30%] justify-center px-3 py-1 flex items-center gap-1">
                      <div className="flex items-end justify-end">
                        <img src={jobLevel} alt="" className="w-6 h-6 mr-3" />
                      </div>
                      <span className="flex flex-col font-bold text-base">
                        {job.jobLevel}
                        <span className="font-normal text-sm">
                          Level of Experience
                        </span>
                      </span>
                    </span>
                    <span className="rounded-full w-full lg:w-[30%] justify-center px-3 py-1 flex items-center gap-1">
                      <div className="flex items-end justify-end">
                        <Briefcase className="w-7 h-7 text-[#2A8E9E] mr-3" />
                      </div>
                      <span className="flex flex-col font-bold text-base">
                        {job.jobType}
                        <span className="font-normal text-sm">Job Type</span>
                      </span>
                    </span>
                  </div>
                  <hr className="mt-5" />
                  {/* <h3 className="text-[#2A8E9E] font-semibold mt-8">
                    APPLY NOW
                  </h3> */}
                  <div className="flex items-center gap-10 w-full mt-7">
                    <button
                      className="transition-all text-md flex items-center justify-center py-2 px-5 bg-[#2A8E9E] hover:bg-[#1f6d7a] rounded-2xl text-white"
                      onClick={() => window.open(job.applyLink, "_blank")}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <JobRecommendation jobCategory={job?.jobCategory} />
    </div>
  );
}

export default SingleJob;
