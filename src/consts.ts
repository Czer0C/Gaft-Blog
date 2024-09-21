import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "GAFT",
  DESCRIPTION: "Yet another 2D enthusiast",
  AUTHOR: "GAFT",
};

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Rambling",
    HREF: "/rambling",
  },
  {
    TEXT: "Review",
    HREF: "/review",
  },
  {
    TEXT: "Analysis",
    HREF: "/analysis",
  },
  {
    TEXT: "Appreciation",
    HREF: "/appreciation",
  },
  // {
  //   TEXT: "Tags",
  //   HREF: "/tag",
  // },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "IMDB",
    ICON: "imdb",
    TEXT: "Czer0C",
    HREF: "https://www.imdb.com/user/ur66535723",
  },
  {
    NAME: "Myanimelist",
    ICON: "anime",
    TEXT: "CzeroC",
    HREF: "https://myanimelist.net/profile/CzeroC",
  },
  {
    NAME: "VNDB",
    ICON: "vn",
    TEXT: "czer0c",
    HREF: "https://vndb.org/u131608",
  },
  {
    NAME: "Discord",
    ICON: "discord",
    TEXT: "CZEROC#6613",
    HREF: null,
  },
];
