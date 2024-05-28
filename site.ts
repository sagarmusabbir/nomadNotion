import { FooterNavItem, LinkItem } from "@/lib/types";

import { GithubIcon, LinkedInIcon } from "./components/icons";

export const links: LinkItem[] = [
  { id: 0, name: "Articles", to: "/articles" },
  { id: 1, name: "About", to: "/about" },
{id:2, name:"Projects", to:"https://github.com/sagarmusabbir?tab=repositories"},
  // { id: 3, name: "Search", to: "/search" },
];

export const siteData = {
  title: "Musabbirs Terminal",
  author: "Musabbir Sagar",
  headerTitle: "Musabbirs Terminal",
  profileUrl: "/logo.svg",
  headerDescription: "Full Stack Next.js Developer",
  footerText: "© All rights reserved",
  language: "en-us",
  locale: "en-US",
  websiteUrl: "musabbirsagar.com",
};

export const footerNavigation: FooterNavItem[] = [
  {
    name: "GitHub",
    href: "https://github.com/sagarmusabbir",
    icon: GithubIcon,
  },
  // {
  //   name: "Twitter",
  //   href: "/",
  //   icon: Twitter,
  // },
  // {
  //   name: "Slack",
  //   href: "https://join.slack.com/t/analytics-roundtable/shared_invite/zt-1m5vonbd3-4~ZRqbz_sO4iWrn691DhwA",
  //   icon: Slack,
  // },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/musabbirsagar/",
    icon: LinkedInIcon,
  },
];

export const postsPerPage = 5;

export const email = "sagarmusabbir@gmail.com";
