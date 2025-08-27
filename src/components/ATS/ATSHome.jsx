import { useState } from "react";
import FileUpload from "./FileUpload";
import ResultsSection from "./ResultsSection";
import LoadingSpinner from "./LoadingSpinner";
import { evaluateResume } from "./evaluationService";
import "./style.css";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";
import heroBG from "../../assets/HomePage/hero-section-bg.png";
// Manually set workerSrc to CDN (make sure version matches your installed version)
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

function ATSHome() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (targetRole, resumeFile) => {
    try {
      setLoading(true);
      setError(null);
      setResults(null);

      // Extract text from PDF
      const resumeText = await extractTextFromPDF(resumeFile);

      // Send to evaluation service
      const evaluationResults = await evaluateResume(resumeText, targetRole);

      setResults(evaluationResults);
    } catch (err) {
      console.error("Error processing resume:", err);
      setError(err.message || "An error occurred while processing your resume");
    } finally {
      setLoading(false);
    }
  };

  const extractTextFromPDF = async (pdfFile) => {
    try {
      const fileReader = new FileReader();

      return new Promise((resolve, reject) => {
        fileReader.onload = async (event) => {
          try {
            const typedArray = new Uint8Array(event.target.result);
            const loadingTask = pdfjsLib.getDocument({ data: typedArray });
            const pdf = await loadingTask.promise;

            let fullText = "";

            for (let i = 1; i <= pdf.numPages; i++) {
              const page = await pdf.getPage(i);
              const textContent = await page.getTextContent();
              const textItems = textContent.items.map((item) => item.str);
              fullText += textItems.join(" ") + "\n";
            }

            resolve(fullText.trim());
          } catch (err) {
            reject(new Error("Failed to extract text from PDF"));
          }
        };

        fileReader.onerror = () => {
          reject(new Error("Failed to read file"));
        };

        fileReader.readAsArrayBuffer(pdfFile);
      });
    } catch (err) {
      throw new Error("Failed to process PDF");
    }
  };

  const tryAnother = () => {
    setResults();
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen py-10 px-5 flex flex-col items-center bg-[#f5f9f9] dark:bg-[#023247]">
      <img
        src={heroBG}
        className="absolute top-0 right-0 h-[90vh]  pointer-events-none"
        alt=""
      />

      <div className="w-4/5 md:pl-14 lg:pl-20">
        <h2 className="text-4xl text-center dark:text-white/90 md:text-start">
          Resume
          <span className="font-bold"> ATS Evaluator</span>
        </h2>
        <p className="md:w-[90%] text-black/70 dark:text-white/70 mt-3  text-center md:text-start">
          Upload your resume and get a detailed ATS compatibility score for your
          target role
        </p>
      </div>
      <div className="flex flex-col md:flex-col rounded-3xl shadow-lg p-4 md:p-10 lg:p-14 items-center md:items-center justify-around bg-white z-[90] md:w-4/5 mt-10 min-h-[60vh]">
        {!results && <FileUpload onSubmit={handleSubmit} />}
        {loading && <LoadingSpinner />}
        {error && (
          <div className="text-black error-message">
            <p>{error}</p>
          </div>
        )}
        {results && (
          <ResultsSection results={results} tryAnother={tryAnother} />
        )}
      </div>
    </div>
  );
}

export default ATSHome;
