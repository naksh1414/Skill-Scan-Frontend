import { useState } from "react";
import { useResume } from "../../../context/useResume";
// import { ChevronDown } from "lucide-react";
// import { ChevronUp } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { Trash2 } from "lucide-react";
export default function Education() {
  const { state, dispatch } = useResume();
  const [showEducation, setShowEducation] = useState(true); // Track visibility of education section

  const handleAdd = () => {
    dispatch({
      type: "ADD_EDUCATION",
      payload: {
        school: "",
        degree: "",
        fieldOfStudy: "",
        cgpa: "",
        startDate: "",
        endDate: "",
      },
    });
  };

  const handleUpdate = (index, field, value) => {
    const updatedEducation = { ...state.education[index], [field]: value };
    dispatch({
      type: "UPDATE_EDUCATION",
      payload: { index, data: updatedEducation },
    });
  };

  const handleDelete = (index) => {
    dispatch({
      type: "DELETE_EDUCATION",
      payload: index,
    });
  };

  return (
    <div className="space-y-4">
      {/* <div
        className="cursor-pointer text-xl font-bold flex justify-between items-center"
        onClick={() => setShowEducation(!showEducation)}
      >
        <span className="text-[#023247]">Education</span>
        <span>
          {showEducation ? (
            <ChevronUp className="text-[#023247]" />
          ) : (
            <ChevronDown className="text-[#023247]" />
          )}
        </span>
      </div> */}

      {showEducation && (
        <div className="mt-3 space-y-4">
          {state.education.map((edu, eduIndex) => (
            <div key={eduIndex} className="p-4 border rounded space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-[#023247] text-lg font-semibold underline">
                  Education {eduIndex + 1}
                </h2>
                <button
                  onClick={() => handleDelete(eduIndex)}
                  className="px-4 py-2 text-red-600"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
              <div className="w-full">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-[#2A8E9E]"
                >
                  School/College/University
                </label>
                <input
                  type="text"
                  value={edu.school}
                  onChange={(e) =>
                    handleUpdate(eduIndex, "school", e.target.value)
                  }
                  placeholder="School/College/University"
                  className="w-full p-2 border rounded-xl focus:outline-none focus:ring-[#2A8E9E] focus:border-[rgb(42,142,158)]"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-[#2A8E9E]"
                >
                  Course
                </label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) =>
                    handleUpdate(eduIndex, "degree", e.target.value)
                  }
                  placeholder="Degree"
                  className="w-full p-2 border rounded-xl focus:outline-none focus:ring-[#2A8E9E] focus:border-[rgb(42,142,158)]"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-[#2A8E9E]"
                >
                  CGPA/Percentage
                </label>
                <input
                  type="text"
                  value={edu.cgpa}
                  onChange={(e) =>
                    handleUpdate(eduIndex, "cgpa", e.target.value)
                  }
                  placeholder="CGPA/Percentage"
                  className="w-full p-2 border rounded-xl focus:outline-none focus:ring-[#2A8E9E] focus:border-[rgb(42,142,158)]"
                />
              </div>
              <div className="flex gap-2">
                <div className="w-full">
                  <label
                    htmlFor=""
                    className="block text-sm font-medium text-[#2A8E9E]"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={edu.startDate}
                    onChange={(e) =>
                      handleUpdate(eduIndex, "startDate", e.target.value)
                    }
                    className="w-full p-2 border rounded-xl focus:outline-none focus:ring-[#2A8E9E] focus:border-[rgb(42,142,158)]"
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
                    value={edu.endDate}
                    onChange={(e) =>
                      handleUpdate(eduIndex, "endDate", e.target.value)
                    }
                    className="w-full p-2 border rounded-xl focus:outline-none focus:ring-[#2A8E9E] focus:border-[rgb(42,142,158)]"
                  />
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={handleAdd}
            className="px-4 py-2 text-[#023247] rounded flex gap-1 items-center font-medium"
          >
            Add Education <CirclePlus className="w-7 h-7" />
          </button>
        </div>
      )}
    </div>
  );
}
