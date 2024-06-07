import Image from "next/image";

import BlockquoteTestimonial from "@/components/blockquote";

import Myself from "@/components/musabbir";

export default function AboutPage() {
  return (
    <main className="space-y-5 max-w-7xl mx-auto">
      <div className="relative  w-full h-52 ">
        <Image
          src="/cover.webp"
          objectFit="cover"
          alt="musabbirsagar"
          fill={true}
          className="aspect-video bg-[#EDFCF5]"
        ></Image>
      </div>
      <div>
        {/* <div className="text-center text-sm mx-auto my-3">
          <div className="tracking-tight sm:text-4xl">
            <h1>About</h1>
          </div>
        </div> */}

        <div className="mx-auto mb-24 px-4 py-8 lg:py-16 mt-4 lg:mt-16 space-y-8 md:px-8 dark:text-zinc-300">
          <BlockquoteTestimonial />
          <Myself />
        </div>
      </div>
    </main>
  );
}
