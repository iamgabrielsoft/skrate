import * as React from 'react';
import { SVGProps } from 'react';

const SvgDashboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={17}
    viewBox="0 0 15 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6.5 1H1V9.5H6.5V1Z" stroke="#09182C" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M6.5 11.5H1V16H6.5V11.5Z"
      stroke="#09182C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M14 1H8.5V5.5H14V1Z" stroke="#09182C" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M14 7.5H8.5V16H14V7.5Z"
      stroke="#09182C"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgDashboard;
