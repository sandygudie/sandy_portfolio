/* eslint-disable react/no-unescaped-entities */
import React from "react";

import Social from "./Social";
function Footer() {

  return (
    <div className="">
     <div className="py-16 lg:py-36 w-11/12 text-white text-center m-auto">
        <div className="text-center">
          <p className="text-sm text-gray-100">Have an interesting idea ?</p>
          <p className="font-bold text-4xl md:text-7xl">
            Let's connect!
          </p>
        </div>
        <Social/>
      </div> 
      <p className="text-gray-100 text-center py-4 text-xs">
       Goodnews Sandy All rights reserved. {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default Footer;
