import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function SearchJobs({ style }) {
  const history = useNavigate();

  const [filters, setFilters] = useState({
    location: "",
    jobType: "",
    jobLevel: "",
    jobCategory: "",
  });
  return (
    <div className={`${style} flex flex-col no-prnt`}>
      <h2 className="text-2xl font-semibold text-[#023247] dark:text-white/90">
        Search Jobs
      </h2>
      <div className="flex flex-wrap gap-x-2 md:gap-x-6 md:justify-around gap-y-4 w-full order-3  mt-5 md:mt-5">
        <select
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full lg:w-[44%]"
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
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full lg:w-[44%]"
        >
          <option value="Other">Industry</option>
          <option value="Technology">Technology</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
        </select>

        <select
          value={filters.jobType}
          onChange={(e) => setFilters({ ...filters, jobType: e.target.value })}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[30%] lg:w-[44%]"
        >
          <option value="">Job Type</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>

        <select
          value={filters.jobLevel}
          onChange={(e) => setFilters({ ...filters, jobLevel: e.target.value })}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-[30%] lg:w-[44%]"
        >
          <option value="">Experience Level</option>
          <option value="Entry Level">Entry Level</option>
          <option value="Mid-Level">Mid-Level</option>
          <option value="Senior Level">Senior Level</option>
          <option value="Managerial">Managerial</option>
        </select>
        <button
          onClick={() => {
            history(
              `/jobs?jobLevel=${filters.jobLevel}&jobType=${filters.jobType}&jobCategory=${filters.jobCategory}&location=${filters.location}`
            );
          }}
          className="flex no-prnt items-center justify-center gap-2 px-4 py-2 font-medium text-white bg-[#2A8E9E] hover:bg-[#1f6d7a] rounded-lg w-full md:w-[100%]"
        >
          Search Job
        </button>
      </div>
    </div>
  );
}
SearchJobs.propTypes = {
  style: PropTypes.string.isRequired,
};

export default SearchJobs;
