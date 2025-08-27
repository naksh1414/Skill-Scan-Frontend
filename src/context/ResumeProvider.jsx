import { useEffect, useReducer } from "react";
import { ResumeContext } from "./resumeContext";
import { initialState, resumeReducer } from "./state";

export function ResumeProvider({ children }) {
  const [state, dispatch] = useReducer(resumeReducer, initialState);
  useEffect(() => {
    const savedResumeData = localStorage.getItem("resumeData");
    if (savedResumeData) {
      dispatch({
        type: "LOAD_SAVED_STATE",
        payload: JSON.parse(savedResumeData),
      });
    }
  }, []);
  return (
    <ResumeContext.Provider value={{ state, dispatch }}>
      {children}
    </ResumeContext.Provider>
  );
}
