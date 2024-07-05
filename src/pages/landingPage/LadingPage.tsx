export default function LadingPage() {
  return (
    <main className="flex flex-col overflow-x-hidden h-fit">
      {/* header */}
      <header className="flex items-center justify-between h-20 sections">
        <span>IGIE</span>
        <nav className="flex items-center">
          <ul className="flex">
            <li>Home</li>
            <li>About</li>
            <li>Portfilio</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex min-h-screen gap-2 sections"></section>
    </main>
  );
}
