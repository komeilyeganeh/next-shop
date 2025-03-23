import { FC } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
} from "../ui/navigation-menu";

export const NavMenu: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>{children}</NavigationMenuList>
    </NavigationMenu>
  );
};
