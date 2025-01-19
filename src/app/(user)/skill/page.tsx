import { skillsData } from "@/utils/data/skills";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const SkillPage = () => {
  return (
    <div className="py-4 lg:py-12 border-t-[1px] border-[#1a1443] flex flex-col gap-3 lg:gap-8">
      <div className="flex justify-center">
        <div className="px-4 py-2 border border-[#1a1443] rounded-md">
          Skills
        </div>
      </div>
      <div>
        <Marquee pauseOnHover={true} pauseOnClick={true}>
          {skillsData.map((skill) => (
            <div
              className="w-36 flex justify-center items-center m-4"
              key={skill}
            >
              <div className="h-full w-full border border-[#1a1443] rounded-lg hover:scale-110 transition-all duration-300 flex flex-col items-center justify-center gap-3 py-3">
                <div className="h-8 sm:h-10">
                  <Image
                    src={`/svg/skills/${skill}.svg`}
                    height={50}
                    width={50}
                    alt="logo"
                    priority={false}
                    className="w-auto h-full"
                  />
                </div>
                <div>
                  <p>{skill}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default SkillPage;
