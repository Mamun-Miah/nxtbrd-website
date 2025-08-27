import SectionTitleSm from "@/components/share/SectionTitleSm";
import ServiceCard from "@/components/share/ServiceCard";
import Image from "next/image";
import React from "react";

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
    image: "/home/services/service1.png",
  },
  {
    id: 3,
    title: "Social Media Marketing",
    description:
      "Engage your audience, build brand loyalty, and drive conversions across all major social platforms.",
    icon: "/icons/home/service3.svg",
    image: "/home/services/service3.png",
  },
  {
    id: 4,
    title: "Video Production",
    description:
      "We produce high-quality videos that tell your brand story, engage audiences, and drive action.",
    icon: "/icons/home/service4.svg",
    image: "/home/services/service4.png",
  },
  {
    id: 5,
    title: "Graphics Designing",
    description:
      "We create visually striking designs that communicate your brand message effectively. ",
    icon: "/icons/home/service5.svg",
    image: "/home/services/service5.png",
  },
  {
    id: 6,
    title: "Search Engine Optimization",
    description:
      "Boost your visibility and rank higher on search engines to attract more organic traffic.",
    icon: "/icons/home/service6.svg",
    image: "/home/services/service6.png",
  },
  {
    id: 7,
    title: "Branding",
    description:
      "From logo design to brand strategy, we ensure your business stands out and leaves a lasting impression.",
    icon: "/icons/home/service7.svg",
    image: "/home/services/service7.png",
  },
];
const Services = () => {
  return (
    <div className="md:px-[15%] px-[45px] py-20">
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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 bg-[#222222] mt-8 p-10 rounded-xl">
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
    </div>
  );
};

export default Services;
