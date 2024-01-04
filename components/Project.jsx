import Image from "next/image";
import React from "react";
import { projects } from "../data";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/router";
import { FaGithub } from "react-icons/fa";

export default function Project({ viewProjects, setViewProjects }) {
  const router = useRouter();

  return (
    <section id="project" className="px-6 md:px-12 ">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl md:text-6xl">PROJECTS</h2>
        <hr className="border-gray border w-full" />
      </div>

      <div className="w-12/12 flex flex-wrap gap-x-6 md:gap-12 items-start justify-between lg:justify-center m-auto pb-12">
        {projects.map((item, i) => {
          return (
            (!viewProjects ? i <= 3 : i <= projects.length) && (
              <a
                rel="noreferrer"
                target="_blank"
                href={item.link}
                className="group relative h-auto w-full md:w-[45%] lg:w-[40%] mt-8  md:mt-12 lg:mx-6"
                key={item.id}
              >
                <Image
                  src={item.image}
                  alt="Photo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  loading="lazy"
                  layout="responsive"
                  objectFit="contain"
                  className="transition-transform ease-in delay-100 hover:scale-110 duration-200"
                  key={item.id}
                  placeholder="blur"
                  blurDataURL="https://media.tenor.com/UnFx-k_lSckAAAAC/amalie-steiness.gif"
                />

                <div className="w-full">
                  <div className="pt-4">
                    {" "}
                    <div className="flex items-center justify-between">
                      <p className="text-sm lg:text-2xl font-medium">
                        {item.name}
                      </p>
                      <div className="flex text-sm justify-between items-center gap-4">
                        <a rel="noreferrer" target="_blank" href={item.link}>
                          View Site
                        </a>
                        <a
                          href={item.githubLink}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {" "}
                          <FaGithub className="text-sm md:text-lg text-gray-100" />
                        </a>
                      </div>
                    </div>
                    <p className="my-3 text-sm md:text-base font-thin text-gray-100">
                      {item.description}
                    </p>
                    {viewProjects && (
                      <div className="hidden mt-2 md:flex gap-2 items-center flex-wrap">
                        {item.tools.map((ele, index) => (
                          <p
                            className="text-[12px] w-fit px-2 py-1 text-white bg-gray-100 rounded-full"
                            key={index}
                          >
                            {ele}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </a>
            )
          );
        })}
      </div>

      {!viewProjects && (
        <div className="my-8 text-center">
          <button
            onClick={() => router.push("/projects")}
            className="border bg-white text-black border-gray-100 hover:text-white hover:bg-transparent 
            rounded-full w-24 h-24 md:w-32 md:h-32 md:p-8 text-xs md:text-[18px]"
          >
           All Projects
           <BsArrowRight className="text-lg md:text-2xl mx-auto mt-1.5" />
          </button>
        </div>
      )}
    </section>
  );
}
