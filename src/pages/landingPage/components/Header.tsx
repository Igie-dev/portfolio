import React, { useState } from "react";
export default function Header() {
  const [show, setShow] = useState(false);
  const handleNav = () => {
    setShow((prev) => !prev);
  };
  return (
    <header className="relative flex items-end justify-between h-20 px-2 pb-2 sections">
      {/* Show nav */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleNav}
          className="flex items-center justify-center p-1 text-lg rounded-sm bg-background hover:text-accent"
        >
          {show ? (
            <i className="bi bi-x text-[2rem] "></i>
          ) : (
            <i className="text-[2rem] bi bi-list "></i>
          )}
        </button>
      </div>

      <div className="flex items-center gap-2">
        <a
          href=""
          className="flex items-center justify-center p-1 px-2 text-center transition-all rounded-md hover:text-accent hover:bg-border"
        >
          <i className="bi bi-github text-[1.3rem] "></i>
        </a>
        <a
          href=""
          className="flex items-center justify-center p-1 px-2 text-center transition-all rounded-md hover:text-accent hover:bg-border"
        >
          <i className="bi bi-facebook text-[1.3rem] "></i>
        </a>
        <a
          href=""
          className="flex items-center justify-center p-1 px-2 text-center transition-all rounded-md hover:text-accent hover:bg-border"
        >
          <i className="bi bi-linkedin text-[1.3rem] "></i>
        </a>
      </div>
      {show ? (
        <nav
          onClick={handleNav}
          className="absolute w-full top-full h-[90vh] flex flex-col items-start gap-2 py-2 z-50 "
        >
          <button className="px-6 py-2 text-sm font-semibold hover:text-accent">
            HOME
          </button>
          <button className="px-6 py-2 text-sm font-semibold hover:text-accent">
            ABOUT
          </button>
          <button className="px-6 py-2 text-sm font-semibold hover:text-accent">
            PORYFOLIO
          </button>
          <button className="px-6 py-2 text-sm font-semibold hover:text-accent">
            CONTACT
          </button>
        </nav>
      ) : null}
    </header>
  );
}
