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
      name: "Open Innovation",
      community: "Open Science Community Saudi Arabia",
      description:
        "",
      contributions: [
        {
          name: "Open Innovation",
          link: "https://moocs-client.netlify.app/",
        },
        {
          name: "Official Website",
          link: "https://osc-ksa.com/",
        },
        {
          name: "Blog",
          link: "https://oscsa-en-blog.netlify.app/",
        },
      ],
      link: "https://osc-ksa.com/",
      image: "images/osca-logo.png",
    },

    {
      id: 2,
      community: "Turning way",
      name: "Community Handbook",
      contributions: [
        {
          name: "Community Handbook",
          link: "https://moocs-client.netlify.app/",
        },
        
      ],
      description:
        "Created content on “Hybrid Collaboration” for the community handbook",
      // tools: ["Jupter Book"],
      link: "https://moocs-client.netlify.app/",
      image: "images/turingway.png",
    },

    {
      id: 3,
      community: "Layer5",
      name: "OSCSA",
      description: "MOOCs to learn Open Science Courses.",
      contributions: [
        {
          name: "Community Handbook",
          link: "https://moocs-client.netlify.app/",
        },
        
      ],
      link: "  ",
      image: "images/layer-logo.png",
    },
   
  ];

  return (
    <div className="my-32 relative px-6 md:px-12 ">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl md:text-6xl">OPEN SOURCE</h2>
        <hr className="border-gray border w-full" />
      </div>
    
      <div className=" w-11/12 mx-auto flex relative mt-12 justify-center items-center flex-wrap">
     
        {project.map((item) => {
          return (
            <div
              className="md:w-1/2 lg:w-auto flex items-center group gap-6 justify-between hover:scale-110 hover:transition duration-300 ease-out"
              key={item.id}
            >
             <div className="">
             <img
                src={item.image}
                className="rounded-xl w-64 h-24 md:w-72 md:h-48"
                alt={item.description}
              />
             </div>
              <a
                href={item.link}
                className="w-full"
                rel="noreferrer"
                target="_blank"
              >
                <div className="text-base text-gray-100  flex flex-col justify-end h-full">
                  <p>Contributions</p>
                  {item.contributions.map((ele, index)=>{
                    return(
                      <a  key={index} href={ele.link} className="text-sm underline">
                     {ele.name}
                  </a>
                    )
                  })}
                 
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
