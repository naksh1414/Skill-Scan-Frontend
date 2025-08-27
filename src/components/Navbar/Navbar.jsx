import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/lightLogo.png";
import lightLogo from "../../assets/SkillScanLogo.png";
import { jwtDecode } from "jwt-decode";
import { auth } from "../../apis/ApiRoutes";
import axios from "axios";
import { CircleUserRound, Menu, X, Moon, Sun } from "lucide-react";
import useTheme from "../../context/theme";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const history = useNavigate();
  const token = localStorage.getItem("token");
  const [isOpen, setIsOpen] = useState(false);

  const userProfile = () => {
    if (!token) {
      return history(`/login`);
    }
    try {
      const decoded = jwtDecode(token);
      if (decoded.userType == "admin" && decoded.isAdmin) {
        history(`/admin`);
        return;
      }
      history(`/u/${decoded.userId}`);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleThemeChange = () => {
    if (themeMode == "dark") {
      lightTheme();
    } else {
      darkTheme();
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(`${auth}/logout`);
      localStorage.removeItem("token");
      history("/sign-in");
    } catch (error) {
      console.error("Failed to logout:", error.response.data.message);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`px-4 md:px-16 py-4 flex justify-between items-center sticky top-0 z-[100] dark:bg-[#023247] dark:text-white bg-white/90 text-[#023247] no-prnt`}
    >
      {themeMode == "dark" ? (
        <Link to={"/"}>
          <img
            src={lightLogo}
            alt=""
            className="object-cover w-40 h-8 md:h-11"
          />
        </Link>
      ) : (
        <Link to={"/"}>
          <img src={logo} alt="" className="object-cover w-40 h-8 md:h-11" />
        </Link>
      )}

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <button
          // onClick={handleThemeChange}
          className="p-2 rounded-full"
        >
          {/* {themeMode === "dark" ? (
            <Sun className="w-6 h-6 text-white" />
          ) : (
            <Moon className="w-6 h-6 text-[#023247]" />
          )} */}
          <label className="switch">
            <input
              type="checkbox"
              onClick={handleThemeChange}
              checked={themeMode == "dark" ? "darkTheme" : ""}
            />
            <span className="slider"></span>
          </label>
        </button>
        {token && (
          <CircleUserRound
            className={`w-7 h-7 cursor-pointer ${
              themeMode === "dark" ? "text-white" : "text-[#023247]"
            }`}
            onClick={userProfile}
          />
        )}
        <button onClick={toggleMenu}>
          {isOpen ? <X size={24} className="z-50" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden gap-6 text-lg font-medium md:flex">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/jobs"}>
          <li>Jobs/Careers</li>
        </Link>
        <Link to={"/resume-builder"}>
          <li>Resume Builder</li>
        </Link>
        <Link to={"/qr-generator"}>
          <li>QR Generator</li>
        </Link>
        {/* <Link to={"/doc-qr-generator"}>
          <li>Document QR</li>
        </Link> */}
        <Link to={"/resume-ats-score"}>
          <li>ATS</li>
        </Link>
        <Link to={"/blogs"}>
          <li>Blogs</li>
        </Link>

        <Link to={"/study-resources"}>
          <li>Study Resources</li>
        </Link>
      </ul>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed left-0 top-0 h-full w-64 bg-white dark:bg-[#023247] transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col gap-4 p-6 text-lg font-medium">
            <Link to={"/"} onClick={toggleMenu}>
              <li>Home</li>
            </Link>
            <Link to={"/jobs"} onClick={toggleMenu}>
              <li>Jobs/Careers</li>
            </Link>
            <Link to={"/resume-builder"} onClick={toggleMenu}>
              <li>Resume Builder</li>
            </Link>
            <Link to={"/qr-generator"} onClick={toggleMenu}>
              <li>QR Generator</li>
            </Link>
            {/* <Link to={"/doc-qr-generator"} onClick={toggleMenu}>
              <li>Document QR</li>
            </Link> */}
            <Link to={"/resume-ats-score"} onClick={toggleMenu}>
              <li>ATS</li>
            </Link>
            <Link to={"/blogs"} onClick={toggleMenu}>
              <li>Blogs</li>
            </Link>
          </ul>
          {isOpen && !token ? (
            <div className="fixed flex justify-center gap-3 md:hidden bottom-8 left-4 right-4">
              <Link
                to={"/sign-in"}
                onClick={toggleMenu}
                className={`flex gap-2 items-center border-2 rounded-2xl py-2 px-5 transition-colors ${
                  themeMode === "dark"
                    ? "border-white text-white hover:bg-white/10"
                    : "border-[#023247] text-[#023247] hover:bg-[#023247]/10"
                }`}
              >
                Login
              </Link>
              <Link
                to={"/sign-up"}
                onClick={toggleMenu}
                className="flex gap-2 items-center py-2 px-5 bg-[#2A8E9E] rounded-2xl text-white transition-colors hover:bg-[#247A88]"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="fixed flex justify-center gap-5 md:hidden bottom-8 left-4 right-4">
              <button
                onClick={handleLogout}
                className="px-5 py-2 text-white transition-colors bg-red-600 rounded-md hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {token ? (
        <div className="items-center hidden gap-5 md:flex">
          <button
            // onClick={handleThemeChange}
            className="p-2 rounded-full"
          >
            {/* {themeMode === "dark" ? (
              <Sun className="w-6 h-6 text-white" />
            ) : (
              <Moon className="w-6 h-6 text-[#023247]" />
            )} */}
            <label className="switch">
              <input
                type="checkbox"
                onClick={handleThemeChange}
                checked={themeMode == "dark" ? "darkTheme" : ""}
              />
              <span className="slider"></span>
            </label>
          </button>
          <CircleUserRound
            className={`w-9 h-9 cursor-pointer ${
              themeMode === "dark" ? "text-white" : "text-[#023247]"
            }`}
            onClick={userProfile}
          />
          <button
            onClick={handleLogout}
            className="px-5 py-2 text-white transition-colors bg-red-600 rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="z-50 items-center hidden gap-3 md:flex">
          <button
            // onClick={handleThemeChange}
            className="p-2 rounded-full"
          >
            {/* {themeMode === "dark" ? (
            <Sun className="w-6 h-6 text-white" />
          ) : (
            <Moon className="w-6 h-6 text-[#023247]" />
          )} */}
            <label className="switch">
              <input
                type="checkbox"
                onClick={handleThemeChange}
                checked={themeMode == "dark" ? "darkTheme" : ""}
              />
              <span className="slider"></span>
            </label>
          </button>
          <Link
            to={"/sign-in"}
            className={`flex gap-2 items-center border-2 rounded-2xl py-2 px-5 transition-colors ${
              themeMode === "dark"
                ? "border-white text-white hover:bg-white/10"
                : "border-[#023247] text-[#023247] hover:bg-[#023247]/10"
            }`}
          >
            Login
          </Link>
          <Link
            to={"/sign-up"}
            className="flex gap-2 items-center py-2 px-5 bg-[#2A8E9E] rounded-2xl text-white transition-colors hover:bg-[#247A88]"
          >
            Sign Up
          </Link>
        </div>
      )}

      {/* Mobile Auth Buttons */}
    </div>
  );
}

export default Navbar;
