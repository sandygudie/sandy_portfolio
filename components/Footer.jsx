/* eslint-disable react/no-unescaped-entities */
import React from "react";


import { useForm, ValidationError } from "@formspree/react";

function Footer() {

  const [state, handleSubmit] = useForm("mlevprop");
  if (state.succeeded) {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  }
  return (
    <div className="bg-white">
      {/* <div className="py-16 lg:py-36 w-11/12 lg:flex gap-x-40 justify-center items-center text-primary-light text-align-center m-auto">
        <div className="lg:w-1/2">
          <p className="font-bold text-3xl lg:text-5xl">
            Looking forward to working with everyone!
          </p>
        </div>
        <div className="pt-8 lg:pt-0">
          <p className="p-4 text-sm font-bold shadow-primary-light shadow-md">
            <MdEmail className="inline pr-2 text-2xl" /> goodnewssandy@gmail.com
          </p>
          <p className="p-4 text-sm font-bold my-6 shadow-primary-light shadow-md">
            {" "}
            <BsFillTelephoneFill className="inline pr-2 text-2xl" /> +234 813
            342 9514
          </p>
          <div className="p-4 text-sm font-bold shadow-primary-light shadow-md">
           
          </div>
        </div>
      </div> */}
      <p className=" text-primary-light font-bold text-center py-4  text-sm">
       Goodnews Sandy All rights reserved. {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default Footer;
