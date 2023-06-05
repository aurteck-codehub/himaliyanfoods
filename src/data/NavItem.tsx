export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}
export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Products",

    children: [
      {
        label: "Explore Design Work",

        href: "#",
      },
      {
        label: "New & Noteworthy",

        href: "#",
      },
    ],
  },
  {
    label: "Contact",
    href: "#",
  },
];
