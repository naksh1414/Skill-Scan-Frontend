import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { auth } from "../apis/ApiRoutes";
import illustration from "../assets/illustration-sign.png";
import logo from "../assets/logo.png";
import illus from "../assets/Clip path group.png";
import { useResume } from "../context/useResume";
import { Helmet } from "react-helmet-async";

function SignIn() {
  const { dispatch } = useResume();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const history = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${auth}/login`,
        {
          email: formData.email,
          password: formData.password,
        },
        {
          withCredentials: true,
        }
      );
      if (response.data.message == "Logged in successfully") {
        alert(response.data.message);
        localStorage.setItem("token", response.data.token);
        if (response.data.resumeData) {
          const resumeData = response.data.resumeData;
          localStorage.setItem("resumeData", JSON.stringify(resumeData));
          dispatch({ type: "LOAD_SAVED_STATE", payload: resumeData });
        } else {
          console.log("No resume data received from server");
        }
        history("/");
        return;
      }
    } catch (error) {
      alert(error.response.data.message);
    }
    setIsLoading(false);
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
      <div className="w-[50%] h-[100%] relative hidden md:flex justify-center items-center z-10">
        <img
          src={illustration}
          alt=""
          className="absolute top-0 left-0 object-fill w-full h-full -z-10 "
        />
        <div className="relative z-50 flex flex-col items-center justify-center">
          <img src={illus} alt="" className="w-56" />
          <h3 className="w-1/3 text-2xl font-medium text-center text-white/90">
            Unlock Your Potential
          </h3>
          <p className="w-3/4 mt-3 text-sm text-center text-white/70">
            Gain access to tools that redefine how you build your professional
            journey.
          </p>
        </div>
      </div>
      <div className="md:w-[60%] px-10 md:px-20 flex flex-col items-center md:justify-center mt-8 md:mt-0 h-[88%]">
        <img src={logo} alt="" className="object-cover h-20 w-60" />
        <h1 className="text-4xl font-semibold mt-2 dark:text-white/90 text-[#023247]">
          Hello Again!
        </h1>
        <p className="text-[#023247]/80 dark:text-white/80 md:w-3/5 mt-2 text-center">
          Welcome back! Please login to your account and pick up where you left
          off.
        </p>
        <form
          className="flex flex-col items-center justify-center w-full mt-4 space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="w-full md:w-4/5">
            <label
              htmlFor="fullName"
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

          <div className="w-full md:w-4/5">
            <label
              htmlFor="fullName"
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
            <p className="self-end mt-2 text-end">
              <Link to={"/forget-password"} className="text-blue-600">
                Forget Password ?
              </Link>
            </p>
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
                    className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
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
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </form>
        <p className="flex gap-1 text-[#023247]/70 dark:text-white/80 mt-4">
          Don&apos;t have an account yet?
          <Link to={"/sign-up"} className="text-[#2A8E9E] font-bold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
