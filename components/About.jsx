import React from "react";
import Image from "next/image";
import profileImage from "../assets/images/profile-image.PNG";

function About() {
  return (
    <div id="aboutme" className="shadow-lg w-full pt-8 pb-32 ">
      <div className="w-10/12 m-auto ">
        <h1 className=" text-center font-bold py-1 mt-12 text-primary text-2xl md:text-left md:text-3xl">
          About Me
        </h1>

        <div className="flex flex-col-reverse justify-between items-center gap-x-4 xl:flex-row mt-4">
          <div className="text-justify basis-3/5 leading-10 text-lg">
            <p className="pt-2">
              Hi!
              <span role="img" aria-label="wave">
                👋
              </span>
              , My name is <span className="text-primary">Goodnews Sandy.</span>{" "}
              <br /> I am an experienced{" "}
              <span className="text-primary">Frontend developer </span>,{" "}
              <span className="text-primary">Tech Instructor </span>
              and <span className="text-primary">Writer. </span>I enjoy building
              web-based applications that leaves a lasting impression on users.
              I am big on performance, accessibilty and simplicity.{" "}
            </p>
            <p className="pt-2">
              I contribute to open source and write articles on{" "}
              <span className="text-primary">
                <a href="https://sandygoody.medium.com">Meduim.</a>
              </span>{" "}
              And, i love the thrills of Startups.
            </p>
            <div className="pt-2">
              {" "}
              Some tools/technologies i have work with include:
              <div>
                <p>
                  {" "}
                  <span className="text-primary">Technologies: </span> HTML,
                  CSS, SASS, TypeScript, JavaScript,
                </p>
                <p>
                  <span className="text-primary">Styling libraries: </span>
                  TailwindCSS, Material-UI
                </p>
                <p>
                  <span className="text-primary">Framework/Libraries :</span> ReactJs,
                  Vite, NextJs, Gatsby, Redux
                </p>
                <p>
                  <span className="text-primary">Backend Tools:</span> NodeJs
                  Firebase
                </p>
              </div>
            </div>
            <a
              className="rounded-md p-2 font-bold border border-white bg-white w-24 text-secondary hover:bg-transparent md:hidden"
              href="https://docs.google.com/document/d/1TGO4P6XlqEZfvw5tUH4uoEaLKvWILtxAAinyAPIGC8U/edit?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              Resume
            </a>
          </div>
          <div>
            <Image
              src={profileImage}
              alt="Photo"
              width={350}
              height={350}
              objectFit="cover"
              className="rounded-full"
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
