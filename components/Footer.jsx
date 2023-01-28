import React from "react";

import { useForm, ValidationError } from "@formspree/react";

function Footer() {
  const [state, handleSubmit] = useForm("mlevprop");

  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  };

  return (
    <div
      id="contact"
      className="text-white text-align-center my-6 w-11/12 m-auto"
    >
      <h1 className="text-center font-bold py-2 mt-12 text-primary text-2xl md:text-3xl">
        Contact
      </h1>

      <form
        onSubmit={handleSubmit}
        className="lg:flex text-center items-center justify-center gap-10 my-8"
      >
        <div>
          <textarea
            placeholder="Drop a message!"
            id="message"
            name="message"
            className=" text-base w-full lg:w-96 h-32 bg-transparent outline-none border-solid border-[1px] border-white p-2 rounded-lg"
          />
          {state.errors ? (
            <p className="text-[#b54e4e] text-sm">{state.errors[0]?.message}</p>
          ) : null}
          {state.succeeded ? (
            <p className="text-base text-tourquise"> Message Sent!</p>
          ) : null}
        </div>
        <button
          className="p-2  px-4 text-base bg-primary font-bold rounded-md hover:text-primary hover:bg-white"
          type="submit"
          disabled={state.submitting}
        >
          {state.submitting ? "Sending..." : "Submit"}
        </button>
      </form>

      <p className="text-center italic pt-2 mt-2 text-sm">
        All rights reserved. Sandy©2023
      </p>
    </div>
  );
}

export default Footer;
