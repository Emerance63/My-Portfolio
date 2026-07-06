import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-[-8%] h-72 w-72 rounded-full bg-violet-600/25 blur-3xl" />
        <div className="absolute right-[-5%] top-[20%] h-80 w-80 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-[15%] h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-4 sm:px-6 lg:px-8">
        <header className="flex min-h-screen flex-col">
          <Navbar />
          <HeroSection />
        </header>

        <main className="mx-auto max-w-7xl pb-10">
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}

export default App;
