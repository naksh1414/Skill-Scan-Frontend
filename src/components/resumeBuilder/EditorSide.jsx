import { useState } from "react";
import PersonalInfo from "./EditorSideComponents/PersonalInfo";
import Education from "./EditorSideComponents/Education";
import Experience from "./EditorSideComponents/Experience";
import Skills from "./EditorSideComponents/Skills";
import Projects from "./EditorSideComponents/Projects";
import Honors from "./EditorSideComponents/Honors";
import { useNavigate } from "react-router-dom";
import SearchJobs from "./../SearchJobs";

function EditorSide() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { title: "Personal Info", component: <PersonalInfo /> },
    { title: "Skills", component: <Skills /> },
    { title: "Experience", component: <Experience /> },
    { title: "Projects", component: <Projects /> },
    { title: "Education", component: <Education /> },
    { title: "Honors & Awards", component: <Honors /> },
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col no-prnt">
      <div className="w-full bg-[#f5f9f9] mx-auto p-4 space-y-8 h-[65vh] md:h-[80vh] overflow-scroll sbar shadow-md rounded-2xl mb-10 no-prnt">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{steps[currentStep].title}</h2>
          <div className="text-sm text-gray-500">
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>

        {steps[currentStep].component}

        <div className="flex justify-between mt-6">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`px-4 py-2 rounded-lg ${
              currentStep === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#2A8E9E] text-white hover:bg-[#247A88]"
            }`}
          >
            Back
          </button>
          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className={`px-4 py-2 rounded-lg ${
              currentStep === steps.length - 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#2A8E9E] text-white hover:bg-[#247A88]"
            }`}
          >
            Next
          </button>
        </div>
      </div>
      <SearchJobs style={"hidden md:flex no-prnt"} />
    </div>
  );
}

export default EditorSide;
