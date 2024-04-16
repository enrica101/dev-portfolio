import Hero from "./components/Hero";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main
      style={{
        backgroundImage:
          "linear-gradient(-50deg, #132043 17%, #1F4172 55%, #F1B4BB 120%)",
      }}
    >
      <Hero />
      <Skills />
    </main>
  );
}
