import Image from "next/image";

import BlockquoteTestimonial from "@/components/blockquote";

import Myself from "@/components/musabbir";
import DefaultHero from "@/components/Hero";
import { AboutIcon, Logo } from "@/components/icons";
import { Metadata } from "next";
import cover from "@/public/about.svg";

const title = "About";

export const metadata: Metadata = {
  title,
  openGraph: {
    title: `${title} | Musabbir Sagar`,
  },
};

export default function AboutPage() {
  return (
    <main className="space-y-5 max-w-7xl m-auto min-h-screen">
      <DefaultHero Icon={AboutIcon} name="About" source={cover} />
      <div>
        <div className="mt-4 bg-slate-50 m-auto p-4 min-h-screen">
          <BlockquoteTestimonial />
          <Myself />
        </div>
      </div>
    </main>
  );
}
