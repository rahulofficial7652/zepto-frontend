import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MapPin } from "lucide-react";
import { categories } from "@/lib/data";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="relative w-full bg-primary/10 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            <span className="text-primary">Groceries</span> delivered in minutes
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Your favorite local store, now online. Freshness and speed,
            guaranteed.
          </p>
          <div className="mx-auto mt-10 max-w-2xl">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-grow">
                <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter your location"
                  className="h-12 w-full pl-10 pr-4 text-lg"
                  defaultValue="New York, 10001"
                />
              </div>
              <Button size="lg" className="h-12 text-lg">
                <Search className="mr-2 h-5 w-5" />
                Find Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-6">
            {categories.map((category) => (
              <Link key={category.id} href={`/products/${category.id}`}>
                <Card className="group overflow-hidden rounded-2xl border-0 shadow-none transition-transform duration-300 hover:-translate-y-2">
                  <CardHeader className="p-0">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={200}
                      height={200}
                      className="aspect-square w-full object-cover"
                      data-ai-hint={category.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <CardTitle className="absolute bottom-0 p-4 text-base font-semibold text-white md:text-lg">
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
