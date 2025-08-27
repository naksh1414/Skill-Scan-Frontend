import { useResume } from "../../../../context/useResume";
function Skills() {
  const { state } = useResume();
  return (
    <div className="mt-3">
      <h2 className="text-md">SKILLS</h2>
      <hr className="my-2 h-0 border-white/50" />
      {state.skills.map((skill, index) => (
        <div key={index} className="flex gap-1">
          <p className="">{skill.skillTitle} -</p>
          <span>{skill.skillList}</span>
        </div>
      ))}
    </div>
  );
}

export default Skills;
