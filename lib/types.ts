import { type } from "os";

export interface LinkItem {
  id: number;
  name: string;
  to: string;
  icon: any;
  cover?: string;
}

export interface BreadcrumbItem {
  icon: any;
  route: "About" | "Articles" | "Projects";
  title: string;
}

export type FooterNavItem = {
  name: string;
  href: string;
  icon: any;
};

export type Article = {
  id: string;
  title: string;
  date: string;
  // type: string;
  slug: string;
  status: string;
  tags: string[];
  summary: string[];
  coverImage: string;
  author: string;
  type: "Post" | "Project";
  // icons: string[];
};

// export type Project = {
//   id: string;
//   title: string;
//   date: string;
//   type: string;
//   slug: string;
//   status: string;
//   tags: string[];
//   summary: string[];
//   coverImage: string;
//   author: string;
//   content: string;
// };

export type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export type TagFrequencyMap = {
  [tag: string]: number;
};
