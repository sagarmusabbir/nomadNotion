import DefaultEventSchedule from "@/components/default";
import EventScheduleSpeakersSponsors from "@/components/speakers-sponsors";
import Image from "next/image";
import { Badge } from "flowbite-react";
import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { Logo } from "@/components/icons";
import DefaultBreadcrumb from "@/components/BreadCumb";
import BlockquoteTestimonial from "@/components/blockquote";
import HeadingGridLayoutCustomerLogos from "@/components/blockquote";

import MobileAppDownloadCTASection from "@/components/mobile-app";
import { HiHome } from "react-icons/hi";
import CTABanner from "@/components/cta";
import CarouselSliderSocialProof from "@/components/carousel-slider";
import ComparisonCardsFeatureSection from "@/components/comparison";

export default function PostPage() {
  return (
    <main className="space-y-5 max-w-7xl m-auto">
      <div className="relative  w-full h-52 ">
        <CTABanner />
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
            <h1>About</h1>
          </div>
        </div>

        <div className="max-w-4xl px-6 mx-auto mb-24 space-y-8 md:px-8 pt-4 border-t border-slate-200  dark:text-zinc-300">
          <DefaultBreadcrumb icon={HiHome} route="Projects" title="..." />
          <BlockquoteTestimonial />
          <ComparisonCardsFeatureSection />
          <MobileAppDownloadCTASection />

          <DefaultEventSchedule />
          <CarouselSliderSocialProof />
        </div>
      </div>
    </main>
  );
}
