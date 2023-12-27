import { useRouter } from "next/router";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import Project from "../components/Project";


export default function AllProjects() {
  const router = useRouter();
  return (
    <>
      <section className="px-2 md:px-12 pt-24 relative">
      <button
            onClick={() => router.push("/")}
            className="flex ml-6 items-center gap-x-2 text-xl  
            "
          >
            <BsArrowLeft/>
            Home
          </button>

        <div className="mt-8 md:mt-24">
          <Project viewProjects />
        </div>
      </section>
    </>
  );
}
