import { useState } from "react";
import { admin } from "../../apis/ApiRoutes";

function AddJobs() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    company: "",
    salary: "",
    applyLink: "",
    applyTill: "",
    isFeatured: false,
    jobType: "",
    jobCategory: "",
    jobLevel: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${admin}/add-jobs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Job posted successfully!");
        setFormData({
          title: "",
          description: "",
          location: "",
          company: "",
          salary: "",
          applyLink: "",
          applyTill: "",
          isFeatured: false,
          jobType: "",
          jobCategory: "",
          jobLevel: "",
        });
      }
    } catch (error) {
      console.error("Error posting job:", error);
      alert("Failed to post job");
    }
  };

  return (
    <div className="md:max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        Post a New Job
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-1"
              placeholder="e.g., Software Engineer"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-1"
              placeholder="e.g., Google"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-1"
              placeholder="e.g., Remote, San Francisco"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Salary (per year)
            </label>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-1"
              placeholder="e.g., 100000"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job Type
            </label>
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-1"
              required
            >
              <option value="">Select Job Type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job Category
            </label>
            <select
              name="jobCategory"
              value={formData.jobCategory}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-1"
              required
            >
              <option value="">Select Category</option>
              <option value="Engineering">Engineering</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job Level
            </label>
            <select
              name="jobLevel"
              value={formData.jobLevel}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-1"
              required
            >
              <option value="">Select Level</option>
              <option value="Entry Level">Entry Level</option>
              <option value="Mid-Level">Mid-Level</option>
              <option value="Senior Level">Senior Level</option>
              <option value="Managerial">Managerial</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Apply Till
            </label>
            <input
              type="date"
              name="applyTill"
              value={formData.applyTill}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-1"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Apply Link
          </label>
          <input
            type="url"
            name="applyLink"
            value={formData.applyLink}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-1"
            placeholder="e.g., https://company.com/apply"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-1"
            placeholder="Provide a detailed job description"
            required
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="isFeatured"
            checked={formData.isFeatured}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-700">
            Feature this job
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 p-1 transition-all"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddJobs;
