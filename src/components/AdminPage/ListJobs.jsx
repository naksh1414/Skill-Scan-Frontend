import axios from "axios";
import { useEffect, useState } from "react";
import { job } from "../../apis/ApiRoutes";
import EditJob from "./EditJob";
import { useNavigate } from "react-router-dom";

function ListJobs() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [editJobId, setEditJobId] = useState(null);
  const [editJobData, setEditJobData] = useState(null);

  const navigate = useNavigate();

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${job}/get-jobs?page=${currentPage}&limit=10&dateFilter=false`
      );
      setJobs(response.data.jobs);
      setTotalPages(response.data.totalPages);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [currentPage]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );
    if (!confirmDelete) return;

    const token = localStorage.getItem("token");
    try {
      await axios.delete(`${job}/delete-job?id=${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      fetchJobs();
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  const handleEdit = async (id) => {
    try {
      setEditJobId(id);
      const token = localStorage.getItem("token");
      const response = await axios.get(`${job}/get-job/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setEditJobData(response.data);
    } catch (error) {
      console.error("Error fetching job details:", error);
    }
  };

  const closeEdit = () => {
    setEditJobId(null);
    setEditJobData(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold text-gray-500">
        Loading jobs...
      </div>
    );
  }

  return (
    <div className="p-6 relative">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-1/3"
        />
        <button
          onClick={fetchJobs}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Date Posted</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs
            .filter((job) =>
              job.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((job) => (
              <tr key={job._id} className="text-center">
                <td className="border p-2">{job.title}</td>
                <td className="border p-2">
                  {new Date(job.datePosted).toLocaleDateString()}
                </td>
                <td className="border p-2 flex justify-center gap-3">
                  <button
                    onClick={() => handleEdit(job._id)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => handleDelete(job._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="flex justify-center mt-4 gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Edit Job Modal */}
      {editJobId && editJobData && (
        <div className="fixed top-0 left-0 w-full mt-5 h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-1/2">
            <button
              onClick={closeEdit}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded"
            >
              Close
            </button>
            <EditJob jobData={editJobData} onClose={closeEdit} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ListJobs;
