import { IProduct } from "@/interfaces/IProduct";
import Image from "next/image";
import { FC } from "react";
import { CounterItem } from "../counter/counter-item";

export const CartItem: FC<IProduct> = ({ id, title, image, price }) => {
  // ---- return jsx ----
  return (
    <div className="grid grid-cols-12 gap-3 p-2 bg-slate-100 rounded-lg">
      <div className="col-span-2">
        <Image
          src={image}
          width={100}
          height={100}
          layout="responsive"
          alt="product image"
          className="rounded-lg"
        />
      </div>
      <div className="col-span-10">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-8 italic">
          <span>price : </span> <span className="font-bold">{price} $</span>
        </p>
        <CounterItem id={id} price={price}/>
      </div>
    </div>
  );
};
