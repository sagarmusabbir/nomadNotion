import Link from "next/link";
import Image from "next/image";
import { links } from "@/site";
import { Logo } from "./icons";
// import { DarkThemeToggle } from "flowbite-react";

const Header = () => {
  return (
    <>
      <div className="sticky top-0 z-50 backdrop-blur-lg bg-opacity-30 bg-slate-50 dark:bg-zinc-950 dark:bg-opacity-30 py-4">
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
              <Logo className="fill-gray-800 hover:fill-gray-700 dark:fill-slate-200 dark:hover:fill-slate-300" />
            </Link>
            <Link
              className="hidden sm:block ml-1 font-medium text-gray-800 hover:text-gray-700 dark:text-slate-200 hover:dark:text-slate-200"
              href="/"
            >
              Musabbirs Terminal
            </Link>
          </div>

          {/* Navlinks */}
          <div className="flex-shrink-0">
            <ul className="flex flex-row space-x-4 items-center text-sm text-gray-800 hover:text-gray-700 dark:text-slate-200 hover:dark:text-slate-300 font-medium">
              {/* <DarkThemeToggle className="focus:ring-0 hover:ring-0 focus:outline-0 hover:outline-0" /> */}
              {links.map((link) => (
                <li key={link.id} className="block">
                  <Link href={link.to}>{link.name}</Link>
                </li>
              ))}
              <li className="block">
                {/* <Link
                  href="https://github.com/sagarmusabbir?tab=repositories"
                  target="_blanc"
                > */}

                <Link href="./post" target="_blanc">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
