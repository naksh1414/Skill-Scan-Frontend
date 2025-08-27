import { useResume } from "../../../../context/useResume";
function Experience() {
  const { state } = useResume();
  return (
    <>
      <div className="mt-3">
        <h2 className="text-lg font-bold ">Summary</h2>
        <hr className="my-2 h-0 border-black" />{" "}
      </div>
      <p className="text-sm">{state.personalInfo?.summary}</p>
      <div className="mt-3">
        <h2 className="text-lg font-bold ">Experience</h2>
        <hr className="my-2 h-0 border-black" />
        {state.experience.map((exp, index) => (
          <div key={index}>
            <div className="flex font-semibold  justify-between">
              <h3 className="text-md">{exp.company}</h3>
            </div>
            <div className="flex justify-between text-sm text-blue-600 font-medium">
              {exp.position}
              <p className="flex items-center gap-1 ">
                {/* <MdOutlineDateRange className="text-blue-600" /> */}
                {exp.startDate.slice(0, 4) +
                  "/" +
                  exp.startDate.slice(5, 7)} -{" "}
                {(exp.isPresent && "present") ||
                  exp.endDate.slice(0, 4) + "/" + exp.endDate.slice(5, 7)}
              </p>
            </div>
            <ul className="text-sm">
              {exp.description.map((e, index) => (
                <li key={index} className="flex gap-1">
                  <span>•</span> {e}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>{" "}
    </>
  );
}

export default Experience;
