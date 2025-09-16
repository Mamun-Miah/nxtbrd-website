import React from "react";

const PageTitle = ({
  bg,
  pageName,
  pageTitle,
}: {
  bg: string;
  pageName: string;
  pageTitle: string;
}) => {
  return (
    <div
      style={{ backgroundImage: `url('${bg}')` }}
      className={`h-[480px]  bg-cover bg-center w-full bg-no-repeat bg-fixed`}
    >
      <div className="flex items-center justify-center h-full bg-[#000000c4]">
        <div className="text-center">
          <p className="text-primary">{pageName}</p>
          <h3 className="mt-3 text-4xl font-['anton']">{pageTitle}</h3>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
