// import { useState } from "react";
// import PropTypes from "prop-types";

// export default function DownloadButton({ resumeRef }) {
//   const [isLoading, setIsLoading] = useState(false);

//   const handleDownload = async () => {
//     if (!resumeRef.current) return;

//     setIsLoading(true);
//     try {
//       const originalTitle = document.title;
//       document.title = `Resume_${Date.now()}`;

//       // Add print-specific styles
//       const style = document.createElement("style");
//       style.innerHTML = `
//         @page {
//           size: A4;
//           margin: 0;
//         }
//         @media print {
//           html, body {
//             width: 210mm;
//             height: 297mm;
//             margin: 0;
//             padding: 0;
//           }
//           body * {
//             visibility: hidden;
//           }
//           #resume-content, #resume-content * {
//             visibility: visible;
//           }
//           #resume-content {
//             position: absolute;
//             left: 0;
//             top: 0;
//             width: 100%;
//             height: 100%;
//             margin: 0;
//             padding: 5mm;
//             box-sizing: border-box;
//           }
//           /* Force background colors to print */
//           * {
//             -webkit-print-color-adjust: exact !important;
//             print-color-adjust: exact !important;
//           }
//           /* Prevent page breaks inside elements */
//          /* #resume-content > div {
//             page-break-inside: avoid;
//             break-inside: avoid;
//           }*/

//         }
//       `;
//       document.head.appendChild(style);

//       // Add ID to resume content and ensure full visibility
//       resumeRef.current.id = "resume-content";
//       resumeRef.current.style.overflow = "visible";
//       resumeRef.current.style.height = "auto";

//       // Trigger print
//       window.print();

//       // Cleanup
//       document.title = originalTitle;
//       document.head.removeChild(style);
//       resumeRef.current.id = "";
//       resumeRef.current.style.overflow = "";
//       resumeRef.current.style.height = "";
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//       alert("Failed to generate PDF. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <button
//       onClick={handleDownload}
//       disabled={isLoading}
//       className={`flex items-center justify-center gap-2 px-4 py-2 font-medium text-white bg-[#2A8E9E] rounded-lg  disabled:bg-[#2A8E9E]/70 ${
//         isLoading ? "cursor-not-allowed" : "cursor-pointer"
//       }`}
//     >
//       {isLoading ? (
//         <>
//           <svg
//             className="w-5 h-5 animate-spin"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//           >
//             <circle
//               className="opacity-25"
//               cx="12"
//               cy="12"
//               r="10"
//               stroke="currentColor"
//               strokeWidth="4"
//             />
//             <path
//               className="opacity-75"
//               fill="currentColor"
//               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
//             />
//           </svg>
//           Processing...
//         </>
//       ) : (
//         <>
//           <svg
//             className="w-5 h-5"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
//             />
//           </svg>
//           Download PDF
//         </>
//       )}
//     </button>
//   );
// }

// DownloadButton.propTypes = {
//   resumeRef: PropTypes.shape({
//     current: PropTypes.any,
//   }).isRequired,
// };

import { useState } from "react";
import PropTypes from "prop-types";

export default function DownloadButton({ resumeRef }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    if (!resumeRef.current) return;

    setIsLoading(true);
    try {
      // Trigger print
      window.print();
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isLoading}
      className={`flex items-center justify-center gap-2 px-4 py-2 font-medium text-white bg-[#2A8E9E] hover:bg-[#1f6d7a] rounded-lg  disabled:bg-[#2A8E9E]/70 ${
        isLoading ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      {isLoading ? (
        <>
          <svg
            className="w-5 h-5 animate-spin"
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
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Processing...
        </>
      ) : (
        <>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download PDF
        </>
      )}
    </button>
  );
}

DownloadButton.propTypes = {
  resumeRef: PropTypes.shape({
    current: PropTypes.any,
  }).isRequired,
};
