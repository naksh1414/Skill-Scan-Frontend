import { useResume } from "../../../../context/useResume";
function Experience() {
  const { state } = useResume();
  return (
    <>
      <div className="mt-3">
        <h2 className="text-md font-medium text-[#24435b] ">SUMMARY</h2>
        <hr className="my-2 h-0 border-black" />{" "}
      </div>
      <p className="text-sm">{state.personalInfo?.summary}</p>
      <div className="mt-3">
        <h2 className="text-md font-medium text-[#24435b] ">EXPERIENCE</h2>
        <hr className="my-2 h-0 border-black" />
        {state.experience.map((exp, index) => (
          <div key={index}>
            <div className="flex font-semibold  justify-between">
              <h3 className="text-md">{exp.company}</h3>
            </div>
            <div className="flex justify-between text-sm">
              {exp.position}
              <p>
                {exp.startDate.slice(0, 4) + "/" + exp.startDate.slice(5, 7)} -{" "}
                {(exp.isPresent && "present") ||
                  exp.endDate.slice(0, 4) + "/" + exp.endDate.slice(5, 7)}
              </p>
            </div>
            <ul className="text-sm mt-1">
              {exp.description.map((e, index) => (
                <li className="flex gap-1" key={index}>
                  <span>•</span> {e}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default Experience;
