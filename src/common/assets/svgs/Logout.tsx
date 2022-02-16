import * as React from 'react';
import { SVGProps } from 'react';

const SvgLogout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8 0.666504V7.33317" stroke="#6D7380" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M12.0003 1.85303C13.3253 2.71531 14.3362 3.98267 14.8822 5.46622C15.4283 6.94976 15.4804 8.57005 15.0307 10.0856C14.5809 11.6011 13.6535 12.9308 12.3866 13.8763C11.1197 14.8219 9.58118 15.3327 8.00033 15.3327C6.41947 15.3327 4.88094 14.8219 3.61404 13.8763C2.34714 12.9308 1.41972 11.6011 0.969995 10.0856C0.520271 8.57005 0.572328 6.94976 1.11841 5.46622C1.66449 3.98267 2.67535 2.71531 4.00033 1.85303"
      stroke="#6D7380"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgLogout;
