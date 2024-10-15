"use client";

import { Button, ButtonGroup, ListGroup } from "flowbite-react";

import { usePathname } from "next/navigation";
import {
  HiCloudDownload,
  HiInbox,
  HiOutlineAdjustments,
  HiUserCircle,
} from "react-icons/hi";

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
import { AboutIcon, ArticleIcon, Logo, ProjectIcon } from "./icons";

export function BtnGrp() {
  const pathname = usePathname();

  return (
    // <ButtonGroup>
    //   {links.map((link) => (
    //     <Button color="light" key={link.id} outline size="xs">
    //       <Link href={link.to} className="flex justify-center items-center">
    //         <link.icon
    //           className="mr-2 w-4 h-4  fill-gray-700 hover:fill-gray-800 "
    //           aria-hidden="true"
    //         />
    //         <span>{link.name}</span>
    //       </Link>
    //     </Button>
    //   ))}
    // </ButtonGroup>

    // <ul className="flex justify-between items-center space-x-4 text-base ">
    <ButtonGroup outline>
      <Link
        className={`link ${
          pathname === "/articles" ? "active" : "bg-gray-200 "
        } flex bg-slate-300 border border-r-0 border-slate-500   px-4 py-2 text-xs text-gray-800 rounded-l-md`}
        href="/articles"
      >
        <ArticleIcon
          className={`link ${
            pathname === "/articles" ? "active" : "fill-gray-500 "
          } mr-2 w-4 h-4  fill-current `}
        />
        <span>Articles</span>
      </Link>

      <Link
        className={`link ${
          pathname === "/projects" ? "active" : "bg-gray-200 "
        } flex bg-slate-300 border border-slate-500   px-4 py-2 text-xs text-gray-800`}
        href="/projects"
      >
        <ProjectIcon
          className={`link ${
            pathname === "/projects" ? "active" : "fill-gray-500 "
          } mr-2 w-4 h-4  fill-current `}
        />
        <span>Projects</span>
      </Link>

      <Link
        className={`link ${
          pathname === "/about" ? "active" : "bg-gray-200 "
        } flex bg-slate-300 border border-l-0 border-slate-500   px-4 py-2 text-xs text-gray-800 rounded-r-md`}
        href="/about"
      >
        <Logo
          className={`link ${
            pathname === "/about" ? "active" : "fill-gray-500 "
          } mr-2 w-4 h-4  fill-current `}
        />
        <span>About</span>
      </Link>
    </ButtonGroup>
  );
}
