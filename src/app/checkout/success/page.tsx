import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function CheckoutSuccessPage() {
  return (
    <div className="container mx-auto flex min-h-[70vh] items-center justify-center px-4 py-8 sm:px-6 lg:py-12">
      <Card className="w-full max-w-md text-center shadow-lg">
        <CardHeader>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <CardTitle className="mt-4 text-2xl font-bold">
            Order Placed Successfully!
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Thank you for your purchase. Your order is being processed and will be
            delivered shortly.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild>
              <Link href="/orders">View My Orders</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Continue Shopping</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
