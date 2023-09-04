/* eslint-disable @next/next/no-img-element */
import React from "react";
import Masonry from "react-masonry-css";

export default function Test() {
    const breakpointColumnsObj = {
        default: 2,
        1100: 2,
        700: 2,
      };
    const project = [
        {
          id: 1,
          name: "Mainstack-ui",
          tools: ["Vite(ReactJs)", "TypeScript", "TailwindCSS"],
          link: "https://mainstack-ui-test.netlify.app/",
          image: "images/mainstack.png",
        },
        {
            id:2,
            name: "Akaani",
            tools: ["ReactJs", "TypeScript", "TailwindCSS"],
            link: "https://akaani-assessment.netlify.app/",
            image: "images/akani.png",
          },
          {
            id:3,
            name: "Sendfreight",
            tools: ["Vite(ReactJs)", "TypeScript", "TailwindCSS"],
            link: "https://sendfreight-testpage.netlify.app",
            image: "images/sendfrieght.png",
          },
        
          {
            id:4,
            name: "HR-Work",
            tools: ["HTML", "CSS", "Javascript"],
            link: "https://hr-work.netlify.app/",
            image: "images/hr-work.png",
          },
        
        
      ];
    
      return (
        
        <div className="w-12/12  m-auto py-12">
            <div
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="0"
              className="flex flex-wrap items-center justify-center"
            >
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex w-full lg:w-[95%]"
              >
                {project.map((item) => {
                  return (
                    <div
                      className="group relative m-1 overflow-hidden my-4 lg:mx-6 md:my-10 rounded-2xl hover:scale-110 hover:transition duration-300 ease-out"
                      key={item.id}
                    >
                      <img
                        src={item.image}
                        className="rounded-xl"
                        alt={item.description}
                      />
    
                      <a
                        href={item.link}
                        className="hidden group-hover:block absolute bottom-0 h-screen bg-gradient-to-t from-dark/80 p-3 md:p-8 w-full"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <div className="flex flex-col justify-end h-full">
                          {" "}
                          <p className=" w-48 md:full text-sm md:text-xl font-extrabold pb-2">{item.name}</p>
                          <p className="text-[8px] md:text-xs font-thin ">{item.description}.</p>
                          <div className="hidden mt-2 md:flex gap-2 items-center">
                            {item.tools.map((ele, index) => (
                              <p
                                className="text-[8px] w-fit px-2 py-1 text-dark bg-white rounded-full"
                                key={index}
                              >
                                {ele}
                              </p>
                            ))}
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </Masonry>
            </div>
          </div>
       
      );
    }
    