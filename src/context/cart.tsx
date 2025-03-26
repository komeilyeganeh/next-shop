"use client";

import { ICartProvider, ICart, ICartItem } from "@/interfaces/ICart";
import { useEffect, useState } from "react";
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
  const handleAddItemToCart = (id: string, price: string) => {    
    let listItems: ICartItem[] = [...cartItems];
    const prodIndex = listItems.findIndex((item: ICartItem) => item.id === id);
    if (prodIndex !== -1) {
      const prod: ICartItem = listItems[prodIndex];
      const prodUpdated = { id: prod.id, qty: prod.qty + 1, price: +price };
      listItems[prodIndex] = prodUpdated;
    } else {
      const newItem = { id, qty: 1, price: +price };
      listItems = [...listItems, newItem];
    }
    setCartItems(listItems);
  };
  const handleRemoveItemToCart = (id: string) => {
    let listItems: ICartItem[] = [...cartItems];
    const prodIndex = listItems.findIndex((item: ICartItem) => item.id === id);
    if (prodIndex !== -1) {
      const prod: ICartItem = listItems[prodIndex];
      const prodUpdated = { id: prod.id, qty: prod.qty - 1, price: prod.price };
      listItems[prodIndex] = prodUpdated;
      if (prod.qty === 0) {
        const filteredItems = listItems.filter(
          (item: ICartItem) => item.id !== prod.id
        );
        listItems = filteredItems;
      }
    }
    setCartItems(listItems);
  };

  useEffect(() => {
    if (cartItems.length > 0) {
      const totalPrice = cartItems.reduce((sum, item) => sum + (item.qty * +item.price), 0);      
      setTotal(totalPrice);
    }
  }, [cartItems]);
  

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
