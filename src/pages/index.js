import Image from "next/image";
import React from "react";
import Navbar from "./components/navbar";
import ProjectCard from "./components/card";
import TimelineElement from "./components/timeline";
import autorecruit from "../../public/projects/autorecruit.json";
import emergensync from "../../public/projects/emergensync.json";
import recyclify from "../../public/projects/recyclify.json";
import castfindr from "../../public/projects/castfindr.json";
import legaleaze from "../../public/projects/legaleaze.json";
import scheduler from "../../public/projects/scheduler.json";
import experiences from "../../public/experience/experience.json";
import SocialButtonsContainer from "react-social-media-buttons";

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

      <section id="intro" className="h-[65vh]">
        <svg
          className="w-full h-full absolute top-0 left-0 -z-10"
          preserveAspectRatio="none"
          viewBox="0 0 1500 1250"
        >
          <g transform="translate(750,464) scale(1,1) translate(-750,-464)">
            <linearGradient
              id="lg-0.3112358184541668"
              x1="0"
              x2="0"
              y1="0"
              y2="1"
            >
              <stop stopColor="#003852" offset="1" />
            </linearGradient>
            <path d="" fill="url(#lg-0.3112358184541668)" opacity="0.61">
              <animate
                attributeName="d"
                dur="9.090909090909092s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcMode="spline"
                keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
                begin="0s"
                values="M0 0L 0 675.6666860969005Q 250 801.3760958350185  500 782.4361482289693T 1000 715.3989057249458T 1500 567.2426454658661L 1500 0 Z;M0 0L 0 767.867764577861Q 250 759.0028735347357  500 739.6081167215303T 1000 558.3392807283736T 1500 658.0931497233262L 1500 0 Z;M0 0L 0 736.4343615185786Q 250 678.7934836222364  500 646.6369433407243T 1000 646.6757088224667T 1500 733.548691978259L 1500 0 Z;M0 0L 0 675.6666860969005Q 250 801.3760958350185  500 782.4361482289693T 1000 715.3989057249458T 1500 567.2426454658661L 1500 0 Z"
              ></animate>
            </path>
            <path d="" fill="url(#lg-0.3112358184541668)" opacity="0.61">
              <animate
                attributeName="d"
                dur="9.090909090909092s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcMode="spline"
                keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
                begin="-1.298701298701299s"
                values="M0 0L 0 700.4652750581447Q 250 876.8051324374526  500 829.0250778647041T 1000 718.143646304667T 1500 536.9922478720156L 1500 0 Z;M0 0L 0 885.2411722047655Q 250 883.400449126855  500 833.4213122267324T 1000 742.5081223364651T 1500 647.0473220307391L 1500 0 Z;M0 0L 0 686.6894117593844Q 250 671.504722335908  500 637.7359164979404T 1000 778.1204885043331T 1500 711.0659228493836L 1500 0 Z;M0 0L 0 700.4652750581447Q 250 876.8051324374526  500 829.0250778647041T 1000 718.143646304667T 1500 536.9922478720156L 1500 0 Z"
              ></animate>
            </path>
            <path d="" fill="url(#lg-0.3112358184541668)" opacity="0.61">
              <animate
                attributeName="d"
                dur="9.090909090909092s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcMode="spline"
                keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
                begin="-2.597402597402598s"
                values="M0 0L 0 806.1700267308347Q 250 728.2019888599029  500 692.3528927004263T 1000 773.1865895938683T 1500 597.1252017134622L 1500 0 Z;M0 0L 0 697.8342050654569Q 250 861.6970126378602  500 822.624528857542T 1000 641.9265477433811T 1500 630.8099200028968L 1500 0 Z;M0 0L 0 786.2910119757898Q 250 683.6665619383496  500 647.9530162813613T 1000 735.6511819081195T 1500 550.6620333257616L 1500 0 Z;M0 0L 0 806.1700267308347Q 250 728.2019888599029  500 692.3528927004263T 1000 773.1865895938683T 1500 597.1252017134622L 1500 0 Z"
              ></animate>
            </path>
            <path d="" fill="url(#lg-0.3112358184541668)" opacity="0.61">
              <animate
                attributeName="d"
                dur="9.090909090909092s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcMode="spline"
                keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
                begin="-3.896103896103896s"
                values="M0 0L 0 846.6155024242636Q 250 723.58096552571  500 686.7081207953938T 1000 589.879559574844T 1500 692.4338019437835L 1500 0 Z;M0 0L 0 820.1188946143893Q 250 850.051734657249  500 807.7091033344868T 1000 587.855564437861T 1500 619.75812686449L 1500 0 Z;M0 0L 0 781.6131989196775Q 250 629.1746701377109  500 605.2157386453059T 1000 657.3170356335268T 1500 694.0086806037867L 1500 0 Z;M0 0L 0 846.6155024242636Q 250 723.58096552571  500 686.7081207953938T 1000 589.879559574844T 1500 692.4338019437835L 1500 0 Z"
              ></animate>
            </path>
            <path d="" fill="url(#lg-0.3112358184541668)" opacity="0.61">
              <animate
                attributeName="d"
                dur="9.090909090909092s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcMode="spline"
                keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
                begin="-5.194805194805196s"
                values="M0 0L 0 876.8647633425985Q 250 762.2756327462214  500 726.5181096351097T 1000 644.4267471591314T 1500 611.7645534743408L 1500 0 Z;M0 0L 0 863.2404050290329Q 250 774.6042412139643  500 739.9773186720189T 1000 775.8828559594116T 1500 656.9364915617725L 1500 0 Z;M0 0L 0 699.8261760273626Q 250 697.1014092018514  500 671.7643763493687T 1000 562.3891333562781T 1500 552.9376559957653L 1500 0 Z;M0 0L 0 876.8647633425985Q 250 762.2756327462214  500 726.5181096351097T 1000 644.4267471591314T 1500 611.7645534743408L 1500 0 Z"
              ></animate>
            </path>
            <path d="" fill="url(#lg-0.3112358184541668)" opacity="0.61">
              <animate
                attributeName="d"
                dur="9.090909090909092s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcMode="spline"
                keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
                begin="-6.493506493506494s"
                values="M0 0L 0 842.8133792132614Q 250 776.2454831308409  500 748.798918646723T 1000 618.2236590376474T 1500 634.4258084463823L 1500 0 Z;M0 0L 0 930.4199461375797Q 250 822.128161721816  500 785.6344277272085T 1000 573.5648878247337T 1500 490.89519540290223L 1500 0 Z;M0 0L 0 859.1667116096575Q 250 813.6351756211834  500 778.0472697415851T 1000 649.1366733170828T 1500 543.4888350065715L 1500 0 Z;M0 0L 0 842.8133792132614Q 250 776.2454831308409  500 748.798918646723T 1000 618.2236590376474T 1500 634.4258084463823L 1500 0 Z"
              ></animate>
            </path>
            <path d="" fill="url(#lg-0.3112358184541668)" opacity="0.61">
              <animate
                attributeName="d"
                dur="9.090909090909092s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcMode="spline"
                keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
                begin="-7.792207792207792s"
                values="M0 0L 0 743.8912481138145Q 250 803.4095979343232  500 769.2715574301692T 1000 709.6850943893256T 1500 692.5704851654091L 1500 0 Z;M0 0L 0 828.8627383487816Q 250 695.627055088283  500 658.2392868161232T 1000 769.4302384989049T 1500 634.2226333415111L 1500 0 Z;M0 0L 0 751.7426455310778Q 250 864.0607365038387  500 817.1441811933929T 1000 673.6634350280732T 1500 685.6595173611627L 1500 0 Z;M0 0L 0 743.8912481138145Q 250 803.4095979343232  500 769.2715574301692T 1000 709.6850943893256T 1500 692.5704851654091L 1500 0 Z"
              ></animate>
            </path>
          </g>
        </svg>
        <div className="text-white p-4 md:p-8 lg:p-12 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-center">
            Hi, My Name is Shiv Shah 👋
          </h1>

          <p className="text-base md:text-lg lg:text-2xl mt-4 lg:mt-6 lg:pr-4 text-center max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%]">
            I am a student at Arizona State University studying Computer
            Science! Over the past 3 years, I have completed software
            engineering internships and projects primarily focused on full stack
            development. See my previous experiences below!
          </p>

          <div className="flex flex-row flex-wrap justify-center items-center mt-6 lg:mt-8 w-full">
            <a href="/about-me">
              <button className="bg-purple-700 text-white text-xl font-semibold py-3 px-6 rounded hover:bg-purple-800 transition duration-300 tracking-widest w-full md:w-auto">
                ABOUT ME
              </button>
            </a>
            <SocialButtonsContainer
              links={["mailto:shivshahla@gmail.com"]}
              buttonStyle={{
                width: "50px",
                height: "50px",
                margin: "0px 0px 0px 10px",
                backgroundColor: "#f06666",
                borderRadius: "15%",
              }}
              iconStyle={{ color: "#ffffff" }}
              openNewTab={true}
            />
            <SocialButtonsContainer
              links={["https://github.com/shivstaa"]}
              buttonStyle={{
                margin: "0px 0px 0px 10px",
                backgroundColor: "#ffffff",
                borderRadius: "15%",
              }}
              iconStyle={{ color: "#000000" }}
              openNewTab={true}
            />
            <SocialButtonsContainer
              links={["https://www.linkedin.com/in/shiv-s-shah/"]}
              buttonStyle={{
                width: "50px",
                height: "50px",
                margin: "0px 0px 0px 10px",
                backgroundColor: "#0a66c2",
                borderRadius: "15%",
              }}
              iconStyle={{ color: "#ffffff" }}
              openNewTab={true}
            />
          </div>
        </div>
      </section>

      <section id="experience" className="">
        <h1 className="text-4xl mb-5 ml-10">Experience</h1>
        {experiences.map((data, index) => (
          <TimelineElement key={index} data={data} />
        ))}
      </section>

      <section id="projects">
        <h1 className="text-4xl mb-5 mt-8 ml-10">Projects</h1>
        {projects.map((project, index) => (
          <ProjectCard key={index} data={project} />
        ))}
      </section>
    </main>
  );
}
