"use client";
import React from "react";
// import AnimationLottie from "@/components/animation-lottie/AnimationLottie";
// import cook from "../../../helpers/assets/cook.json";
import { expriences } from "@/utils/data/expriences-data";
import { FaBuildingUser } from "react-icons/fa6";

const Experiences = () => {
  return (
    <div className="py-4 lg:py-12">
      <div className="flex justify-center mb-5">
        <div className="bg-[#1a1443] py-2 px-4 rounded-md">
          <h1>Experiences</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-8">
        <div className="flex-1">
          <div className="w-3/4 mx-auto">
            {/* <AnimationLottie animationPath={cook} /> */}
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-5">
          {expriences.map((item, index) => (
            <div
              key={index}
              className="border border-[#1a1443] py-2 px-4 rounded-md"
            >
              <div className="flex justify-center">
                <p className="text-green_custom">{item.time}</p>
              </div>
              <div className="flex gap-4 py-2">
                <div className="flex items-center">
                  <FaBuildingUser size={30} color="#4131a7" />
                </div>
                <div>
                  <p className="text-xl">{item.job}</p>
                  <p className="text-sm">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
