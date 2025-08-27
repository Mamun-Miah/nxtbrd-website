import SectionTitle from "@/components/share/SectionTItle";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const items = [
  {
    id: 1,
    img: "/home/sponsors/sponsor1.png",
  },
  {
    id: 2,
    img: "/home/sponsors/sponsor2.png",
  },
  {
    id: 3,
    img: "/home/sponsors/sponsor3.png",
  },
  {
    id: 4,
    img: "/home/sponsors/sponsor4.png",
  },
  {
    id: 5,
    img: "/home/sponsors/sponsor5.png",
  },
  {
    id: 6,
    img: "/home/sponsors/sponsor6.png",
  },
  {
    id: 8,
    img: "/home/sponsors/sponsor8.png",
  },
  {
    id: 9,
    img: "/home/sponsors/sponsor9.png",
  },
  {
    id: 10,
    img: "/home/sponsors/sponsor10.png",
  },
  {
    id: 11,
    img: "/home/sponsors/sponsor11.png",
  },
  {
    id: 12,
    img: "/home/sponsors/sponsor12.png",
  },
];
const Sponsored = () => {
  return (
    <div className="py-10">
      <div className="w-[80%] mx-auto">
        <SectionTitle
          heading="Companies"
          headingSpan="We Worked With"
          paragraph="We work with Schools, Car Repair Shops, custom digital solutions that boost visibility, engagement, and growth across various industries and platforms."
        />
      </div>

      <div className="mt-10">
        <Marquee speed={300}>
          <div className="flex gap-10 ml-5">
            {items.map((item, i) => (
              <Image
                className="w-full h-auto"
                key={i}
                src={item.img}
                width={300}
                height={100}
                alt=""
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Sponsored;
