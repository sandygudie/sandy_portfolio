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

const Experience = dynamic(() => import("../components/Experience"));

export default function Home() {
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
            <Experience />
            <Footer />
            <ScrollToTop />
          </>
        )}
      </main>

    </div>
  );
}

// Use dynamic pages to explain more about each project
// Add animation
// review for a better font