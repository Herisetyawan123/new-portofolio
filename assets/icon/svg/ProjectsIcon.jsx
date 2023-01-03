import React from "react";

function ProjectsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      fill="none"
      viewBox="0 0 64 64"
    >
      <path
        stroke="#7B4AE2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 14h44v30a2 2 0 01-2 2H42a2 2 0 01-2-2v-6H24v14a2 2 0 01-2 2H12a2 2 0 01-2-2V14zM24 30H10M24 14v24M40 30h14M40 14v24"
      ></path>
      <g filter="url(#filter0_d_21_5470)">
        <circle
          cx="32"
          cy="34"
          r="20"
          fill="#7B4AE2"
          fillOpacity="0.2"
          shapeRendering="crispEdges"
        ></circle>
      </g>
      <defs>
        <filter
          id="filter0_d_21_5470"
          width="48"
          height="48"
          x="8"
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
            result="effect1_dropShadow_21_5470"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_21_5470"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default ProjectsIcon;
