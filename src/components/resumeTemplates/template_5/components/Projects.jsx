import { useResume } from "../../../../context/useResume";
function Projects() {
  const { state } = useResume();
  return (
    <div className="mt-3">
      <h2 className="text-md">PROJECTS</h2>
      <hr className="my-2 h-0 border-white/50" />
      {state.projects.map((project, index) => (
        <div key={index} className="mb-2">
          <div className="flex justify-between font-semibold mb-1">
            <h3>
              {project.title} | <a href={project.link}>Link</a>
            </h3>
          </div>
          {/* <p className="text-sm mb-1">
            {project.technologies.map((tech, index) => (
              <span key={index}>{tech}, </span>
            ))}
          </p> */}
          <ul className="flex flex-col gap-1 pl-2">
            {project.description.map((desc, index) => (
              <li key={index} className="text-sm text-white/70 flex gap-1">
                <span>•</span> {desc}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Projects;
