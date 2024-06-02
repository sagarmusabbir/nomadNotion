import Image from "next/image";

import Portfolio from "@/components/Allprojects";

export default function PostPage() {
  return (
    <main className="space-y-5 max-w-7xl m-auto">
      <div className="relative  w-full h-52 ">
        <Image
          src="/cover.webp"
          objectFit="cover"
          alt="musabbirsagar"
          fill={true}
          className="xl:rounded-[20px] aspect-video"
        ></Image>
      </div>
      <div>
        <div className="text-center text-sm mx-auto my-3">
          <div className="tracking-tight sm:text-4xl">
            <h1>Project</h1>
          </div>
        </div>

        <div className="max-w-4xl px-6 mx-auto mb-24 space-y-8 md:px-8 pt-4 border-t border-slate-200  dark:text-zinc-300">
          <Portfolio />
        </div>
      </div>
    </main>
  );
}
