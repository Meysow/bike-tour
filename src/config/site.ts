import { type NavItem, type NavItemFooter } from "@/types";

//TODO : reprendre complétement ce component

const links = {
  facebook: "https://www.facebook.com/rentabikeparis",
  instagram: "https://www.instagram.com/rentabikeparis",
  tripadvisor: "https://www.tripadvisor.com/rentabikeparis",
  authorsWebsite: "https://tdportfolio-self.vercel.app/",
  authorsGitHub: "https://github.com/meysow",
  openGraphImage: "https://saasyland.com/images/opengraph-image.png",
};

export const siteConfig = {
  name: "RentaTour",
  description:
    "Experience Paris like never before with our tailored bike tours and rental services. We provide everything you need for a memorable ride through the city’s iconic landmarks and hidden gems, ensuring a smooth, hassle-free adventure. Whether you’re planning a leisurely tour or just need a bike for the day, we’ve got you covered.",
  links,
  url: "https://rentabikeparis.fr",
  ogImage: links.openGraphImage,
  author: "Meyso",
  hostingRegion: "fra1",
  keywords: [
    "Bike Tours",
    "Bike Rentals",
    "Paris Tours",
    "City Biking",
    "Adventure Tours",
    "Bike Hire",
    "Explore Paris",
    "Cycling Experiences",
    "Sightseeing by Bike",
    "Paris Bike Routes",
  ],
  navItems: [
    {
      title: "Guided Tours",
      href: "/tours",
    },
    {
      title: "Bike Rentals",
      href: "/rent",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "About Us",
      href: "/about",
    },
  ] satisfies NavItem[],
  navItemsMobile: [],
  navItemsFooter: [
    {
      title: "Company",
      items: [
        {
          title: "About",
          href: "/about",
          external: false,
        },
        {
          title: "Privacy",
          href: "/privacy",
          external: false,
        },
        {
          title: "Terms",
          href: "/tos",
          external: false,
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          title: "FAQ",
          href: "/faq",
          external: false,
        },
        {
          title: "Contact",
          href: "/contact",
          external: false,
        },
      ],
    },
    {
      title: "Inspiration",
      items: [
        {
          title: "Shadcn",
          href: "https://ui.shadcn.com/",
          external: true,
        },
        {
          title: "Taxonomy",
          href: "https://tx.shadcn.com/",
          external: true,
        },
      ],
    },
  ] satisfies NavItemFooter[],
};
