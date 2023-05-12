/* eslint-disable @next/next/no-img-element */
import React from "react";
import Masonry from "react-masonry-css";
import Blog from "./Blog";
import OpenSource from "./OpenSource";

function Projects() {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    // 500: 1
  };

  const project = [
    {
      id: 3,
      name: "Moocs",
      description: "A task management board application.",
      tools: ["Vite(ReactJs)", "TypeScript", "TailwindCSS", "Redux Toolkit"],
      link: "https://kanban-management-app.netlify.app/",
      Github_link: "https://github.com/sandygudie/Kanban-App",
      image: "images/mooc.PNG",
    },
    {
      id: 4,
      name: "QuizBase",
      description: "A task management board application.",
      tools: ["Vite(ReactJs)", "TypeScript", "TailwindCSS", "Redux Toolkit"],
      link: "https://kanban-management-app.netlify.app/",
      Github_link: "https://github.com/sandygudie/Kanban-App",
      image: "images/QuizBase.png",
    },

    {
      id: 0,
      name: "Kanban Management App",
      description: "A task management board application.",
      tools: ["Vite(ReactJs)", "TypeScript", "TailwindCSS", "Redux Toolkit"],
      link: "https://kanban-management-app.netlify.app/",
      Github_link: "https://github.com/sandygudie/Kanban-App",
      image: "images/kanban.PNG",
    },
    {
      id: 1,
      name: "Invoice App",
      description: "An app to view, create and filter invoices.",
      tools: [
        "React",
        "Typescript",
        "TailwindCSS",
        "Framer-motion",
        "Formik-yup",
      ],
      link: " https://app-invoice.netlify.app/",
      Github_link: "https://github.com/sandygudie/Invoice-App",
      image: "images/Invoice.jpg",
    },

    {
      id: 2,
      name: "Defiants",
      description: "Official Website for Defiants",
      tools: ["NextJs", "TailwindCSS", "Sanity.io"],
      link: "https://defiants-defiants.vercel.app/",
      image: "images/defiants.PNG",
    },
  ];

  return (
    <div className="bg-[#1B1F24]">
      <div className="w-10/12 m-auto py-12 md:py-24 lg:py-40">
        <div
          data-aos="zoom-in"
          // data-aos-dalay="500"
          data-aos-duration="1200"
          className="flex flex-wrap items-center justify-center"
        >
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-full lg:w-[95%]"
            columnClassName=""
          >
            <p
              className="p-4 md:p-8 font-bold lg:h-64 
            lg:w-72 text-2xl md:text-4xl lg:text-5xl flex items-center justify-center"
            >
              Project Gallery
            </p>
            {project.map((item) => {
              return (
                <div
                  className="m-1 lg:m-3 rounded-2xl p-4 bg-white hover:scale-110 hover:transition duration-300 ease-out"
                  key={item.id}
                >
                  <a href={item.link} rel="noreferrer" target="_blank">
                    <img src={item.image} alt={item.description} />
                  </a>
                </div>
              );
            })}
          </Masonry>
        </div>
        <div className="my-28 lg:my-48 mx-auto  text-center md:w-1/2 xl:w-[50ch]">
          <q className="text-3xl md:text-4xl lg:text-5xl  text-white font-bold">
            {" "}
            I am commited to getting this done
          </q>
        </div>
        <Blog />
        <OpenSource />
      </div>
    </div>
  );
}

export default Projects;
