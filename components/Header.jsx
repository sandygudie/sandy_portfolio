/* eslint-disable @next/next/no-img-element */
import * as React from "react";

const Header = () => (
  <div className="w-11/12 md:w-10/12 max-w-10/12 mx-auto">
    <div className="py-6 fixed w-11/12 md:w-10/12 mx-auto z-10">
      <div className="md:flex justify-between items-center">
        <img
          src="logo.svg"
          alt="Photo"
          className="hidden md:inline border-2 p-2 w-10 h-10   rounded-full"
        />

        <div className="text-sm flex justify-between items-center gap-x-4 md:gap-x-8">
          {/* <a className="hover:text-primary" href="#profile">
            {" "}
            Profile{" "}
          </a>

          <a className="hover:text-primary" href="#aboutme">
            About Me
          </a>
          <a className="hover:text-primary" href="#project">
            Projects
          </a>
          <a className="hover:text-primary" href="#contact">
            Contact
          </a> */}
          <a
            className="hidden md:inline rounded-md text-center p-2 font-bold border border-white bg-white w-24 text-secondary hover:bg-transparent hover:text-primary hover:border-primary"
            href="https://docs.google.com/document/d/1TGO4P6XlqEZfvw5tUH4uoEaLKvWILtxAAinyAPIGC8U/edit?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
