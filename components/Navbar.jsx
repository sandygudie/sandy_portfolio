/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { useRouter } from "next/router";


export default function Navbar() {
  const router = useRouter();

  return (
    <div className="w-full z-40 bg-black fixed top-0">
      <div className="gap-8 flex item-center md:justify-between justify-center py-4">
        <div className="hidden md:flex text-xs gap-2 item-center">

          <span className="tracking-[0.4rem] text-lg font-medium">GS</span>
        </div>
      </div>
    </div>
  );
}
