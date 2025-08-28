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
  const { api } = useEmblaCarousel();

  useEffect(() => {
    if (!api) return;

    setActiveIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-[80%] mx-auto pb-10">
      <SectionTitleSm title="Our happy Clients" />

      <h3 className="text-3xl font-['anton']">
        Professional, creative,{" "}
        <span className="inline-flex mt-2">
          <Image src="/home/client1.png" width={30} height={40} alt="" />
          <Image src="/home/client2.png" width={30} height={40} alt="" />
          <Image src="/home/client3.png" width={30} height={40} alt="" />
          <Image src="/home/client4.png" width={30} height={40} alt="" />
          <Image src="/home/client5.png" width={30} height={40} alt="" />
        </span>
        <br />
        and committed from
        <span className="text-primary"> start to finish.</span>
      </h3>

      <Carousel
        className="w-[90%] mx-auto mt-10"
        setApi={(embla: any) => {
          embla.on("select", () => {
            setActiveIndex(embla.selectedScrollSnap());
          });
        }}
      >
        <CarouselContent className="-ml-1">
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-5 md:basis-1/2 lg:basis-1/3"
            >
              <div
                className={`relative bg-[url('/home/review-bg.png')] bg-center bg-contain bg-no-repeat h-[300px] ${
                  activeIndex === index - 1 && "-top-10"
                }`}
              >
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
              </div>
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
