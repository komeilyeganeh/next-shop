"use client";

import { FC, useContext, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { CartContext } from "@/context/cart";
import { ICartItem } from "@/interfaces/ICart";

export const CounterItem: FC<{ id: string }> = ({ id }) => {
  const { cartItems, handleAddItemToCart, handleRemoveItemToCart } =
    useContext(CartContext);
  const [productQty, setProductQty] = useState<number>(0);

  useEffect(() => {
    const prodFind = cartItems.find((item: ICartItem) => item.id === id);
    if (prodFind) setProductQty(prodFind.qty);
  }, [cartItems]);

  // ---- return jsx ----
  return (
    <div className="flex items-center gap-2 bg-slate-200 p-1 rounded-md w-max">
      <Button
        className="w-6 h-6 bg-slate-100 text-black hover:bg-slate-400"
        onClick={() => handleRemoveItemToCart(id)}
      >
        -
      </Button>
      <span>{productQty}</span>
      <Button
        className="w-6 h-6 bg-slate-100 text-black hover:bg-slate-400"
        onClick={() => handleAddItemToCart(id)}
      >
        +
      </Button>
    </div>
  );
};
