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
          My name is Goodnews Sandy, I am a software developer with
          expertise in building innovative and scalable applications. I build efficient
          digital solutions that help business and organizations achieve their goals.
        </p>

        <p className="">
          I contribute to open source communities and support digital transformation projects. I enjoy writing, check out my articles on{" "}
          <a className="underline text-white" target="_blank" rel="noreferrer" href="https://sandygoody.medium.com/">
            Medium
          </a>
          .
        </p>

        <div className="mt-4 md:mt-8">
          

          <div className="flex-col md:flex-row flex items-center gap-x-8 py-4 md:py-6 justify-start basis-[60%] lg:basis-[40%] text-gray-100">
            <h3 className="text-xl md:text-2xl text-white w-64 font-medium">
              Tech Stack
            </h3>
            <div className="text-left !text-[1.2rem] md:!text-[23px] !leading-[3rem]">
              <p>
             JavaScript,
                TypeScript, React, Vue, NextJs, Python, NodeJs, ExpressJs, NestJs, Redis, MongoDB, MySQL, Github Actions, Docker-Compose, Cypress
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
