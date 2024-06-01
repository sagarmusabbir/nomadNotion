import type { FC } from "react";
import DefaultEventSchedule from "./default";
import { BtnGrp } from "./Btn";
import Cta from "./cta";
import LogoCloud from "./logocloud";

const ComparisonCardsFeatureSection: FC = function () {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
      <div className="grid space-y-8 lg:grid-cols-2 lg:gap-12 lg:space-y-0">
        <div>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            ✋ Hi there!
          </h2>
          <p className="mb-4 text-gray-500 dark:text-gray-400 sm:text-xl">
            I have created Third Bracket. I contribute to open source projects
            through NomadGang.com.
          </p>
          <DefaultEventSchedule />
        </div>

        <Cta />
      </div>
    </div>
  );
};

export default ComparisonCardsFeatureSection;
