import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Footer from "./components/Footer";
import SocialSidebar from "./components/SocialSidebar";
import WelcomeScreen from "./components/WelcomeScreen";
import Reveal from "./components/Reveal";

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-brand focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-page"
      >
        Skip to content
      </a>

      <WelcomeScreen />
      <Navbar />
      <SocialSidebar />
      <main id="main">
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;