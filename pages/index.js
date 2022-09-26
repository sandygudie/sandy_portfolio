import React, { useEffect, useState } from "react";
import Head from "next/head";
import Profile from "../components/Profile";
import Header from "../components/Header";
import Projects from "../components/Projects";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

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

      <main>
        {loading ? (
          <div className="loader-container bg-secondary">
            <div className="spinner"></div>
          </div>
        ) : (
          <>
            <Header />
            <Profile />
            <About />
            <Projects />
            <Footer />
          </>
        )}
      </main>
    </div>
  );
}
