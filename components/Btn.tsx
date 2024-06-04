import { Button, ButtonGroup } from "flowbite-react";

import { links } from "@/site";
import Link from "next/link";

import {
  MdPerson,
  MdKeyboard,
  MdArticle,
  MdArchive,
  MdDesktopMac,
} from "react-icons/md";
import { start } from "repl";

export function BtnGrp() {
  return (
    <ButtonGroup>
      {links.map((link) => (
        <Button
          as={Link}
          href={link.to}
          size="xs"
          color="gray"
          key={link.id}
          className="flex justify-center items-center backdrop-blur-lg bg-opacity-30"
        >
          <link.icon
            className="mr-2 mt-0.5  h-3 w-3 fill-gray-700 hover:fill-slate-800 "
            aria-hidden="true"
          />
          <span>{link.name}</span>
        </Button>
      ))}
    </ButtonGroup>

    // <ButtonGroup outline>
    //   <Button href="/articles" color="gray">
    //     <MdArticle className="mr-3 mt-0.5 h-4 w-4" />
    //     Articles
    //   </Button>

    //   <Button as={Link} href="/post" color="gray">
    //     <MdArchive className="mr-3 mt-0.5 h-4 w-4" />
    //     Projects
    //   </Button>

    //   <Button as={Link} href="/about" color="gray">
    //     <MdPerson className="mr-3 mt-0.5 h-4 w-4" />
    //     About
    //   </Button>
    // </ButtonGroup>
  );
}
