import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="lg:w-[80%] w-[90%] mx-auto py-10">
      <div className="flex md:flex-row flex-col items-center justify-between gap-10">
        <div className="md:w-1/2">
          <div className="">
            <h1 className="lg:text-6xl md:text-5xl text-3xl font-['Anton'] text-primary md:leading-16 leading-9 tracking-wider">
              WE BUILD{" "}
              <span className="inline-flex items-center">
                <Image
                  src="/icons/home/brand-person1.svg"
                  width={50}
                  height={50}
                  alt="brand person1"
                />
                <Image
                  className="ml-[-20px]"
                  src="/icons/home/brand-person2.svg"
                  width={50}
                  height={50}
                  alt="brand person1"
                />
                <Image
                  className="ml-[-20px]"
                  src="/icons/home/brand-person3.svg"
                  width={50}
                  height={50}
                  alt="brand person1"
                />
              </span>
              <br /> BRAND{" "}
              <span
                style={{ WebkitTextStroke: "0.3px rgb(190 190 190)" }}
                className="text-[#222222]"
              >
                PEOPLE <br /> REMEMBER
                <Image
                  className="inline lg:ml-3 ml-2 lg:w-[60px] w-[40px]"
                  src="/icons/home/tv.svg"
                  height={60}
                  width={60}
                  alt=""
                />
              </span>
            </h1>
            <p className="mt-5 text-[#BFBFBF]">
              By crafting impactful digital experiences through strategy,
              creativity, and innovation that connect with audiences and drive
              long-term success.
            </p>
            <button className="mt-5 py-2 px-10 rounded-lg text-white border-2 border-white font-['Anton']">
              Get a Free Consultation
            </button>
          </div>
        </div>
        <div className="md:w-1/2 pb-10 px-8">
          <div className="relative">
            <div className="absolute bottom-[85%] right-[87%]">
              <h3 className="text-2xl text-primary font-anton font-bold">
                {" "}
                200K
              </h3>
              <p className="text-[#D9D9D9] leading-4 text-xs">
                Satisfied <br /> Customer
              </p>
            </div>
            <Image
              className="w-full"
              width={400}
              height={400}
              src="/home/banner-img.png"
              alt=""
            />
            {/* ratings */}
            <div className="absolute bottom-[-8px] left-[-40px] bg-[#222222] p-3 w-54 rounded-lg">
              <div className="flex gap-3">
                <p className="text-[#F1F1F1] text-xs">Rating 5.0</p>
                <span className="flex gap-1">
                  <Image
                    src="/icons/home/star.svg"
                    width={18}
                    height={18}
                    alt=""
                  />
                  <Image
                    src="/icons/home/star.svg"
                    width={18}
                    height={18}
                    alt=""
                  />
                  <Image
                    src="/icons/home/star.svg"
                    width={18}
                    height={18}
                    alt=""
                  />
                  <Image
                    src="/icons/home/star.svg"
                    width={18}
                    height={18}
                    alt=""
                  />
                  <Image
                    src="/icons/home/star.svg"
                    width={18}
                    height={18}
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
            </div>
            {/* social links */}
            <div className="flex gap-1 absolute bottom-0 left-[66%]">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
