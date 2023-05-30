/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMedium } from "react-icons/ai";

import { useForm, ValidationError } from "@formspree/react";

function Footer() {
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
  const [state, handleSubmit] = useForm("mlevprop");
  if (state.succeeded) {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  }
  return (
    <div className="bg-white">
      <div className="py-16 lg:py-36 w-11/12 lg:flex gap-x-40 justify-center items-center text-primary-light text-align-center m-auto">
        <div className="lg:w-1/2">
          <p className="font-bold text-3xl lg:text-5xl">
            Looking forward to working with everyone!
          </p>
        </div>
        <div className="pt-8 lg:pt-0">
          <p className="p-4 text-sm font-bold shadow-primary-light shadow-md">
            <MdEmail className="inline pr-2 text-2xl" /> goodnewssandy@gmail.com
          </p>
          <p className="p-4 text-sm font-bold my-6 shadow-primary-light shadow-md">
            {" "}
            <BsFillTelephoneFill className="inline pr-2 text-2xl" /> +234 813
            342 9514
          </p>
          <div className="p-4 text-sm font-bold shadow-primary-light shadow-md">
            <div className="items-start gap-2 flex">
              {links.map((item) => {
                return (
                  <a
                    key={item.id}
                    className=" border-[1px] border-primary-light p-2 rounded-full hover:text-black hover:border-black"
                    href={item.link}
                  >
                    {item.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <p className=" text-primary-light font-bold text-center py-6 mt-8 text-sm">
        All rights reserved. {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default Footer;
