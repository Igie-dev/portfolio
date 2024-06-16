import "./_homeStyles.scss";
import resume from "../../../assets/ResumeIgie.pdf";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt, FaReact } from "react-icons/fa";
export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home_circle">
        <div data-tech="javascript">
          <IoLogoJavascript />
        </div>
        <div data-tech="html">
          <IoLogoHtml5 />
        </div>
        <div data-tech="css">
          <IoLogoCss3 />
        </div>
        <div data-tech="tailwindcss">
          <RiTailwindCssFill />
        </div>
        <div data-tech="git">
          <FaGitAlt />
        </div>
        <div data-tech="react">
          <FaReact />
        </div>
      </div>
      <div className="hero_wrapper">
        <h2 className="hero_role">Front-end Developer</h2>
        <h4 className="hero_hello">hello i am</h4>
        <h1 className="hero_name">igie boy baldesanso</h1>
        <p className="hero_prag">
          Hello, I'm Igie Boy Baldesanso. I'm an aspiring front-end developer
          passionate about creating beautiful and functional user interfaces.
        </p>
        <a
          className="hero_cv_download"
          href={resume}
          download="igiebaldesansoresume"
          target="_blank"
        >
          <i className="bi bi-download"></i>
          <p>Resume</p>
        </a>
      </div>
    </section>
  );
}
