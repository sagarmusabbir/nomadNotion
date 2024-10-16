import Link from "next/link";
import Image from "next/image";

import { Logo } from "./icons";

import NavLinks from "./Navlinks";

// import { DarkThemeToggle } from "flowbite-react";

const Header = () => {
  return (
    <header>
      <div className="sticky top-0 z-50 backdrop-blur-lg bg-opacity-30 bg-slate-50 dark:bg-zinc-950 dark:bg-opacity-30 p-4">
        <div className="max-w-7xl flex flex-row justify-between items-center m-auto">
          {/* Logo */}
          <div className="flex flex-row items-center">
            <Link className="" href="/">
              <Logo className="fill-gray-700 hover:fill-gray-800 dark:fill-slate-200 dark:hover:fill-slate-300 h-7  self-center" />
            </Link>
            <Link
              className="hidden sm:block     text-gray-700 hover:text-gray-800 dark:text-slate-200 hover:dark:text-slate-200 text-xl   self-center ml-1 "
              href="/"
            >
              Musabbirs Terminal
            </Link>
          </div>

          {/* <DarkThemeToggle /> */}

          <NavLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;
