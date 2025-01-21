import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center px-3 lg:px-10">
      <p>{process.env.NEXT_PUBLIC_NAME}</p>
    </div>
  );
};

export default Footer;
