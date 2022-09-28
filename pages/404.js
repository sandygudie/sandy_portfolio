import Link from "next/link";
import * as React from "react";

export default function Custom404() {
  return (
    <div className="w-5/6 fixed left-2/4 top-2/4 text-2xl font-bold translate-x-2/4 translate-y-2/4">
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link  href="/" className="text-red-500 text-sm">
          <a>  Return to <span className="text-primary">Home </span>Page</a>
        </Link>
    </div>
  );
}
