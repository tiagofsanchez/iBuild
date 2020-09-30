import React from "react";
import { number } from "prop-types";

const HeroSVG = ({ width }) => {
  console.log(width);
  return (
    <svg
      width={width}
      height="964"
      viewBox={`0 0 ${width} 964`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="-2" width={width} height="966" fill="url(#paint0_linear)" />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="720"
          y1="-2"
          x2="720"
          y2="964"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#4E40EA" />
          <stop offset="0.453125" stop-color="#4900FF" stop-opacity="0.76" />
          <stop offset="1" stop-color="#4900FF" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

HeroSVG.prototype = {
  width: number,
};

HeroSVG.defaultProps = {
  width: 5000,
};

export default HeroSVG;
