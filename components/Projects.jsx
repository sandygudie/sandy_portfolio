import React from "react";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import invoiceImage from "../assets/images/Invoice.png";
import pomodoroImage from "../assets/images/Pomodoro.png";
import commentImage from "../assets/images/Comment.png";
import networthImage from "../assets/images/Networth.PNG";
import shoeAppImage from "../assets/images/ShoppingApp.png";
import kanbanImage from "../assets/images/kanban.PNG";
import LaunmaxImage from "../assets/images/Launmax.PNG";

function Projects() {
  const project = [
    {
      id: 0,
      name: "Kanban Management App",
      description: "A task management board application.",
      tools: ["Vite(ReactJs)", "TypeScript", "TailwindCSS", "Redux Toolkit"],
      link: "https://kanban-management-app.netlify.app/",
      Github_link: "https://github.com/sandygudie/Kanban-App",
      image: kanbanImage,
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
      image: invoiceImage,
    },
    {
      id: 2,
      name: "Pomodoro Stop-watch",
      description: " A Pomodoro timer with control settings.",
      tools: ["HTML", "SASS", "WebPack", "Javascript"],
      link: " https://pomodoro-stopwatch.netlify.app/",
      Github_link: "https://github.com/sandygudie/Pomodoro-Timer",
      image: pomodoroImage,
    },
    {
      id: 3,
      name: "Comment App",
      description: "Interactive Comment App.",
      tools: ["Typescript", "Nextjs", "TailwindCSS", "Context-Api"],
      link: "https://app-interactive-comments.netlify.app/",
      Github_link: "https://github.com/sandygudie/interactive-comments",
      image: commentImage,
    },
    {
      id: 4,
      name: "NetWorth",
      description: "Keep track of your assets.",
      tools: ["HTML", "SASS", "Javascript"],
      link: "https://mynetworth.netlify.app/",
      Github_link: "https://mynetworth.netlify.app/",
      image: networthImage,
    },

    {
      id: 5,
      name: "Shopping App",
      description: "Ecommerce App for women's Shoes.",
      tools: ["HTML", "SASS", "Javascript", "Contentful"],
      link: "https://womenheels.netlify.app/ ",
      Github_link: "https://github.com/sandygudie/shoppingcart",
      image: shoeAppImage,
    },

    {
      id: 7,
      name: "LaunMax",
      description: "An on-demand Laundy service.",
      tools: ["HTML", "SASS", "Javascript"],
      link: "https://launmax.netlify.app/",
      Github_link: "https://github.com/sandygudie/launmax",
      image: LaunmaxImage,
    },
  ];

  return (
    <div className="my-8 flex justify-center flex-wrap gap-10">
      {project.map((item) => {
        return (
          <a href={item.link}
            key={item.id}
            className="hover:scale-110 hover:transition duration-300 ease-out w-[30rem] h-auto rounded-xl my-6 shadow-xl shadow-gray-500/40 "
          >
            <Image
              src={item.image}
              alt="Photo"
              height={700}
              layout="responsive"
              objectFit="contain"
              quality={100}
              className="rounded-t-2xl"
              key={item.id}
              placeholder="blur"
              blurDataURL="https://media.tenor.com/UnFx-k_lSckAAAAC/amalie-steiness.gif"
            />

            <div className="p-6">
              <div className="rounded-b-xl w-full bg-secondary flex items-center justify-between rounded-b-lg">
                <div>
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="text-xs"> {item.description}</p>
                </div>
                <div className="flex gap-x-4 text-white text-lg">
                  <a href={item.Github_link} rel="noreferrer" target="_blank">
                    {" "}
                    <FaGithub />
                  </a>
                  <a href={item.link}>
                    <BiLinkExternal />{" "}
                  </a>
                </div>
              </div>

              <ul className="w-full flex gap-2 flex-wrap justify-start items-center text-xs mt-4">
                <hr />
                {item.tools.map((list, i) => {
                  return (
                    <li
                      className="text-xs bg-white text-secondary rounded-full px-2 py-1"
                      key={i}
                    >
                      {list}
                    </li>
                  );
                })}
              </ul>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default Projects;
