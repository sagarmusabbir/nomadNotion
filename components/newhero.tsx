import { FC, ReactNode } from "react";

interface HeroProps {
  Icon: React.ElementType;
  title1: string;
  title2: string;
  subtitleStart: string;
  highlight: string;
  subtitleEnd: string;
  iconSize?: string;
  actionArea?: ReactNode;
}
const NewHero: FC<HeroProps> = ({
  Icon,
  iconSize = "h-52 w-52",
  title1,
  title2,
  subtitleStart,
  highlight,
  subtitleEnd,
  actionArea,
}) => {
  return (
    <section className="  bg-[url('/herobg.svg')] bg-cover bg-center bg-no-repeat ">
      <hr />
      <div className="relative z-10 mx-auto grid max-w-screen-lg px-4 py-8 lg:grid-cols-12 gap-4 lg:gap-8 lg:py-16 xl:gap-0 ">
        <div className="mr-auto place-self-center lg:col-span-7  py-8  ">
          <div className="mb-4 lg:mb-8  max-w-5xl">
            <h1 className=" text-5xl font-bold  leading-none   xl:text-6xl text-gray-800 mb-2 lg:mb-4">
              {title1}&nbsp;
              <span className="flex flex-col md:inline ">{title2}</span>
            </h1>

            <h2 className=" max-w-5xl text-lg font-light    md:text-xl xl:text-2xl text-gray-500 text-wrap items-center  tracking-tight">
              {subtitleStart} &nbsp;
              <span className="bg-slate-200 bg-opacity-50 backdrop-blur-xl text-gray-700   px-2 py-1 text-sm md:text-base xl:text-lg rounded-md  uppercase">
                {highlight}
              </span>
              &nbsp;{subtitleEnd}
            </h2>
          </div>

          {actionArea}
        </div>
        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex place-self-center">
          {Icon && <Icon className={`fill-gray-700 ${iconSize}`} />}
        </div>
      </div>
<hr />
    </section>
  );
};

export default NewHero;
