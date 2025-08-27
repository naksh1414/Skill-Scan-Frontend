import { useResume } from "../../../../context/useResume";
function Education() {
  const { state } = useResume();
  return (
    <div className="mt-3">
      <h2 className="text-lg font-semibold">Education</h2>
      <hr className="mb-2" />
      {state.education.map((education) => (
        <div key={education.id} className="mt-2">
          <div className="flex justify-between mb-1">
            <h3 className="font-semibold">{education.school}</h3>
            <p className="font-semibold">
              {education.startDate.slice(0, 4) +
                "/" +
                education.startDate.slice(5, 7)}{" "}
              -{" "}
              {education.endDate.slice(0, 4) +
                "/" +
                education.endDate.slice(5, 7)}
            </p>
          </div>
          <p className="text-sm">{education.degree}</p>
        </div>
      ))}
    </div>
  );
}

export default Education;
