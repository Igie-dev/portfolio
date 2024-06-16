import Header from "./header/Header";
import Home from "./home/Home";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

export default function LadingPage() {
  return (
    <main id="section_main">
      <Header />
      <Home />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
