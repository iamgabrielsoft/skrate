import * as React from 'react';
import { SVGProps } from 'react';

const SvgFacebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={8}
    height={14}
    viewBox="0 0 8 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.10941 2.32458H7.38739V0.0985833C7.16691 0.06825 6.40864 0 5.52555 0C3.68295 0 2.42072 1.15908 2.42072 3.28942V5.25H0.38739V7.7385H2.42072V14H4.91368V7.73908H6.86477L7.17449 5.25058H4.9131V3.53617C4.91368 2.81692 5.10733 2.32458 6.10941 2.32458Z"
      fill="#DEE1EB"
    />
  </svg>
);

export default SvgFacebook;
