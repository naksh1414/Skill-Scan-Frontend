import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { blog } from "../apis/ApiRoutes";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import heroBG from "../assets/HomePage/hero-section-bg.png";
import waitingGIF from "../assets/Animation - 1736759730296 (1).gif";
import { ArrowLeft, ChevronRight } from "lucide-react";

import { Helmet } from "react-helmet-async";
import BlogRecommendations from "../components/BlogRecommendations";
function SingleBlog() {
  const { slug } = useParams();
  const [specificBlog, setSpecificBlog] = useState(null);
  const history = useNavigate();
  useEffect(() => {
    axios
      .get(`${blog}/specific-blog/${slug}`)
      .then((response) => {
        setSpecificBlog(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the blog!", error);
      });
  }, [slug]);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!specificBlog) {
    return (
      <div className="min-h-screen text-black/70 dark:text-white/70 py-10 px-5 flex flex-col items-center bg-[#f5f9f9] dark:bg-[#023247]">
        Loading...
      </div>
    );
  }

  const sanitizeAndParseHTML = (content) => {
    const sanitized = DOMPurify.sanitize(content, {
      ALLOWED_TAGS: [
        "b",
        "i",
        "em",
        "strong",
        "a",
        "ul",
        "ol",
        "li",
        "p",
        "br",
        "blockquote",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "img",
      ],
      ALLOWED_ATTR: ["href", "src", "alt", "title", "style"],
    });
    return parse(sanitized);
  };
  const handleGoBack = () => {
    navigate(-1); // This navigates back to the previous page
  };

  return (
    <div className="min-h-screen py-10 md:px-5 flex flex-col items-center bg-[#f5f9f9] dark:bg-[#023247]">
      <Helmet>
        <title>{specificBlog?.seoTitle}</title>
        <meta name="description" content={specificBlog?.seoDescription} />
        <meta name="keywords" content={specificBlog?.seoKeywords} />
      </Helmet>
      <img src={heroBG} className="absolute top-0 right-0 h-[90vh]" alt="" />
      <div className="w-4/5 md:pl-14 lg:pl-20">
        <h2 className="text-2xl md:text-4xl  dark:text-white/90  md:text-start">
          <span className="font-bold flex flex-wrap items-start justify-start md:justify-start gap-1 md:gap-2 text-wrap">
            <ArrowLeft
              onClick={handleGoBack}
              className="w-8 h-8 cursor-pointer"
            />
            <span onClick={() => history("/blogs")} className=" cursor-pointer">
              Blogs
            </span>
            <ChevronRight className="w-10 h-10 font-semibold" />
            {specificBlog?.title}
          </span>
        </h2>
        <p className="md:w-[90%] text-black/70 dark:text-white/70 mt-3  text-center md:text-start">
          {specificBlog?.summary}
        </p>
      </div>

      <div className="flex rounded-3xl shadow-lg p-7 md:p-14 items-center justify-around bg-white z-[90] min-w-full  md:w-4/5 mt-10">
        {specificBlog ? (
          <div className="">
            {specificBlog?.thumbnail && (
              <img
                src={specificBlog?.thumbnail}
                alt={specificBlog?.title}
                className="mb-5 w-full h-[400px] object-cover rounded-lg"
              />
            )}

            <div className="blog-content">
              {sanitizeAndParseHTML(specificBlog.content)}
            </div>
          </div>
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
      <BlogRecommendations />
    </div>
  );
}

export default SingleBlog;
