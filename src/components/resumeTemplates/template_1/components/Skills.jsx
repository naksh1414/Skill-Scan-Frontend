import { useResume } from "../../../../context/useResume";
function Skills() {
  const { state } = useResume();
  return (
    <div className="mt-3">
      <h2 className="text-lg font-semibold">Skills</h2>
      <hr className="mb-2" />
      {state.skills.map((skill, index) => (
        <div key={index} className="flex gap-1">
          <p className="font-medium">{skill.skillTitle}:</p>
          <span>{skill.skillList}</span>
        </div>
      ))}
    </div>
  );
}

export default Skills;
