import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { siteData } from "@/site";
import GoogleAnalytics from "@/components/GoogleAnalytics";

// import { ThemeModeScript } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteData.title}`,
    default: `${siteData.headerDescription} | ${siteData.title}`,
  },
  metadataBase: new URL("https://musabbirsagar.com"),
  description:
    "Musabbir Sagar is a top rated Next.js Developer in Upwork and Fiverr. He created 'Third Bracket Solutions', 'Nomad Gang Lab', and 'Literature Review UK'. He provides web development and literature review services through these agencies.",
  applicationName: "Musabbirs Terminal",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Musabbir Sagar",
    "Next.js Developer",
    "Third Bracket Solutions",
    "Literature Review UK",
    "Nomad Gang Lab",
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
    title: siteData.title,
    authors: siteData.author,

    description: siteData.headerDescription,

    images: [`/api/og?title=${siteData.title}`],
  },
  twitter: {
    card: "summary_large_image",

    title: siteData.title,

    description: siteData.headerDescription,

    images: [`/api/og?title=${siteData.title}`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* <ThemeModeScript /> */}
        <link rel="shortcut icon" href="/logo.svg" />
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
