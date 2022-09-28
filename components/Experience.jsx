import React, { useState } from "react";
import Blog from "./Blog";
import Projects from "./Projects";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div id="project" className="py-[5em] w-11/12 m-auto">
      <h1 className="text-center font-bold py-2 mt-12 text-primary text-lg md:text-2xl">
        Experience
      </h1>

      <ul className="border-primary rounded-lg m-auto w-fit flex items-center my-8">
        <li
          className={`${
            activeTab === "tab1" ? "bg-primary" : "hover:text-primary"
          }  px-9 py-2 text-center cursor-pointer rounded-lg `}
          onClick={() => {
            setActiveTab("tab1");
          }}
        >
          Projects
        </li>
        <li
          className={`${
            activeTab === "tab2" ? "bg-primary" : "hover:text-primary"
          }  px-9 py-2 text-center cursor-pointer rounded-lg`}
          onClick={() => {
            setActiveTab("tab2");
          }}
        >
          Blog
        </li>
      </ul>
      <div>{activeTab === "tab1" ? <Projects /> : <Blog />}</div>
    </div>
  );
}
