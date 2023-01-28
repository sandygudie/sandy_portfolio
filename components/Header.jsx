/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Image from "next/image";
import profileLogo from "../assets/images/logo.svg";

const Header = () => (
  <div className="p-6 bg-secondary fixed w-full md:px-6 md:py-6 xl:px-8 z-10">
    <div className="hidden md:flex justify-between items-center">
      <img
        src="logo.svg"
        alt="Photo"
        className="border-2 p-2 w-10 h-10 border-primary  rounded-full"
      />

      <div className="flex justify-between items-center text-lg gap-x-8">
        <a className="hover:text-primary" href="#profile">
          {" "}
          Profile{" "}
        </a>

        <a className="hover:text-primary" href="#aboutme">
          About Me
        </a>
        <a className="hover:text-primary" href="#project">
          Experience
        </a>
        <a className="hover:text-primary" href="#contact">
          Contact
        </a>
        <a
          className="rounded-md text-center p-2 font-bold border border-white bg-white w-24 text-secondary hover:bg-transparent hover:text-primary hover:border-primary"
          href="https://docs.google.com/document/d/1TGO4P6XlqEZfvw5tUH4uoEaLKvWILtxAAinyAPIGC8U/edit?usp=sharing"
          rel="noreferrer"
          target="_blank"
        >
          Resume
        </a>
      </div>
    </div>
    <div className="flex justify-between text-base mt-3 md:hidden">
      <a href="#profile"> Profile </a>
      <a href="#aboutme">About Me</a>
      <a href="#project">Projects</a>
    </div>
  </div>
);

export default Header;
