import { FooterNavItem, LinkItem } from "@/lib/types";

import {
  AboutIcon,
  ArticleIcon,
  BrowseIcon,
  GithubIcon,
  LinkedInIcon,
  ProjectIcon,
} from "./components/icons";

import { Cover, Logo } from "./components/icons";

export const links: LinkItem[] = [
  {
    id: 0,
    name: "Browse Articles",
    to: "/articles",
    icon: BrowseIcon,
    cover: "/coverarticles.webp",
  },
  {
    id: 1,
    name: "Projects",
    to: "/articles/projects",
    icon: ProjectIcon,
    cover: "/coverprojects.webp",
  },
  // {
  //   id: 2,
  //   name: "Posts",
  //   to: "/articles/posts",
  //   icon: ArticleIcon,
  //   cover: "/coverartcles.webp",
  // },
  {
    id: 3,
    name: "About",
    to: "/about",
    icon: AboutIcon,
    cover: "/coverabout.webp",
  },

  // { id: 3, name: "Search", to: "/search" },
];

export const siteData = {
  title: "Musabbir Sagar",
  author: "Musabbir Sagar",
  headerTitle: "Top Rated Next.js Developer from UpWork",
  profileUrl: "/logo.svg",
  headerDescription:
    "This is Musabbir sagar, A web development polymath and digital nomad who loves to create stunning websites with cutting-edge technologies.",
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
