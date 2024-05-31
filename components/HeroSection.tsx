import { Avatar, Badge } from "flowbite-react";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import { Button } from "flowbite-react";
import { UpworkInIcon } from "./icons";
import { Cover } from "./icons";
import { Breadcrumb } from "flowbite-react";
import type { PropsWithChildren } from "react";

const HeroSection = () => {
  return (
    <div className="py-24 text-center bg-slate-100 dark:bg-zinc-900">
      <div className="flex flex-row items-center space-x-2 justify-center">
        <Cover className="fill-gray-800 dark:fill-slate-200 w-16 h-16" />
        <div className="space-y-1 flex flex-col text-left">
          <div className="mt-2 text-2xl font-semibold text-gray-800 dark:text-slate-200 leading-tight">
            Musabbir Sagar
          </div>
          <div className="text-md mt-2 text-gray-700 leading-tight dark:text-slate-400">
            Full Stack Next.js Developer
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
