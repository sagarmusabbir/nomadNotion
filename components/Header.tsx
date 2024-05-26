import Link from "next/link";
import Image from "next/image";
import { links } from "@/site";
import { Logo } from "./icons";
import { DarkThemeToggle } from "flowbite-react";

const Header = () => {
  return (
    <>
      <div className="sticky top-0 z-50 backdrop-blur-lg bg-opacity-30 bg-zinc-100 dark:bg-zinc-900 py-4">
        <div className="max-w-5xl flex flex-row justify-between items-center m-auto px-4">
          {/* Logo */}
          <div className="flex flex-row items-center">
            <Link className="" href="/">
              {/* <Image
                src="/Logo.svg"
                width={28}
                height={28}
                alt="AnalyticsRoundtable"
              /> */}
              <Logo className="fill-zinc-400" />
            </Link>
            <Link
              className="hidden sm:block ml-1 font-semibold text-zinc-800 dark:text-zinc-200"
              href="/"
            >
              Musabbirs Terminal
            </Link>
          </div>

          {/* Navlinks */}
          <div className="flex-shrink-0">
            <ul className="flex flex-row space-x-4 items-center">
              <DarkThemeToggle />
              {links.map((link) => (
                <li
                  key={link.id}
                  className="block hover:transition-all text-sm text-zinc-800 dark:text-zinc-200 font-semibold"
                  // className="transition-shadow ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
                >
                  <Link href={link.to}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
