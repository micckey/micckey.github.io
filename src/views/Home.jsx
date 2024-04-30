import Header from "../components/MyHeader";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}
