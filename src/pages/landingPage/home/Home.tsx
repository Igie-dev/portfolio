import resume from "../../../assets/ResumeIgie.pdf";
export default function Home() {
  return (
    <section id="home" className="home">
      <div className="hero_wrapper">
        <span className="hero_hello">hello i am</span>
        <h1 className="hero_name">igie boy baldesanso</h1>
        <h4 className="hero_intro">
          Hello, I'm Igie Boy Baldesanso. I'm an aspiring front-end developer
          passionate about creating beautiful and functional user interfaces.
        </h4>
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
