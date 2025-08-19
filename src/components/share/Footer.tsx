import { MapPinHouse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { IoIosInformationCircleOutline, IoMdSettings } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import { MdEmail, MdOutlineSupportAgent, MdWifiCalling3 } from "react-icons/md";
import { RiFileSettingsFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="h-[496px] px-[198px] py-10">
      <div className="flex justify-between gap-[80px]">
        <div className="w-[35%]">
          <Image src="/logo.png" width={289} height={54} alt="logo" />
          <p className="text-[#E8E8E8] text-[22px] my-5">
            By crafting impactful digital experiences through strategy,
            creativity, and innovation that connect with audiences and drive
            long-term success.
          </p>
          <div className="flex gap-2">
            <Link
              className="text-primary bg-[#222222] w-[60px] h-[60px]  inline-flex items-center justify-center rounded-[10px]"
              href=""
            >
              <Image
                src="/icons/home/twitter.svg"
                width={36}
                height={30}
                alt="twitter icon"
              />
            </Link>
            <Link
              className="text-primary bg-[#222222] w-[60px] h-[60px] inline-flex items-center justify-center rounded-[10px]"
              href=""
            >
              <Image
                src="/icons/home/instagram.svg"
                width={30}
                height={30}
                alt="instagram icon"
              />
            </Link>
            <Link
              className="text-primary bg-[#222222] w-[60px] h-[60px] inline-flex items-center justify-center rounded-[10px]"
              href=""
            >
              <Image
                src="/icons/home/facebook.svg"
                width={16}
                height={30}
                alt="facebook icon"
              />
            </Link>
            <Link
              className="text-primary bg-[#222222] w-[60px] h-[60px] inline-flex items-center justify-center rounded-[10px]"
              href=""
            >
              <Image
                src="/icons/home/linkedin.svg"
                width={31}
                height={31}
                alt="facebook icon"
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-between gap-[80px] w-[65%]">
          <div className="w-3/12">
            <h3 className="text-[22px] border-b-2  border-[#FFD300] inline-block">
              Quick Links
            </h3>
            <ul className="mt-6 flex flex-col gap-4">
              <li>
                <Link className="flex items-center gap-2" href="/">
                  <IoHomeSharp className="text-primary" />
                  Home
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-2" href="/services">
                  <IoMdSettings className="text-primary" /> Services
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-2" href="/about">
                  <IoIosInformationCircleOutline className="text-primary" />
                  About
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-2" href="/team">
                  <MdOutlineSupportAgent className="text-primary" />
                  Team
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-5/12">
            <h3 className="text-[22px] border-b-2  border-[#FFD300] inline-block">
              Company Info
            </h3>
            <ul className="mt-6 flex flex-col gap-4">
              <li>
                <span className="flex items-center gap-2 ">
                  <MapPinHouse className="text-primary" size={16} />
                  Address
                </span>
                <span className="text-[#E8E8E8]">
                  38(3rd floor), Shah Makhdum Avenue, Sector 13, Uttara,
                  Dhaka-1230
                </span>
              </li>

              <li>
                <span className="flex items-center gap-2 ">
                  <MdWifiCalling3 className="text-primary" size={16} />
                  Phone
                </span>
                <span className="text-[#E8E8E8]">+8801922557436</span>
              </li>
              <li>
                <span className="flex items-center gap-2 ">
                  <MdEmail className="text-primary" size={16} />
                  Email
                </span>
                <span className="text-[#E8E8E8]">info@mapleitfirm.com</span>
              </li>
            </ul>
          </div>

          <div className="w-4/12">
            <h3 className="text-[22px] border-b-2  border-[#FFD300] inline-block">
              Opening Hours
            </h3>
            <ul className="mt-6 flex flex-col gap-4">
              <li>
                <span className="flex items-center gap-2 ">
                  <MapPinHouse className="text-primary" size={16} />
                  Monday - Saturday
                </span>
                <span className="text-[#E8E8E8]">9:00 AM - 5:00 PM</span>
              </li>

              <li>
                <span className="flex items-center gap-2 ">
                  <RiFileSettingsFill className="text-primary" size={16} />
                  Online Service
                </span>
                <span className="text-[#E8E8E8]">24 Hours 7 Days</span>
              </li>
              <li>
                <span className="flex items-center gap-2 ">
                  <MdEmail className="text-primary" size={16} />
                  Sunday
                </span>
                <span className="text-[#E8E8E8]">CLOSED</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
