import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" {...props} >
      <image width="64" height="64" href="/images/cherry.png" />
    </Svg>
  );
};

export default Icon;
