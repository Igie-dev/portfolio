import { useState } from "react";

export default function ThemeToggleDesktop() {
  const [theme, setTheme] = useState(window.localStorage.getItem("theme"));
  const handleClick = () => {
    if (theme === "theme--default") {
      document.documentElement.setAttribute("class", "theme--dark");
      window.localStorage.setItem("theme", "theme--dark");
      setTheme("theme--dark");
    } else {
      window.localStorage.setItem("theme", "theme--default");
      document.documentElement.setAttribute("class", "theme--default");
      setTheme("theme--default");
    }
  };
  return (
    <div className="theme_toggle_btn_wrapper_desk">
      <button
        type="button"
        onClick={handleClick}
        className="theme_toggle_btn_desk"
      >
        {theme === "theme--default" ? (
          <i className="bi bi-cloud-moon-fill"></i>
        ) : (
          <i className="bi bi-brightness-alt-high-fill"></i>
        )}
      </button>
    </div>
  );
}
