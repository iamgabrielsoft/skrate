import * as React from 'react';
import { SVGProps } from 'react';

const SvgPencil = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.6667 0.666504L14.3333 3.33317L5 12.6665L1 13.9998L2.33333 9.99984L11.6667 0.666504Z"
      stroke="#6D7380"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgPencil;
