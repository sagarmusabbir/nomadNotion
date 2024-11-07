"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  MdMenu,
  MdClose,
  MdOutlineDragHandle,
  MdChevronRight,
} from "react-icons/md";
import { links } from "@/site";

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav>
      <button
        className="md:hidden self-center place-self-center justify-self-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <MdClose size={36} /> : <MdOutlineDragHandle size={36} />}
      </button>

      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:space-x-4 absolute md:relative top-full   left-0 z-50 right-0 md:top-auto bg-white    md:bg-transparent shadow-md md:shadow-none  md:pt-0 md:pb-0 `}
      >
        {links.map((link) => {
          return (
            <li key={link.to} className="md:inline-block ">
              <Link
                href={link.to}
                className={`flex items-center px-4 py-4 md:py-0  border-t justify-between md:border-none text-base font-medium ${
                  pathname === link.to
                    ? "text-gray-900 "
                    : "text-gray-700  hover:text-gray-900"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span>{link.name}</span>
                <span className="md:hidden ">
                  <MdChevronRight className="h-7 w-7" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
