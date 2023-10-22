import React from "react";

export default function AboutMe() {
  return (
    <section id="aboutme" className="pt-36  px-6 md:px-12  ">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl md:text-6xl">ABOUT ME</h2>
        <hr className="border-gray border w-full" />
      </div>
      <div className="mt-8 lg:pl-32 lg:pr-8 text-xl text-gray-100 text-justify leading-[2em]">
        {/* <p>
          I am a passionate web developer with 15 year of experience in creating
          custom websites and web applications. My mission is to help businesses
          and organizations achieve their goals through effective and efficient
          web development solutions.
        </p> */}
        <p className="leading-[2rem]">
          My name is Goodnews Sandy, I am an experience fullstack devloper with
          expertise in building innovative web applications that are user
          friendly and interactive. With deep knowledge of user experience and
          design patterns, I build applications using high-quality code that is
          easy to maintain and scalable. I always exceed my clients expectations
          and deliver exceptional results.
        </p>
        <br />
        <p>
          I enjoy writing and sharing my knowledge, I have a couple of articles
          on{" "}
          <a className="underline" href="sandygoody.medium.com">
            Medium
          </a>
          . I also mentor upcoming beginners to learn software development
          skills.
        </p>
        <div>
          <div className="flex-col md:flex-row flex items-start justify-between gap-8">
            <div className="leading-[2rem] basis-1/2 text-gray-100 text-lg">
              {" "}
              <h3 className="text-xl text-white font-medium mt-8">Services</h3>
              <p>Web Development</p>
              <p>Unit Testing</p>
              <p>Devops</p>
              <p>Technical Writing</p>
              <p>Mentoring</p>
              <p>SEO Optimation</p>
              <p>Localisation</p>
              <p>Community and </p>
              <p>Speaking Engagement</p>
            </div>
            <div className="leading-[2rem] basis-1/2 text-lg text-gray-100">
              <h3 className="text-xl text-white font-medium mt-8">
                Technologies I Use
              </h3>
              <p className="my-2 text-lg">
                HTML, CSS, Javascript, Python, Jquery, Typescript, React, Vue,
                NextJs, Vite, Webpack, Templating-Engines(EJS, Handlebars), Quarto{" "}
              </p>
              
              <p>
                Sass, CSS-in-Js, Styled-Component, TailwindCSS, Chakara-UI, Material-UI, Twin macro, framer-motion
              </p>
              <p>Figma, Canva, PhotoShop, Adobe</p>
              <p className="my-2 text-lg">
                NodeJs, ExpressJs, NestJs, Firebase, Rest-API, Apollo-GraphQL{" "}
              </p>
              <p>Npm/Yarn, i18n, Slack, Jira, Asana, Trello</p>
              <p>Goggle Analytics, Lighthouse</p>
              <p className="my-2 text-lg">MongoDB, MySQL, PostgreSQL</p>
              <p className="my-2 text-lg">Github Actions, Docker, Cypress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
