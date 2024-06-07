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
    <Navbar className="sticky top-0 z-50 backdrop-blur-lg bg-opacity-30 bg-slate-100 dark:bg-zinc-950 dark:bg-opacity-30 py-4">
      <NavbarBrand as={Link} href="/">
        <Logo className="fill-gray-800 hover:fill-gray-700 dark:fill-slate-200 dark:hover:fill-slate-300 w-10 h-10" />
        <span className="self-center whitespace-nowrap text-xl font-semibold  hidden sm:block ml-1  text-gray-800 hover:text-gray-700 dark:text-slate-200 hover:dark:text-slate-200">
          Musabbirs Terminal
        </span>
      </NavbarBrand>
      <NavbarToggle
        theme={{
          icon: "fill-gray-800 hover:fill-gray-700 dark:fill-slate-200 dark:hover:fill-slate-300 w-8 h-8",
        }}
      />
      <NavbarCollapse>
        <div className="hidden md:block">
          <ButtonGroup>
            {links.map((link) => (
              <Button
                as={Link}
                href={link.to}
                outline
                size="sm"
                color="gray"
                key={link.id}
                className="flex justify-center items-center "
              >
                <link.icon
                  className="mr-2 mt-0.5  h-4 w-4 fill-gray-700 hover:fill-slate-800 "
                  aria-hidden="true"
                />
                <span>{link.name}</span>
              </Button>
            ))}
          </ButtonGroup>
        </div>
        <div className="flex md:hidden my-4 flex-col space-y-4">
          <div className="flex flex-col  items-center ">
            <Logo className="fill-gray-800 hover:fill-gray-700 dark:fill-slate-200 dark:hover:fill-slate-300 w-10 h-10 " />
            <span className="whitespace-nowrap font-semibold   text-gray-800 hover:text-gray-700 dark:text-slate-200 hover:dark:text-slate-200  ">
              Musabbirs Terminal
            </span>
          </div>

          {links.map((link) => (
            // <div className="flex justify-end">
            <Button
              as={Link}
              href={link.to}
              outline
              size="xs"
              color="gray"
              key={link.id}
            >
              <link.icon
                className="h-3 w-3 fill-gray-700 hover:fill-slate-800 mr-2 mt-0.5"
                aria-hidden="true"
              />
              <span>{link.name}</span>
            </Button>
            // </div>
          ))}
        </div>
      </NavbarCollapse>
    </Navbar>
  );
};
