import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeModeScript } from "flowbite-react";
import DefaultHeader from "@/components/default";

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
        <ThemeModeScript />
        <link rel="shortcut icon" href="/logo.svg" />
      </head>
      <body className={inter.className}>
        <Header />

        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
