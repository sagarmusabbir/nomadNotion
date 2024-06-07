import Image from "next/image";

import Portfolio from "@/components/Allprojects";

export default function PostPage() {
  return (
    <main className="space-y-5 max-w-7xl m-auto">
      <div className="relative  w-full h-52 ">
        <Image
          src="/post.png"
          objectFit="cover"
          alt="musabbirsagar"
          fill={true}
          className="aspect-video"
        ></Image>
      </div>
      <div>
        {/* <div className="text-center text-sm mx-auto my-3">
          <div className="tracking-tight sm:text-2xl">
            <h1>Project</h1>
          </div>
        </div> */}

        <div
          className="mx-auto mb-24 space-y-8 dark:text-zinc-300
        
        "
        >
          <Portfolio />
        </div>
      </div>
    </main>
  );
}
