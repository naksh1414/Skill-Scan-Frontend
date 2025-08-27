import { useState } from "react";
import { useResume } from "../../../context/useResume";
// import { ChevronDown } from "lucide-react";
// import { ChevronUp } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { Trash2 } from "lucide-react";
export default function Projects() {
  const { state, dispatch } = useResume();
  const [showProjects, setShowProjects] = useState(true); // Track visibility of project sections

  const handleAdd = () => {
    dispatch({
      type: "ADD_PROJECT",
      payload: {
        title: "",
        description: [""],
        technologies: [],
        link: "",
      },
    });
  };

  const handleUpdate = (index, field, value) => {
    const updatedProject = { ...state.projects[index], [field]: value };
    if (field === "technologies") {
      updatedProject.technologies = value.split(",").map((tech) => tech.trim());
    }
    dispatch({
      type: "UPDATE_PROJECT",
      payload: { index, data: updatedProject },
    });
  };

  const handleDelete = (index) => {
    dispatch({
      type: "DELETE_PROJECT",
      payload: index,
    });
  };

  const addPoint = (projectIndex) => {
    const updatedPoints = [...state.projects[projectIndex].description, ""];
    handleUpdate(projectIndex, "description", updatedPoints);
  };

  const removePoint = (projectIndex, pointIndex) => {
    const updatedPoints = state.projects[projectIndex].description.filter(
      (_, index) => index !== pointIndex
    );
    handleUpdate(projectIndex, "description", updatedPoints);
  };

  const updatePoint = (projectIndex, pointIndex, value) => {
    const updatedPoints = [...state.projects[projectIndex].description];
    updatedPoints[pointIndex] = value;
    handleUpdate(projectIndex, "description", updatedPoints);
  };

  return (
    <div className="space-y-4">
      {/* <div
        className="cursor-pointer text-xl font-bold flex justify-between items-center"
        onClick={() => setShowProjects(!showProjects)}
      >
        <span className="text-[#023247]">Projects</span>
        <span>
          {showProjects ? (
            <ChevronUp className="text-[#023247]" />
          ) : (
            <ChevronDown className="text-[#023247]" />
          )}
        </span>
      </div> */}

      {showProjects && (
        <div className="mt-3 space-y-4">
          {state.projects.map((project, projectIndex) => (
            <div key={projectIndex} className="p-4 border rounded space-y-3">
              <div className="flex justify-between items-center">
                <h2 className="text-[#023247] text-lg font-semibold underline">
                  Project {projectIndex + 1}
                </h2>
                <button
                  onClick={() => handleDelete(projectIndex)}
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
                  Project Title
                </label>
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) =>
                    handleUpdate(projectIndex, "title", e.target.value)
                  }
                  placeholder="Project Title"
                  className="w-full p-2 border rounded-xl focus:outline-none focus:ring-[#2A8E9E] focus:border-[rgb(42,142,158)]"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-[#2A8E9E]"
                >
                  Technologies (comma separated)
                </label>
                <input
                  type="text"
                  value={project.technologies.join(", ")}
                  onChange={(e) =>
                    handleUpdate(projectIndex, "technologies", e.target.value)
                  }
                  placeholder="Technologies (comma separated)"
                  className="w-full p-2 border rounded-xl focus:outline-none focus:ring-[#2A8E9E] focus:border-[rgb(42,142,158)]"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-[#2A8E9E]"
                >
                  Link
                </label>
                <input
                  type="url"
                  value={project.link}
                  onChange={(e) =>
                    handleUpdate(projectIndex, "link", e.target.value)
                  }
                  placeholder="Project Link"
                  className="w-full p-2 border rounded-xl focus:outline-none focus:ring-[#2A8E9E] focus:border-[rgb(42,142,158)]"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="font-medium">Project Details</label>
                  <button
                    onClick={() => addPoint(projectIndex)}
                    className="px-2 py-1 text-sm text-[#023247]"
                  >
                    <CirclePlus className="w-7 h-7" />
                  </button>
                </div>
                {project.description.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex gap-2 items-start">
                    <span className="mt-3">•</span>
                    <textarea
                      type="text"
                      value={point}
                      onChange={(e) =>
                        updatePoint(projectIndex, pointIndex, e.target.value)
                      }
                      placeholder="Enter project detail"
                      className="w-full p-2 border rounded-xl focus:outline-none focus:ring-[#2A8E9E] focus:border-[rgb(42,142,158)] sbar"
                      rows="4"
                    />
                    <button
                      onClick={() => removePoint(projectIndex, pointIndex)}
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
            Add Project <CirclePlus className="w-7 h-7" />
          </button>
        </div>
      )}
    </div>
  );
}
