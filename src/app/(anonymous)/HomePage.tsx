import React from "react";
import HeroSection from "./hero-section/page";
import AboutSection from "./about/page";
import Experiences from "./experiences/page";
import SkillPage from "./skill/page";
import Educations from "./educations/educations";
// import Projects from "./projects/page";
// import Contact from "./contact/page";

const HomeUserPage = () => {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experiences />
      <SkillPage />
      {/* <Projects /> */}
      <Educations />
      {/* <Contact /> */}
    </div>
  );
};

export default HomeUserPage;
