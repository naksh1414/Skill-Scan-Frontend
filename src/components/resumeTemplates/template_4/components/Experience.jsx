import { useResume } from "../../../../context/useResume";
function Experience() {
  const { state } = useResume();
  return (
    <div className="mt-2">
      <h2 className="text-lg font-bold text-[#335777] mb-2">EXPERIENCE</h2>
      {state.experience.map((exp, index) => (
        <div key={index} className="">
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
          <hr className=" mb-1 h-0 border-gray-600" />
          <ul className="text-sm pl-5">
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
