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
    },
    {
      id: 1,
      icon: <FaGithub />,
      link: "https://github.com/sandygudie",
    },
    {
      id: 2,
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/goodnews-sandy-613936179/",
    },
    {
      id: 3,
      icon: <AiOutlineMedium />,
      link: "https://sandygoody.medium.com/",
    },
  ];
  return (
    <div className="absolute md:fixed bottom-10 left-28 md:left-5 md:top-1/3 items-start gap-2 flex md:flex-col">
      {links.map((item) => {
        return (
          <a
            key={item.id}
            className="border-[1px] text-sm border-[#9D5431] p-2 rounded-full hover:text-[#9D5431] hover:border-white"
            href={item.link}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
}
