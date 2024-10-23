import type { FC } from "react";

// import { BtnGrp } from "./Btn";
// import Cta from "./cta";
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
import Cta from "./cta";

const Myself: FC = function () {
  return (
    <div
    // className="py-4 sm:py-12 "
    >
      <div className="grid gap-8  lg:gap-10 md:grid-cols-2 py-8 ">
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
        <div className="px-4">
          <MyTimeline />
        </div>
      </div>
      <div className="py-6">
        <h2 className="mb-6 md:mb-8 xl:mb-10 text-2xl md:text-3xl xl:4xl font-semibold text-gray-700  tracking-tight text-center  ">
          My Ecosystem
        </h2>

        <div className="mb-6 grid grid-cols-4 gap-6 text-gray-500 sm:grid-cols-4 ">
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Next.js</span>
            <SiNextdotjs className="w-6 h-6 md:w-7 md:h-7 xl:h-8 xl:w-8" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Nodedotjs</span>
            <SiNodedotjs className="w-6 h-6 md:w-7 md:h-7 xl:h-8 xl:w-8" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">React</span>
            <SiReact className="w-6 h-6 md:w-7 md:h-7 xl:h-8 xl:w-8" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Tailwindcss</span>
            <SiTailwindcss className="w-6 h-6 md:w-7 md:h-7 xl:h-8 xl:w-8" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Vercel</span>
            <SiVercel className="w-6 h-6 md:w-7 md:h-7 xl:h-8 xl:w-8" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Google</span>
            <SiAmazonaws className="w-6 h-6 md:w-7 md:h-7 xl:h-8 xl:w-8" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Typescript</span>
            <SiTypescript className="w-6 h-6 md:w-7 md:h-7 xl:h-8 xl:w-8" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Elementor</span>
            <SiElementor className="w-6 h-6 md:w-7 md:h-7 xl:h-8 xl:w-8" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Ghost</span>
            <SiGhost className="w-6 h-6 md:w-7 md:h-7 xl:h-8 xl:w-8" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Javascript</span>
            <SiJavascript className="w-6 h-6 md:w-7 md:h-7 xl:h-8 xl:w-8" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Netlify</span>
            <SiNetlify className="w-6 h-6 md:w-7 md:h-7 xl:h-8 xl:w-8" />
          </a>

          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Wordpress</span>
            <SiWordpress className="w-6 h-6 md:w-7 md:h-7 xl:h-8 xl:w-8" />
          </a>
          <a href="#" className="flex items-center justify-center">
            <span className="sr-only">Hugo</span>
            <SiHugo className="w-6 h-6 md:w-7 md:h-7 xl:h-8 xl:w-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Myself;
