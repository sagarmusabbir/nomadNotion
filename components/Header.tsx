import Link from "next/link";
import Image from "next/image";
import { links } from "@/site";
import { Logo } from "./icons";
// import { DarkThemeToggle } from "flowbite-react";

const Header = () => {
  return (
    <>
      <div className="sticky top-0 z-50 backdrop-blur-lg bg-opacity-30 bg-slate-100 dark:bg-gray-900 py-4">
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
              <Logo className="fill-gray-700 hover:fill-gray-800" />
            </Link>
            <Link
              className="hidden sm:block ml-1 font-medium text-gray-700 hover:text-gray-800 dark:text-slate-300"
              href="/"
            >
              Musabbirs Terminal
            </Link>
          </div>

          {/* Navlinks */}
          <div className="flex-shrink-0">
            <ul className="flex flex-row space-x-4 items-center text-sm text-gray-700 hover:text-gray-800 dark:text-slate-2300 font-medium">
              {links.map((link) => (
                <li key={link.id} className="block">
                  <Link href={link.to}>{link.name}</Link>
                </li>
              ))}
              <li className="block">
                <Link
                  href="https://github.com/sagarmusabbir?tab=repositories"
                  target="_blanc"
                >
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
