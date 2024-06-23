import Image from "next/image";

import Portfolio from "@/components/Allprojects";
import DefaultHero from "@/components/Hero";
import { MdComputer } from "react-icons/md";
import { Metadata } from "next";

const title = "Musabbirs Contributions through Nomad Gang Labs";

export const metadata: Metadata = {
  title: `${title}`,
  openGraph: {
    title: `${title}`,
  },
};

export default function PostPage() {
  return (
    <main className="space-y-5 max-w-7xl m-auto min-h-screen">
      <DefaultHero Icon={MdComputer} name="Projects" source="/terminal.webp" />

      <div>
        <div
          className="mt-4 bg-slate-50 m-auto p-4 min-h-screen
        
        "
        >
          <Portfolio />
        </div>
      </div>
    </main>
  );
}
