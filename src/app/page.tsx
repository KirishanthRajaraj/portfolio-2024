import Image from "next/image";
import Intro from "./components/intro";
import Timeline from "./components/timeline";
import Projects from "./components/projects";
import AboutMe from "./components/aboutMe";
import Navigation from "./components/navigation";

export default function Home() {
  return (
    <div>
      <Navigation></Navigation>
      <main className="pt-20">
        <Intro></Intro>
        <Timeline></Timeline>
        <AboutMe></AboutMe>
        <Projects></Projects>
      </main>
    </div>
  );
}
