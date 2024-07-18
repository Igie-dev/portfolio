import React, { useState } from "react";
export default function Header() {
  const [show, setShow] = useState(true);
  const handleNav = () => {
    setShow((prev) => !prev);
  };
  return (
    <header className="relative flex items-end justify-between h-20 px-2 pb-2 sections">
      {/* Show nav */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleNav}
          className="flex items-center justify-center p-1 text-lg rounded-sm text-accent bg-background"
        >
          {show ? (
            <i className="bi bi-x text-[2rem]"></i>
          ) : (
            <i className="text-[2rem] bi bi-list"></i>
          )}
        </button>
        <span className="text-lg font-semibold text-secondary">Menu</span>
      </div>

      <div className="flex items-center gap-4">
        <i className="bi bi-github text-[1.2rem] text-accent"></i>
        <i className="bi bi-facebook text-[1.2rem] text-accent"></i>
        <i className="bi bi-linkedin text-[1.2rem] text-accent"></i>
      </div>
      {show ? (
        <nav className="absolute w-full top-full h-[90vh] flex flex-col items-start gap-5 px-4 py-10">
          <button className="px-6 py-2 text-sm text-secondary hover:text-accent">
            HOME
          </button>
          <button className="px-6 py-2 text-sm text-secondary hover:text-accent">
            ABOUT
          </button>
          <button className="px-6 py-2 text-sm text-secondary hover:text-accent">
            PORYFOLIO
          </button>
          <button className="px-6 py-2 text-sm text-secondary hover:text-accent">
            CONTACT
          </button>
        </nav>
      ) : null}
    </header>
  );
}
