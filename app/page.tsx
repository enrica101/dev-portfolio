import Hero from "./components/page-segments/Hero";
import Projects from "./components/page-segments/Projects";
import SideMenu from "./components/SideMenu";
import Skills from "./components/page-segments/Skills";
import Timeline from "./components/page-segments/Timeline";
import ContactInfoDialog from "./components/ContactInfoDialog";

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
