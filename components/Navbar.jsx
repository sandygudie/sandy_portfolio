/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";


export default function Navbar() {
  return (
    <div className="w-full px-6 md:px-12 z-40 bg-black fixed top-0">
      <div className="w-full flex justify-between py-6 gap-2 items-center">
        <span className="tracking-[0.4rem] sm:text-base md:text-lg font-medium">
          GOODNEWS SANDY
        </span>

        <a
          className="w-20 md:w-36 text-xs md:text-base block text-center p-2 md:p-3 border-gray-100 border bg-white text-black hover:bg-transparent hover:text-white"
          href="https://docs.google.com/document/d/1TGO4P6XlqEZfvw5tUH4uoEaLKvWILtxAAinyAPIGC8U/edit?usp=sharing"
          rel="noreferrer"
          target="_blank"
        >
          RESUME
        </a>
      </div>
    </div>
  );
}
