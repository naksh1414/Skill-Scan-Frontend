import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { auth } from "../apis/ApiRoutes";
import illustration from "../assets/illustration-sign.png";
import logo from "../assets/logo.png";
import illus from "../assets/Clip path group.png";

import { Helmet } from "react-helmet-async";
function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const history = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords do not match. Please re-enter.");
    }
    setIsLoading(true);
    try {
      const response = await axios.post(`${auth}/register`, {
        formData,
      });
      if (response.data.message == "User registered successfully") {
        alert(response.data.message);
        history("/");
        setIsLoading(false);
        return;
      } else if (response.data.message == "This email is already in use.") {
        alert(response.data.message);
        setIsLoading(false);
        return;
      }
    } catch (error) {
      alert(error.response.data.message);
      setIsLoading(false);
      return;
    }
  };

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="flex h-full pb-10 md:pb-0 md:h-[100vh] bg-[#f5f9f9] dark:bg-[#023247]">
      <Helmet>
        <title>Skill Scan</title>
      </Helmet>
      <div className="w-[40%] h-[100%] relative hidden md:flex justify-center items-center z-10">
        <img
          src={illustration}
          alt=""
          className="w-full h-full object-fill absolute top-0 left-0"
        />
        <div className="z-50 relative flex justify-center flex-col items-center">
          <img src={illus} alt="" className="w-56" />
          <h3 className="w-1/3 text-center text-white/90 font-medium text-2xl">
            Unlock Your Potential
          </h3>
          <p className="w-3/4 text-center text-white/70 text-sm mt-3">
            Gain access to tools that redefine how you build your professional
            journey.
          </p>
        </div>
      </div>
      <div className="md:w-[60%] px-10 md:px-20 flex flex-col items-center md:justify-center mt-8 md:mt-0 h-[88%]  md:pt-10">
        <img src={logo} alt="" className="w-20" />
        <h1 className="text-4xl font-semibold mt-2 dark:text-white/90 text-[#023247]">
          Welcome Aboard!
        </h1>
        <p className="text-[#023247]/80 dark:text-white/80 md:w-3/5 mt-2 text-center">
          Join Skill Scan today and unlock your potential with our innovative
          tools and insights.
        </p>
        <form
          className="space-y-4 w-full flex flex-col justify-center items-center mt-4"
          onSubmit={handleSubmit}
        >
          <div className="w-full md:w-4/5">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-[#2A8E9E]"
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#2A8E9E] focus:border-[#2A8E9E]"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>

          <div className="w-full md:w-4/5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#2A8E9E]"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#2A8E9E] focus:border-[#2A8E9E]"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="w-full md:w-4/5 flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-1/2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#2A8E9E]"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#2A8E9E] focus:border-[#2A8E9E]"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="w-full md:w-1/2">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-[#2A8E9E]"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#2A8E9E] focus:border-[#2A8E9E]"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="w-full md:w-4/5">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-[#023247] dark:bg-[#2A8E9E] hover:bg-[#1f6d7a] focus:outline-none focus:ring-2 focus:ring-offset-2  disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing Up...
                </>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
        <p className="flex gap-1 text-[#023247]/70 dark:text-white/80 mt-4">
          Already an existing user?
          <Link to={"/sign-in"} className="text-[#2A8E9E] font-bold">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
