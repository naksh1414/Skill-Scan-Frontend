import { useResume } from "../../../../context/useResume";
function Education() {
  const { state } = useResume();
  return (
    <div className="mt-3">
      <h2 className="text-lg font-medium">EDUCATION</h2>
      <div className="flex gap-x-10 justify-center">
        {state.education.map((education) => (
          <div key={education.id} className="mt-1">
            <div className="flex flex-col justify-between text-md">
              <h3 className="font-semibold"> {education.school}</h3>
              <p className="text-sm">{education.degree}</p>
              <div className="flex justify-between text-sm italic text-black/80">
                <p className="">
                  {education.startDate.slice(0, 4) +
                    "/" +
                    education.startDate.slice(5, 7)}{" "}
                  -{" "}
                  {education.endDate.slice(0, 4) +
                    "/" +
                    education.endDate.slice(5, 7)}
                </p>
                <p className="italic">GPA {education.cgpa}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
