import { FC } from "react";

const Cta: FC = function () {
  // const function Cta = () =>  {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <a
          href="https://www.upwork.com/workwith/smamusabbirs"
          target="_blank"
          className="mb-6 flex items-center justify-between rounded-lg border-l-4 border-slate-400 bg-white p-4 shadow hover:bg-gray-50  "
        >
          <div>
            <span className="mb-1 block text-xs font-medium uppercase text-slate-500  ">
              Hire Me At Upwork
            </span>
            <span className="text-xl font-semibold text-gray-700 ">
              Work With Me
            </span>
          </div>
          <svg
            className="h-6 w-6 text-slate-400 dark:text-primary-500"
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
          className="mb-6 flex items-center justify-between rounded-lg border-l-4 border-emerald-400 bg-white p-4 shadow hover:bg-gray-50 "
        >
          <div>
            <span className="mb-1 block text-xs font-medium uppercase text-slate-400 ">
              Build . Integrate . Explore
            </span>
            <span className="text-xl font-semibold text-gray-700 ">
              Checkout Third Bracket
            </span>
          </div>
          <svg
            className="h-6 w-6 text-emerald-400 "
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
          href="https://verifypropertiesltd.com/"
          target="_blank"
          className="flex items-center justify-between rounded-lg border-l-4 border-orange-400 bg-white p-4 shadow hover:bg-gray-50 "
        >
          <div>
            <span className="mb-1 block text-xs font-medium uppercase text-slate-400 ">
              Property Management Solution
            </span>
            <span className="text-xl font-semibold text-gray-700 ">
              Verify Uk Property
            </span>
          </div>
          <svg
            className="h-6 w-6 text-orange-400 "
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
    </div>
  );
};
export default Cta;
