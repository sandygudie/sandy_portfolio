import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Blog() {
  const articles = [
    {
      id: 0,
      name: "ESLint, Prettier and Husky",
      description:
        "How to install ESLint and Prettier, and using Husky for pre-commit lint",
      link: "https://sandygoody.medium.com/eslint-prettier-and-husky-e6116518f2f9",
    },
    {
      id: 1,
      name: "Get Started with Vite.",
      description:
        "Learn about this frontend development tool for modern web projects",
      link: "https://sandygoody.medium.com/get-started-with-vite-230deaef0ecf",
    },
    {
      id: 2,
      name: "Data Types in Solidity",
      description: "Learn the differnet data Types in Solidity",
      link: "https://coinsbench.com/data-types-in-solidity-9c3e61c46661",
    },
    {
      id: 3,
      name: "Unit Testing",
      description: " Learn Unit Testing with Jest for React Applications",
      link: "https://sandygoody.medium.com/unit-testing-7799b753b486",
    },

    {
      id: 4,
      name: "CI/CD with React App using GitHub Actions",
      description:
        "How to set up continuous integration and deployment for your React App",
      link: "https://sandygoody.medium.com/ci-cd-pipeline-with-react-app-using-github-actions-1b219d4e162f",
    },

    {
      id: 5,
      name: "Installing WordPress.",
      description: " Using Wordpress for Website or Blog",
      link: "https://sandygoody.medium.com/installing-wordpress-cc634e51fa71",
    },
  ];

  return (
    <div className="text-center">
      <div className="my-8 flex justify-center text-justify flex-wrap gap-10">
        {articles.map((item) => {
          return (
            <a
              key={item.id}
              className="w-72 h-50 rounded-lg p-6 my-6 bg-secondary shadow-lg border border-red hover:bg-primary/20 hover:border-primary hover:border-[0.5px]"
              href={item.link}
              rel="noreferrer"
              target="_blank"
            >
              <div>
                <h2 className="text-base  text-primary font-bold">
                  {item.name}
                </h2>
                <p className="text-sm mt-2  leading-8 ">{item.description}.</p>
              </div>
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
        See More
      </a>
    </div>
  );
}
