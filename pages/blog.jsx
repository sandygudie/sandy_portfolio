/* eslint-disable @next/next/no-img-element */
import React from "react";
import Masonry from "react-masonry-css";

export default function Blog() {
  const articles = [
    {
      id: 0,

      description: "Twin Macro:Combine TailwindCSS and Material-UI theme",
      link: "https://medium.com/@sandygoody/vite-twin-macro-d27a5f89df06",
      images: "images/blog/twinmacro.png",
      dateCreated: "October 1, 2022",
      content:
        "How do you combine the TailwindCSS theme with Material-UI in an Application? In other words, how do I make MUI theme work with TailwindCSS classes?",
    },
    {
      id: 4,
      description: "Unit Test with Jest for React Applications",
      link: "https://sandygoody.medium.com/unit-testing-7799b753b486",
      images: "images/blog/unittesting.png",
      dateCreated: "December 16th, 2021",
      content:
        "Testing is an important aspect of building a reliable app, especially in large-scale apps developed by different people. Though it’s quite impossible to have 100% error-free apps, with testing",
    },

    {
      id: 5,
      description: "CI/CD with React App using GitHub Actions",
      link: "https://sandygoody.medium.com/ci-cd-pipeline-with-react-app-using-github-actions-1b219d4e162f",
      images: "images/blog/github-action.jpg",
      dateCreated: "October 29th, 2021",
      content:
        "In this tutorial, I will illustrate how to handle Continuous Integration and deployment using GitHub actions.",
    },

    {
      id: 6,
      description: "Installing WordPress.",
      link: "https://sandygoody.medium.com/installing-wordpress-cc634e51fa71",
      images: "images/blog/wordpress.jpg",
      dateCreated: "January 14th, 2021",
      content:
        "WordPress is a content management system that makes it easy to build websites and manage content without writing codes.",
    },
    {
      id: 7,
      description: "Accessibility in Web development.",
      link: "https://sandygoody.medium.com/accessibility-in-web-development-e50abfeab1c0",
      images: "images/blog/lint.png",
      dateCreated: "March 14th, 2023",
      content:
        "WordPress is a content management system that makes it easy to build websites and manage content without writing codes.",
    },
  ];

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 2,
  };
  return (
    <div className="">
      <div className="w-11/12 md:w-10/12 m-auto py-24 lg:py-40">
        <h1 className="pb-12 font-bold text-2xl md:text-4xl lg:text-5xl flex items-center justify-center">
          Blog posts
        </h1>
        <div className="flex items-center justify-between flex-col-reverse lg:flex-row">
          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="0"
            className="!md:w-[80%] lg:w-full "
          >
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="flex"
              columnClassName=""
            >
              {articles.map((item) => {
                return (
                  <div
                    className="lg:w-[22em] xl:w-[90%]
                hover:scale-110 hover:transition duration-300 ease-out
                 m-2 md:mx-3 my-6 rounded-2xl shadow-2xl bg-secondary"
                    key={item.id}
                  >
                    <a href={item.link} rel="noreferrer" target="_blank">
                      <img
                        src={item.images}
                        className="rounded-tr-2xl rounded-tl-2xl"
                        alt={item.description}
                      />

                      <div className="p-2 md:p-6 relative">
                        <p className="text-[10px] md:text-base">
                          {item.description}.
                        </p>
                        <p className="text-[10px] my-2  text-gray-500 font-extrabold">
                          {item.dateCreated}
                        </p>
                      </div>
                    </a>
                  </div>
                );
              })}
            </Masonry>
          </div>
        </div>
      </div>
    </div>
  );
}
