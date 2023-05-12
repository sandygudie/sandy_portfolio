import { useEffect } from "react";
import "../styles/globals.css";
import TagManager from "react-gtm-module";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const tagManagerArgs = {
  gtmId: "GTM-MDDHDL8",
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    TagManager.initialize(tagManagerArgs);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
