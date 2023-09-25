import { useEffect, useState } from "react";
import "../styles/globals.css";
import TagManager from "react-gtm-module";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Social from "../components/Social";

const tagManagerArgs = {
  gtmId: "GTM-MDDHDL8",
};

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    AOS.init();
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <>
      {!loading ? (
        <div className="loader-container">
          <div className="bg-primary rounded-full h-20 flex justify-center items-center w-20">
            <div className="bg-white animate-spin h-10 w-10"></div>
          </div>
        </div>
      ) : (
        <div className="relative">
          <Navbar />

          <Component {...pageProps} />
          <Social />
          <ScrollToTop />
        </div>
      )}
    </>
  );
}

export default MyApp;
