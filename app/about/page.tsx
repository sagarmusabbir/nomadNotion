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

const jsonLd = {
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
};

export default function AboutPage() {
  return (
    <main className="space-y-5 max-w-7xl m-auto min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
