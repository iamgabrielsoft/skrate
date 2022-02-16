import * as React from 'react';
import { SVGProps } from 'react';

const SvgProperty = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={60}
    height={60}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M51.5687 26.3119V57.4285H8.57143V26.3119L30.0701 5.06117L51.5687 26.3119Z"
      fill="white"
      stroke="#6D7380"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M51.6065 25.0675V8.64874H43.2413V16.6591L51.6065 25.0675Z"
      fill="#DEE1EB"
      stroke="#6D7380"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.69989 31.172L29.2379 6.54104C29.4469 6.33223 29.7296 6.21503 30.0242 6.21503C30.3189 6.21503 30.6016 6.33223 30.8106 6.54104L55.2928 31.172C55.3966 31.2779 55.5203 31.362 55.6567 31.4194C55.7931 31.4769 55.9396 31.5064 56.0875 31.5064C56.2354 31.5064 56.3818 31.4769 56.5183 31.4194C56.6547 31.362 56.7784 31.2779 56.8822 31.172L57.1108 30.9309C57.3169 30.7211 57.4324 30.4382 57.4324 30.1434C57.4324 29.8485 57.3169 29.5656 57.1108 29.3558L30.7827 2.89741C30.5737 2.6886 30.291 2.5714 29.9963 2.5714C29.7017 2.5714 29.419 2.6886 29.21 2.89741L2.893 29.3502C2.68696 29.56 2.57143 29.8429 2.57143 30.1377C2.57143 30.4326 2.68696 30.7155 2.893 30.9253L3.12723 31.1664C3.33547 31.3759 3.61775 31.4941 3.91241 31.4952C4.20708 31.4962 4.49018 31.38 4.69989 31.172Z"
      fill="#6D7380"
      stroke="#6D7380"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M30 48C36.154 48 41.1429 43.0111 41.1429 36.8571C41.1429 30.7031 36.154 25.7143 30 25.7143C23.846 25.7143 18.8571 30.7031 18.8571 36.8571C18.8571 43.0111 23.846 48 30 48Z"
      fill="#DEE1EB"
      stroke="#6D7380"
      strokeMiterlimit={10}
    />
    <path
      d="M24.8571 36.8571H35.1429"
      stroke="#6D7380"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M30 31.7143V42"
      stroke="#6D7380"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgProperty;
