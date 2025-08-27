import SectionTitleSm from "@/components/share/SectionTitleSm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="lg:px-[180px] px-[42px] py-10">
      <div className="flex md:flex-row flex-col-reverse items-center gap-10">
        <div className="md:w-2/5 md:border-r-1 border-secondary-foreground">
          <div className="hidden md:block">
            <SectionTitleSm title="Who we are" />
          </div>
          <Image src="/home/ring.png" width={200} height={200} alt="" />{" "}
        </div>
        <div className="md:w-3/5">
          <div className="md:hidden  block pb-5">
            <SectionTitleSm title="Who we are" />
          </div>
          <h2 className="text-3xl font-['anton'] leading-10 tracking-wide">
            NXT BRD IS A{" "}
            <span className="text-primary">
              DYNAMIC DIGITAL MARKETING AGENCY
            </span>{" "}
            DEDICATED TO HELPING BUSINESSES THRIVE ONLINE.
            <Image
              src="/icons/home/curved-arrow.svg"
              className="inline ml-3"
              height={20}
              width={25}
              alt=""
            />
          </h2>
          <p className="text-secondary-foreground mt-5">
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
