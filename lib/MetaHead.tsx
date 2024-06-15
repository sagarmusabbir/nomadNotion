// import Head from "next/head";
// import { siteData } from "@/site";

// interface MetaHeadProps {
//   date: string;
//   title: string;
//   imageUrl: string;
//   summary: string;
//   ogUrl: string;
// }

// export function MetaHead(props: MetaHeadProps) {
//   const { date, title, imageUrl, summary, ogUrl } = props;

//   const titleName = title || "Musabbirs Terminal | Musabbir Sagar";

//   return (
//     <Head>
//       <title>{titleName}</title>
//       <link rel="shortcut icon" href="/logo.avif" />
//       <meta name="robots" content="follow, index" />
//       <meta content={summary || titleName} name="description" />
//       <meta property="og:site_name" content={siteData.author} />
//       <meta property="og:description" content={summary} />
//       <meta property="og:title" content={siteData.title} />
//       <meta property="og:image" content={imageUrl || siteData.socialBanner} />

//       <meta property="og:url" content={ogUrl} />
//       <meta property="og:type" content="website" />
//       <meta property="og:title" content={titleName} />
//       <meta property="og:description" content={summary} />
//       <meta property="og:image" content={imageUrl} />

//       <meta name="twitter:card" content="summary_large_image" />
//       <meta property="twitter:domain" content={siteData.websiteUrl} />
//       <meta property="twitter:url" content={ogUrl} />
//       <meta name="twitter:title" content={titleName} />
//       <meta name="twitter:description" content={summary} />
//       <meta name="twitter:image" content={imageUrl} />
//       {date && <meta property="article:published_time" content={date} />}
//     </Head>
//   );
// }
