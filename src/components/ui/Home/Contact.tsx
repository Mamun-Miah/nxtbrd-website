import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="w-[80%] mx-auto py-20">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        <div className="w-full">
          <h1 className="lg:text-7xl md:text-6xl text-5xl font-['anton'] tracking-wider leading-20">
            <span className="text-primary-foreground"> ARE YOU READY </span>{" "}
            <br />
            FOR YOUR <br /> SUCCESS{" "}
            <Image
              className="relative left-[53%] bottom-34"
              src="/icons/home/marketing-automation.svg"
              width={160}
              height={160}
              alt=""
            />
          </h1>
        </div>
        <div className="w-full bg-[#303030] p-7 rounded-xl">
          <form action="">
            <div>
              <input
                className="px-4 py-2 w-full bg-[#000000] outline-none shadow-[0px_0px_1px_1px_#a2a2a2a2] rounded-lg"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="py-5">
              <input
                className="px-4 py-2 w-full  bg-[#000000] outline-none shadow-[0px_0px_1px_1px_#a2a2a2a2] rounded-lg"
                type="email"
                placeholder="Email"
              />
            </div>
            <div>
              <textarea
                className="px-4 py-2 w-full  bg-[#000000] outline-none shadow-[0px_0px_1px_1px_#a2a2a2a2] rounded-lg"
                name=""
                rows={4}
                placeholder="Description"
              ></textarea>
            </div>
            <button
              style={{ padding: "14px 0" }}
              type="submit"
              className="btn-primary w-full mt-3"
            >
              Book an Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
