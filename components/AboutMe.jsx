import React from "react";

export default function AboutMe() {
  return (
    <section id="aboutme" className="pt-36 px-6 md:px-12">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl md:text-6xl">ABOUT ME</h2>
        <hr className="border-gray border w-full" />
      </div>
      <div className="lg:pl-32 lg:pr-8 text-gray-100 !text-[1.2rem] md:!text-[23px] !leading-[3.5rem]">
        <p className="">
          I am a software developer with expertise in building innovative and scalable enterprise applications. 
          I help organizations achieve their goals through efficient, and user-focused software solutions. I advocate for open source technology because it benefits everyone and drives inclusive innovation.
        </p>
        <br></br>
        <br></br>
        <p className="">
          I am currently working on advancing Africa’s digital future through <b>technology</b>,<b>policy</b>,and <b>open collaboration</b>, with focus on impactful public sector innovation.
        </p>

        <div className="mt-4 md:mt-8">
          <div className="flex-col md:flex-row flex items-center gap-x-8 py-4 md:py-6 justify-start basis-[60%] lg:basis-[40%] text-gray-100">
            <h3 className="text-xl md:text-2xl text-white w-64 font-medium">
              Core Skills
            </h3>
            <div className="text-left !text-[1.2rem] md:!text-[23px] !leading-[3rem]">
              <p>
              Software development, Project management, Data analysis, Monitoring, evaluation and reporting, Data management, Capacity building, Cybersecurity, 
                Open source technologies,
              </p>
            </div>
          </div>
          <div className="flex-col md:flex-row flex items-center gap-x-8 py-4 md:py-6 justify-start basis-[60%] lg:basis-[40%] text-gray-100">
            <h3 className="text-xl md:text-2xl text-white w-64 font-medium">
              Tech Stack
            </h3>
            <div className="text-left !text-[1.2rem] md:!text-[23px] !leading-[3rem]">
              <p>
             JavaScript,
                TypeScript, React, Vue, NextJs, Python, NodeJs, ExpressJs, NestJs, Redis, MongoDB, MySQL, Github Actions, Docker-Compose, Cypress, PowerBi,
                Power Query, SharePoint
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
