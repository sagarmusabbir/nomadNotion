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
              "flex items-center justify-center gap-0.5 lg:gap-1    rounded-md  text-gray-800   px-3 py-1.5 text-sm lg:text-base font-medium  hover:text-gray-950   ",
              {
                "bg-slate-100 font-semibold ": pathname === link.to,
              }
            )}
          >
            <LinkIcon className="h-4 w-4 fill-gray-600  hidden md:block" />
            <p className="">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
