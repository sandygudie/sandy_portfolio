/* eslint-disable @next/next/no-img-element */
import React from "react";
import Masonry from "react-masonry-css";

export default function OpenSource() {
  const opensourcedata = [
    {
      id: 0,
      name: "Open Science community Saudia Arabia",
      link: "https://osc-ksa.com/",
      imageUrl: "images/osca-logo.png",
    },

    {
      id: 2,
      name: "The Turning Way",
      link: "https://the-turing-way.netlify.app/index.html",
      imageUrl: "images/turingway.png",
    },
    {
      id: 1,
      name: "Layer 5",
      link: "https://layer5.io/",
      imageUrl: "images/layer-logo.png",
    },
  ];
  return (
    <div className="mt-24 lg:mt-40 pb-3 lg:p-0">
      <h1 className="font-bold mb-8 lg:mb-12 mx-auto text-center text-2xl md:text-3xl lg:text-4xl">
        Open Source Communities <span className="hidden md:inline"></span>
      </h1>
      <Masonry
        breakpointCols={2}
        className="flex items-center justify-center mx-auto w-full md:w-1/3 lg:w-[40%] xl:w-2/6"
      >
        {opensourcedata.map((item) => {
          return (
            <div className="m-2 w-28 lg:w-48" key={item._id}>
              <a href={item.link} rel="noreferrer" target="_blank">
                <img
                  src={item.imageUrl}
                  className="rounded-2xl w-full"
                  alt={item.name}
                />
              </a>
            </div>
          );
        })}
      </Masonry>
    </div>
  );
}


