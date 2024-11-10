"use client";

import { links } from "@/site";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { useState } from "react";
import { MdChevronRight, MdClose, MdOutlineDragHandle } from "react-icons/md";

interface MobileMenuProps {
  initialMenuState?: boolean;
  customClasses?: string;
}

const MobileMenu: React.FC<MobileMenuProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const pathname = usePathname();

  return (
    <nav>
      <ul className="hidden md:flex space-x-8">
        {links.map((link) => {
          return (
            <li key={link.to}>
              <Link
                href={link.to}
                className={`flex items-center     justify-between  text-base  ${
                  pathname === link.to
                    ? "text-gray-900 "
                    : "text-gray-700 hover:text-gray-900 "
                }`}
              >
                <span>{link.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="block md:hidden ">
        <button className="menu-button  text-white  " onClick={toggleMenu}>
          {/* Menu Button Icon */}
          <MdOutlineDragHandle className="h-9 w-9 fill-gray-900 self-center" />
        </button>

        <div
          className={`off-canvas-menu bg-white   bg-[url('/card.svg')]  bg-cover bg-center bg-no-repeat  z-50 backdrop-blur-2xl bg-blend-difference  text-white fixed inset-0 transition-transform overflow-hidden min-h-screen duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-3 right-3 text-white"
            onClick={closeMenu}
          >
            <MdClose className="fill-gray-900 dark:fill-white w-9 h-9" />
          </button>
          {/* Menu Items */}
          <ul className=" py-16 px-4 ">
            {links.map((link) => {
              return (
                <li key={link.to} className="py-2  group  ">
                  <Link
                    href={link.to}
                    className={`flex items-center      text-xl  ${
                      pathname === link.to
                        ? "text-gray-900 dark:text-white "
                        : "text-gray-600 dark:text-slate-400 hover:text-gray-800 "
                    }`}
                  >
                    <span>{link.name}</span>

                    <div className="">
                      <MdChevronRight className="h-6 w-6 ml-2" />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MobileMenu;
