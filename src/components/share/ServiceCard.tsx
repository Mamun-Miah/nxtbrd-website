import Image from "next/image";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
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

      <h3 className="pt-4 pb-2 font-[anton] font-[100]">{service.title}</h3>
      <p className="text-secondary-foreground text-sm">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
