"use client";
import React, { useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/share/SectionTItle";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const teamMembers = [
  {
    name: "Sahed Mahmud",
    role: "UI/UX Designer",
    img: "/home/team1.png",
  },
  {
    name: "Jane Doe",
    role: "Frontend Developer",
    img: "/home/team2.png",
  },
  {
    name: "John Smith",
    role: "Backend Developer",
    img: "/home/team3.png",
  },
];
const Team = () => {
  const [active, setActive] = useState(0);
  const n = teamMembers.length;

  const prev = () => setActive((i) => (i - 1 + n) % n);
  const next = () => setActive((i) => (i + 1) % n);

  // card width + spacing
  const offset =
    typeof window !== "undefined" && window.innerWidth < 768 ? 250 : 400;

  const styleFor = (i: number): React.CSSProperties => {
    const diff = (i - active + n) % n;

    // Active in center
    if (diff === 0) {
      return {
        transform: "translateX(0) scale(1)",
        opacity: 1,
        zIndex: 30,
      };
    }
    // Right side (next)
    if (diff === 1) {
      return {
        transform: `translateX(${offset}px) scale(0.9)`,
        opacity: 0.6,
        zIndex: 20,
        marginBottom: "100px",
        scale: 0.8,
        bottom: "100px",
      };
    }
    //  Left side (previous)
    if (diff === n - 1) {
      return {
        transform: `translateX(-${offset}px) scale(0.9)`,
        opacity: 0.6,
        zIndex: 20,
        marginBottom: "100px",
        scale: 0.8,
        bottom: "100px",
      };
    }
    // Hide others
    return {
      transform: "translateX(0) scale(0.8)",
      opacity: 0,
      zIndex: 0,
      pointerEvents: "none",
    };
  };

  return (
    <div className="lg:w-[80%] w-[90%] mx-auto py-10">
      <SectionTitle
        heading="Meet Our"
        headingSpan="Team"
        paragraph="A creative, skilled, and passionate team delivering tailored digital marketing solutions to help brands grow, connect, and succeed online."
      />
      <div className="relative mx-auto w-full">
        <div className="relative mx-auto flex items-center justify-center gap-10 h-[500px] overflow-hidden">
          {teamMembers.map((m, i) => {
            const diff = (i - active + n) % n;
            const isActive = diff === 0;
            const styles = styleFor(i);
            return (
              <div
                key={i}
                style={{ ...styles }}
                className="absolute transition-all duration-500 ease-in-out rounded-3xl overflow-hidden"
              >
                <Image
                  src={m.img}
                  alt={m.img}
                  width={320}
                  height={300}
                  sizes="50vw"
                />
                {isActive && (
                  <div className="w-[260px] bg-[#373737] text-center py-3 z-100 relative top-[-45px] left-[18px] rounded-lg">
                    <h3 className="text-lg text-white font-extralight font-['anton'] uppercase tracking-wider">
                      {m.name}
                    </h3>
                    <p className="text-yellow-400 text-sm">({m.role})</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center">
          <button
            onClick={prev}
            className="w-[50px] h-[50px] text-xl flex items-center justify-center bg-[#303030] absolute lg:left-[240px] md:left-[20%]  top-[60%] -translate-y-1/2 rounded-full  p-3 text-gray-100 hover:bg-black/80 cursor-pointer"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="w-[50px] h-[50px] text-xl flex items-center justify-center bg-[#303030] absolute lg:right-[240px] md:right-[20%]  top-[60%] -translate-y-1/2 rounded-full p-3 text-gray-100 hover:bg-black/80 cursor-pointer"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
