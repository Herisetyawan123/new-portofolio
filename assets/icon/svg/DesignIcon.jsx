import React from "react";

function DesignIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="76"
      height="64"
      fill="none"
      viewBox="0 0 76 64"
    >
      <path
        stroke="#7B4AE2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 20h22M50 20h22M44 26a6 6 0 100-12 6 6 0 000 12zM22 50a6 6 0 100-12 6 6 0 000 12zM66 50a6 6 0 100-12 6 6 0 000 12zM49.95 20.825A22.025 22.025 0 0165.65 38M22.35 38a22.025 22.025 0 0115.7-17.175"
      ></path>
      <g filter="url(#filter0_d_21_5454)">
        <circle
          cx="24"
          cy="34"
          r="20"
          fill="#7B4AE2"
          fillOpacity="0.2"
          shapeRendering="crispEdges"
        ></circle>
      </g>
      <defs>
        <filter
          id="filter0_d_21_5454"
          width="48"
          height="48"
          x="0"
          y="14"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_21_5454"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_21_5454"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default DesignIcon;
