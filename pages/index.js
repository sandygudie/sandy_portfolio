import React, { useEffect, useState,useRef } from "react";
import Head from "next/head";
import dynamic from 'next/dynamic'
import Profile from "../components/Profile";
import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import "animate.css";
import { AiFillThunderbolt } from "react-icons/ai";
import useOnScreen from "../components/UseOnScreen";
const Experience = dynamic(() => import("../components/Experience"));

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isExperienceRef, setIsExperienceRef] = useState(false);

  const experienceRef = useRef();
  const experienceRefValue = useOnScreen(experienceRef);

  useEffect(() => {
    if (!isExperienceRef) setIsExperienceRef(experienceRefValue);
  }, [experienceRefValue]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
