import React, { useEffect, useState } from "react";
import Head from "next/head";
import { createClient } from "next-sanity";

export default function Home() {
  return (
    <>
      <Head>
        <title>Goodnews Sandy Portfolio</title>
        <meta name="description" content="Experienced fullstack developer" />
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

      <main className="relative">
        <div className="h-screen text-white">
          <div className="w-10/12 py-12 lg:py-0 lg:w-10/12 max-w-10/12 mx-auto h-[95%] md:h-full flex flex-col-reverse items-center justify-center ">
            <div
              data-aos="zoom-out"
              data-aos-duration="800"
              className="font-semibold lg:text-left over-flow-hidden text-center"
            >
              <h1 className="font-bold text-center mb-8  text-3xl md:text-6xl lg:text-7xl xl:text-8xl ">
                Goodnews Sandy
              </h1>
                <div className="md:w-9/12 m-auto text-justify text-sm md:text-[17px] lg:text-lg">
                  <p className="leading-[3em]">
                    An experienced{" "}
                    <span className="text-[#9D5431] font-bold">
                      full-stack developer
                    </span>{" "}
                    ,
                    <span className="text-[#9D5431] font-bold">
                      {" "}
                      tech instructor
                    </span>{" "}
                    and
                    <span className="text-[#9D5431] font-bold"> writer</span>.
                    {"  "} I enjoy building web-based applications that leaves a
                    lasting impression on users. I contribute to Open Source and
                    write about my work on{" "}
                    <a
                      href="https://sandygoody.medium.com/"
                      rel="noreferrer"
                      target="_blank"
                      className="text-[#9D5431] font-bold underline"
                    >
                      medium.
                    </a>
                  </p>
                </div>

              <div className=" mx-auto mt-12 w-64">
                <a
                  className="w-full text-sm md:text-lg block text-center p-3 font-extrabold bg-white text-secondary hover:bg-secondary hover:text-white"
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
      </main>
    </>
  );
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export async function getStaticProps() {
  const opensourcedata = await client.fetch(`*[_type == "open-source"]{
    name,
  link,
  _id,
  description,
    "imageUrl": image.asset->url,
    activity
  }`);
  return {
    props: {
      opensourcedata,
    },
    revalidate: 60,
  };
}
// Todo
// Use dynamic pages to explain more about each project
// Add animation
