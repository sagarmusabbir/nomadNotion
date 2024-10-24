import Link from "next/link";
import Image from "next/image";

import { Logo } from "./icons";

import NavLinks from "./Navlinks";

// import { DarkThemeToggle } from "flowbite-react";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-lg bg-opacity-30   dark:bg-opacity-30 ">
      <div className="max-w-5xl flex flex-row justify-between items-center m-auto p-4">
        {/* Logo */}

        <Link href="/">
          <Logo className="fill-gray-900 hover:fill-gray-800  h-7 md:h-10  self-center" />
        </Link>

        {/* <DarkThemeToggle /> */}

        <NavLinks />
      </div>
    </div>
  );
};

export default Header;
