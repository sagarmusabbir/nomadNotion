import { Avatar } from "flowbite-react";
import type { FC } from "react";
import { Logo } from "./icons";

const BlockquoteTestimonial: FC = function () {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-8">
        <blockquote>
          <Logo className="fill-gray-800 hover:fill-gray-700 dark:fill-slate-200 dark:hover:fill-slate-300 w-32 h-32 mx-auto" />
          <p className="mb-6 text-2xl font-medium text-gray-900 dark:text-white">
            "Flowbite is just awesome. It contains tons of predesigned
            components and pages starting from login screen to complex
            dashboard. Perfect choice for your next SaaS application."
          </p>
        </blockquote>
        <Avatar
          img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
          rounded
          size="xs"
        >
          <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <div className="pr-3 font-medium text-gray-900 dark:text-white">
              Micheal Gough
            </div>
            <div className="pl-3 text-sm text-gray-500 dark:text-gray-400">
              CEO at Google
            </div>
          </div>
        </Avatar>
      </div>
    </section>
  );
};

export default BlockquoteTestimonial;
