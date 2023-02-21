/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

import { useForm, ValidationError } from "@formspree/react";

function Footer() {
  const [state, handleSubmit] = useForm("mlevprop");

  // window.onbeforeunload = () => {
  //   for (const form of document.getElementsByTagName("form")) {
  //     form.reset();
  //   }
  // };
  if (state.succeeded) {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  }
  return (
    <div id="contact" className="mt-20 mb-10 mx-auto w-10/12">
      <h1 className="text-center font-bold py-2 text-primary text-2xl md:text-4xl">
        Contact
      </h1>
      <div className="mt-6 lg:flex gap-x-40 justify-end items-center text-white text-align-center m-auto">
        <div>
          <p className="p-4 text-sm font-medium mb-6 shadow-gray-100/20 shadow-md">
            <MdEmail className="inline pr-2 text-2xl " />{" "}
            goodnewssandy@gmail.com
          </p>
          <p className="p-4 text-sm font-medium  shadow-gray-100/20 shadow-md">
            {" "}
            <BsFillTelephoneFill className="inline pr-2 text-2xl" /> +234 813
            342 9514
          </p>
        </div>
        <form
          className="mt-8 md:mt-4 w-full lg:w-6/12 flex gap-y-6 flex-col"
          onSubmit={handleSubmit}
        >
          <div className="w-full">
            <label className="block text-gray-600 pb-1 font-semibold text-sm">
              Name
            </label>
            <input
              className="placeholder:text-gray-500  rounded-md w-full  p-4"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="w-full">
            {" "}
            <label className="block text-gray-600 pb-1 font-semibold text-sm">
              Email
            </label>
            <input
              className="placeholder:text-gray rounded-md w-full p-4"
              type="email"
              name="Email"
              placeholder="Email address"
              required
            />
          </div>
          <div className="w-full">
            <label className="block text-gray-600 pb-1 font-semibold text-sm">
              Message
            </label>
            <textarea
              required
              placeholder="Drop a message!"
              id="message"
              name="message"
              className="placeholder:text-gray text-base w-full  h-48 bg-white p-2 rounded-lg"
            />
          </div>
          <div className="text-center">
            <input
              className="text-white rounded-full w-48  py-3 bg-primary font-semibold text-base hover:bg-tourquise/80"
              type="submit"
              value={state.submitting ? "Sending..." : "Submit"}
            />
            {state.errors ? (
              <p className="text-[#b54e4e] mt-4 text-center font-bold text-sm">
                {state.errors[0]?.message}
              </p>
            ) : state.succeeded ? (
              <p className="text-base mt-4 text-center font-bold text-tourquise">
                {" "}
                Message Sent!
              </p>
            ) : null}
          </div>
        </form>
      </div>
      <p className="text-center pt-2 mt-20 text-sm">
        All rights reserved. {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default Footer;
