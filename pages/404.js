import * as React from "react";
import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";
export default function Custom404() {
  const router = useRouter();
  return (
    <div className="w-5/6 flex flex-col items-center  mx-auto justify-center h-screen">
      <h1 className="text-3xl md:text-6xl text-red-500 mb-4">404: Not Found</h1>
      <p className="text-sm">
        You just hit a route that doesn&#39;t exist...the sadness :)
      </p>
      <div className="mt-6">
      <button
            onClick={() => router.push("/")}
            className="border text-white hover:bg-white text-white border-gray-100 hover:text-dark bg-transparent
             rounded-md flex items-center gap-x-4 py-3 px-8 font-bold text-xl"
          >
        <BsArrowLeft/> Home
           
          </button>
      </div>
    </div>
  );
}
