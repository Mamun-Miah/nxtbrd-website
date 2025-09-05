"use client";
// import required modules
import SectionTitleSm from "@/components/share/SectionTitleSm";
// import ServiceCard from "@/components/share/ServiceCard";
import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// types
export type Origin = "left" | "right" | "bottom" | "top";
// import type { Variants } from "framer-motion";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  origin: Origin;
  delay: number;
}
const services: Service[] = [
  {
    id: 1,
    title: "Branding",
    description:
      "From logo design to brand strategy, we ensure your business stands out and leaves a lasting impression.",
    icon: "/icons/home/service1.svg",
    image: "/home/services/service1.png",
    origin: "bottom",
    delay: 0,
  },
  {
    id: 2,
    title: "UIUX Development",
    description:
      "Our UI/UX solutions combine creativity, functionality, and usability to keep visitors engaged and turning into loyal customers.",
    icon: "/icons/home/service1.svg",
    image: "/home/services/service2.png",
    origin: "left",
    delay: 0.3,
  },
  {
    id: 3,
    title: "Websites",
    description:
      "We build responsive, SEO-friendly websites tailored to your brand and goals. From sleek designs to powerful functionality.",
    icon: "/icons/home/service3.svg",
    image: "/home/services/service3.png",
    origin: "right",
    delay: 0.4,
  },
  {
    id: 4,
    title: "Social Media Marketing",
    description:
      "Engage your audience, build brand loyalty, and drive conversions across all major social platforms.",
    icon: "/icons/home/service3.svg",
    image: "/home/services/service3.png",
    origin: "bottom",
    delay: 0.5,
  },
  {
    id: 5,
    title: "Video Production",
    description:
      "We produce high-quality videos that tell your brand story, engage audiences, and drive action.",
    icon: "/icons/home/service4.svg",
    image: "/home/services/service4.png",
    origin: "bottom",
    delay: 0.5,
  },
  {
    id: 6,
    title: "Content Marketing",
    description:
      "Our expert content writing services deliver clear, engaging, and SEO-friendly copy. From blogs to website content.",
    icon: "/icons/home/service4.svg",
    image: "/home/services/service4.png",
    origin: "bottom",
    delay: 0.5,
  },
  {
    id: 7,
    title: "Graphics Designing",
    description:
      "We create visually striking designs that communicate your brand message effectively. ",
    icon: "/icons/home/service5.svg",
    image: "/home/services/service5.png",
    origin: "bottom",
    delay: 0.5,
  },
  {
    id: 8,
    title: "Search Engine Optimization",
    description:
      "Boost your visibility and rank higher on search engines to attract more organic traffic.",
    icon: "/icons/home/service6.svg",
    image: "/home/services/service6.png",
    origin: "bottom",
    delay: 0.5,
  },
];

