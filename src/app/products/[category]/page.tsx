import { products, categories } from "@/lib/data";
import { ProductCard } from "@/components/product/ProductCard";
import { notFound } from "next/navigation";

type Props = {
  params: { category: string };
};

export default function CategoryPage({ params }: Props) {
  const category = categories.find((c) => c.id === params.category);
  const filteredProducts = products.filter(
    (product) => product.category === params.category
  );

  if (!category) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">
        {category.name}
      </h1>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex h-64 flex-col items-center justify-center rounded-lg border-2 border-dashed">
            <p className="text-lg text-muted-foreground">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}

export async function generateStaticParams() {
    return categories.map((category) => ({
      category: category.id,
    }));
}
