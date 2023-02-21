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
    },
    {
      id: 1,

      description:
        "How to install ESLint and Prettier, and using Husky for pre-commit lint",
      link: "https://sandygoody.medium.com/eslint-prettier-and-husky-e6116518f2f9",
      images: linttoolImage,
      dateCreated: "April 19th, 2022",
    },
    {
      id: 2,

      description: "Get Started with Vite.",
      link: "https://sandygoody.medium.com/get-started-with-vite-230deaef0ecf",
      images: viteImage,
      dateCreated: "April 7th, 2022",
    },
    {
      id: 3,
      description: "Data Types in Solidity",
      link: "https://coinsbench.com/data-types-in-solidity-9c3e61c46661",
      images: solidityImage,
      dateCreated: "April 7th, 2022",
    },
    {
      id: 4,
      description: " Learn Unit Testing with Jest for React Applications",
      link: "https://sandygoody.medium.com/unit-testing-7799b753b486",
      images: unittestingImage,
      dateCreated: "December 16th, 2021",
    },

    {
      id: 5,
      description: "CI/CD with React App using GitHub Actions",
      link: "https://sandygoody.medium.com/ci-cd-pipeline-with-react-app-using-github-actions-1b219d4e162f",
      images: githubactionImage,
      dateCreated: "October 29th, 2021",
    },

    {
      id: 6,
      description: " Installing WordPress.",
      link: "https://sandygoody.medium.com/installing-wordpress-cc634e51fa71",
      images: wordpressImage,
      dateCreated: "January 14th, 2021",
    },
  ];

  return (
    <div className="text-center">
      <div className="my-8 flex justify-center text-justify flex-wrap gap-10">
        {articles.map((item) => {
          return (
            <a
              key={item.id}
              className=" relative hover:scale-110 hover:transition duration-300 ease-out w-[20rem] rounded-lg my-6 bg-secondary shadow-lg shadow-gray-500/50 border-red "
              href={item.link}
              rel="noreferrer"
              target="_blank"
            >
              <Image
                src={item.images}
                alt="blog-images"
                width={600}
                height={500}
                layout="responsive"
                objectFit="cover"
                quality={100}
                className="rounded-t-lg"
                placeholder="blur"
                blurDataURL="https://media.tenor.com/UnFx-k_lSckAAAAC/amalie-steiness.gif"
              />
              <div className="p-6">
                <p className="text-base">{item.description}.</p>
                <p className="text-xs mt-2 mb-6">{item.dateCreated}</p>
                
              </div>
              <a className="text-primary text-sm absolute bottom-5 left-6" href={item.link}>
                  {" "}
                  Read More
                </a>
            </a>
          );
        })}
      </div>
      <a
        href="https://sandygoody.medium.com/"
        rel="noreferrer"
        target="_blank"
        className="mt-6 text-primary hover:underline"
      >
        Read More Articles
      </a>
    </div>
  );
}
