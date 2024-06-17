import "./_portfolioStyles.scss";
import ProjectList from "./components/ProjectList";

export type ProjectTechStack = {
  name: string;
  percentUsed: number;
};

export type Project = {
  title: string;
  description: string;
  liveLink: string;
  codeLink: string;
  imageLink: string;
  techStack: ProjectTechStack[];
};

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div id="portfolio" className="landing_portfolio_heading">
        <h2>My Projects</h2>
        <p>
          Welcome to my portfolio! Here, you'll find a selection of projects
          that showcase my skills, creativity, and dedication. Each project
          highlights my ability to adapt and innovate, representing unique
          challenges and learning experiences. Explore and discover the diverse
          range of my work, reflecting my journey and professional growth.
        </p>
      </div>
      <ProjectList />
      <div className="landing_portfolio_footer">
        <a href="">
          <p>See all projects</p>
          <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </section>
  );
}
