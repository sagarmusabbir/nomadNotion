import { Avatar } from "flowbite-react";
import type { FC } from "react";
import { Logo } from "./icons";

const BlockquoteTestimonial: FC = function () {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-4 text-center lg:px-8 ">
        <blockquote>
          <Logo className="fill-gray-800 hover:fill-gray-700 dark:fill-slate-200 dark:hover:fill-slate-300 w-32 h-32 mx-auto" />
          <p className="mb-6 text-2xl font-medium text-gray-900 dark:text-white">
            "A web development polymath and digital nomad who loves to create
            stunning websites with cutting-edge technologies"
          </p>
        </blockquote>
        <Avatar img="avatar.svg" rounded size="xs">
          <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <div className="pr-3 font-medium text-gray-900 dark:text-white">
              Musabbir Sagar
            </div>
            <div className="pl-3 text-sm text-gray-500 dark:text-gray-400">
              CEO at ThirdBracket
            </div>
          </div>
        </Avatar>
      </div>
    </section>
  );
};

export default BlockquoteTestimonial;
