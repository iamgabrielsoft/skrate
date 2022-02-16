import * as React from 'react';
import { SVGProps } from 'react';

const SvgHamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={19}
    viewBox="0 0 30 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={30} height={3} rx={1.5} fill="#15A5E5" />
    <rect y={8} width={30} height={3} rx={1.5} fill="#15A5E5" />
    <rect y={16} width={30} height={3} rx={1.5} fill="#15A5E5" />
  </svg>
);

export default SvgHamburger;
