// import ScrollToTop from "@/components/user/helpers/scroll-to-top";
import Footer from "@/components/user/homepage-user/Footer";
import Navbar from "@/components/user/homepage-user/Navbar";
import React from "react";

const LayoutUser = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <main className="min-h-screen mx-auto relative px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
        <Navbar />
        {children}
        {/* <ScrollToTop /> */}
      </main>
      <Footer />
    </>
  );
};

export default LayoutUser;
