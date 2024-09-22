import Image from "next/image";
import Intro from "./components/intro";
import Timeline from "./components/timeline";

export default function Home() {
  return (
    <div>
      <main className="pt-20">
        <Intro></Intro>
        <Timeline></Timeline>
      </main>
    </div>
  );
}