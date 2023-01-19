import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMedium } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

function Profile() {
  const links = [
    {
      id: 0,
      icon: <MdEmail />,
      link: "mailto:sandygoodnews@gmail.com",
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
    <>
      <div
        id="profile"
        className="h-screen relative w-full text-white shadow-lg w-6/6"
      >
        <div className="w-full absolute left-2/4 top-2/4 font-bold translate-x-2/4 translate-y-2/4 text-center">
          <p className="text-xl font-bold md:mt-24 xl:text-2xl">Hi!,</p>
          <h2 className="font-bold text-2xl md:text-5xl">
            I am a Frontend Developer
          </h2>
          <h1 className="text-4xl pb-6 font-bold text-red-500 md:text-7xl ">
            I Create Inspiration.
          </h1>
          <div className=" pt-2 items-center flex justify-center">
        {links.map((item) => {
          return (
            <a
              key={item.id}
              className="mr-3 border-[1px] mx-4 border-white p-2 rounded-full hover:text-primary hover:border-red-500"
              href={item.link}
            >
              {item.icon}
            </a>
          );
        })}
      </div>
        </div>
        
      </div>
      
    </>
  );
}

export default Profile;
