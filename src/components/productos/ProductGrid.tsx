import Button from "../common/Button";
import type { Product } from "../../types/product";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="ml-10 flex items-center justify-center min-h-96">
        <p className="text-2xl text-foreground/60">No se encontraron productos</p>
      </div>
    );
  }

  return (
    <div className="ml-10 grid grid-cols-4 gap-8 justify-between">
      {products.map((product) => (
        <a
          key={product.slug}
          href={`/productos/${product.slug}`}
          className="flex flex-col group cursor-pointer border-2 rounded-lg transition-transform duration-300 hover:scale-105"
        >
          <div className="bg-primary-muted p-4 aspect-square rounded-lg w-full mb-2">
            <img
              src={product.images[0].src}
              alt={product.name}
              className="w-full h-full object-contain drop-shadow-xl"
            />
          </div>

          <h3 className="text-start px-4 text-xl font-bold font-title text-foreground mb-4">
            {product.name}
          </h3>

          <div className="px-4 flex flex-1 items-end pb-4">
            <Button size="sm" className="w-full font-semibold!">
              Ver Presentaciones
            </Button>
          </div>
        </a>
      ))}
    </div>
  );
}
