import React from "react";

export default function AboutMe() {
  return (
    <section id="aboutme" className="pt-36  px-6 md:px-12  ">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl md:text-6xl">ABOUT ME</h2>
        <hr className="border-gray border w-full" />
      </div>
      <div className="mt-8 lg:pl-32 lg:pr-8 text-xl text-gray-100 text-justify leading-[2em]">
        <p className="leading-[3rem]">
          My name is Goodnews Sandy, I am an experienced software developer with
          expertise in building innovative web applications. I build efficient
         solutions that  help business and organizations achieve their goals.
        </p>
        
        <p className="mt-3">
          I enjoy writing and sharing my knowledge, I have a couple of articles
          on{" "}
          <a className="underline text-white" href="sandygoody.medium.com">
            Medium
          </a>.
        </p>
        <div>
          <div className="flex-col md:flex-row flex items-start justify-between gap-8">
            <div className="leading-[3rem] basis-[40%] text-gray-100 text-lg">
              {" "}
              <h3 className="text-xl text-white font-medium mt-8">Services</h3>
              <p>Web Development</p>
              <p>Open Source</p>
              <p>Technical Writing</p>
              <p>Mentoring</p>
              <p>SEO Optimization</p>

    
            </div>
            <div className="leading-[3rem]  text-lg text-gray-100">
              <h3 className="text-xl text-white font-medium mt-8">
                Technologies I Use
              </h3>
              <p className="my-2 text-lg">
              React, Vue, NextJs, Vite, HTML, CSS, Jquery, JavaScript, TypeScript, {" "}
              </p>
              <p className="my-2 text-lg">
                Sass, CSS-in-JS, Styled-Component, TailwindCSS, Chakra-UI, Material-UI, Framer-motion
              </p>
              <p>Figma, Canva, PhotoShop, Adobe</p>
              <p className="my-2 text-lg">
                NodeJs, ExpressJs, NestJs, Firebase, GraphQL, MongoDB, MySQL, PostgreSQL{" "}
              </p>
              <p className="my-2 text-lg">Github Actions, Docker-Compose, Cypress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
