"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCart } from "@/context/CartProvider";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const addressSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  zipCode: z.string().min(5, "A valid ZIP code is required"),
  phone: z.string().min(10, "A valid phone number is required"),
});

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, totalPrice, totalItems, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const form = useForm<z.infer<typeof addressSchema>>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      fullName: "",
      address: "",
      city: "",
      zipCode: "",
      phone: "",
    },
  });

  const onSubmit = (values: z.infer<typeof addressSchema>) => {
    setIsProcessing(true);
    console.log("Order submitted with address:", values);
    
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      router.push("/checkout/success");
    }, 2000);
  };
  
  if (totalItems === 0 && !isProcessing) {
    return (
        <div className="container mx-auto flex h-[60vh] flex-col items-center justify-center text-center">
            <h1 className="text-2xl font-bold">Your cart is empty</h1>
            <p className="mt-2 text-muted-foreground">Add some products to your cart to proceed to checkout.</p>
            <Button asChild className="mt-6">
                <a href="/">Go Shopping</a>
            </Button>
        </div>
    )
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:py-12">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">Checkout</h1>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <Card>
            <CardHeader>
              <CardTitle>Delivery Address</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form id="checkout-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Textarea placeholder="123 Main St, Apt 4B" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-4">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="New York" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="zipCode"
                      render={({ field }) => (
                        <FormItem className="w-1/3">
                          <FormLabel>ZIP Code</FormLabel>
                          <FormControl>
                            <Input placeholder="10001" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="(123) 456-7890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        <div className="order-1 md:order-2">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
              <CardDescription>{totalItems} items</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {cart.map(item => (
                    <div key={item.product.id} className="flex justify-between text-sm">
                        <p className="text-muted-foreground">{item.product.name} x{item.quantity}</p>
                        <p>{formatPrice(item.product.price * item.quantity)}</p>
                    </div>
                ))}
                <Separator />
                <div className="flex justify-between font-bold">
                    <p>Total</p>
                    <p>{formatPrice(totalPrice)}</p>
                </div>
            </CardContent>
            <CardFooter>
              <Button form="checkout-form" type="submit" className="w-full" size="lg" disabled={isProcessing}>
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Place Order"
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
