import { useResume } from "../../../../context/useResume";
function Projects() {
  const { state } = useResume();
  return (
    <div className="mt-2">
      <h2 className="text-lg font-bold text-[#335777] mb-2">PROJECTS</h2>
      {state.projects.map((project, index) => (
        <div key={index} className="mb-2 ">
          <div className="flex justify-between font-semibold mb-1">
            <h3>
              {project.title} | <a href={project.link}>Link</a>
            </h3>
            <p>
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech}, </span>
              ))}
            </p>
          </div>
          <hr className="mb-1 h-0 border-gray-600" />
          {project.description.map((desc, index) => (
            <ul key={index} className="flex gap-1 pl-5">
              <li className="text-sm">• {desc}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Projects;
