import { Avatar } from "flowbite-react";
import type { FC } from "react";
import { Logo } from "./icons";

const BlockquoteTestimonial: FC = function () {
  return (
    <div className="text-center lg:px-8 max-w-screen-xl px-4 py-8 mx-auto ">
      <blockquote>
        <Logo className="fill-gray-800 hover:fill-gray-700 dark:fill-slate-200 dark:hover:fill-slate-300 w-20 h-20 mx-auto" />
        <p className="mb-2 text-2xl font-medium text-gray-900 dark:text-white leading-7">
          "Code, Commit, Push & Repeat"
        </p>
      </blockquote>
      <Avatar img="avatar.svg" rounded size="xs">
        <div className="flex items-center divide-x divide-gray-400 dark:divide-gray-700">
          <div className="pr-3 font-medium text-gray-700 dark:text-white leading-4 text-sm">
            Musabbir Sagar
          </div>
          <div className="pl-3 text-sm text-gray-500 dark:text-gray-400 leading-4 text-sm">
            CEO at ThirdBracket
          </div>
        </div>
      </Avatar>
    </div>
  );
};

export default BlockquoteTestimonial;
