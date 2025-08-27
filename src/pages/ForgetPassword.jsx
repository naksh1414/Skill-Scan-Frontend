import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { user } from "../apis/ApiRoutes";

import illustration from "../assets/illustration-sign.png";
import logo from "../assets/logo.png";
import illus from "../assets/Clip path group.png";
import { Helmet } from "react-helmet-async";
// import img1 from "../../../assets/Login/forget pass.jpeg";
function ForgetPassword() {
  const history = useNavigate();
  const [email, setEmail] = useState();
  const [sendOTP, setSendOTP] = useState(0);
  const [typedOTP, setTypedOTP] = useState(0);
  const [formStep, setFormStep] = useState(1);
  const [disable, setDisable] = useState(0);

  async function next(e) {
    e.preventDefault();
    setDisable(1);
    const OTP = Math.floor(Math.random() * 9000 + 1000);
    setSendOTP(OTP);
    try {
      await axios
        .post(`${user}/send-otp`, {
          email,
          OTP,
        })
        .then((res) => {
          if (res.data == "Success") {
            toast.success("Successfully send the OTP", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              theme: "colored",
            });
            setTypedOTP("");
            setFormStep(2);
          }
        })
        .catch(() => {
          toast.error("Bad network error,Please try again after sometime", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "colored",
          });
        });
    } catch (error) {
      toast.error("Bad network error,Please try again after sometime", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    }
    setDisable(0);
  }

  async function submit(e) {
    e.preventDefault();
    setDisable(1);
    if (sendOTP === parseInt(typedOTP)) {
      try {
        await axios
          .post(`${user}/forget-password`, {
            email,
          })
          .then((res) => {
            if (res.data == "Success") {
              toast.success("Successfully send the password reset link", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "colored",
              });
              history("/sign-in");
            }
          })
          .catch(() => {
            toast.error("Bad network error,Please try again after sometime", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              theme: "colored",
            });
          });
      } catch (error) {
        toast.error("Bad network error,Please try again after sometime", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "colored",
        });
      }
    } else {
      toast.warn("Wrong OTP", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    }
    setDisable(0);
  }
  async function prv(e) {
    e.preventDefault();
    setFormStep(1);
  }

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          className="w-full h-full object-fill absolute top-0 left-0 -z-10 "
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
      <div className="md:w-[60%] px-10 md:px-20 flex flex-col items-center md:justify-center mt-8 md:mt-0 h-[88%]">
        <img src={logo} alt="" className="w-20" />
        <h1 className="text-4xl text-center font-semibold mt-2 dark:text-white/90 text-[#023247]">
          Forget Password?
        </h1>
        <p className="text-[#023247]/80 dark:text-white/80 md:w-3/5 mt-2 text-center">
          No worries. Enter your account email address and we will share a reset
          link.
        </p>
        <form
          className="space-y-4 w-full flex flex-col justify-center items-center mt-4"
          onSubmit={formStep == 1 ? next : submit}
        >
          {formStep == 1 ? (
            <div className="w-full md:w-4/5">
              <label
                className="block text-sm font-medium text-[#2A8E9E]"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#2A8E9E] focus:border-[#2A8E9E]"
                type="text"
                name="email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                title="Email should be in form characters@characters.characters"
                required
              />
            </div>
          ) : (
            <div className="w-full md:w-4/5">
              <label className="font-medium text-gray-600 ml-2" htmlFor="OTP">
                Enter OTP
              </label>
              <input
                className="border-2 border-[#a5a5a57e] bg-white rounded-lg p-2 w-full focus:outline-none font-medium"
                type="tel"
                name="OTP"
                id="OTP"
                onChange={(e) => setTypedOTP(e.target.value)}
                maxLength={4}
                minLength={4}
                title="Must contain 4 digits"
                value={typedOTP}
              />
            </div>
          )}

          <div className="flex justify-evenly w-[100%] md:w-[60%] mt-5 gap-5">
            <button
              //   className={`w-[55%] md:w-[45%] bg-white ${
              //     formStep == 1 && "hidden"
              //   } flex justify-center z-10 text-black font-semibold py-2 rounded-full border-2 border-[#7d7d7d]`}
              className={`${
                formStep == 1 && "hidden"
              } w-full flex justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-[#023247] dark:bg-[#2A8E9E] hover:bg-[#1f6d7a] focus:outline-none focus:ring-2 focus:ring-offset-2  disabled:opacity-50 disabled:cursor-not-allowed mt-4`}
              onClick={prv}
            >
              Back
            </button>
            <button
              type="submit"
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-[#023247] dark:bg-[#2A8E9E] hover:bg-[#1f6d7a] focus:outline-none focus:ring-2 focus:ring-offset-2  disabled:opacity-50 disabled:cursor-not-allowed mt-4`}
              disabled={disable}
            >
              {formStep == 1 ? "Get Otp" : "Verify"}
            </button>
          </div>
        </form>

        {/* <div className="flex flex-col justify-center w-full items-center">
          <Link to="/endeavour/register">
            <button className="bg-white text-black px-3 py-2 h-auto w-[12rem] hover:bg-black hover:text-white rounded-full">
              Register
            </button>
          </Link>
          <Link to="/endeavour/login">
            <button className="bg-white text-black px-3 py-2 h-auto w-[12rem] hover:bg-black hover:text-white rounded-full">
              Login
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default ForgetPassword;
