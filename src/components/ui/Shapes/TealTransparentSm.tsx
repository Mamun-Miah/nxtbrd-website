/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const TealTransparentSm = ({ styles }: { styles: any }) => {
  return (
    <div
      style={styles}
      className="absolute w-[250px] h-[120px] rounded-full mix-blend-screen filter blur-3xl opacity-30 bg-gradient-to-r via-[#1AB0E6]  bg-[length:200%_200%] animate-gradient-move z-0 pointer-events-none"
    ></div>
  );
};

export default TealTransparentSm;
