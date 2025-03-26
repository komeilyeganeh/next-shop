import { FC } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { CounterItem } from "../counter/counter-item";
import { IProduct } from "@/interfaces/IProduct";
import { truncateText } from "@/lib/truncate-text";

export const ProductItem: FC<IProduct> = ({
  id,
  title,
  description,
  image,
  price,
}) => {
  return (
    <Card className="h-[340px] flex flex-col justify-between">
      <CardHeader>
        <div className="w-full">
          <Image
            src={image}
            width={100}
            height={120}
            layout="responsive"
            className="rounded-lg"
            alt="product image"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col justify-between gap-y-2">
        <Link href={`/products/${id}`} className="font-bold">
          {title}
        </Link>
        <p className="text-sm">{truncateText(description, 27)}</p>
        <div className="flex flex-col justify-between">
          <p className="bg-slate-100 p-1 rounded-lg font-semibold">
           {price} $
          </p>
          <CounterItem id={id} price={price}/>
        </div>
      </CardContent>
    </Card>
  );
};
