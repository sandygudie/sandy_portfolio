import React, { useState } from "react";

import invoiceImage from "../public/images/Invoice.png";
import pomodoroImage from "../public/images/Pomodoro.png";
import commentImage from "../public/images/Comment.png";
import networthImage from "../public/images/Networth.PNG";
import shoeAppImage from "../public/images/ShoppingApp.png";
import kanbanImage from "../public/images/kanban.PNG";
import LaunmaxImage from "../public/images/Launmax.PNG";
import DefiantsImage from "../public/images/defiants.PNG";
import Modal from "./Modal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState();
  const [openModal, setOpenModal] = useState(false);
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
      name: "Defiants",
      description: "Official Website for Defiants",
      tools: ["NextJs", "TailwindCSS", "Sanity.io"],
      link: "https://defiants-defiants.vercel.app/",
      image: DefiantsImage,
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
      id: 6,
      name: "LaunMax",
      description: "An on-demand Laundy service.",
      tools: ["HTML", "SASS", "Javascript"],
      link: "https://launmax.netlify.app/",
      Github_link: "https://github.com/sandygudie/launmax",
      image: LaunmaxImage,
    },
  ];

  return (
    <div className="my-12 md:my-20 w-full md:w-4/6 m-auto flex flex-wrap items-center justify-center gap-12">
      {project.map((item, index) => {
        return (
          <>
            <p
              key={item.id}
              onClick={() => {
                setOpenModal(true), setSelectedProject(index);
              }}
              className="rounded-lg font-semibold bg-primary p-4 text-base md:text-lg cursor-pointer hover:scale-110 hover:transition rounded-2xl duration-300 ease-out"
            >
              {item.name}
            </p>

            {openModal && selectedProject === index && (
              <Modal
                item={item}
                handleModalChange={() => setOpenModal(false)}
              />
            )}
          </>
        );
      })}
    </div>
  );
}

export default Projects;
