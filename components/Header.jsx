import * as React from "react";
import Image from "next/image";
import profileLogo from "../assets/images/logo.svg";

const Header = () => (
  <div className="p-6 bg-secondary fixed w-full md:px-6 md:py-6 xl:px-8 z-10">
    <div className="hidden md:flex justify-between items-center">
     <div  className="border-2 p-2 rounded-full border-primary ">
     <Image
              src={profileLogo}
              alt="Photo"
              width={30}
              height={25}
              objectFit="contain"
              className="border-2  rounded-full"
              quality={100}
            />
     </div>
   
    

      <div className="flex justify-between ">
        <div className="flex justify-between text-base gap-x-8">
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
        className="rounded-md text-center p-2 font-bold border border-white bg-white w-24 text-secondary hover:bg-transparent hover:text-white"
        href="https://docs.google.com/document/d/1TGO4P6XlqEZfvw5tUH4uoEaLKvWILtxAAinyAPIGC8U/edit?usp=sharing"
        rel="noreferrer"
        target="_blank"
      >
        Resume
      </a>
        </div>
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
