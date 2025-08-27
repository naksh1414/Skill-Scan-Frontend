import { useResume } from "../../../../context/useResume";
function Skills() {
  const { state } = useResume();
  return (
    <div className="mt-3">
      <h2 className="text-lg mb-2 font-medium">SKILLS</h2>
      {state.skills.map((skill, index) => (
        <div key={index} className="flex">
          <p className="font-semibold w-[25%]">{skill.skillTitle}</p>
          <span>{skill.skillList}</span>
        </div>
      ))}
    </div>
  );
}

export default Skills;
