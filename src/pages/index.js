//import { Inter } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { FaLinkedin } from "react-icons/fa";
import Navbar from "./components/navbar";
import { ProjectCard } from "./components/card";
import autorecruit from "./projects/autorecruit.json";
import emergensync from "./projects/emergensync.json";
import recyclify from "./projects/recyclify.json";
import castfindr from "./projects/castfindr.json";
import legaleaze from "./projects/legaleaze.json";
import scheduler from "./projects/scheduler.json";
import { FitScreen } from "@mui/icons-material";
import SocialButtonsContainer from "react-social-media-buttons";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const projects = [
    autorecruit,
    emergensync,
    recyclify,
    castfindr,
    legaleaze,
    scheduler,
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      {/*
       * TO-DO:
       * make the image size more reasonable height in large screens
       */}
      <section id="intro" className="">
        <div className="text-white p-4 md:p-8 lg:p-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:items-start">
          <div>
            <h1 className="text-3xl md:leading-normal md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
              Hi, My Name is Shiv 👋
            </h1>
            {/* <h2 className="text-2xl md:text-3xl lg:text-4xl mb-3 lg:mb-4">Full Stack developer</h2> */}
            <p className="text-base md:text-lg lg:text-2xl 3xl:max-w-[75%] mt-4 lg:mt-6 lg:pr-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
            <div className="flex justify-center mt-6 lg:mt-8 md:w-[75%] lg:w-[75%] 2xl:w-[75%] 3xl:w-[75%]">
              <SocialButtonsContainer
                links={["https://www.linkedin.com/in/shiv-s-shah/"]}
                buttonStyle={{
                  width: "50px",
                  height: "50px",
                  margin: "0px 10px",
                  backgroundColor: "#0a66c2",
                  borderRadius: "15%",
                }}
                iconStyle={{ color: "#ffffff" }}
                openNewTab={true}
              />
              <a href="mailto:shivshahla@gmail.com" target="_blank" rel="noopener noreferrer">
              <button className="bg-purple-700 text-white text-xl font-semibold py-3 px-6 rounded hover:bg-purple-800 transition duration-300 tracking-widest w-full md:w-auto">
                CONTACT
              </button>
              </a>

            </div>
          </div>
          {/* <div className="flex justify-center items-center mt-4 md:mt-0"> */}
          <div className="flex justify-center items-center mt-4 md:mt-0 w-full">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg" // Replace with your actual image path
              width={150}
              height={150}
              layout="responsive"
              alt="A placeholder for a podcast chat image" // Provide a meaningful description
            />
          </div>
        </div>
      </section>

      <section id="experience"></section>

      <section id="projects">
        <h1 className="text-4xl mb-5 ml-10">Projects</h1>
        {projects.map((project) => (
          <ProjectCard data={project} />
        ))}
      </section>
      <section id="contact"></section>
    </main>
  );
}

/*
To-do:

- hero section: 2 columns:
  -  left-side: header (My name is Shiv Shah), 1 or 2 sentence description
  -  right-side: media element that gets clicked and creates a design change [i.e. ball that bounces on the screen, moving image on the screen, etc.]
                     
  - create experience section -> timeline object? (go for horizontal items)

  - write project descriptions for projects

  - consider: change navbar links to lazy load?

  - add some background element


  
        <div className="grid grid-cols-2">
          <h1 className="text-4xl mb-5 ml-10">Hi, my name is Shiv Shah.</h1>
          <p>I am a Computer Science student at ASU.</p>
        </div>
*/
