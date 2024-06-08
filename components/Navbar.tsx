import { FC } from "react";
import Link from "next/link";
import {
  Button,
  ButtonGroup,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Logo } from "./icons";
import { links } from "@/site";

export const NavBar: FC = function () {
  return (
    <Navbar className="sticky top-0 z-50 backdrop-blur-lg bg-opacity-30 bg-slate-100 dark:bg-zinc-950 dark:bg-opacity-30 py-4 px-0">
      <NavbarBrand as={Link} href="/">
        <Logo className="fill-gray-800 hover:fill-gray-700 dark:fill-slate-200 dark:hover:fill-slate-300 mr-3 h-6 sm:h-9" />
        <span className="self-center hidden md:block whitespace-nowrap text-xl  font-semibold dark:text-white text-gray-800 hover:text-gray-700">
          Musabbirs Terminal
        </span>
      </NavbarBrand>
      <NavbarToggle
        theme={{
          icon: "fill-gray-800 hover:fill-gray-700 dark:fill-slate-200 dark:hover:fill-slate-300 w-5 h-5",
        }}
      />
      <NavbarCollapse>
        {/* <div className="hidden md:block"> */}
        <span className="self-start md:hidden whitespace-nowrap text-md  font-medium dark:text-white p-3 text-gray-800 hover:text-gray-700">
          Musabbirs Terminal
        </span>
        {links.map((link) => (
          <NavbarLink
            href={link.to}
            key={link.id}
            as={Link}
            className="flex items-center justify-between gap-1    "
          >
            <span className="text-gray-800 hover:text-gray-700">
              {link.name}
            </span>
            <link.icon
              className="ml-1 fill-gray-800 hover:fill-gray-700"
              aria-hidden="true"
            />
          </NavbarLink>
        ))}

        {/* {links.map((link) => (
          <Button
            as={NavbarLink}
            href={link.to}
            size="sm"
            key={link.id}
            outline
            theme={{
              base: "block py-2 pl-3 pr-4 md:p-0 bg-gray-900",
            }}
          >
            <link.icon
              className="mr-2 mt-0.5  h-4 w-4 fill-gray-700 hover:fill-slate-800 "
              aria-hidden="true"
            />
            <span>{link.name}</span>
          </Button>
        ))} */}

        {/* </div> */}
        {/* <div className="flex md:hidden my-4 flex-col space-y-4">
          <div className="flex flex-col  items-center ">
            <Logo className="fill-gray-800 hover:fill-gray-700 dark:fill-slate-200 dark:hover:fill-slate-300 w-10 h-10 " />
            <span className="whitespace-nowrap font-semibold   text-gray-800 hover:text-gray-700 dark:text-slate-200 hover:dark:text-slate-200  ">
              Musabbirs Terminal
            </span>
          </div>

          {links.map((link) => (
            // <div className="flex justify-end">
            <Button
              as={NavbarLink}
              href={link.to}
              outline
              size="sm"
              color="gray"
              key={link.id}
            >
              <link.icon
                className="h-4 w-4 fill-gray-700 hover:fill-slate-800 mr-2 mt-0.5"
                aria-hidden="true"
              />
              <span>{link.name}</span>
            </Button>
            // </div>
          ))}
        </div> */}
      </NavbarCollapse>
    </Navbar>
  );
};
