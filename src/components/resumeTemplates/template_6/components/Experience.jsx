import { useResume } from "../../../../context/useResume";
function Experience() {
  const { state } = useResume();
  return (
    <div className="mt-3">
      <h2 className="text-lg mb-2 font-medium">EXPERIENCE</h2>
      {state.experience.map((exp, index) => (
        <div key={index}>
          <div className="flex font-semibold  justify-between">
            <h3 className="text-md">{exp.company}</h3>
          </div>
          <div className="flex flex-col justify-between text-sm">
            {exp.position}
            <p className="text-black/80 italic">
              {exp.startDate.slice(0, 4) + "/" + exp.startDate.slice(5, 7)} -{" "}
              {(exp.isPresent && "present") ||
                exp.endDate.slice(0, 4) + "/" + exp.endDate.slice(5, 7)}
            </p>
          </div>
          <ul className="text-sm">
            {exp.description.map((e, index) => (
              <li key={index} className="flex gap-1">
                <span>-</span> {e}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;
