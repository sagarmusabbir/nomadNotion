import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NavBar } from "@/components/Navbar";

// import { ThemeModeScript } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Musabbir Sagar",
  description: "Full Stack Next.Js Developer",
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
        <NavBar />

        <main className="">
          {children}
          <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  );
}
