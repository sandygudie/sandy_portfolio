/* eslint-disable @next/next/no-img-element */
import React from "react";
import Masonry from "react-masonry-css";

export default function OpenSource() {
    const breakpointColumnsObj = {
        default: 2,
        1100: 2,
        700: 2,
      };
    const project = [
      {
        id: 1,
        name: "Open Innovation",
        description: "MOOCs to learn Open Science Courses.",
        tools: ["Vite(ReactJs)", "TypeScript", "Sass"],
        link: "https://moocs-client.netlify.app/",
        image: "images/mooc.PNG",
      },
        
          
      {
        id: 2,
        name: "Community Handbook",
        tools: ["Jupter Book"],
        link: "https://moocs-client.netlify.app/",
        image: "images/handbook.png",
      },
    
      {
        id: 3,
        name: "OSCSA",
        tools: ["HTML", "CSS", "Bootstrap"],
        link: "  https://osc-ksa.com/",
        image: "images/osca.png",
      },
      {
        id: 4,
        name: "OSCA Blog",
        tools: ["Quarto"],
        link: "https://oscsa-en-blog.netlify.app/",
        image: "images/blog-quarto.png",
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
                          <p className=" w-48 md:w-full text-sm md:text-xl font-extrabold pb-2">{item.name}</p>
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
    