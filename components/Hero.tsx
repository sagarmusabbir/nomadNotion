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
const DefaultHero: FC<HeroProps> = ({ Icon, name, source }) => {
  return (
    <section
      // className="bg-gradient-to-l from-slate-300 to-gray-400"

      className="bg-slate-300 dark:bg-gray-900 bg-[url('/hero.svg')] bg-cover bg-center bg-no-repeat bg-blend-soft-light"
    >
      <div
        className="relative z-10 justify-start  lg:justify-center grid   px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 
          
      "
      >
        <div className="hidden lg:col-span-6  lg:flex place-self-end mr-auto lg:mr-0">
          <Image
            src={source}
            alt={name}
            width={224}
            height={140}
            priority={true}
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
        <div className="place-self-start  lg:col-span-6">
          {/* {Icon && <Icon  />} */}
          {Icon && (
            <Icon className="fill-gray-800 dark:fill-slate-200 w-14 h-14 " />
          )}

          <h1
            className=" max-w-2xl text-2xl font-semibold leading-none tracking-tight text-gray-800 dark:text-slate-400  md:text-3xl lg:text-2xl   
          
          "
          >
            {name}
          </h1>
          <p className=" max-w-xl text-gray-700 dark:text-slate-400 text-base font-normal">
            <span className=" text-sm font-light">by&nbsp;</span>Musabbir Sagar
          </p>
          <div className=" w-fit">
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
