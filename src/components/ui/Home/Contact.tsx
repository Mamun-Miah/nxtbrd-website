"use client";
import React from "react";
import { motion } from "motion/react";
const Contact = () => {
  return (
    <div className="w-[80%] mx-auto py-10">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10  ">
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full z-10"
        >
          <h1 className="relative lg:text-7xl text-5xl font-['anton'] tracking-wider lg:leading-20 leading-16 after:content-[''] after:absolute after:right-[25%] after:bottom-0 after:w-30 after:h-30 after:bg-[url('/icons/home/marketing-automation.svg')] after:bg-contain after:bg-no-repeat after:after">
            <span className="text-primary-foreground"> ARE YOU READY </span>{" "}
            <br />
            FOR YOUR <br /> SUCCESS{" "}
          </h1>
        </motion.div>
        <motion.div
          initial={{ x: -450, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="w-full bg-[#303030] p-7 rounded-xl z-5"
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
