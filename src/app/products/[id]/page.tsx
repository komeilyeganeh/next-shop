import { IProduct } from "@/interfaces/IProduct";
import Image from "next/image";

interface IParams {
  params: Promise<{ id: string }>;
}

const ProductDetailPage = async ({ params }: IParams) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:3004/products/${id}`);
  const prod: IProduct = await res.json();
  return (
    <div className="container p-12">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          <Image
            src={prod.image}
            width={300}
            height={300}
            layout="responsive"
            alt={prod.title}
            className="rounded-lg"
          />
        </div>
        <div className="col-span-8">detail</div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
