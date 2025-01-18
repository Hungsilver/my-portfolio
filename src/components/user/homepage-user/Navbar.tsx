import ToggleTheme from "@/components/themes/toggleTheme";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-transparent">
      <div className="flex justify-between py-5">
        <div>
          <Link href={"/"} className="text-green_custom text-3xl font-bold">
            Hưng Silver
          </Link>
        </div>

        <ul className="hidden gap-3 text-sm items-center md:flex">
          <li>
            <Link href={"/#about"} className="text-sm">
              <div className="hover:text-pink_custom transition-all duration-300 ease-out">
                ABOUT
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/experience"} className="">
              <div className="hover:text-pink_custom transition-all duration-300 ease-out">
                EXPERIENCE
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/experience"} className="">
              <div className="hover:text-pink_custom transition-all duration-300 ease-out">
                SKILLS
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/experience"} className="">
              <div className="hover:text-pink_custom transition-all duration-300 ease-out">
                EDUCATION
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/experience"} className="">
              <div className="hover:text-pink_custom transition-all duration-300 ease-out">
                BLOGS
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/experience"} className="">
              <div className="hover:text-pink_custom transition-all duration-300 ease-out">
                PROJECTS
              </div>
            </Link>
          </li>
          <li>
            <ToggleTheme />
          </li>
        </ul>
        {/* show toggle theme */}
        <div className="flex md:hidden">
          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
