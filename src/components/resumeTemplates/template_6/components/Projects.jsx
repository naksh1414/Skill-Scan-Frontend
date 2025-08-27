import { useResume } from "../../../../context/useResume";
function Projects() {
  const { state } = useResume();
  return (
    <div className="mt-3">
      <h2 className="text-lg mb-2 font-medium">PROJECTS</h2>
      {state.projects.map((project, index) => (
        <div key={index} className="mb-2">
          <div className="flex flex-col justify-between font-semibold mb-1">
            <h3>
              {project.title} | <a href={project.link}>Link</a>
            </h3>
            <p className="font-normal text-sm">
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech}, </span>
              ))}
            </p>
          </div>
          <ul className=" gap-1">
            {project.description.map((desc, index) => (
              <li key={index} className="text-sm flex gap-1">
                <span>-</span> {desc}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Projects;
