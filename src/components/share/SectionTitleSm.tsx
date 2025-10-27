import Image from "next/image";
import React from "react";

const SectionTitleSm = ({ title }: { title: string }) => {
  return (
    <div className="flex gap-2 items-center mb-5">
      <Image src="/icons/home/star-default.svg" width={15} height={15} alt="" />
      <p>{title}</p>{" "}
    </div>
  );
};

export default SectionTitleSm;
