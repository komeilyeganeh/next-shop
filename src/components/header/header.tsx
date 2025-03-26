import { FC } from "react";
import { NavMenu } from "../navbar/nav-menu";
import { NavLinks } from "../navbar/nav-links";
import {
  NavigationMenuItem,
} from "../ui/navigation-menu";
import { CartBadge } from "../cart-badge/cart-badge";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "../ui/button";

export const Header: FC = () => {
  // ---- return jsx ----
  return (
    <header className="bg-amber-600 py-4">
      <div className="container flex items-center justify-between">
        <NavMenu>
          <NavLinks />
        </NavMenu>
        <div className="flex items-center gap-5">
          <CartBadge />
          <NavMenu>
            <NavigationMenuItem>
              <SignedOut>
                <Button asChild>
                  <SignInButton />
                </Button>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </NavigationMenuItem>
          </NavMenu>
        </div>
      </div>
    </header>
  );
};
