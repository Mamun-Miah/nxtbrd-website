"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";

const Hero = () => {
  const [childStart, setChildStart] = useState(false);
  return (
    <div className="relative md:w-[90%] w-[90%] min-h-screen mx-auto md:py-10 py-3 flex items-center justify-center gap-20">
      <div className="flex md:flex-row flex-col items-center justify-between">
        {/* left side */}

        <motion.div
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 10,
            damping: 6,
          }}
          onAnimationComplete={() => setChildStart(true)}
          className="md:w-1/2 flex items-center"
        >
          {/* animated ball */}
          <div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 7,
                ease: "linear",
              }}
              className="hidden md:block absolute -left-20 bottom-15"
            >
              <Image
                className=""
                src="/home/elements/marbel.svg"
                width={200}
                height={200}
                quality={100}
                alt=""
              />
            </motion.div>
          </div>
          <div className="z-100 md:ml-30 xl:min-w-[436px] lg:min-w-[400px]">
            <h1 className="xl:text-7xl lg:text-6xl text-4xl font-['Anton'] text-primary  leading-tight tracking-wider">
              WE BUILD
              <span className="ml-2 inline-flex items-center">
                <Image
                  src="/icons/home/brand-person1.svg"
                  className="lg:w-16 md:w-10 w-8"
                  width={50}
                  height={50}
                  alt="brand person1"
                />
                <Image
                  className="md:ml-[-20px] -ml-3 lg:w-16 md:w-10 w-8"
                  src="/icons/home/brand-person2.svg"
                  width={50}
                  height={50}
                  alt="brand person1"
                />
                <Image
                  className="md:ml-[-20px] -ml-3 lg:w-16 md:w-10 w-8"
                  src="/icons/home/brand-person3.svg"
                  width={50}
                  height={50}
                  alt="brand person1"
                />
              </span>
              <br /> BRAND{" "}
              <span
                style={{ WebkitTextStroke: "0.7px rgb(190 190 190)" }}
                className="text-[#222222]"
              >
                PEOPLE <br /> REMEMBER
                {childStart && (
                  <motion.span
                    initial={{ x: 500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                  >
                    <Image
                      className="inline lg:ml-3 ml-2 lg:w-[80px] w-[30px]"
                      src="/icons/home/tv.svg"
                      height={60}
                      width={60}
                      alt=""
                    />
                  </motion.span>
                )}
              </span>
            </h1>
            <p className="mt-4 text-[#BFBFBF] leading-relaxed">
              By crafting impactful digital experiences through strategy,
              creativity, and innovation that connect with audiences and drive
              long-term success.
            </p>
            {childStart && (
              <motion.button
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="hidden md:block text-sm mt-7 py-3 px-12 border-1 rounded-lg text-white font-['Anton'] tracking-wider transition-all duration-200 hover:bg-primary hover:text-black hover:border-black cursor-pointer"
              >
                Get a Free Consultation
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* right side */}
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 10,
            damping: 6,
          }}
          className="md:w-1/2 md:pl-10 lg:h-[500px]"
        >
          <div className="relative">
            {childStart && (
              <motion.div
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="absolute bottom-[84%] right-[87%]"
              >
                <h3 className="text-2xl text-primary font-['anton'] tracking-wider">
                  {" "}
                  200K
                </h3>
                <p className="text-[#D9D9D9] leading-4 text-xs">
                  Satisfied <br /> Customer
                </p>
              </motion.div>
            )}
            <Image
              className="w-full"
              width={400}
              height={400}
              src="/home/banner-img.png"
              alt=""
            />

            {/* ratings */}
            {childStart && (
              <motion.div
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="absolute md:bottom-[-40px] bottom-[-35px] md:left-[-40px] left-[-70px] bg-[#222222] p-3 w-47 rounded-lg md:scale-100 scale-75"
              >
                <div className="flex gap-3">
                  <p className="text-[#F1F1F1] text-xs">Rating 5.0</p>
                  <span className="flex gap-1">
                    <Image
                      src="/icons/home/star.svg"
                      width={15}
                      height={15}
                      alt=""
                    />
                    <Image
                      src="/icons/home/star.svg"
                      width={15}
                      height={15}
                      alt=""
                    />
                    <Image
                      src="/icons/home/star.svg"
                      width={15}
                      height={15}
                      alt=""
                    />
                    <Image
                      src="/icons/home/star.svg"
                      width={15}
                      height={15}
                      alt=""
                    />
                    <Image
                      src="/icons/home/star.svg"
                      width={15}
                      height={15}
                      alt=""
                    />
                  </span>
                </div>
                <div className="flex mt-2">
                  <Image
                    className="w-1/5"
                    src="/icons/home/person1.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                  <Image
                    className="w-1/5"
                    src="/icons/home/person2.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                  <Image
                    className="w-1/5"
                    src="/icons/home/person3.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                  <Image
                    className="w-1/5"
                    src="/icons/home/person4.svg"
                    width={40}
                    height={40}
                    alt=""
                  />
                  <button className="w-1/5 bg-primary px-3 rounded-[50%] font-bold text-2xl flex items-center cursor-pointer">
                    <AiOutlinePlus />
                  </button>
                </div>
              </motion.div>
            )}

            {/* social links */}
            {childStart && (
              <motion.div
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="flex gap-1 absolute bottom-0 left-[66%]"
              >
                <Link
                  className="inline-flex items-center justify-center rounded-[10px]"
                  href=""
                >
                  <Image
                    src="/icons/social/tik-tok.png"
                    width={43}
                    height={43}
                    alt="facebook icon"
                  />
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-[10px]"
                  href=""
                >
                  <Image
                    src="/icons/social/instagram.png"
                    width={48}
                    height={40}
                    alt="twitter icon"
                  />
                </Link>
                <Link
                  className="inline-flex items-center justify-center rounded-[10px]"
                  href=""
                >
                  <Image
                    src="/icons/social/facebook.png"
                    width={43}
                    height={43}
                    alt="instagram icon"
                  />
                </Link>

                <Link
                  className="inline-flex items-center justify-center rounded-[10px]"
                  href=""
                >
                  <Image
                    src="/icons/social/linkedin.png"
                    width={43}
                    height={43}
                    alt="facebook icon"
                  />
                </Link>
              </motion.div>
            )}
          </div>

          <button className="block md:hidden text-sm mt-10 py-3 px-12 rounded-lg font-['Anton'] tracking-wider transition-all duration-200 bg-primary hover:bg-primary-foreground text-black cursor-pointer w-full">
            Get a Free Consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
