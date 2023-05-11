import React from "react";
import Image from "next/image";
import solidityImage from "../public/images/blog/solidity.png";
import viteImage from "../public/images/blog/vite.jpg";
import githubactionImage from "../public/images/blog/github-action.jpg";
import unittestingImage from "../public/images/blog/unittesting.png";
import wordpressImage from "../public/images/blog/wordpress.jpg";
import twinmacroImage from "../public/images/blog/twinmacro.png";
import linttoolImage from "../public/images/blog/lint.png";

export default function Blog() {
  const articles = [
    {
      id: 0,

      description: "Twin Macro: Combine TailwindCSS and Material-UI theme",
      link: "https://medium.com/@sandygoody/vite-twin-macro-d27a5f89df06",
      images: twinmacroImage,
      dateCreated: "October 1, 2022",
      content:
        "How do you combine the TailwindCSS theme with Material-UI in an Application? In other words, how do I make MUI theme work with TailwindCSS classes?",
    },

    {
      id: 4,
      description: "Unit Testing with Jest for React Applications",
      link: "https://sandygoody.medium.com/unit-testing-7799b753b486",
      images: unittestingImage,
      dateCreated: "December 16th, 2021",
      content:
        "Testing is an important aspect of building a reliable app, especially in large-scale apps developed by different people. Though it’s quite impossible to have 100% error-free apps, with testing",
    },

    {
      id: 5,
      description: "CI/CD with React App using GitHub Actions",
      link: "https://sandygoody.medium.com/ci-cd-pipeline-with-react-app-using-github-actions-1b219d4e162f",
      images: githubactionImage,
      dateCreated: "October 29th, 2021",
      content:
        "In this tutorial, I will illustrate how to handle Continuous Integration and deployment using GitHub actions.",
    },

    {
      id: 6,
      description: "Installing WordPress.",
      link: "https://sandygoody.medium.com/installing-wordpress-cc634e51fa71",
      images: wordpressImage,
      dateCreated: "January 14th, 2021",
      content:
        "WordPress is a content management system that makes it easy to build websites and manage content without writing codes.",
    },
  ];

  return (
    <div className="">
      <div className="flex items-center">
        <div className=" w-[60%] flex justify-start gap-2 items-center text-justify flex-wrap ">
          {articles.map((item) => {
            return (
              <a
                key={item.id}
                className="relative hover:scale-110 hover:transition duration-300 ease-out w-[18rem] h-[18rem]  rounded-lg bg-secondary shadow-lg shadow-gray-500/50 border-red"
                href={item.link}
                rel="noreferrer"
                target="_blank"
              >
                <Image
                  src={item.images}
                  alt="blog-images"
                  width={400}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                  quality={100}
                  className="rounded-t-lg"
                  placeholder="blur"
                  blurDataURL="https://media.tenor.com/UnFx-k_lSckAAAAC/amalie-steiness.gif"
                />
                <div className="p-6 relative">
                  <p className="text-base">{item.description}.</p>
                  <p className="text-xs mt-2 mb-6 text-gray-500 font-extrabold">
                    {item.dateCreated}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
        <div className="w-[40%]">
          <q className="font-bold text-5xl">
            Writing helps me to consolidated my learning!
          </q>
        </div>
      </div>
    </div>
  );
}
