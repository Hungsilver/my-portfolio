"use client";
// import AnimationLottie from "@/components/animation-lottie/AnimationLottie";
import React from "react";
// import study from "../../../helpers/assets/study.json";
import { educationData } from "@/utils/data/educations-data";
import { BsPersonWorkspace } from "react-icons/bs";

const Educations = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-3/4 mx-auto">
          {/* <AnimationLottie animationPath={study} /> */}
        </div>
        <div className="flex flex-col justify-center">
          {educationData.map((item) => (
            <div
              className="border border-[#1a1443] rounded-md px-4 lg:px-6 py-2"
              key={item.name}
            >
              <p className="text-center text-green_custom text-sm">
                {item.time}
              </p>
              <div className="flex gap-3 py-2">
                <div className="text-violet-500 flex items-center">
                  <BsPersonWorkspace size={36} />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="">{item.majob}</p>
                  <p className="">{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Educations;
