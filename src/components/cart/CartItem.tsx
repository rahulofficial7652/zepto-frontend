"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { CartItem as CartItemType } from "@/lib/types";
import { useCart } from "@/context/CartProvider";
import { formatPrice } from "@/lib/utils";
import { Minus, Plus, X } from "lucide-react";

type CartItemProps = {
  item: CartItemType;
};

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-start gap-4 py-4">
      <Image
        src={item.product.images[0].url}
        alt={item.product.name}
        width={80}
        height={80}
        className="rounded-lg object-cover"
        data-ai-hint={item.product.images[0].hint}
      />
      <div className="flex-1">
        <h3 className="font-semibold">{item.product.name}</h3>
        <p className="text-sm text-muted-foreground">{formatPrice(item.product.price)}</p>
        <div className="mt-2 flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7"
            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span>{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7"
            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold">{formatPrice(item.product.price * item.quantity)}</p>
        <Button
          variant="ghost"
          size="icon"
          className="mt-2 h-7 w-7 text-muted-foreground"
          onClick={() => removeFromCart(item.product.id)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
