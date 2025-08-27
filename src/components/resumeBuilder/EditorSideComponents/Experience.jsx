import { useState } from "react";
import { useResume } from "../../../context/useResume";
// import { ChevronDown } from "lucide-react";
// import { ChevronUp } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { Trash2 } from "lucide-react";
export default function Experience() {
  const { state, dispatch } = useResume();
  const [showExperience, setShowExperience] = useState(true); // Track visibility of experience sections

  const handleAdd = () => {
    dispatch({
      type: "ADD_EXPERIENCE",
      payload: {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        isPresent: false,
        description: [""],
      },
    });
  };

  const handleUpdate = (index, field, value) => {
    const updatedExperience = { ...state.experience[index], [field]: value };
    dispatch({
      type: "UPDATE_EXPERIENCE",
      payload: { index, data: updatedExperience },
    });
  };

  const togglePresent = (index) => {
    const exp = state.experience[index];
    const updatedExperience = {
      ...exp,
      isPresent: !exp.isPresent,
      endDate: !exp.isPresent ? "" : exp.endDate,
    };
    dispatch({
      type: "UPDATE_EXPERIENCE",
      payload: { index, data: updatedExperience },
    });
  };

  const handleDelete = (index) => {
    dispatch({
      type: "DELETE_EXPERIENCE",
      payload: index,
    });
  };

  const addPoint = (expIndex) => {
    const updatedPoints = [...state.experience[expIndex].description, ""];
    handleUpdate(expIndex, "description", updatedPoints);
  };

  const removePoint = (expIndex, pointIndex) => {
    const updatedPoints = state.experience[expIndex].description.filter(
      (_, index) => index !== pointIndex
    );
    handleUpdate(expIndex, "description", updatedPoints);
  };

  const updatePoint = (expIndex, pointIndex, value) => {
    const updatedPoints = [...state.experience[expIndex].description];
    updatedPoints[pointIndex] = value;
    handleUpdate(expIndex, "description", updatedPoints);
  };

  return (
    <div className="space-y-4">
      {/* <div
        className="cursor-pointer text-xl font-bold flex justify-between items-center"
        onClick={() => setShowExperience(!showExperience)}
      >
        <span className="text-[#023247]">Experience</span>
        <span>
          {showExperience ? (
            <ChevronUp className="text-[#023247]" />
          ) : (
            <ChevronDown className="text-[#023247]" />
          )}
        </span>
      </div> */}

      {showExperience && (
        <div className="mt-3 space-y-4">
          {state.experience.map((exp, expIndex) => (
            <div key={expIndex} className="p-4 border rounded space-y-3">
              <div className="flex justify-between items-center">
                <h2 className="text-[#023247] text-lg font-semibold underline">
                  Company {expIndex + 1}
                </h2>
                <button
                  onClick={() => handleDelete(expIndex)}
                  className="px-4 py-2 text-red-600 "
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
              <div className="w-full">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-[#2A8E9E]"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) =>
                    handleUpdate(expIndex, "company", e.target.value)
                  }
                  placeholder="Company"
                  className="w-full p-2 border rounded-xl focus:outline-none focus:ring-[#2A8E9E] focus:border-[rgb(42,142,158)]"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-[#2A8E9E]"
                >
                  Position
                </label>
                <input
                  type="text"
                  value={exp.position}
                  onChange={(e) =>
                    handleUpdate(expIndex, "position", e.target.value)
                  }
                  placeholder="Position"
                  className="w-full p-2 border rounded-xl focus:outline-none focus:ring-[#2A8E9E] focus:border-[rgb(42,142,158)]"
                />
              </div>
              <div className="flex gap-2 w-full">
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="block text-sm font-medium text-[#2A8E9E]"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={exp.startDate}
                    onChange={(e) =>
                      handleUpdate(expIndex, "startDate", e.target.value)
                    }
                    className=" p-2 border rounded-xl focus:outline-none focus:ring-[#2A8E9E] focus:border-[rgb(42,142,158)]"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="block text-sm font-medium text-[#2A8E9E]"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    value={exp.endDate}
                    onChange={(e) =>
                      handleUpdate(expIndex, "endDate", e.target.value)
                    }
                    disabled={exp.isPresent}
                    className={`p-2 border rounded-xl focus:outline-none focus:ring-[#2A8E9E] focus:border-[rgb(42,142,158)] ${
                      exp.isPresent ? "bg-gray-100" : ""
                    }`}
                  />
                </div>
              </div>
              <label className="flex items-center gap-1 w-full justify-end">
                <input
                  type="checkbox"
                  checked={exp.isPresent}
                  onChange={() => togglePresent(expIndex)}
                  className="rounded"
                />
                Present
              </label>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="font-medium">
                    Responsibilities & Achievements
                  </label>
                  <button
                    onClick={() => addPoint(expIndex)}
                    className="px-2 py-1 text-sm text-[#023247]"
                  >
                    <CirclePlus className="w-7 h-7" />
                  </button>
                </div>
                {exp.description.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex gap-2 items-center">
                    <span className="mt-3">•</span>
                    <textarea
                      type="text"
                      value={point}
                      onChange={(e) =>
                        updatePoint(expIndex, pointIndex, e.target.value)
                      }
                      placeholder="Enter responsibility or achievement"
                      className="w-full p-2 border rounded-xl focus:outline-none focus:ring-[#2A8E9E] focus:border-[rgb(42,142,158)] sbar"
                      rows="4"
                    />

                    <button
                      onClick={() => removePoint(expIndex, pointIndex)}
                      className="px-2 py-1 text-sm text-red-600"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={handleAdd}
            className="px-4 py-2 text-[#023247] rounded flex gap-1 items-center font-medium"
          >
            Add Experience <CirclePlus className="w-7 h-7" />
          </button>
        </div>
      )}
    </div>
  );
}
