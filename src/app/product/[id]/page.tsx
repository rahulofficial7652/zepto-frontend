"use client";

import { useState } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCart } from "@/context/CartProvider";
import { formatPrice } from "@/lib/utils";
import { QuantityControl } from "@/components/product/QuantityControl";
import { ShoppingCart } from "lucide-react";

type Props = {
  params: { id: string };
};

export default function ProductDetailPage({ params }: Props) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:py-12">
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <Card className="overflow-hidden rounded-2xl">
            <CardContent className="p-0">
              <Carousel>
                <CarouselContent>
                  {product.images.map((img, index) => (
                    <CarouselItem key={index}>
                      <Image
                        src={img.url}
                        alt={`${product.name} image ${index + 1}`}
                        width={600}
                        height={600}
                        className="aspect-square w-full object-cover"
                        data-ai-hint={img.hint}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
            {product.name}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">{product.weight}</p>
          <p className="mt-4 text-3xl font-bold text-primary">
            {formatPrice(product.price)}
          </p>
          <p className="mt-4 text-base text-foreground/80">
            {product.description}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <QuantityControl
              quantity={quantity}
              onQuantityChange={setQuantity}
            />
            <Button size="lg" className="flex-1" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
