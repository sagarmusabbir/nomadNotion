import Image from "next/image";

import { Button } from "flowbite-react";
import Link from "next/link";

import {
  MdArrowForward,
  MdArrowForwardIos,
  MdArrowOutward,
  MdChevronRight,
  MdForward,
  MdOutlineArrowForwardIos,
  MdOutlineChevronRight,
} from "react-icons/md";
import { FC } from "react";

interface HeroProps {
  Icon: React.ElementType;
}
const NewHero: FC<HeroProps> = ({ Icon }) => {
  return (
    <section className="bg-slate-300  bg-[url('/hero.svg')] bg-cover bg-center bg-no-repeat bg-blend-soft-light">
      <div className="relative z-10 mx-auto grid max-w-screen-lg px-4 py-8 lg:grid-cols-12 gap-4 lg:gap-8 lg:py-16 xl:gap-0 ">
        <div className="mr-auto place-self-center lg:col-span-7  py-8  ">
          {/* {Icon && (
              <Icon className="fill-gray-700 w-16 h-16 lg:h-20 lg:w-20   mb-4 lg:mb-8 " />
            )} */}
          <div className="mb-4 lg:mb-8">
            <h1 className="text-3xl font-semibold  leading-none  md:text-4xl xl:text-5xl text-gray-800 uppercase">
              Musabbir Sagar
            </h1>

            <h2 className=" max-w-2xl text-xs font-extralight leading-none tracking-tight  md:text-sm xl:text-base text-gray-600 text-wrap items-center  ">
              Top Rated &nbsp;
              <span className="border border-slate-200   px-0.5 text-base md:text-lg xl:text-xl rounded-md  ">
                Next.Js
              </span>
              &nbsp;Developer
            </h2>
          </div>

          {/* <p className="mb-6 max-w-2xl text-slate-500 md:text-lg lg:mb-8 lg:text-xl">
            Musabbir Sagar
          </p> */}

          <div className="flex w-fit items-center gap-5  ">
            <Link
              href="/about"
              className="border border-white rounded-md bg-white hover:bg-slate-50      focus:ring-1 focus:ring-slate-400 enabled:hover:bg-slate-50    group relative    px-4 py-2   transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none   drop-shadow-sm"
            >
              {/* href="https://www.upwork.com/workwith/smamusabbirs" */}
              <span className="font-semibold flex  justify-center items-center text-sm lg:text-base    leading-none text-gray-900 ">
                About Me
                <MdArrowForward className="-mr-1 ml-1 h-4 w-4" />
              </span>
            </Link>
            <Link
              href="https://www.upwork.com/workwith/smamusabbirs"
              target="_blank"
              className="border border-gray-900 rounded-md bg-gray-900  hover:bg-gray-800    focus:ring-1 focus:ring-slate-400 enabled:hover:bg-slate-50  items-center  group relative flex  justify-center px-4 py-2 text-center  transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none  leading-none  drop-shadow-sm"
            >
              <span className="font-semibold flex  justify-center items-center text-sm lg:text-base    leading-none text-white">
                Hire Me
                <MdArrowOutward className="-mr-1 ml-1 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
          {/* <Image
            src={source}
            alt={name}
            width={320}
            height={200}
            priority={true}
            style={{ objectFit: "contain" }}
          /> */}
          {Icon && <Icon className="fill-gray-700 h-52 w-52 " />}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 480"
            style={{ objectFit: "contain" }}
            className="fill-gray-600 h-52 w-52 "
          >
            <path d="M320 240 206.6 70a56 56 0 0 0-93.2 0L0 240h160l113.4 170a56 56 0 0 0 93.2 0L480 240H320Z"></path>
          </svg> */}
        </div>
      </div>
    </section>
  );
};

export default NewHero;

{
  /* <Breadcrumb>
<Breadcrumb.Item href="/" icon={MdHome}>
  MS
</Breadcrumb.Item>
<Breadcrumb.Item>{name}</Breadcrumb.Item>
</Breadcrumb> */
}
