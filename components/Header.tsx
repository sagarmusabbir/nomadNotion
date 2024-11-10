import Link from "next/link";
import Image from "next/image";

import { Logo } from "./icons";

import NavLinks from "./Navlinks";
import MobileMenu from "./Nav";

// import { DarkThemeToggle } from "flowbite-react";

const Header = () => {
  return (
    <div className="sticky top-0 bg-white z-50 backdrop-blur-2xl bg-opacity-80 shadow-sm  ">
      <div className="max-w-5xl flex flex-row justify-between items-center  px-4 py-2 mx-auto">
        {/* Logo */}

        <Link href="/">
          <Logo className="fill-gray-900 hover:fill-gray-800  h-9    self-center" />
        </Link>

        {/* <DarkThemeToggle /> */}

        <MobileMenu />

        {/* <NavLinks /> */}
      </div>
    </div>
  );
};

export default Header;
