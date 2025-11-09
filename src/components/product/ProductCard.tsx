"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartProvider";
import { ShoppingCart } from "lucide-react";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-2xl shadow-md transition-shadow hover:shadow-lg">
      <Link href={`/product/${product.id}`} className="flex-grow">
        <CardContent className="p-0">
          <Image
            src={product.images[0].url}
            alt={product.name}
            width={600}
            height={400}
            className="h-48 w-full object-cover"
            data-ai-hint={product.images[0].hint}
          />
        </CardContent>
        <div className="p-4">
          <CardTitle className="mb-1 text-lg font-semibold">{product.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{product.weight}</p>
          <p className="mt-2 text-base font-bold text-primary">{formatPrice(product.price)}</p>
        </div>
      </Link>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" onClick={() => addToCart(product)}>
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}
