/* eslint-disable @next/next/no-img-element */
import React from "react";
import Masonry from "react-masonry-css";

// import OpenSource from "./OpenSource";

export default function Project() {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 2,
  };

  const project = [
    {
      id: 7,
      name: "SportBase",
      description: "A task management board application.",
      tools: [
        "Nextjs",
        "TypeScript",
        "TailwindCSS",
        "Sanity",
        "MongoDB",
        "Stripe",
      ],
      link: "https://sportbase.netlify.app/",
      image: "images/sportbase.PNG",
    },
    {
      id: 3,
      name: "Moocs",
      description: "A task management board application.",
      tools: ["Vite(ReactJs)", "TypeScript", "TailwindCSS", "Redux Toolkit"],
      link: "https://moocs-client.netlify.app/",
      image: "images/mooc.PNG",
    },
    {
      id: 4,
      name: "QuizBase",
      description: "A task management board application.",
      tools: ["Vite(ReactJs)", "TypeScript", "TailwindCSS", "Redux Toolkit"],
      link: "https://quizbase.netlify.app/",

      image: "images/QuizBase.png",
    },
    {
      id: 8,
      name: "QuizApp",
      description: "A task management board application.",
      tools: ["Vite(ReactJs)", "TypeScript", "TailwindCSS", "Redux Toolkit"],
      link: "https://quizbase.netlify.app/",
      image: "images/Quizapp.png",
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
    <div className="">
      <div className="w-11/12 md:w-10/12 m-auto py-24 lg:py-40">
        <p className="pb-12 font-bold text-2xl md:text-4xl lg:text-5xl flex items-center justify-center">
          Project Gallery
        </p>
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
                  className="m-1 lg:mx-3 my-6 rounded-2xl  bg-white hover:scale-110 hover:transition duration-300 ease-out"
                  key={item.id}
                >
                  <a href={item.link} rel="noreferrer" target="_blank">
                    <img
                      src={item.image}
                      className="rounded-xl"
                      alt={item.description}
                    />
                  </a>
                </div>
              );
            })}
          </Masonry>
        </div>
        {/*      
        <OpenSource /> */}
      </div>
    </div>
  );
}
