import * as React from 'react';
import { SVGProps } from 'react';

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={17}
    height={18}
    viewBox="0 0 17 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.24967 14.6668C10.9316 14.6668 13.9163 11.6821 13.9163 8.00016C13.9163 4.31826 10.9316 1.3335 7.24967 1.3335C3.56778 1.3335 0.583008 4.31826 0.583008 8.00016C0.583008 11.6821 3.56778 14.6668 7.24967 14.6668Z"
      stroke="#09182C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.9165 16.667L11.9639 12.7144"
      stroke="#09182C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgSearch;
