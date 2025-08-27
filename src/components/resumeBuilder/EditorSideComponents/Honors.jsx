import { useState } from "react";
import { useResume } from "../../../context/useResume";
// import { ChevronDown } from "lucide-react";
// import { ChevronUp } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { Trash2 } from "lucide-react";
export default function Honors() {
  const { state, dispatch } = useResume();
  const [newHonor, setNewHonor] = useState("");
  const [showHonors, setShowHonors] = useState(true); // Track visibility of honors section

  const handleAdd = () => {
    if (newHonor.trim()) {
      dispatch({
        type: "ADD_HONOR",
        payload: {
          text: newHonor.trim(),
        },
      });
      setNewHonor("");
    }
  };

  const handleDelete = (index) => {
    dispatch({
      type: "DELETE_HONOR",
      payload: index,
    });
  };

  return (
    <div className="space-y-4">
      {/* <div
        className="cursor-pointer text-xl font-bold flex justify-between items-center"
        onClick={() => setShowHonors(!showHonors)}
      >
        <span className="text-[#023247]">Honors & Awards</span>
        <span>
          {showHonors ? (
            <ChevronUp className="text-[#023247]" />
          ) : (
            <ChevronDown className="text-[#023247]" />
          )}
        </span>
      </div> */}

      {showHonors && (
        <div className="mt-3 space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={newHonor}
              onChange={(e) => setNewHonor(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAdd()}
              placeholder="Add honor or award"
              className="w-full p-2 border rounded-xl focus:outline-none focus:ring-[#2A8E9E] focus:border-[rgb(42,142,158)]"
            />
            <button onClick={handleAdd} className="px-2 py-2 text-[#023247] ">
              <CirclePlus className="w-8 h-8" />
            </button>
          </div>

          <div className="space-y-2">
            {state.honors.map((honor, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-2 border rounded"
              >
                <span>{honor.text}</span>
                <button
                  onClick={() => handleDelete(index)}
                  className="px-2 py-1 text-sm text-red-600"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
