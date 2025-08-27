import heroBG from "../assets/HomePage/hero-section-bg.png";
import waitingGIF from "../assets/Animation - 1736759730296 (1).gif";
import { useEffect, useState } from "react";
import axios from "axios";
import { blog } from "../apis/ApiRoutes";
import { ChevronRight } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import BlogSF from "./../components/StepsAndFeatures/BlogSF";
function Blogs() {
  const [originalBlogs, setOriginalBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const history = useNavigate();
  useEffect(() => {
    axios
      .get(`${blog}/all-blogs?limit=50`)
      .then((response) => {
        setBlogs(response.data);
        setOriginalBlogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filteredBlogs = originalBlogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setBlogs(filteredBlogs);
    } else {
      setBlogs(originalBlogs);
    }
  }, [searchTerm]);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen py-10 px-5 flex flex-col items-center bg-[#f5f9f9] dark:bg-[#023247]">
      <Helmet>
        <title>Skill Scan | Blogs</title>
      </Helmet>
      <img src={heroBG} className="absolute top-0 right-0 h-[90vh]" alt="" />
      <div className="w-4/5 md:pl-14 lg:pl-20">
        <h2 className="text-4xl  dark:text-white/90 text-center md:text-start">
          Explore Career Tips & Job Search Strategies on the
          <span className="font-bold"> Skill Scan Blog!</span>
        </h2>
        <p className="md:w-[90%] text-black/70 dark:text-white/70 mt-3  text-center md:text-start">
          Stay informed, stay ahead! The Skill Scan Blog is your go-to resource
          for expert insights on resume building, job search strategies,
          interview tips, and career growth. Whether you’re a fresh graduate or
          an experienced professional, our blog provides valuable guidance to
          help you succeed in today’s competitive job market.
        </p>
      </div>

      <div className="w-4/5 md:pl-14 lg:pl-20 flex justify-center md:justify-start items-center">
        <input
          type="text"
          placeholder="Search..."
          className="border-2 border-gray-400 p-2 rounded-lg mt-8 w-4/5"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap rounded-3xl shadow-lg p-7 items-center justify-around bg-white min-h-[80vh] z-[90]  min-w-full md:w-4/5 mt-10">
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row  justify-center items-center gap-2 p-5 m-2 bg-gray-100 rounded-lg shadow-md w-full lg:w-[45%] "
            >
              <div className="md:w-1/2 order-2 md:order-1">
                <h3
                  onClick={() => history(`/blogs/${blog.slug}`)}
                  className="text-xl font-bold mb-2 cursor-pointer hover:underline"
                >
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  {blog.summary.slice(0, 150)}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-xs text-gray-500">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </p>
                  <div className="bg-[#2A8E9E] hover:bg-[#1f6d7a] cursor-pointer  rounded-full text-white">
                    <ArrowUpRight
                      onClick={() => history(`/blogs/${blog.slug}`)}
                      className="w-6 h-6 m-2"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 mt-3 md:mt-0 order-1 md:order-2">
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full aspect-square object-cover mb-2 rounded-lg"
                />
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col justify-center items-center">
            <img src={waitingGIF} alt="" className="w-44 h-44 rounded-full" />
            <h2 className="text-[#023247] font-bold text-5xl mt-5 text-center">
              Coming Soon!
            </h2>
            <p className="text-[#023247]/80 mt-3  text-center">
              Stay connected and explore our other exciting features in the
              meantime.
            </p>
          </div>
        )}
      </div>
      <BlogSF />
    </div>
  );
}

export default Blogs;
