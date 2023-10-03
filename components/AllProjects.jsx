/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Project from "./Project";

export default function AllProjects({ setViewProjects }) {
  return (
    <>
      <section className="relative">
        <div className=" my-12">
          <a
            href=""
            onClick={() => setViewProjects(false)}
            className="text-white flex items-center gap-4 underline absolute right-10 text-base"
          >
            Home
            <BsArrowRight />
          </a>
        </div>
        <Project viewProjects />
      </section>
    </>
  );
}
