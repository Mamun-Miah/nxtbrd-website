import SectionTitleSm from "@/components/share/SectionTitleSm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="lg:w-[80%] w-[90%] mx-auto py-10">
      <div className="flex md:flex-row flex-col-reverse items-center md:gap-20 gap-10">
        <div className="relative md:w-4/12">
          <div className="hidden md:block">
            <SectionTitleSm title="Who we are" />
          </div>
          <Image src="/home/ring.png" width={220} height={200} alt="" />{" "}
          <span className="md:block hidden absolute top-[15%] left-[85%] w-[1px] h-54 bg-secondary"></span>
        </div>
        <div className="md:w-6/12">
          <div className="md:hidden  block pb-5">
            <SectionTitleSm title="Who we are" />
          </div>
          <h2 className="md:text-3xl text-2xl font-['anton'] leading-12 tracking-wider">
            NXT BRD IS A{" "}
            <span className="text-primary">
              DYNAMIC DIGITAL MARKETING AGENCY
            </span>{" "}
            DEDICATED TO HELPING BUSINESSES THRIVE ONLINE.
            <Image
              src="/icons/home/curved-arrow.svg"
              className="inline ml-3 relative"
              height={30}
              width={30}
              alt=""
            />
          </h2>
          <p className="text-lg text-secondary-foreground mt-5">
            We offer a full range of services including Social Media Management,
            SEO, Content Writing, Graphic Design, Branding, Video Editing,
            Landing Page Design, App Design, and Software Design.
            <Link href="/" className="text-primary-foreground ml-3 underline">
              Read More
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
