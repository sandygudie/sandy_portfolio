import React, { useState } from "react";
import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Project from "../components/Project";
import Footer from "../components/Footer";
import Blog from "../components/Blog";
import { HiOutlineArrowDown } from "react-icons/hi";
import OpenSource from "../components/OpenSource";

export default function Home() {
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
        <div className="">
          <div
            data-aos="zoom-out"
            data-aos-duration="800"
            className="pt-40 px-6 lg:px-12 text-left over-flow-hidden relative "
          >
            <div className="flex flex-col-reverse sm:flex-row items-start justify-between">
              <div className="">
                <h1 className="font-bold lg:mb-4 text-[2.5rem] md:text-[5rem] lg:text-[7.5rem] leading-[2.5rem] md:leading-[6.5rem]">
                  CREATIVE DEVELOPER
                </h1>

                <p className="text-lg md:text-3xl mt-2 lg:ml-2 font-light">
                  <p className="text-gray-100">Software developer,</p>
                  <p className="md:my-2 text-gray-100">Open source advocate,</p>
                  <p className="text-gray-100"><span className="text-white">and</span> Writer</p>
                </p>
              </div>
              <div
                className="relative w-full h-48 lg:h-[22rem] rounded-md"
                style={{
                  background: 'url("/images/sandy-pics.jpg")',
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top center",
                  backgroundSize: "contain",
                }}
              >
                
              </div>
            </div>
            <div className="flex justify-center mt-10 lg:mt-48">
              <a
                href="#aboutme"
                className="w-20 bg-white text-dark h-20 md:w-24 md:h-24 flex flex-col hover:bg-transparent group border border-gray-100 rounded-full justify-center items-center"
              >
                <HiOutlineArrowDown className="text-xl md:text-3xl group-hover:text-white" />
              </a>
            </div>
          </div>

          <div id="aboutme">
            <AboutMe />
          </div>
          <div className="mt-16 md:mt-48">
            <Project />
          </div>

          <Blog />
          <OpenSource />

          <hr className="border-gray border-t-none" />
          <Footer />
        </div>
      </main>
    </>
  );
}
