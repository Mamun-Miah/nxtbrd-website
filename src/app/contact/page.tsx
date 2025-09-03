import PageTitle from "@/components/share/PageTitle";
import Contact from "@/components/ui/Home/Contact";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <PageTitle
        pageName="Contact"
        pageTitle="Contact"
        bg="/contact/contact.png"
      />
      <Contact />
    </>
  );
};

export default ContactPage;
