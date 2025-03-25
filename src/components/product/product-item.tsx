import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
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
    <Card>
      <CardHeader>
        <div className="w-full">
          <Image
            src={image}
            width={100}
            height={100}
            layout="responsive"
            className="rounded-lg"
            alt="product image"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-4">
        <Link href={`/products/${id}`} className="font-bold">
          {title}
        </Link>
        <p className="text-sm">{truncateText(description, 27)}</p>
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-x-2">
            <span>Price : </span> <span>{price} $</span>
          </p>
          <CounterItem id={id}/>
        </div>
      </CardContent>
    </Card>
  );
};
