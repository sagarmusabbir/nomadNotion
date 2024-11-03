"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MdMenu, MdClose, MdOutlineDragHandle } from "react-icons/md";
import { links } from "@/site";

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav>
      <button
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <MdClose size={32} /> : <MdOutlineDragHandle size={36} />}
      </button>

      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:space-x-4 absolute md:relative top-full  backdrop-blur-lg left-0 z-50 right-0 md:top-auto bg-opacity-70 md:bg-transparent shadow-md md:shadow-none border-t border-gray-200 md:border-none pb-8 pt-4 md:pt-0 md:pb-0`}
      >
        {links.map((link) => {
          return (
            <li key={link.to} className="md:inline-block">
              <Link
                href={link.to}
                className={`block px-4 py-2 text-sm  ${
                  pathname === link.to
                    ? "text-gray-950 font-semibold"
                    : "text-gray-700 hover:text-gray-900"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
