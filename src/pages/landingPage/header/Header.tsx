import Logo from "../../components/Logo";
import NavBtn from "./NavBtn";
import { useRef } from "react";
import ThemeToggle from "./ThemeToggle";
export const navLink = [
  { title: "Home", targetId: "header" },
  { title: "About", targetId: "about" },
  { title: "Projects", targetId: "projects" },
  { title: "Contact", targetId: "contact" },
];
export default function Header() {
  const navRef = useRef<HTMLElement | null>(null);

  const handleNavOpen = () => {
    if (navRef?.current) {
      navRef.current.style.transform = "translateY(0)";
    }
  };
  const handleNavClose = () => {
    if (navRef?.current) {
      navRef.current.style.transform = "translateY(-100%)";
    }
  };
  return (
    <header id="header" className="header">
      <div className="header_div">
        <Logo />
        <div className="btn_wrapper_mobile">
          <ThemeToggle
            wrapperClassName="theme_toggle_btn_wrapper_mobile"
            btnClassName="theme_toggle_btn_mobile"
          />
          {/* show nav */}
          <button
            type="button"
            onClick={handleNavOpen}
            className="show_nav_btn"
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
        <nav ref={navRef} className="nav_bar">
          <div className="mobile_nav">
            <Logo />
            <button
              type="button"
              onClick={handleNavClose}
              className="hide_nav_btn"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
          <ul>
            {navLink.map((l) => {
              return (
                <li key={l.title}>
                  <NavBtn targetId={l.targetId} title={l.title} />
                </li>
              );
            })}
            <ThemeToggle
              wrapperClassName="theme_toggle_btn_wrapper_desk"
              btnClassName="theme_toggle_btn_desk"
            />
          </ul>
        </nav>
      </div>
    </header>
  );
}
