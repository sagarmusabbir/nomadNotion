import Image from "next/image";

import { Button } from "flowbite-react";
import Link from "next/link";

import { MdArrowOutward, MdOutlineChevronRight } from "react-icons/md";
import { FC } from "react";

interface HeroProps {
  Icon: React.ElementType;
}
const NewHero: FC<HeroProps> = ({ Icon }) => {
  return (
    <section className="bg-slate-300  bg-[url('/hero.svg')] bg-cover bg-center bg-no-repeat bg-blend-soft-light">
      <div className="relative z-10 mx-auto grid max-w-screen-lg px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7  ">
          {Icon && <Icon className="fill-gray-900  w-14 h-14 " />}
          <h1 className="max-w-2xl text-2xl font-semibold leading-none tracking-tighter  md:text-3xl xl:text-4xl text-gray-700 mt-6">
            MUSABBIR SAGAR
          </h1>

          <h2 className=" max-w-2xl text-xl font-light leading-none tracking-tight  md:text-2xl xl:text-3xl text-gray-600 text-wrap items-center mb-6">
            Top Rated &nbsp;
            <span className="bg-gray-400 text-slate-50 font-semibold p-1 text-lg md:text-xl xl:text-xl rounded-md  ">
              Next.Js
            </span>
            &nbsp;Developer
          </h2>

          {/* <p className="mb-6 max-w-2xl text-slate-500 md:text-lg lg:mb-8 lg:text-xl">
            Musabbir Sagar
          </p> */}

          <div className="flex w-fit items-center gap-5">
            <Button
              color="light"
              href="/articles"
              size="md"
              className="[&>span]:items-center"
            >
              Latest Artcles
              <MdOutlineChevronRight className="-mr-1 ml-2 h-5 w-5" />
            </Button>
            <Button
              color="dark"
              size="md"
              href="https://www.upwork.com/workwith/smamusabbirs"
              target="_blank"
            >
              Hire Me
              <MdArrowOutward className="-mr-1 ml-2 h-4 w-4" />
            </Button>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 480 480"
            style={{ objectFit: "contain" }}
            className="fill-gray-600 h-52 w-52 "
          >
            <path d="M320 240 206.6 70a56 56 0 0 0-93.2 0L0 240h160l113.4 170a56 56 0 0 0 93.2 0L480 240H320Z"></path>
          </svg>
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
