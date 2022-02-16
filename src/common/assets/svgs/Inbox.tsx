import * as React from 'react';
import { SVGProps } from 'react';

const SvgInbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1521_55829)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.063088 2.64966C0.146237 2.4274 0.30621 2.24263 0.51069 2.12769C0.655336 2.04638 0.82225 2 1 2H15C15.1856 2 15.3594 2.05056 15.5083 2.13866C15.7911 2.30587 15.9843 2.6083 15.9991 2.95692C15.9997 2.97121 16 2.98557 16 3V13C16 13.5523 15.5523 14 15 14H1C0.447715 14 0 13.5523 0 13V3C0 2.87674 0.022301 2.75869 0.063088 2.64966ZM15 3.66984V13H1V3.55195L7.13532 7.93432C7.65161 8.3031 8.34408 8.30716 8.86466 7.94446L15 3.66984ZM14.2121 3L8.293 7.12397C8.11948 7.24487 7.88865 7.24352 7.71656 7.12059L1.94773 3H14.2121Z"
        fill="#09182C"
      />
    </g>
    <defs>
      <clipPath id="clip0_1521_55829">
        <rect width={16} height={16} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgInbox;
