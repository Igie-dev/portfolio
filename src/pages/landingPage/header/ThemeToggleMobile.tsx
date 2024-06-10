import { useState } from "react";

export default function ThemeToggleMobile() {
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
    <div className="theme_toggle_btn_wrapper_mobile">
      <button
        onClick={handleClick}
        type="button"
        className="theme_toggle_btn_mobile"
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
