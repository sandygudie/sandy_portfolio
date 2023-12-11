import React, { useState } from "react";
import Head from "next/head";
import { createClient } from "next-sanity";
import AboutMe from "../components/AboutMe";
import Project from "../components/Project";
import AllProjects from "../components/AllProjects";
import Footer from "../components/Footer";
import Blog from "../components/Blog";
import { HiOutlineArrowDown } from "react-icons/hi";
import OpenSource from "../components/OpenSource";

export default function Home() {
  const [viewProjects, setViewProjects] = useState(false);

  return (
    <>
      <Head>
        <title>Goodnews Sandy Portfolio</title>
        <meta name="description" content="Experienced fullstack developer" />
        <meta
          name="keywords"
          content="software developer, react developer , backend developer, web development, web developer, open source contributor, frontend developer,fullstack developer"
        />
        <link rel="icon" href="/logo.svg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>

      <main className="">
        {!viewProjects ? (
          <div>
            <div
              data-aos="zoom-out"
              data-aos-duration="800"
              className="pt-40 px-6 lg:px-12  text-left over-flow-hidden"
            >
              <h1 className="font-bold lg:mb-8 text-[2.5rem] md:text-[6rem] lg:text-[8rem] leading-[3.5rem] md:leading-[6.5rem]">
                CREATIVE DEVELOPER
              </h1>

              <p className=" hidden md:block w-full md:text-3xl font-light">
                <span className="text-gray-100">Software developer</span> ,
                <span className="text-gray-100"> tech instructor</span> and
                <span className="text-gray-100"> writer</span>.
              </p>
              <p className="md:hidden">
                <p className="text-lg text-gray-100">Software developer</p>
                <p className="text-lg my-3 text-gray-100"> Tech Instructor</p>
                <p className="text-lg text-gray-100"> Writer</p>
              </p>
              <div className="flex justify-center mt-20">
                <a
                  href="#aboutme"
                  className="w-20 bg-white text-black h-20 md:w-24 md:h-24 flex flex-col hover:bg-transparent group border border-gray-100 rounded-full justify-center items-center"
                >
                  <HiOutlineArrowDown className="text-xl md:text-3xl group-hover:text-white" />
                </a>
              </div>
            </div>

            <div id="aboutme">
              <AboutMe />
            </div>
            <Project
              viewProjects={viewProjects}
              setViewProjects={setViewProjects}
            />
            <Blog />
            <OpenSource />

            <hr className="border-gray border-t-none" />
            <Footer />
          </div>
        ) : (
          <AllProjects
            viewProjects={viewProjects}
            setViewProjects={setViewProjects}
          />
        )}
      </main>
    </>
  );
}


