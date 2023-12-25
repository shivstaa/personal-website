//import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import { ProjectCard } from "./components/card";

import autorecruit from "./projects/autorecruit.json";
import emergensync from "./projects/emergensync.json";
import recyclify from "./projects/recyclify.json";
import castfindr from "./projects/castfindr.json";
import legaleaze from "./projects/legaleaze.json";
import scheduler from "./projects/scheduler.json";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
    // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {/* <div className="relative flex place-items-center custom-blur"></div> */}
      <Navbar />
      <section id="projects">
        <h1 className="text-4xl mb-5 ml-10">Projects</h1>
        <ProjectCard data={autorecruit} />
        <ProjectCard data={emergensync} />
        <ProjectCard data={recyclify} />
        <ProjectCard data={castfindr} />
        <ProjectCard data={legaleaze} />
        <ProjectCard data={scheduler} />
      </section>
    </main>
  );
}
