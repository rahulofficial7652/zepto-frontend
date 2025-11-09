"use client";

import Link from "next/link";
import {
  Package2,
  Search,
  User,
  MapPin,
  ShoppingCart,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CartSheet } from "@/components/cart/CartSheet";
import { useCart } from "@/context/CartProvider";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const { totalItems } = useCart();
  const navLinks = [
    { href: "/products/fruits", label: "Fruits" },
    { href: "/products/vegetables", label: "Vegetables" },
    { href: "/products/dairy-breakfast", label: "Dairy" },
    { href: "/orders", label: "My Orders" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Package2 className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">ZeptoClone</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6 text-primary" />
                <span className="sr-only">ZeptoClone</span>
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex w-full items-center justify-end gap-4 md:ml-auto">
          <div className="hidden items-center text-sm text-muted-foreground md:flex">
            <MapPin className="mr-1 h-4 w-4" />
            New York, 10001
          </div>
          <div className="relative hidden w-full max-w-sm items-center md:flex">
            <Input
              type="search"
              placeholder="Search for products..."
              className="pl-10"
            />
            <span className="absolute inset-y-0 left-0 flex items-center justify-center pl-3">
              <Search className="h-5 w-5 text-muted-foreground" />
            </span>
          </div>

          <CartSheet>
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full p-0"
                >
                  {totalItems}
                </Badge>
              )}
              <span className="sr-only">Shopping Cart</span>
            </Button>
          </CartSheet>

          <Link href="/login">
            <Button variant="outline" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Login</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
