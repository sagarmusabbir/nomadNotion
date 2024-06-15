import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MetaHead } from "@/lib/MetaHead";

// import { ThemeModeScript } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...MetaHead,
  title: {
    template: "%s | Musabbirs Terminal",
    default: "Musabbir Sagar",
  },

  description: "Full Stack Next.Js Developer",
  openGraph: {
    url: "@/app/api/og",
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
