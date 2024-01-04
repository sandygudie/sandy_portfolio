/* eslint-disable @next/next/no-img-element */
import React from "react";
import Masonry from "react-masonry-css";

export default function OpenSource() {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 2,
  };
  const project = [
    {
      id: 1,
      community: "Open Science Community Saudi Arabia",
      link: "https://osc-ksa.com/",
      image: "images/osca-logo.png",
    },

    {
      id: 2,
      community: "Turning way",
      link: "https://the-turing-way.netlify.app/collaboration/hybrid-collab.html",
      image: "images/turingway.png",
    },
    {
      id: 3,
      community: "Layer5",
      link: "https://layer5.io/",
      image: "images/layer-logo.png",
    },
  ];

  return (
    <div className="mt-24 md:my-32 relative px-6 md:px-12">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl md:text-6xl">OPEN SOURCE</h2>
        <hr className="border-gray border w-full" />
      </div>

      <div className="w-11/12 mx-auto flex relative mt-12 justify-center items-center flex-wrap lg:flex-nowrap">
        {project.map((item) => {
          return (
            <a
              href={item.link}
              className="hover:scale-110 hover:transition duration-300 ease-out"
              key={item.id}
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={item.image}
                className="w-36 md:w-72"
                alt={item.description}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
