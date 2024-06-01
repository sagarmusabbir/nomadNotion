import { Button, ButtonGroup } from "flowbite-react";

import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";
import { links } from "@/site";
import Link from "next/link";

export function Btn() {
  return (
    <>
      {links.map((link) => (
        // <li key={link.id}>

        <Button
          as={Link}
          href={link.to}
          outline
          color="light"
          size="sm"
          key={link.id}
        >
          {link.name}
        </Button>
        // </li>
      ))}
    </>
  );
}

export function BtnGrp() {
  return (
    <div className="flex flex-wrap gap-1">
      <ButtonGroup outline>
        {links.map((link) => (
          // <li key={link.id}>

          <Button
            as={Link}
            href={link.to}
            outline
            color="light"
            size="sm"
            key={link.id}
          >
            {link.name}
          </Button>
          // </li>
        ))}
      </ButtonGroup>
    </div>
  );
}
