"use client";
import SectionTitleSm from "@/components/share/SectionTitleSm";
import ServiceCard from "@/components/share/ServiceCard";
import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const services = [
  {
    id: 1,
    title: "Branding",
    description:
      "From logo design to brand strategy, we ensure your business stands out and leaves a lasting impression.",
    icon: "/icons/home/service1.svg",
    image: "/home/services/service1.png",
  },
  {
    id: 2,
    title: "UIUX Development",
    description:
      "Our UI/UX solutions combine creativity, functionality, and usability to keep visitors engaged and turning into loyal customers.",
    icon: "/icons/home/service1.svg",
    image: "/home/services/service2.png",
  },
  {
    id: 3,
    title: "Websites",
    description:
      "We build responsive, SEO-friendly websites tailored to your brand and goals. From sleek designs to powerful functionality.",
    icon: "/icons/home/service3.svg",
    image: "/home/services/service3.png",
  },
  {
    id: 4,
    title: "Social Media Marketing",
    description:
      "Engage your audience, build brand loyalty, and drive conversions across all major social platforms.",
    icon: "/icons/home/service3.svg",
    image: "/home/services/service3.png",
  },
  {
    id: 5,
    title: "Video Production",
    description:
      "We produce high-quality videos that tell your brand story, engage audiences, and drive action.",
    icon: "/icons/home/service4.svg",
    image: "/home/services/service4.png",
  },
  {
    id: 6,
    title: "Content Marketing",
    description:
      "Our expert content writing services deliver clear, engaging, and SEO-friendly copy. From blogs to website content.",
    icon: "/icons/home/service4.svg",
    image: "/home/services/service4.png",
  },
  {
    id: 7,
    title: "Graphics Designing",
    description:
      "We create visually striking designs that communicate your brand message effectively. ",
    icon: "/icons/home/service5.svg",
    image: "/home/services/service5.png",
  },
  {
    id: 8,
    title: "Search Engine Optimization",
    description:
      "Boost your visibility and rank higher on search engines to attract more organic traffic.",
    icon: "/icons/home/service6.svg",
    image: "/home/services/service6.png",
  },
];
const Services = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="lg:w-[80%] w-[90%] mx-auto py-10">
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
      <div className="md:grid hidden lg:grid-cols-3 md:grid-cols-2 gap-10 bg-[#222222] mt-8 p-10 rounded-xl">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}

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
              <ServiceCard key={service.id} service={service} />
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
