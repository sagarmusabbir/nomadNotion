import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { siteData } from "@/site";
import GoogleAnalytics from "@/components/GoogleAnalytics";

// import { ThemeModeScript } from "flowbite-react";

import { WebPage, WithContext } from "schema-dts";

export const jsonLd: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: siteData.title + "|" + siteData.headerTitle,

  url: "https://musabbirsagar.com",
  description: siteData.headerDescription,

  isPartOf: {
    "@type": "WebSite",
    name: "Musabbir Sagar",
    url: "https://musabbirsagar.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Musabbir Sagar",
    url: "https://musabbirsagar.com",
    legalName: "Musabbir Sagar",
  },
};

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteData.title}`,
    default: `${siteData.headerTitle} | ${siteData.title}`,
  },
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/favicon-48x48.png",
      },
      {
        rel: "icon",
        url: "/favicon.svg",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",

  alternates: {
    canonical: "https://musabbirsagar.com",
  },
  verification: {
    google: "google1234567890",
  },

  metadataBase: new URL("https://musabbirsagar.com"),
  description: siteData.headerDescription,
  applicationName: "Musabbir Sagar",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Musabbir Sagar",
    "Next.js Developer",
    "Third Bracket Solutions",
    "Literature Review UK",
    "Top Rated Web Developer",
  ],
  authors: [{ name: siteData.author, url: "https://musabbirsagar.com/about" }],
  creator: "Musabbir Sagar",
  publisher: "Musabbir Sagar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    url: siteData.websiteUrl,
    title: `${siteData.headerTitle} | ${siteData.title}`,
    authors: siteData.author,

    description: siteData.headerDescription,

    images: [
      // `/api/og?title=${siteData.title}`
      {
        // url: "https://og.tailgraph.com/og?fontFamily=Inter&title=Musabbirs%20Terminal&titleTailwind=text-gray-800%20font-bold%20text-6xl&text=Creator%20of%20Third%20Bracket%20Solutions%2C%20Nomad%20Gang%20Labs%20and%20Products%20of%20Bangladesh.&textTailwind=text-gray-700%20text-2xl%20mt-4&logoUrl=https%3A%2F%2Fraw.githubusercontent.com%2Fsagarmusabbir%2FnomadNotion%2Fmain%2Fpublic%2FLogo.svg&logoTailwind=w-14%20mx-auto&bgUrl=https%3A%2F%2Fraw.githubusercontent.com%2Fsagarmusabbir%2FnomadNotion%2Fmain%2Fpublic%2Fmusabbir-cover.svg&bgTailwind=bg-white&footer=musabbirsagar.com&footerTailwind=text-emerald-400&t=1720906704239&refresh=1",
        url: "https://og.tailgraph.com/og?fontFamily=Inter&title=Musabbirs%20Terminal&titleTailwind=text-gray-800%20font-bold%20text-6xl&text=Creator%20of%20Third%20Bracket%20Solutions%2C%20Nomad%20Gang%20Labs%20and%20Products%20of%20Bangladesh.&textTailwind=text-gray-700%20text-2xl%20mt-4&logoUrl=https%3A%2F%2Fraw.githubusercontent.com%2Fsagarmusabbir%2FnomadNotion%2Fmain%2Fpublic%2FLogo.svg&logoTailwind=w-14%20mx-auto&bgUrl=https%3A%2F%2Fraw.githubusercontent.com%2Fsagarmusabbir%2FnomadNotion%2Fmain%2Fpublic%2Fmusabbir-cover.svg&bgTailwind=bg-white&footer=musabbirsagar.com&footerTailwind=text-emerald-400&t=1720906704239&refresh=1",
        alt: "Musabbir Sagar - Next.Js Developer",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteData.headerTitle} | ${siteData.title}`,
    description: siteData.headerDescription,
    creator: "@musabbirsagar",

    images: [
      {
        // url: "https://og.tailgraph.com/og?fontFamily=Roboto&title=Best%20Platform%20for%20sourcing%20Made%20in%20Bangladesh%20Products&titleTailwind=font-extrabold%20text-white%20text-5xl%20text-center%20px-4&titleFontFamily=Inter&text=ProductsofBangladesh.com&textTailwind=text-2xl%20mt-4%20text-center%20text-white&textFontFamily=Inter&logoUrl=https%3A%2F%2Fraw.githubusercontent.com%2Fsagarmusabbir%2Ftb%2Fmain%2Fpublic%2Foldlogo.svg&logoTailwind=text-center%20mx-auto%20w-20%20h-20%20p-4&bgUrl=https%3A%2F%2Fraw.githubusercontent.com%2Fsagarmusabbir%2Ftb%2Fmain%2Fpublic%2Fcover-mint.svg&bgTailwind=bg-white%20bg-opacity-50&footer=ProductsofBangladesh.com&footerTailwind=text-white&containerTailwind=p-4&t=1720553933274&refresh=1",
        url: "https://og.tailgraph.com/og?fontFamily=Inter&title=Musabbirs%20Terminal&titleTailwind=text-gray-800%20font-bold%20text-6xl&text=Creator%20of%20Third%20Bracket%20Solutions%2C%20Nomad%20Gang%20Labs%20and%20Products%20of%20Bangladesh.&textTailwind=text-gray-700%20text-2xl%20mt-4&logoUrl=https%3A%2F%2Fraw.githubusercontent.com%2Fsagarmusabbir%2FnomadNotion%2Fmain%2Fpublic%2FLogo.svg&logoTailwind=w-14%20mx-auto&bgUrl=https%3A%2F%2Fraw.githubusercontent.com%2Fsagarmusabbir%2FnomadNotion%2Fmain%2Fpublic%2Fmusabbir-cover.svg&bgTailwind=bg-white&footer=musabbirsagar.com&footerTailwind=text-emerald-400&t=1720906704239&refresh=1",
        alt: "Musabbir Sagar - Next.Js Developer",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth bg-white text-gray-900">
      <head>
        {/* <ThemeModeScript /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <GoogleAnalytics />
      </head>

      <body
        // className={inter.className}

        className={`${inter.className} antialiased dark:bg-zinc-950 text-gray-800 bg-slate-50 dark:text-slate-200`}
      >
        <Header />

        <main className="">
          {children}
          <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  );
}
