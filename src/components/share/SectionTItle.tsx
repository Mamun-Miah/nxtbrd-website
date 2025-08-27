import React from "react";

const SectionTitle = ({ heading, headingSpan, paragraph }) => {
  return (
    <div className="w-[70%] mx-auto text-center pb-5">
      <h2 className="text-3xl font-['anton']">
        {heading} <span className="text-primary">{headingSpan}</span>
      </h2>
      <p className="text-secondary-foreground mt-3">{paragraph}</p>
    </div>
  );
};

export default SectionTitle;
