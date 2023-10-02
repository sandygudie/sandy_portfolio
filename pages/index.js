import React from "react";
import Head from "next/head";
import { createClient } from "next-sanity";
import AboutMe from "../components/AboutMe";
import Project from "../components/Project";

export default function Home() {
  return (
    <>
      <Head>
        <title>Goodnews Sandy Portfolio</title>
        <meta name="description" content="Experienced fullstack developer" />
        <meta name="keywords" content="software developer, react developer , backend developer, web development, web developer, open source contributor, frontend developer,fullstack developer" />
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
          <div className="py-20 lg:py-0 h-[95%] md:h-full flex flex-col-reverse items-center justify-center ">
            <div
              data-aos="zoom-out"
              data-aos-duration="800"
              className="text-left over-flow-hidden"
            >
              <h1 className="font-bold mb-8 text-[8rem] leading-[6.5rem]">
               CREATIVE DEVELOPER
              </h1>
               
                  <p className="w-5/12 text-3xl font-light">
                    I m an experienced{" "}
                    <span className="text-[#9D5431]">
                      full-stack developer
                    </span>{" "}
                    ,
                    <span className="text-[#9D5431] ">
                      {" "}
                      tech instructor
                    </span>{" "}
                    and
                    <span className="text-[#9D5431]"> writer</span>.
                   
                  </p>
    

              {/* <div className=" mx-auto mt-12 w-64">
                <a
                  className="w-full text-sm md:text-lg block text-center p-3 font-extrabold bg-white text-secondary hover:bg-secondary hover:text-white"
                  href="https://docs.google.com/document/d/1TGO4P6XlqEZfvw5tUH4uoEaLKvWILtxAAinyAPIGC8U/edit?usp=sharing"
                  rel="noreferrer"
                  target="_blank"
                >
                  Resume
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <AboutMe/>
        <Project/>
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


// use react helmet for SEO