// src/components/TemplateSelector.jsx
import { useResume } from "../context/useResume";
import { useState } from "react";
import temp1 from "../assets/templates/Resume_1_page-0001.jpg";
import temp2 from "../assets/templates/Resume_2_page-0001.jpg";
import temp3 from "../assets/templates/Resume_3_page-0001.jpg";
import temp4 from "../assets/templates/Resume_4_page-0001.jpg";
import temp5 from "../assets/templates/Resume_5_page-0001.jpg";
import temp6 from "../assets/templates/Resume_6_page-0001.jpg";
import temp7 from "../assets/templates/temp7.jpg";
import temp8 from "../assets/templates/temp8.jpg";
export default function TemplateSelector() {
  const { state, dispatch } = useResume();
  const [isOpen, setIsOpen] = useState(false);

  const templates = [
    { id: 1, name: "Professional", image: temp1 },
    { id: 2, name: "Modern", image: temp2 },
    { id: 3, name: "Creative", image: temp3 },
    { id: 4, name: "Minimal", image: temp4 },
    { id: 5, name: "Classic", image: temp5 },
    { id: 6, name: "Contemporary", image: temp6 },
    { id: 7, name: "Horizon", image: temp7 },
    { id: 8, name: "Stride", image: temp8 },
  ];

  const handleTemplateChange = (templateId) => {
    dispatch({
      type: "UPDATE_TEMPLATE",
      payload: templateId,
    });
    setIsOpen(false);
  };

  return (
    <div className="relative w-full md:w-80">
      <h3 className="text-md font-bold text-[#023247] dark:text-[#2A8E9E]">
        Choose a Template
      </h3>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 w-full bg-white border border-[#023247] rounded-lg shadow-sm focus:ring-2 cursor-pointer text-[#023247] flex items-center justify-between"
      >
        <span>
          {state.template
            ? templates.find((t) => t.id === parseInt(state.template))?.name
            : "Select Template"}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 md:w-[800px] mt-2 bg-[#023247] border border-gray-200 rounded-lg shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {templates.map((template) => (
              <div
                key={template.id}
                onClick={() => handleTemplateChange(template.id)}
                className={`cursor-pointer rounded-lg p-2 flex flex-col justify-between hover:bg-gray-50 group ${
                  parseInt(state.template) === template.id
                    ? "ring-2 ring-[#023247]"
                    : ""
                }`}
              >
                <img
                  src={template.image}
                  alt={template.name}
                  className="h-full object-contain rounded-lg mb-2"
                  style={{
                    imageRendering: "crisp-edges",
                    maxHeight: "300px",
                  }}
                  loading="eager"
                />
                <p className="text-center text-sm font-medium text-white/90 group-hover:text-[#023247]">
                  {template.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
