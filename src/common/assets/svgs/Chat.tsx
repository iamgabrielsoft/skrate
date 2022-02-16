import * as React from 'react';
import { SVGProps } from 'react';

const SvgChat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 0.5H15C15.2761 0.5 15.5 0.723858 15.5 1V11C15.5 11.2761 15.2761 11.5 15 11.5H5.35078C5.01017 11.5 4.67971 11.6159 4.41374 11.8287L0.5 14.9597V1C0.5 0.723858 0.723858 0.5 1 0.5Z"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx={4.25} cy={6} r={1} fill="white" />
    <circle cx={8} cy={6} r={1} fill="white" />
    <circle cx={11.75} cy={6} r={1} fill="white" />
  </svg>
);

export default SvgChat;
