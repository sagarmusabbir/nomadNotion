import Image from "next/image";
import { Cover } from "./icons";
import { Button } from "flowbite-react";

const HeroSection = () => {
  return (
    <section className="bg-[#DAF0EE] dark:bg-gray-900">
      <div
        className="mx-auto grid max-w-screen-md  px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 
      "
      >
        <div className="hidden lg:col-span-6 lg:mt-0 lg:flex">
          <Image
            src="/terminal.png"
            alt="ddx"
            width={400}
            height={250}
            priority={true}
          ></Image>
        </div>
        <div className="mr-auto place-self-center  lg:col-span-6">
          <Cover className="fill-gray-800 dark:fill-slate-200 w-16 h-16 mb-2" />
          <h1 className="mb-2 max-w-2xl text-xl font-bold leading-none tracking-tight text-gray-800 dark:text-slate-400 md:text-3xl xl:text-4xl">
            Musabbir Sagar
          </h1>
          <p className="mb-2 max-w-xl text-gray-700 dark:text-slate-400 md:text-lg lg:mb-4 lg:text-xl">
            Full Stack Next.js Developer
          </p>
          <div className="flex w-fit items-center gap-5 ">
            <Button
              color="light"
              href="/about"
              size="md"
              className="[&>span]:items-center"
            >
              About Me
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
            <Button
              color="light"
              outline
              size="md"
              href="https://www.upwork.com/workwith/smamusabbirs"
              target="_blank"
            >
              Hire Me
            </Button>
          </div>
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
