import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>404</h1>
      <p>Page Not Found</p>

      <Link className="" href={"/"} role="button">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
