import { INavbar } from "@/interfaces/INavbar";
import { FC } from "react";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import Link from "next/link";

const links: INavbar[] = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/about-us",
    title: "About Us",
  },
  {
    href: "/contact",
    title: "Contact",
  },
];

export const NavLinks: FC = () => {
  return links.map((link: INavbar) => (
    <NavigationMenuItem key={link.href}>
      <Link href={link.href} legacyBehavior passHref>
        <NavigationMenuLink
          className={`${navigationMenuTriggerStyle()} bg-transparent text-white text-base`}
        >
          {link.title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  ));
};
