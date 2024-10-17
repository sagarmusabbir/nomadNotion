"use client";

import { AboutIcon, ArticleIcon, Logo, ProjectIcon } from "./icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { links } from "@/site";

// ...

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex flex-row space-x-4">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.to}
            className={clsx(
              "flex items-center justify-center gap-1   drop-shadow-sm rounded-md  text-gray-900 hover:text-gray-800  px-3 py-2 text-sm font-medium  hover:bg-slate-200   ",
              {
                "bg-slate-200 ": pathname === link.to,
              }
            )}
          >
            <LinkIcon className="w-6 fill-gray-600  hidden md:block" />
            <p className="">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
