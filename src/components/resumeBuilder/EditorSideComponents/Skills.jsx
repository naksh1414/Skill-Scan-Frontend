import { useState } from "react";
import { useResume } from "../../../context/useResume";

import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { Trash2 } from "lucide-react";
export default function Skills() {
  const { state, dispatch } = useResume();
  const [showSkills, setShowSkills] = useState(true); // Track visibility of skills sections

  const addSkillSection = () => {
    dispatch({
      type: "UPDATE_SKILLS",
      payload: [...state.skills, { skillTitle: "", skillList: "" }],
    });
  };

  const updateSkillTitle = (sectionIndex, title) => {
    const updatedSkills = state.skills.map((section, index) =>
      index === sectionIndex ? { ...section, skillTitle: title } : section
    );
    dispatch({
      type: "UPDATE_SKILLS",
      payload: updatedSkills,
    });
  };

  const updateSkills = (sectionIndex, skills) => {
    const updatedSkills = state.skills.map((section, index) =>
      index === sectionIndex ? { ...section, skillList: skills } : section
    );
    dispatch({
      type: "UPDATE_SKILLS",
      payload: updatedSkills,
    });
  };

  const removeSkillSection = (sectionIndex) => {
    const updatedSkills = state.skills.filter(
      (_, index) => index !== sectionIndex
    );
    dispatch({
      type: "UPDATE_SKILLS",
      payload: updatedSkills,
    });
  };

  return (
    <div className="space-y-6">
      {/* <div
        className="cursor-pointer text-xl font-bold flex justify-between items-center"
        onClick={() => setShowSkills(!showSkills)}
      >
        <span className="text-[#023247]">Skills Sections</span>
        <span>
          {showSkills ? (
            <ChevronUp className="text-[#023247]" />
          ) : (
            <ChevronDown className="text-[#023247]" />
          )}
        </span>
      </div> */}

      {showSkills && (
        <div className="mt-3 space-y-2">
          {state.skills.map((section, sectionIndex) => (
            <div key={sectionIndex} className="p-4  space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={section.skillTitle}
                  onChange={(e) =>
                    updateSkillTitle(sectionIndex, e.target.value)
                  }
                  placeholder="Section Title (e.g., Technical Skills, Languages)"
                  className="w-full p-2 border rounded-xl focus:outline-none focus:ring-[#2A8E9E] focus:border-[rgb(42,142,158)]"
                />
                <button
                  onClick={() => removeSkillSection(sectionIndex)}
                  className="px-2 py-1 text-red-600 border border-red-600 rounded"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-2">
                <input
                  type="text"
                  value={section.skillList}
                  onChange={(e) => updateSkills(sectionIndex, e.target.value)}
                  placeholder="Enter skills separated by commas (e.g., JavaScript, React, Node.js)"
                  className="w-full p-2 border rounded-xl focus:outline-none focus:ring-[#2A8E9E] focus:border-[rgb(42,142,158)]"
                />
              </div>
            </div>
          ))}
          <button
            onClick={addSkillSection}
            className="px-4 py-2 text-[#023247] rounded flex gap-1 items-center font-medium"
          >
            Add Skill Section <CirclePlus className="w-7 h-7" />
          </button>
        </div>
      )}
    </div>
  );
}
