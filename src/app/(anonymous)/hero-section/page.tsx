import React from "react";
import DecryptedText from "@/components/text-animation/decryted-text";
import { FaDownload } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";

const userInfo = `Hello, This is Hưng Silver , I'm a Professional Software Developer`;
const HeroSection = () => {
  return (
    <div className="py-4 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12">
        <div className="flex flex-col justify-between gap-4 lg:gap-10">
          <div>
            <DecryptedText
              text={userInfo}
              speed={100}
              animateOn="view"
              revealDirection="start"
              maxIterations={20}
              sequential={true}
              characters="ABCDEFGHIK123456789"
              className="revealed text-3xl"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
            />
          </div>
          <div className="flex gap-4 lg:gap-6">
            <Link
              href={personalData.github}
              className="text-pink-500 hover:scale-150 transition-all duration-300"
            >
              <BsGithub className="" size={25} />
            </Link>
            <Link
              href={personalData.linkedIn}
              className="text-pink-500 hover:scale-150 transition-all duration-300"
            >
              <BsLinkedin size={25} />
            </Link>
            <Link
              href={personalData.facebook}
              className="text-pink-500 hover:scale-150 transition-all duration-300 "
            >
              <FaFacebookSquare size={25} />
            </Link>
            <Link
              href={personalData.twitter}
              className="text-pink-500 hover:scale-150 transition-all duration-300"
            >
              <FaTwitter size={25} />
            </Link>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="flex items-center gap-0 border rounded-3xl py-3 px-5 text-sm hover:gap-2 transition-all duration-300"
            >
              CONTACT ME
              <span className="-translate-y-[1px]">
                <FaUser fontSize={13} />
              </span>
            </button>
            <button
              type="button"
              className="flex items-center gap-0 border rounded-3xl py-3 px-5 text-sm hover:gap-2 transition-all duration-300"
            >
              GET RESUME
              <span className="-translate-y-[1px]">
                <FaDownload fontSize={13} />
              </span>
            </button>
          </div>
        </div>
        <div>
          <div className="border from-[#0d1224] bg-gradient-to-r to-[#0a0d37] dark:bg-gray-300 rounded-md">
            <div className="flex p-3 gap-5">
              <div className="rounded-full size-3 bg-red-400"></div>
              <div className="rounded-full size-3 bg-orange-400"></div>
              <div className="rounded-full size-3 bg-green-200"></div>
            </div>

            <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
              <code className="font-mono text-xs md:text-sm lg:text-base">
                <div className="blink">
                  <span className="mr-2 text-pink-500">const</span>
                  <span className="mr-2 text-white">coder</span>
                  <span className="mr-2 text-pink-500">=</span>
                  <span className="text-gray-400">{"{"}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                  <span className="text-gray-400">{`'`}</span>
                  <span className="text-amber-300">Hưng Silver</span>
                  <span className="text-gray-400">{`',`}</span>
                </div>
                <div className="ml-4 lg:ml-8 mr-2">
                  <span className=" text-white">skills:</span>
                  <span className="text-gray-400">{`['`}</span>
                  <span className="text-amber-300">.Net core</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">NextJS</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">ReactJs</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">MySql</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">SqlServer</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Spring Boot</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Git</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">GitHub</span>
                  <span className="text-gray-400">{"'],"}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">
                    hardWorker:
                  </span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">
                    quickLearner:
                  </span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">
                    problemSolver:
                  </span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="text-gray-400">{`};`}</span>
                </div>
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
