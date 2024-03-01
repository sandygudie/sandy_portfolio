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
          My name is Goodnews Sandy, I am an experienced software developer with
          expertise in building innovative web applications. I build efficient
          solutions that help business and organizations achieve their goals.
        </p>

        <p className="">
          I contribute to open source project and I enjoy writing, check out my articles on{" "}
          <a className="underline text-white" target="_blank" rel="noreferrer" href="https://sandygoody.medium.com/">
            Medium
          </a>
          .
        </p>

        <div className="mt-4 md:mt-8">
          

          <div className="flex-col md:flex-row flex items-start gap-x-12 py-4 md:py-6 justify-start basis-[60%] lg:basis-[40%] text-gray-100">
            <h3 className="text-xl md:text-2xl text-white w-36 font-medium">
              Tech Stack
            </h3>
            <div className="text-left !text-[1.2rem] md:!text-[23px] !leading-[3rem]">
              <p>
              HTML, CSS, React, Vue, NextJs, Vite, Jquery, JavaScript,
                TypeScript,{" "}
              </p>
              <p >
                Sass, Styled-Component, TailwindCSS, Chakra-UI, Material-UI,
              </p>

              <p >
                NodeJs, ExpressJs, NestJs, Firebase, MongoDB, MySQL,{" "}
              </p>
              <p >Github Actions, Docker-Compose, Cypress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