const Services = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="lg:w-[80%] w-[90%] mx-auto py-10">
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
      >
        <SectionTitleSm title="Our Service" />
        <h3 className="text-3xl font-['anton']">
          We provide digital <br />
          service
          <Image
            className="inline mx-2 w-35"
            src="/home/rectangle.png"
            width={100}
            height={20}
            alt=""
          />{" "}
          <span className="text-primary">for you</span>
        </h3>
      </motion.div>

      {/* for large devices */}
      <div className="md:grid hidden lg:grid-cols-3 md:grid-cols-2 gap-10 bg-[#222222] mt-8 p-10 rounded-xl">
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="relative bg-[#222222] md:p-0 p-5 rounded-lg"
        >
          <Image
            className="absolute md:top-0 top-3 md:left-1 left-2 w-[20%]"
            width={40}
            height={40}
            src="/icons/home/service1.svg"
            alt=""
          />

          <Image
            className="w-full"
            width={200}
            height={200}
            src="/home/services/service1.png"
            alt=""
          />

          <h3 className="pt-4 pb-2 font-[anton] font-[100]">Branding</h3>
          <p className="text-secondary-foreground text-sm">
            From logo design to brand strategy, we ensure your business stands
            out and leaves a lasting impression.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          className="relative bg-[#222222] md:p-0 p-5 rounded-lg"
        >
          <Image
            className="absolute md:top-0 top-3 md:left-1 left-2 w-[20%]"
            width={40}
            height={40}
            src="/icons/home/service2.svg"
            alt=""
          />

          <Image
            className="w-full"
            width={200}
            height={200}
            src="/home/services/service2.png"
            alt=""
          />

          <h3 className="pt-4 pb-2 font-[anton] font-[100]">
            UIUX Development
          </h3>
          <p className="text-secondary-foreground text-sm">
            Our UI/UX solutions combine creativity, functionality, and usability
            to keep visitors engaged and turning into loyal customers.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          className="relative bg-[#222222] md:p-0 p-5 rounded-lg"
        >
          <Image
            className="absolute md:top-0 top-3 md:left-1 left-2 w-[20%]"
            width={40}
            height={40}
            src="/icons/home/service3.svg"
            alt=""
          />

          <Image
            className="w-full"
            width={200}
            height={200}
            src="/home/services/service3.png"
            alt=""
          />

          <h3 className="pt-4 pb-2 font-[anton] font-[100]">Websites</h3>
          <p className="text-secondary-foreground text-sm">
            We build responsive, SEO-friendly websites tailored to your brand
            and goals. From sleek designs to powerful functionality.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          className="relative bg-[#222222] md:p-0 p-5 rounded-lg"
        >
          <Image
            className="absolute md:top-0 top-3 md:left-1 left-2 w-[20%]"
            width={40}
            height={40}
            src="/icons/home/service4.svg"
            alt=""
          />

          <Image
            className="w-full"
            width={200}
            height={200}
            src="/home/services/service4.png"
            alt=""
          />

          <h3 className="pt-4 pb-2 font-[anton] font-[100]">
            Social Media Marketing
          </h3>
          <p className="text-secondary-foreground text-sm">
            Engage your audience, build brand loyalty, and drive conversions
            across all major social platforms.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeIn", delay: 0.1 }}
          className="relative bg-[#222222] md:p-0 p-5 rounded-lg"
        >
          <Image
            className="absolute md:top-0 top-3 md:left-1 left-2 w-[20%]"
            width={40}
            height={40}
            src="/icons/home/service5.svg"
            alt=""
          />

          <Image
            className="w-full"
            width={200}
            height={200}
            src="/home/services/service5.png"
            alt=""
          />

          <h3 className="pt-4 pb-2 font-[anton] font-[100]">
            Video Production
          </h3>
          <p className="text-secondary-foreground text-sm">
            We produce high-quality videos that tell your brand story, engage
            audiences, and drive action.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeIn", delay: 0.1 }}
          className="relative bg-[#222222] md:p-0 p-5 rounded-lg"
        >
          <Image
            className="absolute md:top-0 top-3 md:left-1 left-2 w-[20%]"
            width={40}
            height={40}
            src="/icons/home/service6.svg"
            alt=""
          />

          <Image
            className="w-full"
            width={200}
            height={200}
            src="/home/services/service6.png"
            alt=""
          />

          <h3 className="pt-4 pb-2 font-[anton] font-[100]">
            Content Marketing
          </h3>
          <p className="text-secondary-foreground text-sm">
            Our expert content writing services deliver clear, engaging, and
            SEO-friendly copy. From blogs to website content.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeIn", delay: 0.2 }}
          className="relative bg-[#222222] md:p-0 p-5 rounded-lg"
        >
          <Image
            className="absolute md:top-0 top-3 md:left-1 left-2 w-[20%]"
            width={40}
            height={40}
            src="/icons/home/service7.svg"
            alt=""
          />

          <Image
            className="w-full"
            width={200}
            height={200}
            src="/home/services/service7.png"
            alt=""
          />

          <h3 className="pt-4 pb-2 font-[anton] font-[100]">
            Graphics Designing
          </h3>
          <p className="text-secondary-foreground text-sm">
            We create visually striking designs that communicate your brand
            message effectively.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeIn", delay: 0.3 }}
          className="relative bg-[#222222] md:p-0 p-5 rounded-lg"
        >
          <Image
            className="absolute md:top-0 top-3 md:left-1 left-2 w-[20%]"
            width={40}
            height={40}
            src="/icons/home/service8.svg"
            alt=""
          />

          <Image
            className="w-full"
            width={200}
            height={200}
            src="/home/services/service8.png"
            alt=""
          />

          <h3 className="pt-4 pb-2 font-[anton] font-[100]">
            Search Engine Optimization
          </h3>
          <p className="text-secondary-foreground text-sm">
            Boost your visibility and rank higher on search engines to attract
            more organic traffic.
          </p>
        </motion.div>
        <div>
          <h3 className="text-2xl font-['anton'] mb-3">
            Need a <span className="text-primary">Custom Solution?</span>
          </h3>
          <p>
            Contact With Us For More Plan. Get in touch and we&apos;ll create
            the perfect plan for your business.
          </p>
          <button className="btn-primary mt-5 w-full">
            Need Appointment For More Plan
          </button>
        </div>
      </div>

      {/* for small devices */}
      <div className="relative md:hidden block mt-10">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>
              <div className="relative bg-[#222222] md:p-0 p-5 rounded-lg">
                <Image
                  className="absolute md:top-0 top-3 md:left-1 left-2 w-[20%]"
                  width={40}
                  height={40}
                  src={service.icon}
                  alt=""
                />

                <Image
                  className="w-full"
                  width={200}
                  height={200}
                  src={service.image}
                  alt=""
                />

                <h3 className="pt-4 pb-2 font-[anton] font-[100]">
                  {service.title}
                </h3>
                <p className="text-secondary-foreground text-sm">
                  {service.description}
                </p>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom buttons */}
        </Swiper>
        <div className="flex justify-between">
          <button
            ref={prevRef}
            className="custom-prev absolute -left-6 top-1/2 -translate-y-1/2 text-white w-[30px] h-[30px] rounded-full border border-[#DFDFDF] z-100 cursor-pointer flex items-center justify-center transition-all duration-3 hover:bg-secondary"
          >
            <GrPrevious />
          </button>
          <button
            ref={nextRef}
            className="custom-next absolute -right-6 top-1/2 -translate-y-1/2 text-white w-[30px] h-[30px] rounded-full border border-[#DFDFDF] z-10 cursor-pointer flex items-center justify-center transition-all duration-3 hover:bg-secondary"
          >
            <GrNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
