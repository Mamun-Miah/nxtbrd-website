import { ShapeStyles } from "@/app/page";
import React from "react";

const YellowShapeSm = ({ styles }: { styles: ShapeStyles }) => {
  return (
    <div
      style={styles}
      className="absolute w-[250px] h-[120px] rounded-full mix-blend-screen filter blur-3xl opacity-20 bg-gradient-to-r via-[#FCC304]  bg-[length:200%_200%] animate-gradient-move z-0 pointer-events-none"
    ></div>
  );
};

export default YellowShapeSm;
