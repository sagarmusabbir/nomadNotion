import type { FC } from "react";

import { BtnGrp } from "./Btn";
import Cta from "./cta";
import LogoCloud from "./logocloud";
import MyTimeline from "./MyTimeline";

const Myself: FC = function () {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-4 sm:py-12 lg:px-6">
      <div className="grid space-y-8 lg:grid-cols-2 lg:gap-12 lg:space-y-0">
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
    </div>
  );
};

export default Myself;
