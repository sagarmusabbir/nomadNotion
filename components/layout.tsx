import { IconSvgProps } from "@/types";
import * as React from "react";
export const HeroBg: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    viewBox="0 0 800 800"
    {...props}
  >
    <path fill="none" d="M0 0h800v800H0z" />
    <g fill="none" stroke="#f1f5f9">
      <path d="m769 229 268 31.9M927 880 731 737l-211-77-211-122-269 61 255 165-168.5 115.5L40 599l-237-106 299-111-133-153L126.5 79.5-69-63" />
      <path d="m-31 229 268 32 153 121 213 111-294.5 44.5-207-156M370 905l-75-141" />
      <path d="m520 660 58 182 153-105 109-138-237-106-83 167-225 104 14-226 81-156 149-113 230-40L577.5 41.5 370 105 295-36 126.5 79.5 237 261 102 382 40 599-69 737l196 143" />
      <path d="m520-140 58.5 182.5L731-63M603 493l-64-224-302-8 133-156m532 277L539 269M390 382H102" />
      <path d="m-222 42 348.5 37.5L370 105l169 164 38.5-227.5L927 80 769 229l133 153-299 111 128 244M295-36l282.5 77.5M578 842l-283-78M40-201l87 281m-25 302-363-113" />
    </g>
    <g fill="#cbd5e1">
      <circle cx={769} cy={229} r={5} />
      <circle cx={539} cy={269} r={5} />
      <circle cx={603} cy={493} r={5} />
      <circle cx={731} cy={737} r={5} />
      <circle cx={520} cy={660} r={5} />
      <circle cx={309} cy={538} r={5} />
      <circle cx={295} cy={764} r={5} />
      <circle cx={40} cy={599} r={5} />
      <circle cx={102} cy={382} r={5} />
      <circle cx={127} cy={80} r={5} />
      <circle cx={370} cy={105} r={5} />
      <circle cx={578} cy={42} r={5} />
      <circle cx={237} cy={261} r={5} />
      <circle cx={390} cy={382} r={5} />
    </g>
  </svg>
);
export default HeroBg;
