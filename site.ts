import { FooterNavItem, LinkItem } from "@/lib/types";

import {
  AboutIcon,
  ArticleIcon,
  GithubIcon,
  LinkedInIcon,
  ProjectIcon,
} from "./components/icons";
import { Cover, Logo } from "./components/icons";

export const links: LinkItem[] = [
  {
    id: 0,
    name: "Articles",
    to: "/articles",
    icon: ArticleIcon,
    cover: "/coverarticles.webp",
  },
  {
    id: 1,
    name: "Projects",
    to: "/projects",
    icon: ProjectIcon,
    cover: "/coverprojects.webp",
  },
  {
    id: 2,
    name: "About",
    to: "/about",
    icon: AboutIcon,
    cover: "/coverabout.webp",
  },

  // { id: 3, name: "Search", to: "/search" },
];

export const siteData = {
  title: "Musabbirs Terminal",
  author: "Musabbir Sagar",
  headerTitle: "Musabbirs Terminal",
  profileUrl: "/logo.svg",
  headerDescription:
    "Creator of Third Bracket Solutions, Nomad Gang Labs and Literature Review UK.",
  footerText: "© All rights reserved",
  language: "en-us",
  locale: "en-US",
  websiteUrl: "https://musabbirsagar.com",
  username: "sagarmusabbir",
  avatarUrl: "/avatar.svg",
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
