import NavBtn from "../header/NavBtn";
import { navLink } from "../header/Header";
export default function Footer() {
  return (
    <footer className="footer">
      <span className="logo">IGIE</span>
      <nav>
        <span>Menu</span>
        <ul>
          {" "}
          {navLink.map((l) => {
            return (
              <li key={l.title}>
                <NavBtn targetId={l.targetId} title={l.title} />
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="icon_wrapper">
        <span>Social media</span>
        <div className="social_media_icon_wrapper">
          <a href="https://www.facebook.com/igie.08/" target="_bank">
            <span className="social_icon_wrapper icon_facebook">
              <i className="bi bi-facebook"></i>
            </span>
          </a>
          <span></span>
          <a href="https://www.instagram.com/igiebaldesanso/" target="_bank">
            <span className="social_icon_wrapper icon_insta">
              <i className="bi bi-instagram"></i>
            </span>
          </a>
          <span></span>
          <a
            href="https://www.linkedin.com/in/igie-boy-baldesanso-6a77181a3/"
            target="_bank"
          >
            <span className="social_icon_wrapper icon_linkin">
              <i className="bi bi-linkedin"></i>
            </span>
          </a>
          <span></span>
          <a href="https://github.com/Igie-dev" target="_bank">
            <span className="social_icon_wrapper icon_github">
              <i className="bi bi-github"></i>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
