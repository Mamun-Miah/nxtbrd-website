import PageTitle from "@/components/share/PageTitle";
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
      <About />
      <Team />
      <WorkProcess />
    </>
  );
};

export default AboutPage;
