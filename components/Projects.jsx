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
      name: "Kanban Task Management App",
      description: "A task management board application.",
      tools: ["Vite(ReactJs)", "TypeScript","TailwindCSS","Redux Toolkit",],
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
      tools: ["HTML", "SASS", "WebPack", "JavaSript"],
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
      name: "Launmax",
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
          <a
            key={item.id}
            className="w-[500px] h-100 rounded-lg my-6 outline-none shadow-lg border-transparent relative hover:border-primary hover:border-[0.5px]"
            href={item.link}
            rel="noreferrer"
            target="_blank"
          >
            <Image
              src={item.image}
              alt="Photo"
              width={400}
              height={300}
              layout="responsive" 
              objectFit="cover"
              quality={100}
              className="rounded-lg"
              priority="lazy"
            />
            {/* <img src={item.image} alt="image" className="rounded-lg h-full w-full" /> */}
            <div className="p-4 absolute w-full bottom-0 bg-secondary shadow-lg rounded-b-lg">
              <div className="flex gap-x-4 text-primary text-xl absolute right-5">
                <a href={item.Github_link} rel="noreferrer" target="_blank">
                  {" "}
                  <FaGithub />
                </a>
                <BiLinkExternal />{" "}
              </div>
              <div>
                <h2 className="text-sm text-primary font-bold">{item.name}</h2>
                <p className="text-xs my-1"> {item.description}</p>

                <ul className="w-full flex gap-x-4 flex-wrap justify-start items-center  text-xs">
                  <span className=" text-primary ">Built with:</span>
                  {item.tools.map((list, i) => {
                    return (
                      <li className="text-xs" key={i}>
                        {list},
                      </li>
                    );
                  })}
                </ul>
              </div>{" "}
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default Projects;
