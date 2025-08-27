import { useResume } from "../../../../context/useResume";
function Experience() {
  const { state } = useResume();
  return (
    <div className="mt-3">
      <h2 className="text-lg font-semibold">Experience</h2>
      <hr className="mb-2" />
      {state.experience.map((exp, index) => (
        <div key={index} className="mb-2">
          <div className="flex justify-between font-medium mb-1">
            <h3 className="font-medium text-md">
              {exp.company}, {exp.position}
            </h3>
            <p>
              {exp.startDate.slice(0, 4) + "/" + exp.startDate.slice(5, 7)} -{" "}
              {(exp.isPresent && "present") ||
                exp.endDate.slice(0, 4) + "/" + exp.endDate.slice(5, 7)}
            </p>
          </div>
          <ul className="text-sm">
            {exp.description.map((e, index) => (
              <li key={index}>• {e}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;
