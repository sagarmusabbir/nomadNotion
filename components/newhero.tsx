import { FC, ReactNode } from "react";

interface HeroProps {
  Icon: React.ElementType;
  title: string;
  subtitleStart: string;
  highlight: string;
  subtitleEnd: string;
  iconSize?: string;
  actionArea?: ReactNode;
}
const NewHero: FC<HeroProps> = ({
  Icon,
  iconSize = "h-52 w-52",
  title,
  subtitleStart,
  highlight,
  subtitleEnd,
  actionArea,
}) => {
  return (
    <section className="bg-slate-300  bg-[url('/hero.svg')] bg-cover bg-center bg-no-repeat bg-blend-soft-light">
      <div className="relative z-10 mx-auto grid max-w-screen-lg px-4 py-8 lg:grid-cols-12 gap-4 lg:gap-8 lg:py-16 xl:gap-0 ">
        <div className="mr-auto place-self-center lg:col-span-7  py-8  ">
          <div className="mb-4 lg:mb-8  max-w-5xl">
            <h1 className="text-5xl font-bold  leading-none   xl:text-6xl text-gray-800 mb-2">
              {title}
            </h1>

            <h2 className=" max-w-5xl text-lg font-light    md:text-xl xl:text-2xl text-gray-600 text-wrap items-center  tracking-tight">
              {subtitleStart} &nbsp;
              <span className="bg-slate-400 bg-opacity-50 backdrop-blur-xl text-white   px-1 text-base md:text-lg xl:text-xl rounded-md  uppercase">
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
    </section>
  );
};

export default NewHero;
