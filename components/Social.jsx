import React from "react";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMedium } from "react-icons/ai";

export default function Social() {
  const links = [
    {
      id: 0,
      icon: <MdEmail />,
      link: "mailto:goodnewssandy@gmail.com",
      name: "goodnewssandy@gmail.com",
    },
    {
      id: 1,
      icon: <FaGithub />,
      link: "https://github.com/sandygudie",
      name: "github.com/sandygudie",
    },
    {
      id: 2,
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/goodnews-sandy-613936179/",
      name: "linkedin.com/in/goodnews-sandy-613936179",
    },
    {
      id: 3,
      icon: <AiOutlineMedium />,
      link: "https://sandygoody.medium.com/",
      name: "sandygoody.medium.com",
    },
  ];
  return (
    <div>
      <div className="mt-4 items-start gap-2 flex justify-center ">
        {links.map((item) => {
          return (
            <a
              rel="noreferrer"
              target="_blank"
              key={item.id}
              className="flex text-sm hover:underline items-center gap-4 "
              href={item.link}
            >
              <span className="border-[1px] text-white text-sm border-white p-2 rounded-full hover:bg-white hover:text-dark hover:border-white">
                {" "}
                {item.icon}{" "}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
