import { IconSvgProps } from "@/types";
import { Breadcrumb } from "flowbite-react";
import type { FC, PropsWithChildren } from "react";

import { BreadcrumbItem } from "@/lib/types";

const DefaultBreadcrumb: FC<BreadcrumbItem> = function ({
  icon,
  route,
  title,
}) {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/" icon={icon}></Breadcrumb.Item>
        <Breadcrumb.Item>{route}</Breadcrumb.Item>
        <Breadcrumb.Item>{title}</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};
export default DefaultBreadcrumb;
