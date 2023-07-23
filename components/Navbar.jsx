/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { useRouter } from "next/router";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="w-full z-40 bg-[#1B1F24] fixed top-0">
      <div className="gap-8 flex item-center md:justify-between justify-center py-8 px-12">
        <div className="hidden md:flex text-xs  gap-2 item-center">
          <BsFillTelephoneFill className="text-sm " />{" "}
          <span>+2348133429514</span>
        </div>
        <div className="flex item-center text-sm gap-8">
          <a
            className={
              router.pathname == "/"
                ? "text-primary-light"
                : "hover:text-primary-light"
            }
            href="/"
          >
            Profile
          </a>
          <a
            className={
              router.pathname == "/project"
                ? "text-primary-light"
                : "hover:text-primary-light"
            }
            href="/project"
          >
            Project
          </a>
          <a
            className={
              router.pathname == "/blog"
                ? "text-primary-light"
                : "hover:text-primary-light"
            }
            href="/blog"
          >
            Blog
          </a>
        </div>
      </div>
    </div>
  );
}
