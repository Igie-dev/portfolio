import React, { useRef } from "react";

export default function Header() {
  const navRef = useRef<HTMLElement | null>(null);

  const handleNav = () => {
    if (navRef?.current) {
      if (navRef.current.classList.contains("-translate-y-full")) {
        navRef.current.classList.replace("-translate-y-full", "translate-y-0");
        navRef.current.classList.replace("opacity-0", "opacity-1");
      } else {
        navRef.current.classList.replace("translate-y-0", "-translate-y-full");
        navRef.current.classList.replace("opacity-1", "opacity-0");
      }
    }
  };
  return (
    <header className="relative flex items-end justify-between h-20 px-2 pb-2 sections">
      <span className="text-lg font-extrabold lg:text-xl">IGIE</span>
      {/* Show nav */}
      <button
        onClick={handleNav}
        className="flex items-center justify-center p-2 text-lg rounded-sm text-text/80 bg-background hover:bg-secondary lg:hidden"
      >
        <i className="text-[2rem] bi bi-list"></i>
      </button>
      <nav
        ref={navRef}
        className="fixed top-0 right-0 z-50 flex flex-col items-center w-full h-screen gap-5 transition-all -translate-y-full bg-background lg:translate-y-0 lg:static lg:h-fit lg:w-fit lg:p-0 lg:items-end"
      >
        {/* Mobile header */}
        <div className="flex items-end justify-between w-full md:w-[90%] h-20 px-2 pb-2  lg:hidden">
          <span className="text-lg font-extrabold lg:text-xl">IGIE</span>
          {/* Hide button */}
          <button
            onClick={handleNav}
            className="flex items-center justify-center p-2 text-lg rounded-sm text-text/80 bg-background hover:bg-secondary lg:hidden"
          >
            <i className="text-[2rem] bi bi-x"></i>
          </button>
        </div>
        <ul className="flex flex-col w-full h-full md:w-[90%] gap-10 px-2 py-5 lg:gap-4 lg:flex-row lg:p-0">
          <li>
            <button className="px-4 py-1 text-sm font-medium transition-all border-b border-transparent rounded-md hover:border-border">
              Home
            </button>
          </li>
          <li>
            <button className="px-4 py-1 text-sm font-medium transition-all border-b border-transparent rounded-md hover:border-border">
              About
            </button>
          </li>
          <li>
            <button className="px-4 py-1 text-sm font-medium transition-all border-b border-transparent rounded-md hover:border-border">
              Portfolio
            </button>
          </li>
          <li>
            <button className="px-4 py-1 text-sm font-medium transition-all border-b border-transparent rounded-md hover:border-border">
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
