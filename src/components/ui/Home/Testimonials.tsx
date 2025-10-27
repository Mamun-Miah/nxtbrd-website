/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import SectionTitleSm from "@/components/share/SectionTitleSm";
import useEmblaCarousel from "embla-carousel-react";

const items = [
  {
    image: "/home/testimonial1.png",
    name: "Suzana suzu",
    review:
      "NXTBRD transformed our digital presence with creative strategies, expert design, and measurable results—truly a reliable partner for long-term marketing success.",
  },
  {
    image: "/home/testimonial2.png",
    name: "Ethan Anderson",
    review:
      "NXTBRD redefined our online presence with strategic creativity, polished design, and measurable performance—truly a trusted partner for sustainable business and marketing success.",
  },
  {
    image: "/home/testimonial3.png",
    name: "Emily Johnson",
    review:
      "NXTBRD enhanced our digital footprint with inventive ideas, precise design, and clear results—truly a dependable partner for long-term brand growth and visibility.",
  },
  {
    image: "/home/team2.png",
    name: "David Miller",
    review:
      "NXTBRD transformed our marketing efforts with creative strategies, expert design, and measurable outcomes—truly a reliable partner for achieving consistent, long-term success.",
  },
];
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const { api } = useEmblaCarousel();
  // const [emblaRef, emblaApi] = useEmblaCarousel();

  // useEffect(() => {
  //   if (!api) return;

  //   setActiveIndex(api.selectedScrollSnap());

  //   api.on("select", () => {
  //     setActiveIndex(api.selectedScrollSnap());
  //   });
  // }, [api]);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false, // optional
  });

  // Track active slide
  useEffect(() => {
    if (!emblaApi) return;

    // Set initial active index
    setActiveIndex(emblaApi.selectedScrollSnap());

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    // Subscribe to select event
    emblaApi.on("select", onSelect);

    // Cleanup function
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="w-[70%] mx-auto pb-10">
      <SectionTitleSm title="Our happy Clients" />

      <h3 className="text-3xl font-['anton']">
        Professional, creative,{" "}
        <span className="inline-flex mt-2">
          <Image src="/home/client1.png" width={35} height={30} alt="" />
          <Image src="/home/client2.png" width={35} height={30} alt="" />
          <Image src="/home/client3.png" width={35} height={30} alt="" />
          <Image src="/home/client4.png" width={35} height={30} alt="" />
          <Image src="/home/client5.png" width={35} height={30} alt="" />
        </span>
        <br />
        and committed from
        <span className="text-primary"> start to finish.</span>
      </h3>

      <Carousel
        className="mx-auto mt-10 w-full"
        setApi={(embla: any) => {
          embla.on("select", () => {
            setActiveIndex(embla.selectedScrollSnap());
          });
        }}
      >
        <CarouselContent className="-ml-1">
          {items.map((item, index) => (
            // <CarouselItem
            //   key={index}
            //   className="pl-5 md:basis-1/2 lg:basis-1/3 pt-10"
            // >
            //   <div
            //     className={`relative h-[300px] ${
            //       activeIndex === index - 1 && "lg:-top-10"
            //     }`}
            //   >
            //     <Image
            //       className="w-full rounded-lg"
            //       src="/home/review-bg.png"
            //       alt=""
            //       width={800}
            //       height={400}
            //     />
            //     <div className="pt-5 p-1">
            //       <Image
            //         className="mx-auto rounded-lg"
            //         src={item.image}
            //         alt=""
            //         width={65}
            //         height={65}
            //       />
            //       <div className="pt-5 text-center px-3">
            //         <h3 className="text-xl font-['anton'] font-light">
            //           {item.name}
            //         </h3>
            //         <p className="text-xs text-secondary-foreground">
            //           {item.review}
            //         </p>
            //       </div>
            //     </div>
            //   </div>
            // </CarouselItem>
            <CarouselItem
              key={index}
              className="pl-5 md:basis-1/2 lg:basis-1/3 pt-20"
            >
              <div
                className={`relative h-[320px] ${
                  activeIndex === index - 1 && "lg:-top-10"
                }`}
              >
                <Image
                  className="w-full absolute top-0 -z-10"
                  src="/home/review-bg.png"
                  alt=""
                  width={407}
                  height={280}
                  quality={100}
                />
                <div className="absolute -mt-8 p-1 z-10">
                  <Image
                    className="mx-auto rounded-lg"
                    src={item.image}
                    alt=""
                    width={65}
                    height={65}
                  />
                  <div className="pt-5 text-center px-3">
                    <h3 className="text-xl font-['anton'] font-light">
                      {item.name}
                    </h3>
                    <p className="text-xs text-secondary-foreground">
                      {item.review}
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className={styles.innerCurveReview}>
                <div className="pt-5 w-[300px] p-1">
                  <Image
                    className="mx-auto rounded-lg"
                    src={item.image}
                    alt=""
                    width={65}
                    height={65}
                  />
                  <div className="pt-5 text-center px-3">
                    <h3 className="text-xl font-['anton'] font-light">
                      {item.name}
                    </h3>
                    <p className="text-xs text-secondary-foreground">
                      {item.review}
                    </p>
                  </div>
                </div>
              </div> */}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonials;
