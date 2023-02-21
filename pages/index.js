import React, { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Profile from "../components/Profile";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "animate.css";
import { AiFillThunderbolt } from "react-icons/ai";
import { createClient } from "next-sanity";

const Experience = dynamic(() => import("../components/Experience"));

export default function Home({ opensourcedata }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
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
      <main className="relative">
        {loading ? (
          <div className="loader-container bg-secondary">
            <AiFillThunderbolt className="text-[5em] ping" />
          </div>
        ) : (
          <>
            <Header />
            <Profile />
            <About />
            <Experience opensourcedata={opensourcedata} />
            <Footer />
            <ScrollToTop />
          </>
        )}
      </main>
    </div>
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
    "imageUrl": image.asset->url
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
