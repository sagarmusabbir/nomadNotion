import { Button, ButtonGroup } from "flowbite-react";

import { links } from "@/site";
import Link from "next/link";

export function BtnGrp() {
  return (
    // <div className="flex flex-wrap gap-1">
    <ButtonGroup>
      {links.map((link) => (
        <Button
          as={Link}
          href={link.to}
          outline
          size="xs"
          color="dark"
          key={link.id}
        >
          {link.name}
        </Button>
      ))}
    </ButtonGroup>
    // </div>
  );
}
