import Image from "next/image";
import { Cover } from "./icons";
import { Button } from "flowbite-react";
import Link from "next/link";

import { HiExternalLink, HiArrowRight } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section className="bg-[#EDFCF5] dark:bg-gray-900">
      {/* #EDFCF5 #D3F8E6*/}
      <div
        className="mx-auto grid max-w-screen-xl  px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 
      "
      >
        <div className="  place-self-center  lg:col-span-6 ">
          <Cover className="fill-gray-800 dark:fill-slate-200 w-20 h-20 mb-2 " />
          <h1 className=" max-w-2xl text-3xl font-bold leading-none tracking-tight text-gray-800 dark:text-slate-400 mb-2   ">
            Musabbir Sagar
          </h1>
          <p className="mb-2 max-w-xl text-gray-700 dark:text-slate-400 md:text-lg font-light lg:text-xl">
            Full Stack Next.js Developer
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
        <div className="hidden lg:col-span-6 lg:mt-0 lg:flex ">
          <Image
            src="/terminal.png"
            alt="ddx"
            width={400}
            height={250}
            priority={true}
          ></Image>
        </div>
      </div>
    </section>

    // <div
    //   className="bg-[#DAF0EE] mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0
    // "
    // >
    //   <div className="flex lg:flex-wrap flex-wrap-reverse items-center space-x-3 justify-center  ">
    //     <div>
    //       <Image
    //         src="/terminal.png"
    //         alt="ddx"
    //         width={200}
    //         height={125}
    //         priority={true}
    //       ></Image>
    //     </div>
    //     <div className="space-y-1  flex flex-col items-center ">
    //       <Cover className="fill-gray-800 dark:fill-slate-200 w-16 h-16" />
    //       <div className="mt-2 text-2xl font-semibold text-gray-800 dark:text-slate-200 leading-tight">
    //         Musabbir Sagar
    //       </div>
    //       <div className="text-sm  mt-2 text-gray-700 leading-tight dark:text-slate-400">
    //         Full Stack Next.js Developer
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default HeroSection;
