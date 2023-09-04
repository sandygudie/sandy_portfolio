/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { useRouter } from "next/router";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="w-full z-40 bg-secondary fixed top-0">
      <div className="gap-8 flex item-center md:justify-between justify-center py-10 md:pl-8 md:pr-20">
        <div className="hidden md:flex text-xs gap-2 item-center">
          <BsFillTelephoneFill className="text-sm" />{" "}
          <span className="tracking-widest">+2348133429514</span>
        </div>
        <div className="flex item-center text-xs gap-16 md:gap-8">
          {[
            { name: "Home", link: "/" },
            { name: "Projects", link: "/projects" },
            { name: "Blog", link: "/blog" },
          ].map((ele, index) => {
            return (
              <a
                key={index}
                className={`
            ${
              router.pathname == ele.link
                ? "text-primary-light"
                : "hover:text-primary-light"
            } tracking-widest text-base
           `}
                href={ele.link}
              >
                {ele.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
