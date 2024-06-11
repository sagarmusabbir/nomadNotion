import type { FC } from "react";

import { BtnGrp } from "./Btn";
import Cta from "./cta";
import LogoCloud from "./logocloud";
import MyTimeline from "./MyTimeline";

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

const Myself: FC = function () {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-4 sm:py-12 lg:px-6">
      <div className="grid gap-10 lg:gap-12 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            ✋ Hi there!
          </h2>
          <p className="mb-4 text-gray-500 dark:text-gray-400 sm:text-xl">
            This is Musabbir sagar, A web development polymath and digital nomad
            who loves to create stunning websites with cutting-edge
            technologies.
          </p>
          <Cta />
        </div>
        <MyTimeline />
      </div>
      <div className="py-4 sm:py-12">
        <h2 className="mb-4 text-4xl font-extrabold text-gray-400 dark:text-teal-500 tracking-tight text-center ">
          My Ecosystem
        </h2>

        <div className=" mb-4 grid grid-cols-4 gap-2 text-gray-500 dark:text-gray-400 sm:grid-cols-4 sm:gap-1">
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Next.js</span>
            <SiNextdotjs className="h-6 w-6" />
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
            <SiVercel className="h-6 w-6" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Google</span>
            <SiAmazonaws className="h-14 w-14" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Typescript</span>
            <SiTypescript className="h-6 w-6" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Elementor</span>
            <SiElementor className="h-6 w-6" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Ghost</span>
            <SiGhost className="h-6 w-6" />
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
            <SiHugo className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Myself;
