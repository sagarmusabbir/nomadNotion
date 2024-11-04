import Link from "next/link";
import { MdArrowForward, MdArrowOutward } from "react-icons/md";

interface ButtonProps {
  href: string;
  text: string;
  target?: string;
}

export const LightButton: React.FC<ButtonProps> = ({ href, text, target }) => (
  <Link
    href={href}
    target={target}
    className="border  border-gray-600 rounded-md backdrop-blur-lg bg-opacity-50 hover:bg-slate-50 hover:backdrop-blur-lg focus:ring-1 focus:ring-slate-400 enabled:hover:bg-slate-50 group relative px-5 py-2.5 transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none drop-shadow-sm"
  >
    <span className="font-semibold flex justify-center items-center text-sm lg:text-base leading-none text-gray-900">
      {text}
      <MdArrowForward className="-mr-1 ml-1 h-4 w-4" />
    </span>
  </Link>
);

export const DarkButton: React.FC<ButtonProps> = ({ href, text, target }) => (
  <Link
    href={href}
    target={target}
    className="border border-gray-900 rounded-md bg-gray-900 hover:bg-gray-800 focus:ring-1 focus:ring-slate-400 enabled:hover:bg-slate-50 items-center group relative flex justify-center px-5 py-2.5 text-center transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none leading-none drop-shadow-sm"
  >
    <span className="font-semibold flex justify-center items-center text-sm lg:text-base leading-none text-white">
      {text}
      <MdArrowOutward className="-mr-1 ml-1 h-4 w-4" />
    </span>
  </Link>
);
