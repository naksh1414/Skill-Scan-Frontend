import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { user } from "../apis/ApiRoutes";

import illustration from "../assets/illustration-sign.png";
import logo from "../assets/logo.png";
import illus from "../assets/Clip path group.png";
import { Helmet } from "react-helmet-async";
// import img from "../../../assets/ForgetPassword/wallpaper.jpg";
// import img1 from "../../../assets/Login/reset pass.jpeg";
function ResetPassword() {
  const history = useNavigate();
  const { id, token } = useParams();
  const [password, setPassword] = useState("");
  const [repass, setRepass] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(0);
  const [rePassVisibility, setRePassVisibility] = useState(0);
  const [disable, setDisable] = useState(0);

  const submit = async (e) => {
    e.preventDefault();
    setDisable(1);
    if (password !== repass) {
      setDisable(0);
      return toast.warn("Password Does not match", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    }
    try {
      await axios
        .post(`${user}/reset-password`, {
          password,
          id,
          token,
        })
        .then((res) => {
          if (res.data == "Successfully Changed the password") {
            toast.success("Successfully Changed the password", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              theme: "colored",
            });
            history("/sign-in");
          } else if (res.data == "Don't use same password :]") {
            toast.warn("Don't use same password again :]", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              theme: "colored",
            });
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
  };

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
          Reset Password
        </h1>
        <form
          className="space-y-4 w-full flex flex-col justify-center items-center mt-4"
          onSubmit={submit}
        >
          <div className="w-full md:w-4/5">
            <label
              className="block text-sm font-medium text-[#2A8E9E]"
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex border-2 bg-white  rounded-lg">
              <input
                className="block w-full py-2 px-3"
                type={passwordVisibility ? "text" : "password"}
                name="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}"
                title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 and at most 15 characters"
                required
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setPasswordVisibility(!passwordVisibility);
                }}
                className="bg-transparent focus:border-0  h-auto w-[4rem] font-semibold text-[#6a6a6a] z-10"
              >
                {passwordVisibility ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="w-full md:w-4/5">
            <label
              className="block text-sm font-medium text-[#2A8E9E]"
              htmlFor="repassword"
            >
              Confirm-Password
            </label>
            <div className="flex border-2 bg-white  rounded-lg">
              <input
                className="block w-full py-2 px-3"
                type={rePassVisibility ? "text" : "password"}
                name="repassword"
                id="repassword"
                onChange={(e) => {
                  setRepass(e.target.value);
                }}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}"
                title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 and at most 15 characters"
                required
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setRePassVisibility(!rePassVisibility);
                }}
                className="bg-transparent focus:border-0  h-auto w-[4rem] font-semibold text-[#6a6a6a] z-10"
              >
                {rePassVisibility ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="flex justify-evenly w-[100%] md:w-[60%] mt-5 gap-5">
            <button
              type="submit"
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-[#023247] dark:bg-[#2A8E9E] hover:bg-[#1f6d7a] focus:outline-none focus:ring-2 focus:ring-offset-2  disabled:opacity-50 disabled:cursor-not-allowed mt-4`}
              disabled={disable}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
