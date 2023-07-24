/* eslint-disable @next/next/no-img-element */
import React from "react";
import Masonry from "react-masonry-css";

export default function Project() {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 2,
  };

  const project = [
    {
      id: 1,
      name: "SportBase",
      description: "Shop all your sport needs.",
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
      id: 2,
      name: "Open Innovation",
      description: "MOOCs to learn Open Science Courses.",
      tools: ["Vite(ReactJs)", "TypeScript", "Sass"],
      link: "https://moocs-client.netlify.app/",
      image: "images/mooc.PNG",
    },
    {
      id: 3,
      name: "QuizBase",
      description: "Rest API for programming quizzes",
      tools: ["NodeJs", "Express", "MongoDB", "Docusarus"],
      link: "https://quizbase.netlify.app/",
      image: "images/QuizBase.png",
    },
    {
      id: 4,
      name: "QuizApp",
      description: "Test your knowledge of popular programming languages.",
      tools: ["Nextjs", "TypeScript", "TailwindCSS"],
      link: "https://app-quizs.netlify.app/",
      image: "images/Quizapp.png",
    },
    {
      id: 5,
      name: "Kanban",
      description: "A Saas project management board ",
      tools: ["Vite(ReactJs)", "TypeScript", "TailwindCSS", "Redux Toolkit"],
      link: "https://kanban-management-app.netlify.app/",
      image: "images/kanban.PNG",
    },
    {
      id: 6,
      name: "Invoice App",
      description: "Manage your invoices",
      tools: [
        "React",
        "Typescript",
        "TailwindCSS",
        "Framer-motion",
        "Formik-yup",
      ],
      link: " https://app-invoice.netlify.app/",
      image: "images/Invoice.jpg",
    },

    {
      id: 7,
      name: "Defiants",
      description: "Empowering Web3 communities",
      tools: ["NextJs", "TailwindCSS", "Sanity.io"],
      link: "https://defiants-defiants.vercel.app/",
      image: "images/defiants.PNG",
    },
    {
      id: 8,
      name: "My Networth",
      description: "Track all your assests in one place",
      tools: ["HTML", "SCSS", "Javascript"],
      link: "https://mynetworth.netlify.app/",
      image: "images/Networth.PNG",
    },
    {
      id: 8,
      name: "Launmax",
      description: "Fast Laundry Service for Lagos Residents",
      tools: ["HTML", "SCSS", "Javascript"],
      link: " https://launmax.netlify.app/",
      image: "images/Launmax.PNG",
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
    </div>
  );
}
