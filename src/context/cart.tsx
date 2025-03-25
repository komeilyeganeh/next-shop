"use client";

import { ICartProvider, ICart, ICartItem } from "@/interfaces/ICart";
import { useState } from "react";
import { createContext } from "react";

const initialCart: ICart = {
  cartItems: [],
  total: 0,
  handleAddItemToCart: () => {},
  handleRemoveItemToCart: () => {},
};

export const CartContext = createContext<ICart>(initialCart);

export const CartContextProvider = ({ children }: ICartProvider) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const [total, setTotal] = useState(0);

  // ---- handlers ----
  const handleAddItemToCart = (id: string) => {
    let listItems: ICartItem[] = [...cartItems];
    const prodIndex = listItems.findIndex((item: ICartItem) => item.id === id);
    if (prodIndex !== -1) {
      const prod: ICartItem = listItems[prodIndex];
      const prodUpdated = { id: prod.id, qty: prod.qty + 1 };
      listItems[prodIndex] = prodUpdated;
    } else {
      const newItem = { id, qty: 1 };
      listItems = [...listItems, newItem];
    }
    setCartItems(listItems);
  };
  const handleRemoveItemToCart = (id: string) => {
    let listItems: ICartItem[] = [...cartItems];
    const prodIndex = listItems.findIndex((item: ICartItem) => item.id === id);
    if (prodIndex !== -1) {
      const prod: ICartItem = listItems[prodIndex];
      if (prod.qty > 0) {
        const prodUpdated = { id: prod.id, qty: prod.qty - 1 };
        listItems[prodIndex] = prodUpdated;
      } else {
        const filteredItems = listItems.filter((item: ICartItem) => item.id !== prod.id);
        listItems = filteredItems;
      }
    }
    setCartItems(listItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        total,
        handleAddItemToCart,
        handleRemoveItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
