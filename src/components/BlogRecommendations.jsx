import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { blog } from "../apis/ApiRoutes";
import { ArrowUpRight } from "lucide-react";

function BlogRecommendations() {
  const [originalBlogs, setOriginalBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const history = useNavigate();
  useEffect(() => {
    axios
      .get(`${blog}/all-blogs?limit=10`)
      .then((response) => {
        setBlogs(response.data);
        setOriginalBlogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);
  return (
    <div className="flex flex-col rounded-3xl shadow-lg p-2 md:p-14 items-center justify-around bg-white z-[90] w-[100%] mt-10">
      <h2 className="text-2xl mb-8 md:text-4xl  dark:text-black/90">
        Read our Latest Blogs
      </h2>
      <div className="flex flex-wrap gap-5 justify-center items-center">
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
            {/* <img src={waitingGIF} alt="" className="w-44 h-44 rounded-full" /> */}
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
    </div>
  );
}

export default BlogRecommendations;
