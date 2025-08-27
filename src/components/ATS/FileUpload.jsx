import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { ArrowUpRight } from "lucide-react";

const FileUpload = ({ onSubmit }) => {
  const [targetRole, setTargetRole] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("No file selected");
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.type === "application/pdf") {
        setSelectedFile(file);
        setFileName(file.name);
      } else {
        alert("Please select a PDF file");
        e.target.value = null;
        setSelectedFile(null);
        setFileName("No file selected");
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type === "application/pdf") {
        setSelectedFile(file);
        setFileName(file.name);
      } else {
        alert("Please select a PDF file");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!targetRole.trim()) {
      alert("Please enter a target role");
      return;
    }

    if (!selectedFile) {
      alert("Please select a resume file");
      return;
    }

    onSubmit(targetRole, selectedFile);
  };

  const handleFileUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="upload-section w-full mb-5 md:mb-16">
      <form
        id="resume-form"
        className="flex flex-col md:flex-row gap-5"
        onSubmit={handleSubmit}
      >
        <div className="form-group md:w-1/2">
          <label
            htmlFor="resume-upload"
            className="text-[#2A8E9E] text-lg font-bold"
          >
            Upload Your Resume (PDF)
          </label>
          <div
            className="file-upload h-full"
            onClick={handleFileUploadClick}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <FontAwesomeIcon
              icon={faFileUpload}
              size="2x"
              className="upload-icon text-[#2A8E9E]"
            />
            <div className="upload-text">
              Drag and drop your resume here, or click to browse
            </div>
            <input
              type="file"
              id="resume-file"
              ref={fileInputRef}
              accept=".pdf"
              onChange={handleFileChange}
              style={{ display: "none" }}
              required
            />
            <div className="file-name">{fileName}</div>
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col items-center">
          <div className="form-group w-full mb-5">
            <label
              htmlFor="target-role"
              className="text-[#2A8E9E] text-lg font-bold"
            >
              Target Role
            </label>
            <input
              type="text"
              id="target-role"
              placeholder="E.g., Data Scientist, Software Engineer, Marketing Manager"
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="px-4 py-3 bg-[#2A8E9E] hover:bg-[#1f6d7a] text-white rounded-xl shadow-md flex gap-2 items-center"
          >
            Evaluate Resume <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default FileUpload;
