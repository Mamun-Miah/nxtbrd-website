import React from "react";

const TealTransparent = ({ styles }) => {
  return (
    <div
      style={styles}
      className="absolute w-[550px] h-[200px] rounded-full mix-blend-screen filter blur-3xl opacity-20 bg-gradient-to-r via-[#1AB0E6]  bg-[length:200%_200%] animate-gradient-move z-0 pointer-events-none"
    ></div>
  );
};

export default TealTransparent;
