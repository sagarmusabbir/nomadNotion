import Image from "next/image";

import { Button } from "flowbite-react";
import Link from "next/link";
import { links } from "@/site";

import { HiExternalLink, HiArrowRight } from "react-icons/hi";

const DefaultHero = () => {
  const about: any = links.find((myPage) => myPage.id === 2);

  return (
    <section className="bg-[#EDFCF5]">
      {/* #EDFCF5 #D3F8E6*/}

      <div
        className="mx-auto grid max-w-screen-md  px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 
          
      "
      >
        <div className="hidden lg:col-span-6 lg:mt-0 lg:flex  mr-auto ">
          {/* <Image
            src="/terminal.png"
            alt="ddx"
            width={600}
            height={375}
            priority={true}
            style={{ objectFit: "contain" }}
          ></Image> */}

          <Image
            src={about.cover}
            alt={about.name}
            width={600}
            height={375}
            priority={true}
            style={{ objectFit: "contain" }}
          ></Image>
        </div>
        <div className="place-self-center  lg:col-span-6">
          <about.icon className="fill-gray-800 dark:fill-slate-200 w-20 h-20 mb-2" />

          <h1
            className=" max-w-2xl text-2xl font-semibold leading-none tracking-tight text-gray-800 dark:text-slate-400 mb-1 md:text-3xl lg:text-4xl   
          
          "
          >
            {about.name}
          </h1>
          <p className="mb-2 max-w-xl text-gray-700 dark:text-slate-400 text-lg font-normal">
            <span className=" text-sm font-light">by&nbsp;</span>Musabbir Sagar
          </p>
          <div className="flex w-fit items-center gap-2 ">
            <Button color="light" outline size="sm">
              <Link href="/about">
                About Me
                {/* <HiArrowRight className="ml-2 mt-px h-4 w-4" /> */}
              </Link>
            </Button>

            <Button color="dark" pill size="sm">
              <Link
                href="https://www.upwork.com/workwith/smamusabbirs"
                target="_blank"
                className="flex justify-center items-center "
              >
                Hire @Upwork
                <HiExternalLink className="ml-2 mt-px h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefaultHero;
