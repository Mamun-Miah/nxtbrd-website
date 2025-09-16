import PageTitle from "@/components/share/PageTitle";
import Services from "@/components/ui/Home/Services";
import React from "react";

const ServicesPage = () => {
  return (
    <>
      <PageTitle
        pageName="Services"
        pageTitle="Services We Provide"
        bg="/contact/contact.png"
      />
      <div className="relative w-full bg-black overflow-hidden">
        <Services />
        {/* <!-- Blue blobs --> */}
        <div className="absolute top-10 left-20 w-[300px] h-[300px] bg-cyan-600 rounded-full mix-blend-screen filter blur-[120px] opacity-30"></div>
        <div className="absolute top-1/4 right-10 w-[250px] h-[250px] bg-cyan-400 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>

        {/* <!-- Amber blobs --> */}
        <div className="absolute top-1/3 left-1/3 w-[200px] h-[200px] bg-amber-500 rounded-full mix-blend-screen filter blur-[90px] opacity-25"></div>
        <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-yellow-600 rounded-full mix-blend-screen filter blur-[140px] opacity-15"></div>
      </div>
    </>
  );
};

export default ServicesPage;
