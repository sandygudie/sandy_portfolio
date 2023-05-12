import React, { useEffect, useState } from "react";
import Head from "next/head";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import About from "../components/About";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
// import "animate.css";

import { createClient } from "next-sanity";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      <Head>
        <title>Goodnews Sandy Portfolio</title>
        <meta name="description" content="Goodnews Sandy Portfolio" />
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
      {!loading ? (
        <div className="loader-container ">
         <div className="bg-primary rounded-full h-10 flex justify-center items-center w-10">
         <div className="bg-white  animate-spin h-5 w-5 "></div>
         </div>
        </div>
      ) : (
        <main className="relative">
          <Profile />
          <About />
          <Projects />
          <Footer />
          <ScrollToTop />
        </main>
      )}
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
