import * as React from 'react';
import { SVGProps } from 'react';

const SvgInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={18}
    viewBox="0 0 20 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.8525 14.6396L11.4406 1.10996C11.3004 0.84995 11.0924 0.632732 10.8387 0.481334C10.585 0.329936 10.2951 0.25 9.99968 0.25C9.70425 0.25 9.41433 0.329936 9.16065 0.481334C8.90697 0.632732 8.69899 0.84995 8.55874 1.10996L1.14686 14.6396C1.00428 14.8967 0.931823 15.1867 0.93676 15.4806C0.941696 15.7745 1.02386 16.0619 1.17499 16.314C1.31867 16.5612 1.52484 16.7663 1.77283 16.9086C2.02081 17.051 2.30187 17.1256 2.5878 17.125H17.4116C17.6975 17.1256 17.9785 17.051 18.2265 16.9086C18.4745 16.7663 18.6807 16.5612 18.8244 16.314C18.9755 16.0619 19.0577 15.7745 19.0626 15.4806C19.0675 15.1867 18.9951 14.8967 18.8525 14.6396ZM10.8925 5.56246L10.4459 12.0356H9.55311L9.10686 5.56246H10.8925ZM9.99968 15.25C9.81426 15.25 9.633 15.195 9.47883 15.092C9.32466 14.989 9.2045 14.8425 9.13354 14.6712C9.06258 14.4999 9.04402 14.3114 9.08019 14.1296C9.11636 13.9477 9.20565 13.7807 9.33676 13.6495C9.46788 13.5184 9.63492 13.4291 9.81678 13.393C9.99864 13.3568 10.1871 13.3754 10.3584 13.4463C10.5297 13.5173 10.6762 13.6374 10.7792 13.7916C10.8822 13.9458 10.9372 14.127 10.9372 14.3125C10.9372 14.5611 10.8384 14.7996 10.6626 14.9754C10.4868 15.1512 10.2483 15.25 9.99968 15.25Z"
      fill="#FFB800"
    />
  </svg>
);

export default SvgInfo;