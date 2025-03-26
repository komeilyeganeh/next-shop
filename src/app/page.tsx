import { ProductItem } from "@/components/product/product-item";
import { IProduct } from "@/interfaces/IProduct";

export default async function Home() {
  const res = await fetch("http://localhost:3004/products");
  const prods: IProduct[] = await res.json();
  return (
    <div className="container p-12">
      {/* ---- products ---- */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-8">
        {prods.map((p: IProduct) => (
          <ProductItem key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}
