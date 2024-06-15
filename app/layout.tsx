import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

// import { ThemeModeScript } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Musabbir Sagar",
    template: "%s | Musabbirs Terminal",
  },
  metadataBase: new URL("https://musabbirsagar.com"),
  description:
    "This is Musabbir sagar, A web development polymath and digital nomad who loves to create stunning websites with cutting-edge technologies.",
  openGraph: {
    title: "Musabbirs Terminal by Musabbir Sagar",
    description:
      "This is Musabbir sagar, A web development polymath and digital nomad who loves to create stunning websites with cutting-edge technologies.",
    images: [`/api/og?title=Musabbirs Terminal by Musabbir Sagar`],
  },
  twitter: {
    card: "summary_large_image",
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
