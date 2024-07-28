import About from "./About";
import Header from "./components/Header";
import Hearo from "./Hearo";

export default function LadingPage() {
  return (
    <main className="flex flex-col px-2 overflow-x-hidden h-fit bg-background">
      {/* header */}
      <Header />

      {/* Hero */}
      <Hearo />

      {/* About  */}
      <About />
    </main>
  );
}
