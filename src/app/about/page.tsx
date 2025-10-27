import AnimatedColorBg from "@/components/share/AnimatedColorBg";
import PageTitle from "@/components/share/PageTitle";
import Counts from "@/components/ui/about/Counts";
import MissionVission from "@/components/ui/about/MissionVission";
import About from "@/components/ui/Home/About";
import Team from "@/components/ui/Home/Team";
import WorkProcess from "@/components/ui/Home/WorkProcess";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageTitle
        bg="/about/about.png"
        pageName="About Us"
        pageTitle="Who we are"
      />

      <div className="relative bg-black/80 z-10 backdrop-blur-3xl">
        <div className="relative z-100">
          <About />
          <Counts />
          <MissionVission />
          <Team />
          <WorkProcess />
        </div>
        <AnimatedColorBg />
      </div>
    </>
  );
};

export default AboutPage;
