import Link from "next/link";
import Image from "next/image";

import { Logo } from "./icons";

import NavLinks from "./Navlinks";

// import { DarkThemeToggle } from "flowbite-react";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-lg bg-opacity-30 bg-slate-50  dark:bg-opacity-30 ">
      <div className="max-w-5xl flex flex-row justify-between items-center m-auto px-4 py-2">
        {/* Logo */}

        <Link href="/">
          <Logo className="fill-gray-900 hover:fill-gray-900  h-7  self-center" />

          {/* <span className="hidden sm:block     text-gray-900 hover:text-gray-800  text-xl   self-center ml-1 ">
            Musabbirs Terminal
          </span> */}
        </Link>

        {/* <DarkThemeToggle /> */}

        <NavLinks />
      </div>
    </div>
  );
};

export default Header;
