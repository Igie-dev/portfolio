import "./_projectListStyles.scss";
import projects from "../../../../db/projects.json";
import ProjectWrapper from "./ProjectWrapper";

import type { Project } from "../Portfolio";
export default function ProjectList() {
  const landingPageProjects: Project[] = projects.slice(0, 3);

  return (
    <div className="landing_project_list_container">
      {landingPageProjects.map((project, i) => {
        return <ProjectWrapper key={i} project={project} />;
      })}
    </div>
  );
}
