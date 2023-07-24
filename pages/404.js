/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import * as React from "react";

export default function Custom404() {
  return (
    <div className="w-5/6 flex flex-col items-center  mx-auto justify-center h-screen">
      <h1 className="text-3xl md:text-6xl text-red-500 mb-4">404: Not Found</h1>
      <p className="text-sm">You just hit a route that doesn&#39;t exist... the sadness.</p>
     
    </div>
  );
}
