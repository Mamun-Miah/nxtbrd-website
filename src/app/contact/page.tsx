"use client";
import PageTitle from "@/components/share/PageTitle";
import React from "react";
import { motion } from "framer-motion";
const ContactPage = () => {
  return (
    <>
      <PageTitle
        pageName="Contact"
        pageTitle="Contact"
        bg="/contact/contact.png"
      />
      <div className="md:w-[650px] w-[90%] mx-auto py-20 relative">
        <div className="">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full z-10"
          >
            <h1 className="mb-10 text-center lg:text-7xl md:text-5xl text-4xl font-['anton'] tracking-wider lg:leading-20 leading-16">
              <span className="text-primary-foreground">
                {" "}
                ARE YOU READY FOR
              </span>{" "}
              <br />
              YOUR SUCCESS{" "}
            </h1>
          </motion.div>
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
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
    </>
  );
};

export default ContactPage;
