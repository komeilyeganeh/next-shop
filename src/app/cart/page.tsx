"use client";
import { CartItem } from "@/components/cart-item/cart-item";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { CartContext } from "@/context/cart";
import { ICartItem } from "@/interfaces/ICart";
import { IProduct } from "@/interfaces/IProduct";
import { useContext, useEffect, useState } from "react";

const CartPage = () => {
  const [items, setItems] = useState<IProduct[] | null>(null);
  const { cartItems, total } = useContext(CartContext);

  useEffect(() => {
    (async () => {
      await fetch("http://localhost:3004/products").then(async (res) => {
        if (res.status === 200) {
          const prods = await res.json();
          setItems(prods);
        }
      });
    })();
  }, []);

  // ---- return jsx ----
  return (
    <div className="container p-12">
      <h4 className="text-xl font-bold">Cart Items</h4>
      <div className="flex flex-col gap-4 mt-4">
        {cartItems.length > 0 ? (
          cartItems.map((item: ICartItem) => {
            return items?.map((prod: IProduct) => {
              if (prod.id === item.id) {
                return <CartItem key={prod.id} {...prod} />;
              }
            });
          })
        ) : (
          <Alert variant="destructive">
            <AlertTitle>No Items !</AlertTitle>
          </Alert>
        )}
      </div>
      {total > 0 && <p className="mt-8 text-base font-bold"><span>Total Price : </span> <span>{total} $</span></p>}
    </div>
  );
};

export default CartPage;
