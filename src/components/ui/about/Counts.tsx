"use client";
import Image from "next/image";
import React, { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const Counts = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // run only once
    threshold: 0.3, // 30% visible
  });

  return (
    <div className="lg:w-[70%] md:w-[80%] w-[90%] mx-auto py-10">
      <div className="flex items-center justify-between flex-wrap gap-5">
        <div className="invertedRadius p-5 flex items-center  gap-5 bg-[#303030] text-white relative rounded-2xl">
          <Image src="/about/projects.svg" width={80} height={80} alt="" />
          <div>
            <h2
              ref={ref}
              className="text-4xl font-['anton'] font-light tracking-[4]"
            >
              {inView ? <CountUp end={130} /> : 0}+
            </h2>
            <p className="mt-2 text-sm text-secondary-foreground">
              130 Completed Projects
            </p>
          </div>
        </div>
        <div className="invertedRadius p-5 flex items-center gap-5 bg-[#303030] text-white relative rounded-2xl">
          <Image src="/about/clients.svg" width={80} height={80} alt="" />
          <div>
            <h2
              ref={ref}
              className="text-4xl font-['anton'] font-light tracking-[4]"
            >
              {inView ? <CountUp end={20} /> : 0}+
            </h2>
            <p className="mt-2 text-sm text-secondary-foreground">
              Global Clients
            </p>
          </div>
        </div>
        <div className="invertedRadius p-5 flex items-center gap-5 bg-[#303030] text-white relative rounded-2xl">
          <Image src="/about/experience.svg" width={80} height={80} alt="" />
          <div>
            <h2
              ref={ref}
              className="text-4xl font-['anton'] font-light tracking-[4]"
            >
              0{inView ? <CountUp end={8} /> : 0}++
            </h2>
            <p className="mt-2 text-sm text-secondary-foreground">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counts;
