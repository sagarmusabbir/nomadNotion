import Image from "next/image";

import { Breadcrumb, Button } from "flowbite-react";
import Link from "next/link";

import { MdHome } from "react-icons/md";
import { FC } from "react";

interface HeroProps {
  Icon: React.ElementType;
  name: string;
  source: string;
}
const NewHero: FC<HeroProps> = ({ Icon, name, source }) => {
  return (
    <section className="bg-slate-300 dark:bg-gray-900 bg-[url('/hero.svg')] bg-cover bg-center bg-no-repeat bg-blend-soft-light">
      <div className="relative z-10 mx-auto grid max-w-screen-lg px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          {Icon && <Icon className="fill-gray-900  w-14 h-14 mb-4" />}
          <h1 className=" max-w-2xl text-2xl font-semibold leading-none tracking-tight  md:text-3xl xl:text-4xl text-gray-900">
            {name}
          </h1>
          <p className="mb-6 max-w-2xl text-gray-700 md:text-lg lg:mb-8 lg:text-xl">
            <span className=" text-sm font-light">by&nbsp;</span>Musabbir Sagar
          </p>

          <div className="flex w-fit items-center gap-5">
            <Button
              color="light"
              href="#"
              size="md"
              className="[&>span]:items-center"
            >
              Latest Insights
              <svg
                className="-mr-1 ml-2 h-5 w-5"
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
            </Button>
            <Button color="dark" size="md">
              Hire Me
            </Button>
          </div>
        </div>
        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
          <Image
            src={source}
            alt={name}
            width={224}
            height={140}
            priority={true}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};

export default NewHero;
