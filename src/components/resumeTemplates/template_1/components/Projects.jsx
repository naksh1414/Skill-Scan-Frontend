import { useResume } from "../../../../context/useResume";
function Projects() {
  const { state } = useResume();
  return (
    <div className="mt-3">
      <h2 className="text-lg font-semibold">Projects</h2>
      <hr className="mb-2" />
      {state.projects.map((project, index) => (
        <div key={index} className="mb-2">
          <div className="flex font-medium  justify-between mb-1">
            <h3>
              {project.title} | <a href={project.link}>Link</a>
            </h3>
            <p>
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech}, </span>
              ))}
            </p>
          </div>
          {project.description.map((desc, index) => (
            <ul key={index} className="flex gap-1">
              <li className="text-sm">• {desc}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Projects;
