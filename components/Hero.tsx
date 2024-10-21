import Image from "next/image";

import { Breadcrumb, Button } from "flowbite-react";
import Link from "next/link";

import { MdArrowOutward, MdHome, MdOutlineChevronRight } from "react-icons/md";
import { FC } from "react";
import { AboutIcon, ArticleIcon, BrowseIcon } from "./icons";

interface HeroProps {
  Icon: React.ElementType;
  name: string;
  source: string;
}
const DefaultHero: FC<HeroProps> = ({ Icon, name, source }) => {
  return (
    <section className="bg-slate-300 dark:bg-gray-900 bg-[url('/hero.svg')] bg-cover bg-center bg-no-repeat bg-blend-soft-light">
      <div
        className="relative z-10 mx-auto  max-w-screen-lg px-4 py-8  flex items-center justify-center gap-2 lg:py-16 
          
      "
      >
        <div className="lg:mt-0 lg:flex ">
          <Icon className="fill-gray-700 h-28 w-28 " />
        </div>
        <div className="">
          <h1 className=" max-w-2xl text-2xl font-semibold leading-none tracking-tight  md:text-3xl xl:text-4xl text-gray-800">
            {name}
          </h1>
          <p className="max-w-2xl text-slate-500 md:text-lg  lg:text-xl">
            <span className=" text-sm font-light">by&nbsp;</span>Musabbir Sagar
          </p>

          <div className="flex w-fit items-center gap-5">
            <Breadcrumb>
              <Breadcrumb.Item href="/" icon={MdHome}>
                MS
              </Breadcrumb.Item>
              <Breadcrumb.Item>{name}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefaultHero;
