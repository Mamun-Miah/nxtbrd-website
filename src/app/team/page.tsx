import PageTitle from "@/components/share/PageTitle";
import Image from "next/image";
import React from "react";

const teamMembers = [
  {
    id: "1",
    img: "/team/1.png",
  },
  {
    id: "2",
    img: "/team/2.png",
  },
  {
    id: "3",
    img: "/team/3.png",
  },
  {
    id: "4",
    img: "/team/4.png",
  },
  {
    id: "5",
    img: "/team/5.png",
  },
  {
    id: "6",
    img: "/team/6.png",
  },
  {
    id: "7",
    img: "/team/7.png",
  },
  {
    id: "8",
    img: "/team/8.png",
  },
  {
    id: "9",
    img: "/team/9.png",
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

      <div className="lg:w-[80%] w-[90%] mx-auto py-10">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
          {teamMembers.map((member, i) => (
            <div key={member.id}>
              <Image
                className="w-full"
                src={member.img}
                width={300}
                height={300}
                alt={`team member ${i}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamPage;
