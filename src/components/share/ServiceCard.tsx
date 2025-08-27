import Image from "next/image";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div>
      <div className="relative">
        <Image
          className="absolute top-0 left-1 w-[20%]"
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
        <p className="text-secondary-foreground text-sm">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
