/* eslint-disable @next/next/no-img-element */
import { BsArrowRight } from "react-icons/bs";
import React from "react";

export default function Blog() {
  const articles = [
    {
      id: 0,

      description:
        "Twin Macro: How to combine TailwindCSS and Material-UI theme",
      link: "https://medium.com/@sandygoody/vite-twin-macro-d27a5f89df06",
      images: "images/blog/twinmacro.png",
      dateCreated: "October 1, 2022",
    },
    {
      id: 1,
      description: "Unit Test with Jest for React Applications",
      link: "https://sandygoody.medium.com/unit-testing-7799b753b486",
      images: "images/blog/unittesting.png",
      dateCreated: "December 16th, 2021",
    },

    {
      id: 5,
      description: "CI/CD in React App using GitHub Actions",
      link: "https://sandygoody.medium.com/ci-cd-pipeline-with-react-app-using-github-actions-1b219d4e162f",
      images: "images/blog/github-action.jpg",
      dateCreated: "October 29th, 2021",
    },

    {
      id: 6,
      description: "Accessibility in Web development",
      link: "https://sandygoody.medium.com/accessibility-in-web-development-e50abfeab1c0",
      images: "images/blog/lint.png",
      dateCreated: "March 14th, 2023",
    },
    {
      id: 7,
      description:
        "Localization in React applications using LinguiJS and Crowdin",
      link: "https://medium.com/@sandygoody/how-to-set-up-localisation-in-react-app-using-linguijs-and-crowdin-f10c26b7ee38",
      images: "images/blog/localisation.webp",
      dateCreated: "june 7th, 2023",
    },
    {
      id: 8,
      description: "Installing WordPress",
      link: "https://sandygoody.medium.com/installing-wordpress-cc634e51fa71",
      images: "images/blog/wordpress.jpg",
      dateCreated: "January 14th, 2021",
    },
  ];

  return (
    <div className="px-6 md:px-12 my-24 md:my-36">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl md:text-6xl">BLOG POSTS</h2>
        <hr className="border-gray border w-full" />
      </div>
      <div className="lg:w-11/12 mx-auto mt-8 flex flex-wrap gap-2 items-start justify-between">
        {articles.map((item) => {
          return (
            <div
              className="w-[45%] lg:w-[30%]
                hover:scale-110 hover:transition duration-300 ease-out
                  md:mx-3 my-3 rounded-2xl shadow-2xl"
              key={item.id}
            >
              <a href={item.link} rel="noreferrer" target="_blank">
                <div className=" relative text-gray-100">
                  <p className="text-sm underline md:text-lg">
                    {item.description}.
                  </p>
                  <p className=" my-2 text-white text-xs md:text-sm">
                    {item.dateCreated}
                  </p>
                </div>
              </a>
            </div>
          );
        })}
      </div>

      <a
        target="_blank"
        rel="noreferrer"
        href="https://sandygoody.medium.com/"
        className="flex items-center justify-center md:leading-6 flex-col border border-gray-100 mx-auto md:mt-12 text-center bg-white text-dark hover:text-white hover:bg-transparent rounded-full w-24 h-24 md:w-32 md:h-32 p-2 md:p-6 text-xs md:text-[18px]"
      >
        More on Medium
        <BsArrowRight className="text-lg md:text-2xl mx-auto mt-1" />
      </a>
    </div>
  );
}
