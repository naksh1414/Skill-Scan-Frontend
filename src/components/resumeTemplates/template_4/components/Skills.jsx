import { useResume } from "../../../../context/useResume";
function Skills() {
  const { state } = useResume();
  return (
    <div className="mt-2">
      <h2 className="text-lg font-bold text-[#335777] mb-1">SKILLS</h2>

      {state.skills.map((skill, index) => (
        <div key={index} className="flex gap-1">
          <p className="font-semibold">{skill.skillTitle}:</p>
          <span>{skill.skillList}</span>
        </div>
      ))}
    </div>
  );
}

export default Skills;
