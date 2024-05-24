import { Avatar } from "flowbite-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="py-24 text-center bg-slate-100 dark:bg-zinc-800">
      {/* <div className="mt-4 text-3xl font-extrabold text-gray-900">
          Analytics Roundtable
        </div>
        <div className="max-w-2xl mx-auto mt-2 text-xl text-gray-500">
          Open Community for Data Professionals
        </div> */}

      <Avatar img="/avatar.svg" size="lg" rounded>
        <div className="space-y-1 text-left">
          <div className="mt-4 text-2xl font-extrabold text-gray-800 dark:text-slate-200 leading-tight">
            Musabbir Sagar
          </div>
          <div className="text-lg mt-2 text-gray-800 leading-tight dark:text-slate-400">
            Full Stack Next.js Developer
          </div>
        </div>
      </Avatar>
    </div>
  );
};

export default HeroSection;
