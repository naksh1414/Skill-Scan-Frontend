import Education from "./components/Education";
import Experience from "./components/Experience";
import Honors from "./components/Honors";
import PersonalInfo from "./components/PersonalInfo";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import DownloadButton from "../../DownloadButton";
import { useRef, useState } from "react";
import TemplateSelector from "../../TemplateSelector";
import { useResume } from "../../../context/useResume";
import axios from "axios";
import { user } from "../../../apis/ApiRoutes";
import { Link } from "react-router-dom";
import SearchJobs from "../../SearchJobs";
function Template4() {
  const resumeRef = useRef(null);
  const { state } = useResume();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const token = localStorage.getItem("token");
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${user}/update-resume-data`,
        { resumeData: state },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.setItem("resumeData", JSON.stringify(state));
      alert("Resume saved successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Failed to save resume:", error);
      alert("Failed to save resume. Please try again.");
    }
  };
  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="min-h-screen">
      <div
        className={`flex flex-col md:flex-row justify-center items-center md:items-end gap-4 md:gap-8 my-5 transition-all duration-300 no-prnt order-1`}
      >
        <TemplateSelector />
        <DownloadButton resumeRef={resumeRef} />
        {token && (
          <button
            onClick={handleSave}
            className="flex items-center justify-center gap-2 px-4 py-2 font-medium text-white bg-[#2A8E9E] hover:bg-[#1f6d7a] rounded-lg  disabled:bg-[#2A8E9E]/70"
          >
            Save Resume Data
          </button>
        )}
        <button
          onClick={handlePopupOpen}
          className="flex items-center justify-center gap-2 px-4 py-2 font-medium text-white bg-[#2A8E9E] hover:bg-[#1f6d7a] rounded-lg"
        >
          Convert to QR
        </button>
      </div>

      <div className=" shadow-lg w-full overflow-scroll lg:overflow-hidden sbar  order-2 ">
        <div
          ref={resumeRef}
          className="min-w-[210mm] min-h-[297mm] mx-auto bg-white p-8"
          style={{
            minHeight: "297mm",
          }}
          id="prnt"
        >
          <PersonalInfo />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Honors />
        </div>
      </div>

      <SearchJobs style={"flex md:hidden order-3  mt-10"} />

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">
              Steps to Generate QR Code
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <p className="flex items-center gap-2">
                1. Download the resume. <DownloadButton resumeRef={resumeRef} />
              </p>
              <p>2. Upload it to your drive.</p>
              <p>
                3. Go to{" "}
                <Link className="text-[#2A8E9E] font-bold" to={"/qr-generator"}>
                  QR generator
                </Link>
                , then paste the link and download your QR.
              </p>
            </ol>
            <button
              onClick={handlePopupClose}
              className="mt-4 px-4 py-2 bg-[#2A8E9E] text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Template4;
