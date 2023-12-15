import React from "react";

export default function AboutMe() {
  return (
    <section id="aboutme" className="pt-36 px-6 md:px-12">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl md:text-6xl">ABOUT ME</h2>
        <hr className="border-gray border w-full" />
      </div>
      <div className="lg:pl-32 lg:pr-8 text-lg md:text-[22px] text-gray-100 leading-[2em]">
        <p className="leading-[2.5em]">
          My name is Goodnews Sandy, I am an experienced software developer with
          expertise in building innovative web applications. I build efficient
          solutions that help business and organizations achieve their goals.
        </p>

        <p className="mt-3">
          I enjoy writing and sharing my knowledge, check out my articles on{" "}
          <a className="underline text-white" href="sandygoody.medium.com">
            Medium
          </a>
          .
        </p>

        <div className="mt-4 md:mt-8">
          <div className="border-y-[1px] py-4 md:py-6 border-gray flex-col gap-x-14 md:flex-row flex md:items-center justify-start leading-[3rem] basis-[60%] lg:basis-[40%] text-gray-100 ">
            {" "}
            <h3 className="text-xl md:text-2xl text-white font-medium w-36">
              Services
            </h3>
            <div className="flex-wrap flex justify-start md:justify-between gap-x-6">
              <p>Web Development</p>
              <p>Open Source</p>
              <p>Technical Writing</p>
              <p>Mentoring</p>
              <p>SEO Optimization</p>
            </div>
          </div>

          <div className=" flex-col md:flex-row flex items-start gap-x-12 py-4 md:py-6 justify-start leading-[3rem] basis-[60%] lg:basis-[40%] text-gray-100 ">
            <h3 className="text-xl md:text-2xl text-white w-36 font-medium">
              Tech Stack
            </h3>
            <div className="text-left">
              <p className="md:mb-4">
                React, Vue, NextJs, Vite, HTML, CSS, Jquery, JavaScript,
                TypeScript,{" "}
              </p>
              <p className="md:mb-4">
                Sass, Styled-Component, TailwindCSS, Chakra-UI, Material-UI,
                Framer-motion
              </p>

              <p className="md:mb-4">
                NodeJs, ExpressJs, NestJs, Firebase, GraphQL, MongoDB, MySQL,
                PostgreSQL{" "}
              </p>
              <p className="md:mb-4">Github Actions, Docker-Compose, Cypress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
