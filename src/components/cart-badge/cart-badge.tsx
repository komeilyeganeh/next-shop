"use client"

import Link from "next/link";
import { FC, useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Badge } from "../ui/badge";
import { CartContext } from "@/context/cart";
import { ICartItem } from "@/interfaces/ICart";

export const CartBadge: FC = () => {
  const { cartItems } = useContext(CartContext);

  // ---- return jsx ----
  return (
    <Link href="/cart" className="relative">
      <FaCartShopping size={20} color="#fff" />
      <Badge className="absolute -left-3 rounded-full top-4">
        {cartItems.reduce((sum, item: ICartItem) => item.qty + sum, 0)}
      </Badge>
    </Link>
  );
};
