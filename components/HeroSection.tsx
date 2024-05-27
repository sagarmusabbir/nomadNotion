import { Avatar, Badge } from "flowbite-react";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
import { Button } from "flowbite-react";
import { UpworkInIcon } from "./icons";

const HeroSection = () => {
  return (
    <div className="py-24 text-center bg-zinc-200 dark:bg-zinc-800">
      {/* <div className="mt-4 text-3xl font-extrabold text-gray-900">
          Analytics Roundtable
        </div>
        <div className="max-w-2xl mx-auto mt-2 text-xl text-gray-500">
          Open Community for Data Professionals
        </div> */}

      <Avatar img="/avatar.svg" size="lg" rounded>
        <div className="space-y-1 text-left">
         

          <div className="mt-2 text-2xl font-bold text-zinc-800 dark:text-zinc-200 leading-tight">
            Musabbir Sagar
          </div>
          <div className="text-md mt-2 text-zinc-700 leading-tight dark:text-zinc-400">
            Full Stack Next.js Developer
          </div>
        </div>
      </Avatar>
    </div>
  );
};

export default HeroSection;
