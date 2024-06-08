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
    // <ButtonGroup>
    //   {links.map((link) => (
    //     <Button
    //       as={Link}
    //       href={link.to}
    //       outline
    //       size="sm"
    //       color="gray"
    //       key={link.id}
    //       className="flex justify-center items-center "
    //     >
    //       <link.icon
    //         className="mr-2 mt-0.5  h-4 w-4 fill-gray-700 hover:fill-slate-800 "
    //         aria-hidden="true"
    //       />
    //       <span>{link.name}</span>
    //     </Button>
    //   ))}
    // </ButtonGroup>
    <ButtonGroup>
      {links.map((link) => (
        <Button color="light" key={link.id} outline size="xs">
          <Link href={link.to} className="flex justify-center items-center">
            <link.icon
              className="mr-2 w-4 h-4  fill-gray-700 hover:fill-slate-800 "
              aria-hidden="true"
            />
            <span className=" font-semibold">{link.name}</span>
          </Link>
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
