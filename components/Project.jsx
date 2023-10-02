import Image from "next/image";
import React from "react";
import Masonry from "react-masonry-css";

export default function Project() {
  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    700: 2,
  };
  const project = [
    {
      id: 5,
      name: "Kanban",
      description: "A Saas project management board",
      tools: ["Vite(ReactJs)", "TypeScript", "TailwindCSS", "Redux Toolkit"],
      link: "https://kanban-management-app.netlify.app/",
      image: "/images/kanban.svg",
    },
    {
      id: 10,
      name: "DevLinks",
      description: "Manage your social links in one place",
      tools: ["VueJs", "TypeScript", "TailwindCSS"],
      link: "https://devlinks-client.onrender.com/login",
      image: "/images/devlinks.svg",
    },

    {
      id: 1,
      name: "SportBase",
      description: "Shop all your sport needs.",
      tools: [
        "Nextjs",
        "TypeScript",
        "TailwindCSS",
        "Sanity",
        "MongoDB",
        "Stripe",
      ],
      link: "https://sportbase.netlify.app/",
      image: "/images/sportbase.svg",
    },

    {
      id: 6,
      name: "Invoice App",
      description: "Manage your invoices",
      tools: [
        "React",
        "Typescript",
        "TailwindCSS",
        "Framer-motion",
        "Formik-yup",
      ],
      link: " https://app-invoice.netlify.app/",
      image: "/images/Invoice.jpg",
    },
    {
      id: 9,
      name: "CountryName-flag",
      description:
        "React NPM package for getting countryname,flag and countrycode",
      tools: ["Parcel", "Typescript", "Eslint", "NPM"],
      link: " https://www.npmjs.com/package/react-countryname-flag",
      image: "/images/npm-package.png",
    },

    {
      id: 4,
      name: "QuizApp",
      description: "Test your knowledge of popular programming languages.",
      tools: ["Nextjs", "TypeScript", "TailwindCSS"],
      link: "https://app-quizs.netlify.app/",
      image: "/images/quizapp.png",
    },
    {
      id: 7,
      name: "Defiants",
      description: "Empowering Web3 communities",
      tools: ["NextJs", "TailwindCSS", "Sanity.io"],
      link: "https://defiants-defiants.vercel.app/",
      image: "/images/defiants.svg",
    },
    {
      id: 8,
      name: "My Networth",
      description: "Track all your assests in one place",
      tools: ["HTML", "SCSS", "Javascript"],
      link: "https://mynetworth.netlify.app/",
      image: "/images/networth.svg",
    },
    {
      id: 8,
      name: "Launmax",
      description: "Fast Laundry Service for Lagos Residents",
      tools: ["HTML", "SCSS", "Javascript"],
      link: " https://launmax.netlify.app/",
      image: "/images/lunmax.svg",
    },
  ];
  return (
    <div className="mt-32">
      <h2 className="text-6xl">MY WORK</h2>

      <div className="w-12/12 flex flex-wrap gap-8 items-center justify-center m-auto pb-12">
        {/* <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex flex-wrap items-center justify-between w-full"
        > */}
        {project.map((item) => {
          return (
            <div
              className="group relative h-auto w-[45%] mt-12 lg:mx-6"
              key={item.id}
            >
              <Image
                src={item.image}
                alt="Photo"
                width={0}
                height={0}
                sizes="100vw"
                loading="lazy"
                layout="responsive"
                objectFit="cover"
                className="transition-transform ease-in delay-100 hover:scale-110 duration-200"
                key={item.id}
                // placeholder="blur"
                // blurDataURL="https://media.tenor.com/UnFx-k_lSckAAAAC/amalie-steiness.gif"
              />

              <a
                href={item.link}
                className="w-full"
                rel="noreferrer"
                target="_blank"
              >
                <div className="pt-4">
                  {" "}
                  <p className="w-48 md:w-full text-sm md:text-xl font-bold">
                    {item.name}
                  </p>
                  <p className="text-[8px] md:text-base font-thin ">
                    {item.description}.
                  </p>
                  <div className="hidden mt-2 md:flex gap-2 items-center">
                    {item.tools.map((ele, index) => (
                      <p
                        className="text-[10px] w-fit px-2 py-1 text-dark bg-white rounded-full"
                        key={index}
                      >
                        {ele}
                      </p>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          );
        })}
        {/* </Masonry> */}
      </div>

      <div className="text-center">
        <button className="border rounded-full w-36 h-36  p-8 text-sm">
          View more projects
        </button>
      </div>
    </div>
  );
}
