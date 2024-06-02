import { FC } from "react";
import CarouselSliderTestimonial from "./carousel-slider";

import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiVercel,
  SiNetlify,
  SiWordpress,
  SiElementor,
  SiAmazonaws,
  SiGhost,
  SiHugo,
} from "react-icons/si";

const Cta: FC = function () {
  // const function Cta = () =>  {
  return (
    <section>
      <div>
        <a
          href="https://www.upwork.com/workwith/smamusabbirs"
          target="_blank"
          className="mb-6 flex items-center justify-between rounded-lg border-l-4 border-emerald-300 bg-white p-4 shadow hover:bg-gray-50 dark:border-primary-500 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div>
            <span className="mb-1 block text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
              Hire Me At Upwork
            </span>
            <span className="text-xl font-semibold text-gray-600 dark:text-primary-500">
              Work With Me
            </span>
          </div>
          <svg
            className="h-6 w-6 text-emerald-400 dark:text-primary-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a
          href="https://thirdbracket.co.uk/"
          target="_blank"
          className="mb-6 flex items-center justify-between rounded-lg border-l-4 border-zinc-400 bg-white p-4 shadow hover:bg-gray-50 dark:border-red-500 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div>
            <span className="mb-1 block text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
              Build . Integrate . Explore
            </span>
            <span className="text-xl font-semibold text-gray-600 dark:text-gray-500">
              Checkout Third Bracket
            </span>
          </div>
          <svg
            className="h-6 w-6 text-zinc-600 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a
          href="#"
          className="flex items-center justify-between rounded-lg border-l-4 border-slate-400 bg-white p-4 shadow hover:bg-gray-50 dark:border-teal-500 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div>
            <span className="mb-1 block text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
              Collaborate & Opensource
            </span>
            <span className="text-xl font-semibold text-slate-600 dark:text-gray-500">
              Browse NomadGang
            </span>
          </div>
          <svg
            className="h-6 w-6 text-slate-600 dark:text-slate-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>

      <div className="mt-12 lg:mt-24">
        <div className="flex flex-row">
          <h2 className="mb-8 lg:mb-16 text-4xl font-extrabold text-gray-400 dark:text-teal-500 tracking-tight">
            ♻️ My Ecosystem
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-5 text-gray-500 dark:text-gray-400 sm:grid-cols-4 sm:gap-3">
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Next.js</span>
            <SiNextdotjs className="h-10 w-10" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Nodedotjs</span>
            <SiNodedotjs className="h-12 w-12" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">React</span>
            <SiReact className="h-8 w-8" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Tailwindcss</span>
            <SiTailwindcss className="h-16 w-16" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Vercel</span>
            <SiVercel className="h-10 w-10" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Google</span>
            <SiAmazonaws className="h-14 w-14" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Typescript</span>
            <SiTypescript className="h-10 w-10" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Elementor</span>
            <SiElementor className="h-10 w-10" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Ghost</span>
            <SiGhost className="h-10 w-10" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Javascript</span>
            <SiJavascript className="h-8 w-8" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Netlify</span>
            <SiNetlify className="h-14 w-14" />
          </a>

          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Wordpress</span>
            <SiWordpress className="h-12 w-12" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Hugo</span>
            <SiHugo className="h-10 w-10" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Cta;
