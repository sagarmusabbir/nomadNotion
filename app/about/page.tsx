import Image from "next/image";

import BlockquoteTestimonial from "@/components/blockquote";

import Myself from "@/components/musabbir";
import DefaultHero from "@/components/Hero";
import { AboutIcon, Logo } from "@/components/icons";
import { Metadata } from "next";

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
      <DefaultHero Icon={AboutIcon} name="About" />
      <div>
        <div className="p-4  m-auto min-h-screen max-w-screen-lg">
          <BlockquoteTestimonial />
          <Myself />
        </div>
      </div>
    </main>
  );
}
