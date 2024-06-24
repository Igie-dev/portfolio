import type { Project } from "../Portfolio";
type Props = {
  project: Project;
};
export default function ProjectWrapper({ project }: Props) {
  console.log(project);
  return (
    <div className="landing_project_wrapper">
      <div className="project_image_container">
        <div className="project_image_wrapper">
          <img src="" alt="" />
        </div>
      </div>
      <div className="project_details_container">
        <div className="project_details_wrapper">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="project_link_wrapper">
            {/* {project.liveLink ? <a href={project.codeLink} target="_blank">
              <p>Souce code</p>
            </a> : null}
            {project.codeLink ?  <a href={project.liveLink} target="_blank">
              <p>Live project</p>
            </a> : null} */}

            <a href={project.codeLink} target="_blank">
              <p>Source code</p>
            </a>
            <a href={project.liveLink} target="_blank">
              <p>Live project</p>
            </a>
          </div>
          <div className="tech_stact_wrapper">
            <span>Teach stack</span>
            <div className="tech_stack_used_bar">
              {project.techStack.map((tech, i) => {
                return (
                  <span
                    key={i}
                    data-tech={tech.name}
                    style={{
                      width: `${tech.percentUsed}%`,
                    }}
                  />
                );
              })}
            </div>
            <div className="tech_stack_list">
              {project.techStack.map((tech, i) => {
                return (
                  <div key={i} data-tech={tech.name}>
                    <span data-tech={tech.name} />
                    <p>{tech.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
