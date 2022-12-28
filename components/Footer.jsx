import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMedium } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { useForm, ValidationError } from "@formspree/react";

function Footer() {
  const [state, handleSubmit] = useForm("mlevprop");

  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  };
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
    <div
      id="contact"
      className="text-white text-align-center my-6 w-11/12 m-auto"
    >
      <h1 className="text-center font-bold py-2 mt-12 text-primary text-2xl md:text-3xl">
        Contact
      </h1>

      <form
        onSubmit={
          handleSubmit}
        className="lg:flex text-center items-center justify-center gap-10 my-8"
      >
        <div>
          <textarea
            placeholder="Say Something !"
            id="message"
            name="message"
            className=" text-sm w-full lg:w-80 h-24 bg-transparent outline-none border-solid border-[1px] border-white  p-2 rounded-md"
          />
          {state.errors ? (
            <p className="text-[#b54e4e] text-sm">{state.errors[0]?.message}</p>
          ) : null}
          {state.succeeded ? (
            <p className="text-sm text-tourquise"> Message Sent!</p>
          ) : null}
        </div>
        <button
          className="p-2 text-sm bg-primary rounded-md"
          type="submit"
          disabled={state.submitting}
        >
          {state.submitting ? "Sending..." : "Submit"}
        </button>
      </form>

      <div className=" pt-2 items-center mt-16 flex justify-center">
        {links.map((item) => {
          return (
            <a
              key={item.id}
              className="mr-3 border-[1px] border-white p-2 rounded-full hover:text-primary hover:border-dark"
              href={item.link}
            >
              {item.icon}
            </a>
          );
        })}
      </div>

      <p className="text-center pt-2 mt-2 text-sm">
        All rights reserved. Sandy©2023
      </p>
    </div>
  );
}

export default Footer;
