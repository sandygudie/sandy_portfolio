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
          I am a software developer with expertise in building innovative and scalable enterprise applications. I help businesses and organizations achieve their goals through reliable, efficient, and user-focused software solutions.
        </p>

        <p className="">
          I contribute to open source communities and advocate for open technology because it benefits everyone and drives transparency and inclusive innovation.
          <br></br>
          I am currently working on initiatives that advance Africa’s digital future through technology, policy, and open collaboration, with a focus on digital transformation, interoperability, and impactful public sector innovation.
          <br></br>
          I also enjoy writing, check out my articles on{" "}
          <a className="underline text-white" target="_blank" rel="noreferrer" href="https://sandygoody.medium.com/">
            Medium
          </a>
          .
        </p>

        <div className="mt-4 md:mt-8">
          

          <div className="flex-col md:flex-row flex items-center gap-x-8 py-4 md:py-6 justify-start basis-[60%] lg:basis-[40%] text-gray-100">
            <h3 className="text-xl md:text-2xl text-white w-64 font-medium">
              Core Sills
            </h3>
            <div className="text-left !text-[1.2rem] md:!text-[23px] !leading-[3rem]">
              <p>
              Software development, Project Management, Data Analysis, Monitoring, Evaluation and Reporting, Data Management, Capacity building, Cybersecurity, 
                Open Source technologies,
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
