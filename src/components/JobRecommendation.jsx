import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { job } from "../apis/ApiRoutes";
import {
  Banknote,
  Calendar,
  ChevronRight,
  MapPin,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
function JobRecommendation() {
  const [filters, setFilters] = useState("");
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, [currentPage]);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(
        `${job}/get-jobs?page=${currentPage}&limit=5`
      );
      setJobs(response.data.jobs);
      // console.log(response.data.jobs);
      setTotalPages(response.data.totalPages);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setLoading(false);
    }
  };

  const getShortTimeAgo = (date) => {
    const now = dayjs();
    const past = dayjs(date);
    const diffInSec = now.diff(past, "second");

    if (diffInSec < 60) return `${diffInSec}s ago`;
    const diffInMin = now.diff(past, "minute");
    if (diffInMin < 60) return `${diffInMin}m ago`;
    const diffInHour = now.diff(past, "hour");
    if (diffInHour < 24) return `${diffInHour}h ago`;
    const diffInDay = now.diff(past, "day");
    return `${diffInDay}d ago`;
  };

  return (
    <div className="flex flex-col rounded-3xl shadow-lg p-2 md:p-14 items-center justify-around bg-white z-[90] w-[80%] mt-10">
      <h2 className="text-2xl mb-8 md:text-4xl  dark:text-black/90">
        Job Recommendations
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 z-10">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white shadow-lg rounded-lg p-4  md:p-6 flex flex-col justify-between"
          >
            <div className="flex justify-between">
              <div className="flex gap-2 items-center text-[#2A8E9E] w-[42%] border border-gray-300 rounded-md text-center justify-center mb-5 font-semibold text-sm">
                <TrendingUp className="w-5 h-5" /> Hiring
              </div>
              <p className="text-gray-500 text-sm">
                {getShortTimeAgo(job.datePosted)}
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-[#023247]">
                {job.title}
              </h3>
              <h2 className="text-sm md:text-md text-[#023247]/80">
                {job.company}
              </h2>
              {/* <p className="mt-2 text-gray-500 w-full">
                  {expandedJobs[job._id] ? (
                    <>
                      {job.description}
                      <button
                        className="text-[#023247]/80 underline ml-1"
                        onClick={() => toggleDescription(job._id)}
                      >
                        Show Less
                      </button>
                    </>
                  ) : (
                    <>
                      {job.description.substring(0, 150)}...
                      <button
                        className="text-[#023247]/80 underline ml-1"
                        onClick={() => toggleDescription(job._id)}
                      >
                        See More
                      </button>
                    </>
                  )}
                </p> */}
            </div>
            <hr className="mt-3" />
            <div className="mt-4">
              <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                <span className="rounded-full px-3 py-1 flex items-center gap-1">
                  <MapPin className="w-5 h-5" />
                  {job.location}
                </span>
                {job.salary ? (
                  <span className="rounded-full px-3 py-1 flex items-center gap-1">
                    <Banknote className="w-5 h-5" />
                    {job.salary !== 0
                      ? `₹${job.salary.toLocaleString()}/year`
                      : ""}
                  </span>
                ) : (
                  <span className="rounded-full px-3 py-1 flex items-center gap-1">
                    <Banknote className="w-5 h-5" />
                    To Be Discussed
                  </span>
                )}
                <span className="rounded-full px-3 py-1 flex items-center gap-1">
                  <Calendar className="w-5 h-5" />
                  {job.jobType}
                </span>
              </div>

              <div className="flex items-center justify-between w-full mt-7">
                <span className="bg-gray-100 px-3 text-center font-semibold rounded-md text-sm text-[#2A8E9E] py-1 flex items-center justify-center">
                  {job.jobLevel}
                </span>
                <button
                  className="text-[#2A8E9E] rounded-lg transition-all hover:text-[#1f6d7a] underline underline-offset-2 text-sm flex items-center"
                  onClick={() => {
                    navigate(`/jobs/${job._id}`);
                    location.reload();
                  }}
                >
                  View Details <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

JobRecommendation.propTypes = {
  jobCategory: PropTypes.string.isRequired,
};

export default JobRecommendation;
