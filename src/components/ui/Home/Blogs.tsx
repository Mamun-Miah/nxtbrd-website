"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";

import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const blogs = [
  {
    img: "/home/blog1.png",
    name: "Fuel Your Brand with Smart Digital Solutions.",
    text: "Our experienced team keeps you up-to-date with the latest trends and creates solutions just",
  },
  {
    img: "/home/blog2.png",
    name: "Fuel Your Brand with Smart Digital Solutions.",
    text: "Our experienced team keeps you up-to-date with the latest trends and creates solutions just",
  },
  {
    img: "/home/blog3.png",
    name: "Fuel Your Brand with Smart Digital Solutions.",
    text: "Our experienced team keeps you up-to-date with the latest trends and creates solutions just",
  },
  {
    img: "/home/blog3.png",
    name: "Fuel Your Brand with Smart Digital Solutions.",
    text: "Our experienced team keeps you up-to-date with the latest trends and creates solutions just",
  },
];
const Blogs = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  return (
    <div className="w-[80%] mx-auto py-10">
      <h1 className="mb-8 text-secondary [-webkit-text-stroke:1.5px_#FFD300] text-8xl font-['anton'] tracking-widest">
        OUR LATEST BLOG
      </h1>
      <div className="relative">
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
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {blogs.map((blog, i) => (
            <SwiperSlide key={blog.name + i}>
              <div>
                <Image
                  className="w-full"
                  src={blog.img}
                  height={40}
                  width={400}
                  alt={blog.img}
                />
                <h3 className="my-3 text-lg font-['anton'] tracking-wider text-white">
                  {blog.name}
                </h3>
                <p className="text-secondary-foreground">{blog.text}</p>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom buttons */}
        </Swiper>
        <div className="flex justify-between mt-4">
          <button
            ref={prevRef}
            className="custom-prev absolute -left-10 top-1/2 -translate-y-1/2 text-white w-[30px] h-[30px] rounded-full border border-[#DFDFDF] z-100 cursor-pointer flex items-center justify-center transition-all duration-3 hover:bg-secondary"
          >
            <GrPrevious />
          </button>
          <button
            ref={nextRef}
            className="custom-next absolute -right-10 top-1/2 -translate-y-1/2 text-white w-[30px] h-[30px] rounded-full border border-[#DFDFDF] z-10 cursor-pointer flex items-center justify-center transition-all duration-3 hover:bg-secondary"
          >
            <GrNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
