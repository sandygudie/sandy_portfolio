/* eslint-disable @next/next/no-img-element */
import { BsArrowRight} from "react-icons/bs";
import React from "react";


export default function Blog() {
  const articles = [
    {
      id: 0,

      description: "Twin Macro:Combine TailwindCSS and Material-UI theme",
      link: "https://medium.com/@sandygoody/vite-twin-macro-d27a5f89df06",
      images: "images/blog/twinmacro.png",
      dateCreated: "October 1, 2022",
    },
    {
      id: 4,
      description: "Unit Test with Jest for React Applications",
      link: "https://sandygoody.medium.com/unit-testing-7799b753b486",
      images: "images/blog/unittesting.png",
      dateCreated: "December 16th, 2021",
    },

    {
      id: 5,
      description: "CI/CD with React App using GitHub Actions",
      link: "https://sandygoody.medium.com/ci-cd-pipeline-with-react-app-using-github-actions-1b219d4e162f",
      images: "images/blog/github-action.jpg",
      dateCreated: "October 29th, 2021",
    },

    {
      id: 6,
      description: "Installing WordPress.",
      link: "https://sandygoody.medium.com/installing-wordpress-cc634e51fa71",
      images: "images/blog/wordpress.jpg",
      dateCreated: "January 14th, 2021",
    },
    {
      id: 7,
      description: "Accessibility in Web development.",
      link: "https://sandygoody.medium.com/accessibility-in-web-development-e50abfeab1c0",
      images: "images/blog/lint.png",
      dateCreated: "March 14th, 2023",
    },
    {
      id: 7,
      description: "localization in React Apps using LinguiJS and Crowdin.",
      link: "https://medium.com/@sandygoody/how-to-set-up-localisation-in-react-app-using-linguijs-and-crowdin-f10c26b7ee38",
      images: "images/blog/localisation.webp",
      dateCreated: "june 7th, 2023",
    },
  ];

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 2,
  };
  return (
    <div className=" px-6 md:px-12 my-36">
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
                  md:mx-3 md:my-6 rounded-2xl shadow-2xl"
                key={item.id}
              >
                <a href={item.link}  rel="noreferrer" target="_blank">
                 

                  <div className="lg:p-6 relative text-gray-100">
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
      <div className="my-8 text-center">
        <button
          onClick={() => setViewProjects(true)}
          className="border border-gray-100 hover:text-black hover:bg-white text-gray-100 rounded-full w-24 h-24 md:w-36 md:h-36 p-2 md:p-8 text-xs md:text-sm"
        >
       More on Medium
       <BsArrowRight className="md:text-3xl mx-auto"/>
        </button>
      </div>
    </div>
  );
}
