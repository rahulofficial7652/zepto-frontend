"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";

type QuantityControlProps = {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  className?: string;
};

export function QuantityControl({
  quantity,
  onQuantityChange,
  className,
}: QuantityControlProps) {
  const handleDecrement = () => {
    onQuantityChange(Math.max(1, quantity - 1));
  };

  const handleIncrement = () => {
    onQuantityChange(quantity + 1);
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={handleDecrement}
      >
        <Minus className="h-4 w-4" />
      </Button>
      <Input
        type="number"
        className="h-8 w-12 text-center"
        value={quantity}
        onChange={(e) => onQuantityChange(parseInt(e.target.value) || 1)}
        min="1"
      />
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={handleIncrement}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
