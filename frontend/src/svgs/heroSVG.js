import React from "react";
import { number } from "prop-types";

const HeroSVG = ({ size }) => {
  return (
    <svg
      width={size}
      height="827"
      viewBox={`0 0 ${size} 827`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-121.341 97.7593C-155.899 48.8073 -139.434 -10.3972 -84.5637 -34.4774L1278.64 -632.736C1333.51 -656.816 1406.01 -636.653 1440.57 -587.701L1862.93 10.5748C1897.48 59.5268 1881.02 118.731 1826.15 142.811L462.94 741.07C408.07 765.15 335.574 744.987 301.016 696.035L-121.341 97.7593Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M-154.022 -18.0308C-182.049 -70.9937 -158.89 -129.887 -102.294 -149.573L1157.22 -587.686C1213.82 -607.373 1282.42 -580.396 1310.45 -527.434L1651.49 117.054C1679.52 170.016 1656.36 228.91 1599.77 248.596L340.247 686.709C283.651 706.395 215.052 679.419 187.025 626.456L-154.022 -18.0308Z"
        fill="url(#paint1_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="-183.914"
          y1="9.12372"
          x2="1915.49"
          y2="-193.126"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5AA2E4" />
          <stop offset="1" stop-color="#8352FD" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="-204.769"
          y1="-113.929"
          x2="1712.36"
          y2="-147.487"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3913B8" />
          <stop offset="1" stop-color="#8352FD" />
        </linearGradient>
      </defs>
    </svg>
  );
};

HeroSVG.prototype = {
  size: number,
};

HeroSVG.defaultProps = {
  size: 400,
};

export default HeroSVG;
