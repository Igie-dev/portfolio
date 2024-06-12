import { useEffect, useState } from "react";

export default function ToggleTheme({
  btnClassNames,
}: {
  btnClassNames: string;
}) {
  const [currentTheme, setCurrentTheme] = useState(
    window.localStorage.getItem("theme") ?? "theme--dark"
  );

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme);
    document.documentElement.setAttribute("class", currentTheme);
  }, [currentTheme]);

  return (
    <button
      onClick={() =>
        setCurrentTheme((prev) =>
          prev === "theme--dark" ? "theme--default" : "theme--dark"
        )
      }
      className={`${btnClassNames}`}
    >
      {currentTheme === "theme--default" ? (
        <i className="bi bi-cloud-moon-fill"></i>
      ) : (
        <i className="bi bi-brightness-alt-high-fill"></i>
      )}
    </button>
  );
}
