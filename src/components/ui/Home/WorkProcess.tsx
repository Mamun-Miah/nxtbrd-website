"use client";
import SectionTitleSm from "@/components/share/SectionTitleSm";
import { BiSolidRightArrow } from "react-icons/bi";
import Image from "next/image";
import { motion } from "motion/react";

const steps = [
  {
    img: "/icons/home/process1.svg",
    title: " Discovery & Research",
    desc: "Understand the client's business, goals, target audience, and competitors. Conduct market and keyword research.",
  },
  {
    img: "/icons/home/process2.svg",
    title: "Strategy Development",
    desc: "Create a custom digital marketing plan. Choose the right channels (SEO, social media, ads, content, etc.)",
  },
  {
    img: "/icons/home/process3.svg",
    title: "Implementation",
    desc: "Launch campaigns across platforms (Google, Facebook, Instagram, etc.). Set up SEO, websites, or apps as needed.",
  },
  {
    img: "/icons/home/process4.svg",
    title: "Content Creation & Design",
    desc: "Write engaging content (blogs, posts, ads, etc.). Design visuals, videos, landing pages, or branding assets.",
  },
  {
    img: "/icons/home/process5.svg",
    title: "Monitoring & Optimization",
    desc: "Track performance through analytics tools. A/B test ads, improve content, and tweak strategy for better ROI.",
  },
  {
    img: "/icons/home/process6.svg",
    title: "Reporting & Growth",
    desc: "Share detailed reports with insights. Plan future steps based on data and results.",
  },
];
export default function WorkProcess() {
  return (
    <div className="lg:w-[80%] w-[90%] mx-auto py-10">
      <SectionTitleSm title="Work process" />
      <h3 className="text-3xl font-['anton']">
        Our streamlined 6 step
        <span className="inline-flex ml-2">
          <Image src="/home/rectangle2.png" width={150} height={40} alt="" />
        </span>
        <br />
        process turns
        <span className="text-primary"> strategy into success</span>
      </h3>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex items-center w-full"
          >
            <div className=" bg-[#303030] rounded-full min-w-[80px] h-[80px] flex items-center justify-center mr-[-10px]">
              <Image
                className="max-w-full"
                src={step.img}
                alt=""
                width={43}
                height={40}
              />
            </div>
            <div className="relative w-full min-h-[120px]">
              <Image
                className="min-w-full h-40"
                src="/home/process-bg.png"
                alt=""
                width={600}
                height={10}
              />
              <div className="absolute top-3 left-5 py-4 px-8">
                <h3 className="text-xl font-['anton'] mb-2 tracking-wider">
                  {step.title}
                </h3>
                <p className="text-secondary-foreground">{step.desc}</p>
              </div>
            </div>
            {/* {(index === 0 || index === 4) && (
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                viewport={{ once: true }}
                className="absolute h-[1px] top-1/2 -right-[60px] w-[100px] -z-20 border-b border-dashed border-primary"
              >
                <BiSolidRightArrow />
              </motion.div>
            )} */}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
