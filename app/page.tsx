import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SideMenu from "./components/SideMenu";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <main className="relative">
      <SideMenu />

      <Hero />
      <Skills />
      <div className="h-20 md:h-40"></div>
      <Timeline />
      <div className="h-20 md:h-40"></div>
      <Projects />
    </main>
  );
}
