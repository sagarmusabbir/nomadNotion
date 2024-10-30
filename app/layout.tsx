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
  name: "Musabbir Sagar - Top Next.Js Developer from Upwork",

  url: "https://musabbirsagar.com",
  description: siteData.headerDescription,

  isPartOf: {
    "@type": "WebSite",
    name: "Musabbir Sagar - Top Next.Js Developer from Upwork",
    url: "https://musabbirsagar.com",
  },
  publisher: {
    "@type": "Person",
    name: "Musabbir Sagar",
    url: "https://musabbirsagar.com/about",
    sameAs: [
      "https://www.linkedin.com/in/musabbirsagar/",
      "https://github.com/sagarmusabbir",
      "https://www.facebook.com/wwolverinee",
      "https://www.upwork.com/freelancers/~01395bf8f21fc23328",
      "https://twitter.com/MusabbirSagar",
      "https://www.fiverr.com/sagarmusabbir",
      "https://medium.com/@sagarmusabbir",
      "https://bn.quora.com/profile/Musabbir-Sagar-1",
      "https://stackoverflow.com/users/28067551/musabbir-sagar",
      "https://youtube.com/@sagarmusabbir",

      "https://dev.to/sagarmusabbir",

      "https://www.instagram.com/sagarsxyz/",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Town Hall Road",
      addressLocality: "Habiganj",
      addressRegion: "Sylhet",
      postalCode: "3300",
      addressCountry: "BD",
    },
    email: "musabbir@thirdbracket.co.uk",
    image: [
      "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/397437157_10230882951884960_9114450588617653837_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeExBd6EJ5HrarJ2Ro-_dOwExbsxorFzsY7FuzGisXOxjltIkAxzMPqApS8St-TTSzY&_nc_ohc=vMEqFRIxV4EQ7kNvgFUVeiH&_nc_zt=23&_nc_ht=scontent.fdac24-1.fna&_nc_gid=AFi_2CMKXQ1YBlutccXcLBI&oh=00_AYAIFO8yUPEzlMQjEaC9HAnFPwync4LVHd4wO2-evGRBrw&oe=67287666",
      "https://scontent.fdac24-4.fna.fbcdn.net/v/t1.6435-9/39454506_10216196366529505_8331775803033387008_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEdb0_t5NcFoeVEVkIfw8hasFJ8NiUO2newUnw2JQ7ad6Ue0r1UzFB-LjgrDRrTdcU&_nc_ohc=531GiXcfdpgQ7kNvgFow_kL&_nc_zt=23&_nc_ht=scontent.fdac24-4.fna&_nc_gid=AYUczXE6oZSKyTFrk2ZsDLO&oh=00_AYD5IHr6O4xm9PHTKMAuYONFbLnMhxaGkkgPAr415Glu1w&oe=674A21C7",
      "https://scontent.fdac24-4.fna.fbcdn.net/v/t1.6435-9/61530284_10218495243279987_1532965521199202304_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEc-5Aw7fx67zgED9UXzfUPeavmxYHFLEV5q-bFgcUsRY8h4kzxQQOu21GviX5lj8I&_nc_ohc=ST_5jyv-otEQ7kNvgHwSuBi&_nc_zt=23&_nc_ht=scontent.fdac24-4.fna&_nc_gid=AMSgfG1ReCFmZdRU9CYQTQK&oh=00_AYBj8D7Pw9PBj_J6Cudh4Up8CIe-2M1oCap4pC3QuNBMTA&oe=674A3681",
      "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/315974472_10228444460964211_2174354641823458970_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFY4WoA7I_Iripm08Y3iRg6gXm6FgfAMKmBeboWB8AwqS8rP7iGjq0aGFK_J3VD2EI&_nc_ohc=uzDhTD_UXkkQ7kNvgG_JBr9&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=AzOzZEzFwXKfucT2rXavRWq&oh=00_AYCdcxQ8ooH1e9PIvyQB7PfBQFwEczUf-uFUSa2q4wmF0Q&oe=6728954F",
    ],

    jobTitle: "Next.Js Developer",
    gender: "Male",

    birthPlace: {
      "@type": "Place",
      name: "Habiganj, Sylhet, Bangladesh",
    },
    nationality: "Bangladeshi",
    alternateName: "S M A Musabbir Sagar",
    telephone: "(88)1765692886",
  },

  mainEntityOfPage: {
    "@type": "WebSite",
    "@id": "http://musabbirsagar.com/",
  },

  author: {
    "@type": "Person",
    name: "Musabbir Sagar",
    url: "https://musabbirsagar.com/about",
    sameAs: [
      "https://www.linkedin.com/in/musabbirsagar/",
      "https://github.com/sagarmusabbir",
      "https://www.facebook.com/wwolverinee",
      "https://www.upwork.com/freelancers/~01395bf8f21fc23328",
      "https://twitter.com/MusabbirSagar",
      "https://www.fiverr.com/sagarmusabbir",
      "https://medium.com/@sagarmusabbir",
      "https://bn.quora.com/profile/Musabbir-Sagar-1",
      "https://stackoverflow.com/users/28067551/musabbir-sagar",
      "https://youtube.com/@sagarmusabbir",

      "https://dev.to/sagarmusabbir",

      "https://www.instagram.com/sagarsxyz/",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Town Hall Road",
      addressLocality: "Habiganj",
      addressRegion: "Sylhet",
      postalCode: "3300",
      addressCountry: "BD",
    },
    email: "musabbir@thirdbracket.co.uk",
    image: [
      "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/397437157_10230882951884960_9114450588617653837_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeExBd6EJ5HrarJ2Ro-_dOwExbsxorFzsY7FuzGisXOxjltIkAxzMPqApS8St-TTSzY&_nc_ohc=vMEqFRIxV4EQ7kNvgFUVeiH&_nc_zt=23&_nc_ht=scontent.fdac24-1.fna&_nc_gid=AFi_2CMKXQ1YBlutccXcLBI&oh=00_AYAIFO8yUPEzlMQjEaC9HAnFPwync4LVHd4wO2-evGRBrw&oe=67287666",
      "https://scontent.fdac24-4.fna.fbcdn.net/v/t1.6435-9/39454506_10216196366529505_8331775803033387008_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEdb0_t5NcFoeVEVkIfw8hasFJ8NiUO2newUnw2JQ7ad6Ue0r1UzFB-LjgrDRrTdcU&_nc_ohc=531GiXcfdpgQ7kNvgFow_kL&_nc_zt=23&_nc_ht=scontent.fdac24-4.fna&_nc_gid=AYUczXE6oZSKyTFrk2ZsDLO&oh=00_AYD5IHr6O4xm9PHTKMAuYONFbLnMhxaGkkgPAr415Glu1w&oe=674A21C7",
      "https://scontent.fdac24-4.fna.fbcdn.net/v/t1.6435-9/61530284_10218495243279987_1532965521199202304_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEc-5Aw7fx67zgED9UXzfUPeavmxYHFLEV5q-bFgcUsRY8h4kzxQQOu21GviX5lj8I&_nc_ohc=ST_5jyv-otEQ7kNvgHwSuBi&_nc_zt=23&_nc_ht=scontent.fdac24-4.fna&_nc_gid=AMSgfG1ReCFmZdRU9CYQTQK&oh=00_AYBj8D7Pw9PBj_J6Cudh4Up8CIe-2M1oCap4pC3QuNBMTA&oe=674A3681",
      "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/315974472_10228444460964211_2174354641823458970_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFY4WoA7I_Iripm08Y3iRg6gXm6FgfAMKmBeboWB8AwqS8rP7iGjq0aGFK_J3VD2EI&_nc_ohc=uzDhTD_UXkkQ7kNvgG_JBr9&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=AzOzZEzFwXKfucT2rXavRWq&oh=00_AYCdcxQ8ooH1e9PIvyQB7PfBQFwEczUf-uFUSa2q4wmF0Q&oe=6728954F",
    ],
  },
  creator: {
    "@type": "Person",
    name: "Musabbir Sagar",
    url: "https://musabbirsagar.com/about",
    sameAs: [
      "https://www.linkedin.com/in/musabbirsagar/",
      "https://github.com/sagarmusabbir",
      "https://www.facebook.com/wwolverinee",
      "https://www.upwork.com/freelancers/~01395bf8f21fc23328",
      "https://twitter.com/MusabbirSagar",
      "https://www.fiverr.com/sagarmusabbir",
      "https://medium.com/@sagarmusabbir",
      "https://bn.quora.com/profile/Musabbir-Sagar-1",
      "https://stackoverflow.com/users/28067551/musabbir-sagar",
      "https://youtube.com/@sagarmusabbir",

      "https://dev.to/sagarmusabbir",

      "https://www.instagram.com/sagarsxyz/",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Town Hall Road",
      addressLocality: "Habiganj",
      addressRegion: "Sylhet",
      postalCode: "3300",
      addressCountry: "BD",
    },
    email: "musabbir@thirdbracket.co.uk",
    image: [
      "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/397437157_10230882951884960_9114450588617653837_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeExBd6EJ5HrarJ2Ro-_dOwExbsxorFzsY7FuzGisXOxjltIkAxzMPqApS8St-TTSzY&_nc_ohc=vMEqFRIxV4EQ7kNvgFUVeiH&_nc_zt=23&_nc_ht=scontent.fdac24-1.fna&_nc_gid=AFi_2CMKXQ1YBlutccXcLBI&oh=00_AYAIFO8yUPEzlMQjEaC9HAnFPwync4LVHd4wO2-evGRBrw&oe=67287666",
      "https://scontent.fdac24-4.fna.fbcdn.net/v/t1.6435-9/39454506_10216196366529505_8331775803033387008_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEdb0_t5NcFoeVEVkIfw8hasFJ8NiUO2newUnw2JQ7ad6Ue0r1UzFB-LjgrDRrTdcU&_nc_ohc=531GiXcfdpgQ7kNvgFow_kL&_nc_zt=23&_nc_ht=scontent.fdac24-4.fna&_nc_gid=AYUczXE6oZSKyTFrk2ZsDLO&oh=00_AYD5IHr6O4xm9PHTKMAuYONFbLnMhxaGkkgPAr415Glu1w&oe=674A21C7",
      "https://scontent.fdac24-4.fna.fbcdn.net/v/t1.6435-9/61530284_10218495243279987_1532965521199202304_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEc-5Aw7fx67zgED9UXzfUPeavmxYHFLEV5q-bFgcUsRY8h4kzxQQOu21GviX5lj8I&_nc_ohc=ST_5jyv-otEQ7kNvgHwSuBi&_nc_zt=23&_nc_ht=scontent.fdac24-4.fna&_nc_gid=AMSgfG1ReCFmZdRU9CYQTQK&oh=00_AYBj8D7Pw9PBj_J6Cudh4Up8CIe-2M1oCap4pC3QuNBMTA&oe=674A3681",
      "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/315974472_10228444460964211_2174354641823458970_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFY4WoA7I_Iripm08Y3iRg6gXm6FgfAMKmBeboWB8AwqS8rP7iGjq0aGFK_J3VD2EI&_nc_ohc=uzDhTD_UXkkQ7kNvgG_JBr9&_nc_zt=23&_nc_ht=scontent.fdac24-2.fna&_nc_gid=AzOzZEzFwXKfucT2rXavRWq&oh=00_AYCdcxQ8ooH1e9PIvyQB7PfBQFwEczUf-uFUSa2q4wmF0Q&oe=6728954F",
    ],
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
