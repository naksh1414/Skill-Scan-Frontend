import { useResume } from "../../../../context/useResume";
function Education() {
  const { state } = useResume();
  return (
    <div className="mt-3">
      <h2 className="text-lg font-bold ">Education</h2>
      <hr className="my-2 h-0 border-black" />
      {state.education.map((education) => (
        <div key={education.id} className="mt-2">
          <div className="flex justify-between text-md">
            <h3 className="font-semibold">{education.school}</h3>
            <p className="font-semibold flex items-center justify-center gap-1 text-sm">
              {/* <MdOutlineDateRange className="text-blue-600" /> */}
              {education.startDate.slice(0, 4) +
                "/" +
                education.startDate.slice(5, 7)}{" "}
              -{" "}
              {education.endDate.slice(0, 4) +
                "/" +
                education.endDate.slice(5, 7)}
            </p>
          </div>
          <p className="text-sm text-blue-600 font-medium">
            {education.degree}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Education;
