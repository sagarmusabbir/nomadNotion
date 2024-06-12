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
    <section className="bg-[#EDFCF5]">
      {/* #EDFCF5 #D3F8E6*/}

      <div
        className="mx-auto grid max-w-screen-md  px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 
          
      "
      >
        <div className="hidden lg:col-span-6 lg:mt-0 lg:flex place-self-end ">
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
            <Icon className="fill-gray-800 dark:fill-slate-200 w-10 h-10  " />
          )}

          <h1
            className=" max-w-2xl text-2xl font-semibold leading-none tracking-tight text-gray-800 dark:text-slate-400 mb-1 md:text-3xl lg:text-4xl   
          
          "
          >
            {name}
          </h1>
          <p className="mb-2 max-w-xl text-gray-700 dark:text-slate-400 text-lg font-normal">
            <span className=" text-sm font-light">by&nbsp;</span>Musabbir Sagar
          </p>
          <div className="flex w-fit items-center gap-2 ">
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
