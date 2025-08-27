import { useState, useEffect } from "react";
import axios from "axios";
import { job } from "../apis/ApiRoutes";
import heroBG from "../assets/HomePage/hero-section-bg.png";
import dayjs from "dayjs";
import { useLocation, useNavigate } from "react-router-dom";
import {
  TrendingUp,
  ChevronRight,
  MapPin,
  Banknote,
  Calendar,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import JobSF from "./../components/StepsAndFeatures/JobSF";
function Jobs() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const naviagte = useNavigate();
  const query = useQuery();
  const initialFilters = {
    location: query.get("location") || "",
    jobType: query.get("jobType") || "",
    jobLevel: query.get("jobLevel") || "",
    jobCategory: query.get("jobCategory") || "",
  };

  const [filters, setFilters] = useState(initialFilters);

  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const [filters, setFilters] = useState({
  //   location: "",
  //   jobType: "",
  //   jobLevel: "",
  //   jobCategory: "",
  // });
  const [sortBy, setSortBy] = useState(""); // Add sort state
  const [expandedJobs, setExpandedJobs] = useState({});
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchJobs();
  }, [currentPage]);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(
        `${job}/get-jobs?page=${currentPage}&limit=9`
      );
      setJobs(response.data.jobs);
      setTotalPages(response.data.totalPages);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setLoading(false);
    }
  };

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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

  const filteredJobs = jobs
    .filter((job) => {
      const matchesSearch =
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilters =
        (!filters.location || job.location === filters.location) &&
        (!filters.jobType || job.jobType === filters.jobType) &&
        (!filters.jobLevel || job.jobLevel === filters.jobLevel) &&
        (!filters.jobCategory || job.jobCategory === filters.jobCategory);
      return matchesSearch && matchesFilters;
    })
    .sort((a, b) => {
      // Sort jobs based on datePosted
      if (sortBy === "newest") {
        return new Date(b.datePosted) - new Date(a.datePosted);
      } else {
        return new Date(a.datePosted) - new Date(b.datePosted);
      }
    });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold text-gray-500">
        Loading jobs...
      </div>
    );
  }

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="min-h-screen py-10 md:px-5 flex flex-col items-center bg-[#f5f9f9] dark:bg-[#023247]">
      <Helmet>
        <title>Skill Scan | Jobs</title>
      </Helmet>
      <img
        src={heroBG}
        className="absolute top-0 right-0 h-[90vh] -z-1"
        alt=""
      />
      <div className="w-4/5 md:pl-14 lg:pl-20">
        <h2 className="text-4xl  dark:text-white/90 text-center md:text-start">
          Stay Ahead with Real-Time
          <span className="font-bold"> Job Alerts!</span>
        </h2>
        <p className="md:w-[90%] text-black/70 dark:text-white/70 mt-3  text-center md:text-start">
          Finding the perfect job can be time-consuming, but with Skill Scan's
          Job Alerts, you’ll never miss an opportunity that matches your skills
          and career goals. Our automated job alert system keeps you updated on
          the latest openings, ensuring you apply at the right time.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col rounded-3xl shadow-lg p-2 md:p-14 items-center justify-around bg-white z-[90] w-[90%] mt-10">
        <div className="mb-6 w-full bg-white rounded-lg p-6 z-50">
          <div className="flex flex-col md:flex-col items-center gap-4">
            <input
              type="text"
              placeholder="Search jobs or companies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-[40%] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex flex-wrap gap-x-2 md:gap-x-6 justify-between gap-y-4 w-full">
              <select
                value={filters.location}
                onChange={(e) =>
                  setFilters({ ...filters, location: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full lg:w-[17%]"
              >
                <option value="">Job Type</option>
                <option value="Remote">Remote</option>
                <option value="On-site">On-site</option>
                <option value="Hybrid">Hybrid</option>
              </select>

              <select
                value={filters.jobCategory}
                onChange={(e) =>
                  setFilters({ ...filters, jobCategory: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full lg:w-[17%]"
              >
                <option value="Other">Industry</option>
                <option value="Technology">Technology</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
              </select>

              <select
                value={filters.jobType}
                onChange={(e) =>
                  setFilters({ ...filters, jobType: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[30%] lg:w-[17%]"
              >
                <option value="">Job Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>

              <select
                value={filters.jobLevel}
                onChange={(e) =>
                  setFilters({ ...filters, jobLevel: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[30%] lg:w-[17%]"
              >
                <option value="">Experience Level</option>
                <option value="Entry Level">Entry Level</option>
                <option value="Mid-Level">Mid-Level</option>
                <option value="Senior Level">Senior Level</option>
                <option value="Managerial">Managerial</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[30%] lg:w-[17%]"
              >
                <option value="">Sort By</option>
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>
        </div>
        <hr className="h-[1.5px] mb-8 bg-gray-200 text-black w-full" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 z-10">
          {filteredJobs.map((job) => (
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
                {/* <p className="mt-2 text-gray-500 w-full">{job.description}</p> */}
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
                    onClick={() => naviagte(`/jobs/${job._id}`)}
                  >
                    More Details <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Previous
          </button>
          <span className="text-gray-700 mx-5">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Next
          </button>
        </div>
      </div>
      <JobSF />
    </div>
  );
}

export default Jobs;
