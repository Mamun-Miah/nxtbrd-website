"use client";
import SectionTitleSm from "@/components/share/SectionTitleSm";
import Image from "next/image";
import { motion } from "motion/react";
import styles from "./Home.module.css";

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
    <div className="md:w-[70%] w-[90%] mx-auto py-10">
      <SectionTitleSm title="Work process" />
      <h3 className="text-3xl font-['anton']">
        Our streamlined 6 step
        <span className="inline-flex ml-2">
          <Image src="/home/rectangle2.png" width={150} height={40} alt="" />
        </span>
        <br className="hidden md:block" /> process turns
        <span className="text-primary"> strategy into success</span>
      </h3>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-20 gap-y-10 mt-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -250 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: index === 2 ? index * 0.7 : index * 0.4,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex items-center w-full gap-1"
          >
            <div className=" bg-[#303030] rounded-full min-w-[80px] h-[80px] flex items-center justify-center mr-[-10px] z-10">
              <Image
                className="max-w-full"
                src={step.img}
                alt=""
                width={43}
                height={40}
              />
            </div>
            <div className="relative workProcess">
              <div
                className={`${styles.innerCurve} absolute top-0 left-0 z-0 h-full`}
              ></div>
              <div className="relative w-[calc(100% - 100px)] min-h-[155px] ml-8 h-auto bg-[#303030] p-4 rounded-4xl z-10">
                <h3 className="text-xl font-['anton'] mb-2 tracking-wider">
                  {step.title}
                </h3>
                <p className="text-secondary-foreground">{step.desc}</p>

                {/* large screen indicators */}
                <div className="md:block hidden">
                  {index === 0 && (
                    <Image
                      src="/icons/home/arrow-right.svg"
                      alt="Extra"
                      width={60}
                      height={60}
                      className="absolute -right-[45px] top-1/2 -z-10 w-[45px]"
                    />
                  )}
                  {index === 1 && (
                    <Image
                      src="/icons/home/curved-arrow-right.svg"
                      alt="Extra"
                      width={60}
                      height={60}
                      className="absolute top-[40%] -right-[140px] w-[210px]"
                    />
                  )}
                  {index === 3 && (
                    <Image
                      src="/icons/home/arrow-left.svg"
                      alt="Extra"
                      width={60}
                      height={60}
                      className="absolute -left-[150px] top-1/2 -z-10 w-[45px]"
                    />
                  )}
                  {index === 4 && (
                    <Image
                      src="/icons/home/arrow-right.svg"
                      alt="Extra"
                      width={60}
                      height={60}
                      className="absolute -right-[45px] top-1/2 -z-10 w-[45px]"
                    />
                  )}
                  {index === 2 && (
                    <Image
                      src="/icons/home/curved-arrow-left.svg"
                      alt="Extra"
                      width={60}
                      height={60}
                      className="absolute -left-[178px] top-[78px] w-[75px]"
                    />
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
