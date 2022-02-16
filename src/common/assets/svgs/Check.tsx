import * as React from 'react';
import { SVGProps } from 'react';

const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={8} cy={8} r={7.5} fill="#15A5E5" stroke="#15A5E5" />
    <path d="M4 8.68293L7.5 11L12 6" stroke="white" strokeWidth={1.5} strokeLinecap="round" />
  </svg>
);

export default SvgCheck;
