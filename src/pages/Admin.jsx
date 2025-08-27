import { useState, useEffect } from "react";
import AddJobs from "../components/AdminPage/AddJobs";
import MakeAdmin from "../components/AdminPage/MakeAdmin";
import { admin } from "../apis/ApiRoutes";
import { useNavigate, useLocation } from "react-router-dom";
import CreateBlog from "../components/AdminPage/CreateBlog";
import AllBlogs from "../components/AdminPage/AllBlogs";
import { Helmet } from "react-helmet-async";
import ListJobs from "../components/AdminPage/ListJobs";

function Admin() {
  const [activeTab, setActiveTab] = useState("jobs");
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${admin}/check-admin`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        // console.log(data);
        if (!response.ok || !data.isAdmin) {
          navigate("/");
          return;
        }

        setIsAdmin(true);
      } catch (error) {
        console.error("Error checking admin status:", error);
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    checkAdminStatus();
  }, [navigate]);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (loading) {
    return (
      <div className="container mx-auto p-4 min-h-[100vh] flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="px-5 md:px-24 p-4 min-h-[100vh]">
      <Helmet>
        <title>Admin Panel</title>
      </Helmet>
      <div className="flex justify-center mb-6 w-full">
        <button
          className={`px-6 py-2 mx-2 rounded-lg ${
            activeTab === "jobs"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("jobs")}
        >
          Add Jobs
        </button>
        <button
          className={`px-6 py-2 mx-2 rounded-lg ${
            activeTab === "listJobs"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => {
            setActiveTab("listJobs");
          }}
        >
          List of Job
        </button>
        <button
          className={`px-6 py-2 mx-2 rounded-lg ${
            activeTab === "blog"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("blog")}
        >
          Create Blog
        </button>
        <button
          className={`px-6 py-2 mx-2 rounded-lg ${
            activeTab === "allBlog"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("allBlogs")}
        >
          All Blogs
        </button>
        <button
          className={`px-6 py-2 mx-2 rounded-lg ${
            activeTab === "admins"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("admins")}
        >
          Handle Admins
        </button>
      </div>

      <div className="mt-6 w-full ">
        {activeTab === "jobs" ? (
          <AddJobs />
        ) : activeTab === "blog" ? (
          <CreateBlog />
        ) : activeTab === "allBlogs" ? (
          <AllBlogs />
        ) : activeTab === "listJobs" ? (
          <ListJobs />
        ) : (
          <MakeAdmin />
        )}
      </div>
    </div>
  );
}

export default Admin;
