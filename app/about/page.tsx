import Image from "next/image";

import BlockquoteTestimonial from "@/components/blockquote";

import Myself from "@/components/musabbir";
import DefaultHero from "@/components/Hero";
import { Logo } from "@/components/icons";
import { Metadata } from "next";

const title = "About";

export const metadata: Metadata = {
  title: `${title}`,
};

export default function AboutPage() {
  return (
    <main className="space-y-5 max-w-7xl m-auto min-h-screen">
      <DefaultHero Icon={Logo} name="About" source="/terminal.webp" />
      <div>
        <div className="mt-4 bg-slate-50 m-auto p-4 min-h-screen">
          <BlockquoteTestimonial />
          <Myself />
        </div>
      </div>
    </main>
  );
}
