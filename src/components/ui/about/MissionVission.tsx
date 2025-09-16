import Image from "next/image";
import React from "react";

const MissionVission = () => {
  return (
    <div className="lg:w-[70%] md:w-[80%] w-[90%] mx-auto py-20">
      <div className="flex items-center md:flex-row flex-col lg:gap-20 gap-10">
        <div className="md:w-3/7 w-full">
          <Image
            className="w-full"
            src="/about/mission.png"
            width={400}
            height={400}
            alt="mission"
          />
        </div>
        <div className="md:w-4/7 w-full">
          <h2 className="text-primary-foreground text-3xl font-['anton']">
            Our Mission
          </h2>
          <p className="pt-3 text-secondary-foreground text-sm">
            At NXT BRD, we are dedicated to helping businesses grow through
            smart, creative, and results-driven digital marketing. Our mission
            is to craft tailored strategies that drive engagement, boost
            visibility, and deliver real value.
          </p>
          <p className="pt-3 text-secondary-foreground text-sm">
            From SEO to design, we combine innovation and expertise to turn
            ideas into impact. We build lasting partnerships based on trust,
            transparency, and performance—ensuring every client moves forward
            with confidence in the fast-paced digital world.
          </p>
        </div>
      </div>
      <div className="flex items-center md:flex-row flex-col lg:gap-20 gap-10">
        <div className="md:w-4/7 w-full">
          <h2 className="text-primary-foreground text-3xl font-['anton']">
            Our Vission
          </h2>
          <p className="pt-3 text-secondary-foreground text-sm">
            At NXT BRD, our vision is to become a leading force in digital
            innovation, empowering brands worldwide to thrive through meaningful
            digital experiences.
          </p>
          <p className="pt-3 text-secondary-foreground text-sm">
            We aim to set new standards in creativity, strategy, and technology
            by delivering solutions that inspire growth and lasting impact.
            Through continuous learning and adaptation, we envision a future
            where every business we serve reaches its full digital potential.
          </p>
        </div>
        <Image
          className="md:w-3/7 w-full"
          src="/about/vission.png"
          width={400}
          height={400}
          alt="mission"
        />
      </div>
    </div>
  );
};

export default MissionVission;
