// import React from "react";
import { ArrowUpRight } from "lucide-react";
const ResultsSection = ({ results, tryAnother }) => {
  console.log("Received results:", results);
  
  if (!results) return null;
  const {
    "ATS Score Breakdown": scoreBreakdown,
    "Final Recommendations": recommendations,
    "Final ATS Score": finalScore,
  } = results;

  return (
    <div className="result-section">
      <div className="flex flex-col items-start justify-center md:flex-row">
        <div className="final-score w-full md:w-[40%] flex flex-col justify-center mb-16 md:mb-0">
          <h2 className="text-[#2A8E9E] text-lg font-semibold">ATS Score</h2>
          <div className="flex items-center justify-center w-full">
            <div className="relative w-48 h-48 mt-8 text-center md:mt-16">
              {/* <svg
                className="mb-2 transform -rotate-90"
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#e5e7eb"
                  strokeWidth="4"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#0d9488"
                  strokeWidth="4"
                  strokeDasharray="282.6"
                  strokeDashoffset={282.6 - (finalScore?.Score / 100) * 282.6}
                  fill="none"
                  strokeLinecap="round"
                />
              </svg> */}
              <div className="absolute inset-0 flex flex-col items-center justify-center mt-2">
                <span className="text-5xl font-bold text-[#023247] text-center">
                  {finalScore}
                </span>
              </div>
              <span className="text-lg font-semibold text-[#023247] text-center">
                Overall Score
              </span>
            </div>
          </div>
        </div>

        <div className="ats-score-breakdown w-full md:w-[60%]">
          <h2 className="text-[#2A8E9E] text-lg font-semibold mb-4">
            Score Breakdown
          </h2>
          <div className="">
            {Object.entries(scoreBreakdown).map(([label, score], index) => (
              <div key={index} className="score-item">
                <div className="flex justify-between items-center text-sm mb-1 w-[50%]">
                  <span className="text-gray-700">{label}</span>
                  <span className="mx-3 text-gray-700">{score}</span>
                </div>
                <div className=" h-2 flex items-center bg-gray-200 rounded w-[50%]">
                  <div
                    className="h-2 bg-teal-600 rounded"
                    style={{ width: `${score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 recommendations">
        <h2 className="text-[#2A8E9E] text-lg font-semibold mb-4">
          Recommendations
        </h2>
        <div className="space-y-4">
          {Object.entries(recommendations).map(
            ([title, recommendation], index) => (
              <div key={index} className="recommendation-item">
                <div className="text-[#023247] font-semibold">{title}</div>
                <p className="text-gray-600">{recommendation}</p>
              </div>
            )
          )}
        </div>
      </div>
      <button
        onClick={tryAnother}
        className="px-4 py-3 bg-[#2A8E9E] hover:bg-[#1f6d7a] text-white rounded-xl shadow-md flex gap-2 items-center mt-8"
      >
        Try Another <ArrowUpRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ResultsSection;
