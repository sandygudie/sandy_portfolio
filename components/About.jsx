import React from "react";

function About() {
  return (
    <div className="bg-white py-16 md:py-24 lg:py-38 w-full">
      <div className="w-11/12 m-auto">
        <div className="flex flex-col-reverse items-center gap-10 md:gap-20 lg:flex-row mt-4">
          <div className="text-justify basis-[50%] leading-10 text-[17px]">
            <div className="px-0 lg:px-8 rounded-lg text-black">
              <p>
                I am an experienced{" "}
                <span className="text-[#9D5431] font-bold">
                  Full-Stack developer
                </span>{" "}
                ,
                <span className="text-[#9D5431] font-bold">
                  {" "}
                  Tech Instructor
                </span>{" "}
                and
                <span className="text-[#9D5431] font-bold"> Writer</span>. I
                enjoy building web-based applications that leaves a lasting
                impression on users
              </p>
            </div>
            <div className="px-0 py-4 lg:px-8 rounded-lg text-black">
              <p>
                I contribute to Open Source and write about my work on{" "}
                <a
                  href="https://sandygoody.medium.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-[#9D5431] font-bold underline"
                >
                  Medium
                </a>
              </p>
            </div>

            <div className="px-0 lg:px-8 rounded-lg text-black">
              <p>Tools and Technologies i have used includes: </p>
              <div>
                <p className="text-[#9D5431] font-bold">
                  HTML, CSS, SASS, TypeScript, JavaScript, TailwindCSS,
                  Material-UI, ReactJs, Vite, NextJs, Gatsby, Redux, NodeJs,
                  ExpressJs MongoDb, Firebase, Contentful, Sanity.io
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center w-3/5 lg:w-[30ch]">
            <q className="text-3xl md:text-5xl text-black font-bold">
              {" "}
              I build with purpose
            </q>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
