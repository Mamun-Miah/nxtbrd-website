"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiMenu3Line } from "react-icons/ri";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative lg:px-[90px] flex items-center px-[42px] justify-between bg-[#0A0A0A] text-[#FFFFFF] py-5">
      <div className="icon">
        <Image
          className="lg:w-[238px] w-[160px]"
          src="/logo.png"
          width={238}
          height={44}
          alt=""
        ></Image>
      </div>
      <div className="flex items-center gap-8">
        <ul className="lg:flex hidden items-center gap-10 font-anton">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/team">Team</Link>
          </li>
        </ul>
        <button onClick={() => setIsOpen(true)} className="text-2xl">
          <RiMenu3Line />
        </button>
      </div>

      {/* Nav items for mobile devices */}
      {isOpen && (
        <div className="absolute top-0 right-0 w-[320px] bg-[#303030] min-h-screen px-[42px] pb-5 overflowY-scroll transition-all  duration-300 z-10">
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl relative left-[100%] mt-5"
          >
            <FaArrowRightLong />
          </button>
          <ul className="flex flex-col gap-4">
            <li>
              <Link className="flex items-center gap-2" href="/">
                <Image
                  src="/icons/home/home.svg"
                  height={20}
                  width={20}
                  alt=""
                />{" "}
                Home
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-2" href="/services">
                <Image
                  src="/icons/home/services.svg"
                  height={20}
                  width={20}
                  alt=""
                />{" "}
                Home
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-2" href="/about">
                <Image
                  src="/icons/home/about.svg"
                  height={20}
                  width={20}
                  alt=""
                />{" "}
                About
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-2" href="/team">
                <Image
                  src="/icons/home/persons.svg"
                  height={20}
                  width={20}
                  alt=""
                />{" "}
                Team
              </Link>
            </li>
          </ul>
          <h2 className="text-xl font-[anton] my-5">
            Need a <span className="text-primary">Custom Solution?</span>
          </h2>
          <p className="text-base text-[#B2B2B2]">
            Contact With Us For More Plan. Get in touch and we&apos;ll create
            the perfect plan for your business.
          </p>

          <button className="mt-5 bg-primary text-[#050505] py-3 w-full font-[anton] cursor-pointer rounded-sm">
            Need Appointment For More Plan
          </button>

          <div className="mt-5">
            <h3 className="text-[22px] border-b-2  border-[#FFD300] inline-block">
              Company Info
            </h3>
            <ul className="mt-6 flex flex-col gap-4">
              <li>
                <span className="flex items-center gap-2 ">
                  <Image
                    src="/icons/home/location.svg"
                    width={15}
                    height={15}
                    alt=""
                  />
                  Address
                </span>
                <span className="text-[#E8E8E8]">
                  38(3rd floor), Shah Makhdum Avenue, Sector 13, Uttara,
                  Dhaka-1230
                </span>
              </li>

              <li>
                <span className="flex items-center gap-2 ">
                  <Image
                    src="/icons/home/call.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  Phone
                </span>
                <span className="text-[#E8E8E8]">+8801922557436</span>
              </li>
              <li>
                <span className="flex items-center gap-2 ">
                  <Image
                    src="/icons/home/email.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  Email
                </span>
                <span className="text-[#E8E8E8]">info@mapleitfirm.com</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
