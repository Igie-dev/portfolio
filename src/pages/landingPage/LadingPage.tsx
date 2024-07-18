import Header from "./components/Header";

export default function LadingPage() {
  return (
    <main className="flex flex-col px-2 overflow-x-hidden h-fit bg-background">
      {/* header */}
      <Header />

      {/* Hero */}
      <section className="flex min-h-screen gap-2 sections"></section>
    </main>
  );
}
