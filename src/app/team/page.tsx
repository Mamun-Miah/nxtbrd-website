import PageTitle from "@/components/share/PageTitle";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const teamMembers = [
  {
    id: "1",
    name: "Shahed Mahmud",
    designation: "UIUX Designer",
    img: "/team/1.png",
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  {
    id: "2",
    name: "Mamun Ahmed",
    designation: "Fullstack Developer",
    img: "/team/2.png",
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  {
    id: "3",
    name: "Tanvir Mahmud",
    designation: "Backend Developer",
    img: "/team/3.png",
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  {
    id: "4",
    name: "Afsana Sultanna",
    designation: "Junior Developer",
    img: "/team/4.png",
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  {
    id: "5",
    name: "Sweet Ali",
    designation: "Fullstack Developer",
    img: "/team/5.png",
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  {
    id: "6",
    name: "Azwad Hossain",
    designation: "Full Stack Developer",
    img: "/team/6.png",
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  {
    id: "7",
    name: "Archi Khan",
    designation: "Digital Marketer",
    img: "/team/7.png",
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  {
    id: "8",
    name: "Shakkhar Shaha",
    designation: "QA Engineer",
    img: "/team/8.png",
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  {
    id: "9",
    name: "Akash Mehmud",
    designation: "Video Editor",
    img: "/team/9.png",
    facebook: "",
    instagram: "",
    linkedin: "",
  },
];

const TeamPage = () => {
  return (
    <>
      <PageTitle
        pageName="Our Team"
        pageTitle="Meet Our Team"
        bg="/contact/contact.png"
      />

      <div className="lg:w-[80%] w-[90%] mx-auto py-20">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
          {teamMembers.map((member, i) => (
            <div className="teamMemberCard relative" key={member.id}>
              <Image
                className="w-full"
                src={member.img}
                width={300}
                height={300}
                alt={`team member ${i}`}
              />
              <div className="info absolute left-0 -bottom-15 right-0 z-0 opacity-0 transition-all duration-300">
                <div className="w-10/12 mx-auto">
                  <div className="flex items-center justify-center gap-3">
                    <Link
                      className="flex items-center justify-center w-16 h-16 bg-secondary rounded-full text-primary transition-all duration-200 hover:bg-primary hover:text-secondary border-1 border-secondary"
                      href=""
                    >
                      <FaInstagram className="text-3xl" />
                    </Link>

                    <Link
                      className="flex items-center justify-center w-16 h-16 bg-secondary rounded-full text-primary transition-all duration-200 hover:bg-primary hover:text-secondary border-1 border-secondary"
                      href=""
                    >
                      <FaFacebookF className="text-3xl" />
                    </Link>

                    <Link
                      className="flex items-center justify-center w-16 h-16 bg-secondary rounded-full text-primary transition-all duration-200 hover:bg-primary hover:text-secondary border-1 border-secondary"
                      href=""
                    >
                      {" "}
                      <FaLinkedinIn className="text-3xl" />
                    </Link>
                  </div>
                  <div className="bg-secondary p-5 rounded-2xl text-center mt-1">
                    <h3 className="text-xl font-['anton'] tracking-wider">
                      {" "}
                      {member.name}
                    </h3>
                    <p className="text-primary">{member.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamPage;
