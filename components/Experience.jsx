import React, { useState } from "react";
import Blog from "./Blog";
import OpenSource from "./OpenSource";
import Projects from "./Projects";

export default function Experience({ opensourcedata }) {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabitem = [
    {
      id: 0,
      tab: "tab1",
      name: "Projects",
    },
    {
      id: 1,
      tab: "tab2",
      name: "Blogs",
    },
    {
      id: 2,
      tab: "tab3",
      name: "Open Source",
    },
  ];
  return (
    <div className="shadow-lg">
      <div id="project" className="py-[5em] w-10/12 m-auto">
        <h1 className="my-6 text-center font-bold py-2 mt-12 text-primary text-2xl md:text-3xl">
          Projects
        </h1>

        <ul className="text-base rounded-lg md:m-auto flex items-center justify-between md:justify-center pt-4 pb-8">
          {tabitem.map((item) => {
            return (
              <li
                key={item.id}
                className={`${
                  activeTab === item.tab ? "bg-primary" : "hover:text-primary"
                }  px-2 lg:px-9 py-2 text-center cursor-pointer rounded-lg `}
                onClick={() => {
                  setActiveTab(item.tab);
                }}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
        <div>
          {activeTab === "tab1" ? (
            <Projects />
          ) : activeTab === "tab2" ? (
            <Blog />
          ) : (
            <OpenSource opensourcedata={opensourcedata} />
          )}
        </div>
      </div>
    </div>
  );
}
