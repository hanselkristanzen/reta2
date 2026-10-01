import { About } from "@/components/sections/About";
import { Additional } from "@/components/sections/Additional";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { LightboxProvider } from "@/components/ui/LightboxProvider";

function App() {
  return (
    <LightboxProvider>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-signal focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-void"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Additional />
        <Contact />
      </main>
      <Footer />
    </LightboxProvider>
  );
}

export default App;
