import { FC } from "react";
import { NavMenu } from "../navbar/nav-menu";
import { FaCartShopping } from "react-icons/fa6";
import { NavLinks } from "../navbar/nav-links";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import Link from "next/link";
import { Badge } from "../ui/badge";

export const Header: FC = () => {
  return (
    <header className="bg-cyan-500 py-4">
      <div className="container flex items-center justify-between">
        <NavMenu>
          <NavLinks />
        </NavMenu>
        <div className="flex items-center gap-5">
          <Link href="/cart" className="relative">
            <FaCartShopping size={20} color="#fff"/>
            <Badge className="absolute -left-3 rounded-full top-4">5</Badge>
          </Link>
          <NavMenu>
            <NavigationMenuItem>
              <Link href="/login" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-transparent text-white text-base`}
                >
                  Login/Signup
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavMenu>
        </div>
      </div>
    </header>
  );
};
