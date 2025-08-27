import { useResume } from "../../../../context/useResume";
function Education() {
  const { state } = useResume();
  return (
    <div className="mt-2">
      <h2 className="text-lg font-bold text-[#335777] mb-2">EDUCATION</h2>
      {state.education.map((education) => (
        <div key={education.id} className="mt-2">
          <div className="flex justify-between text-md">
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
          <hr className="h-0 border-gray-600" />
        </div>
      ))}
    </div>
  );
}

export default Education;
