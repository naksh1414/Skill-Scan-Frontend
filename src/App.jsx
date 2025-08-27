import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ResumeBuilder from "./pages/ResumeBuilder";
import { ResumeProvider } from "./context/ResumeProvider";

import QRGenerator from "./pages/QRGenerator";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Jobs from "./pages/Jobs";
import Admin from "./pages/Admin";
import Blogs from "./pages/Blogs";
import StudyResourcesPage from "./components/StudyResources/StudyResourcesPage";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
// import ATSScore from "./pages/ATSScore";
import SingleBlog from "./pages/SingleBlog";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import AboutUs from "./pages/AboutUs";

import { HelmetProvider } from "react-helmet-async";

import SingleJob from "./pages/SingleJob";

import ATSHome from "./components/ATS/ATSHome";
function App() {
  const [themeMode, setThemeMode] = useState("dark");

  const lightTheme = () => {
    setThemeMode("light");
    localStorage.setItem("theme", "light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
    localStorage.setItem("theme", "dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    if (localStorage.getItem("theme")) {
      setThemeMode(localStorage.getItem("theme"));
      document.querySelector("html").classList.add(themeMode);
    } else {
      localStorage.setItem("theme", themeMode);
      document.querySelector("html").classList.add(themeMode);
    }
  }, [themeMode]);
  return (
    <Router>
      <ResumeProvider>
        <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
          <HelmetProvider>
            <ToastContainer />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/forget-password" element={<ForgetPassword />} />
              <Route
                path="/reset-password/:id/:token"
                element={<ResetPassword />}
              />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/resume-builder" element={<ResumeBuilder />} />
              <Route path="/qr-generator" element={<QRGenerator />} />
              <Route path="/resume-ats-score" element={<ATSHome />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:slug" element={<SingleBlog />} />
              <Route path="/jobs/:id" element={<SingleJob />} />
              <Route path="/u/:profileId" element={<Profile />} />
              <Route path="/study-resources" element={<StudyResourcesPage />} />
            </Routes>
            <Footer />
          </HelmetProvider>
        </ThemeProvider>
      </ResumeProvider>
    </Router>
  );
}

export default App;
