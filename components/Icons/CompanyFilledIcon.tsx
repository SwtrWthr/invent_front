export const CompanyFilledIcon = () => (
  <svg width={110} height={114} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 22.233c13.807 0 25 11.679 25 26.085 0 14.407-11.193 26.086-25 26.086s-25-11.68-25-26.086c0-14.406 11.193-26.085 25-26.085Z"
        fill="#7F63F4"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={0}
        y={0.933}
        width={110}
        height={112.171}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={5} dy={8.7} />
        <feGaussianBlur stdDeviation={15} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_3_43" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_3_43"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)