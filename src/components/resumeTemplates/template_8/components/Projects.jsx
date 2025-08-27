import { useResume } from "../../../../context/useResume";
function Projects() {
  const { state } = useResume();
  return (
    <>
      <div className="mt-3">
        <h2 className="text-3xl font-bold ">Summary</h2>
        <hr className="my-2 h-0 border-2 border-black" />{" "}
      </div>
      <p className="text-sm">{state.personalInfo?.summary}</p>
      <div className="mt-3">
        <h2 className="text-3xl font-bold ">Projects</h2>
        <hr className="my-2 h-0 border-2 border-black" />
        {state.projects.map((project, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between font-semibold">
              <h3>
                {project.title} | <a href={project.link}>Link</a>
              </h3>
            </div>
            <p className="text-sm text-black font-medium mb-1">
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech},</span>
              ))}
            </p>
            <ul className="gap-1">
              {project.description.map((desc, index) => (
                <li key={index} className="text-sm flex gap-1">
                  <span>•</span> {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
