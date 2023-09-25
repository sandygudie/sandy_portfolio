/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React, { useState } from "react";
import Frontend from "../components/Frontend";
import Backend from "../components/Backend";
import Test from "../components/Test";
import OpenSource from "../components/OpenSource";

export default function Project() {
  const [tab, setTab] = useState("frontend");

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Experienced fullstack developer projects"
        />
      </Head>
      <div className="">
        <div className="w-11/12 md:w-10/12 m-auto py-28">
          <p className="pb-12 font-bold text-2xl md:text-4xl  flex items-center justify-center">
            Project Gallery
          </p>
          <div className="flex items-center gap-3 justify-center flex-wrap">
            <button
              className={`${
                tab === "frontend"
                  ? "bg-primary"
                  : "border text-primary hover:bg-primary hover:text-white border-primary"
              }  rounded-md font-bold w-36 py-2.5`}
              onClick={() => setTab("frontend")}
            >
              Frontend
            </button>
            <button
              className={`${
                tab === "backend"
                  ? "bg-primary"
                  : "border text-primary hover:bg-primary hover:text-white border-primary"
              }  rounded-md font-bold w-36 py-2.5`}
              onClick={() => setTab("backend")}
            >
              Backend
            </button>
            <button
              className={`${
                tab === "test"
                  ? "bg-primary"
                  : "border text-primary hover:bg-primary hover:text-white border-primary"
              }  rounded-md font-bold w-36 py-2.5`}
              onClick={() => setTab("test")}
            >
              Test
            </button>
            <button
              className={`${
                tab === "opensource"
                  ? "bg-primary"
                  : "border text-primary hover:bg-primary hover:text-white border-primary"
              }  rounded-md font-bold w-36 py-2.5`}
              onClick={() => setTab("opensource")}
            >
              Open Source
            </button>
          </div>
          {tab === "frontend" ? (
            <Frontend />
          ) : tab === "backend" ? (
            <Backend />
          ) : tab === "test" ? (
            <Test />
          ) : (
            <OpenSource />
          )}
        </div>
      </div>
    </>
  );
}
