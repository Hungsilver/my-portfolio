import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="grid grid-cols-1 lg:grid-cols-2 py-4 lg:py-12 gap-4 lg:gap-0"
    >
      <div>
        <p className="text-green-300">WHO I AM</p>
        <p>{personalData.description}</p>
      </div>
      <div className="flex justify-center relative">
        <Image
          className="rounded-md w-auto"
          src={"/avatar/avatar.jpg"}
          loading="lazy"
          width={300}
          height={300}
          alt="img-user"
        />
        <div className="absolute hidden lg:flex right-1 top-12 bg-[#1a1443] py-1 px-2 rounded-md rotate-90">
          ABOUT ME
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
