import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { blog } from "../../apis/ApiRoutes";
import axios from "axios";
// import EditJob from "./EditJob";
import EditBlog from "./EditBlog";

function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${blog}/all-blogs-for-admin`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setBlogs(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setLoading(false);
    }
  };

  const [blogId, setBlogId] = useState();
  const [blogData, setBlogData] = useState();

  const handleEdit = async (id) => {
    try {
      setBlogId(id);
      const token = localStorage.getItem("token");
      const response = await axios.get(`${blog}/specific-blog/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setBlogData(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error("Error fetching job details:", error);
    }
  };

  const closeEdit = () => {
    setBlogId(null);
    setBlogData(null);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${blog}/all-blogs-for-admin/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        setBlogs(blogs.filter((blog) => blog._id !== id));
        alert("Blog deleted successfully!");
      } else {
        alert("Failed to delete the blog.");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  if (loading)
    return (
      <p className="text-center w-full flex justify-center items-center min-h-[100vh]">
        Loading blogs...
      </p>
    );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">All Blogs</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Title</th>
            <th className="border p-2">Created At</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog._id} className="text-center">
              <td className="border p-2">
                <Link
                  to={`/blogs/${blog.slug}`}
                  className="text-blue-500 hover:underline"
                >
                  {blog.title}
                </Link>
              </td>
              <td className="border p-2">
                {new Date(blog.createdAt).toLocaleDateString()}
              </td>
              <td className="border p-2">
                <button
                  className="bg-blue-500 mr-2 text-white px-4 py-1 rounded hover:bg-blue-700"
                  onClick={() => handleEdit(blog.slug)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700"
                  onClick={() => handleDelete(blog._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {blogId && blogData && (
        <div className="fixed top-0 left-0 w-full mt-5 h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-1/2">
            <button
              onClick={closeEdit}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded"
            >
              Close
            </button>
            <EditBlog blogData={blogData} onClose={closeEdit} />
          </div>
        </div>
      )}
    </div>
  );
}

export default AllBlogs;
