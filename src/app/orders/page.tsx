import { orders } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

export default function OrdersPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:py-12">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">Your Orders</h1>
      {orders.length > 0 ? (
        <div className="space-y-6">
          {orders.map((order) => (
            <Card key={order.id} className="overflow-hidden rounded-2xl shadow-md">
              <CardHeader className="flex flex-row items-center justify-between bg-muted/50 p-4">
                <div>
                  <CardTitle className="text-lg">{order.id}</CardTitle>
                  <CardDescription>
                    {new Date(order.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </CardDescription>
                </div>
                <Badge
                  variant={
                    order.status === "Delivered"
                      ? "default"
                      : order.status === "Cancelled"
                      ? "destructive"
                      : "secondary"
                  }
                  className={`text-sm ${order.status === 'Delivered' ? 'bg-green-600 text-white' : ''}`}
                >
                  {order.status}
                </Badge>
              </CardHeader>
              <CardContent className="p-4">
                <ul className="space-y-2">
                    {order.items.map((item, index) => (
                        <li key={index} className="flex justify-between text-sm">
                            <span>{item.name} x{item.quantity}</span>
                            <span className="text-muted-foreground">{formatPrice(item.price * item.quantity)}</span>
                        </li>
                    ))}
                </ul>
              </CardContent>
              <Separator />
              <CardFooter className="flex justify-end bg-muted/50 p-4">
                <p className="text-lg font-bold">
                  Total: {formatPrice(order.total)}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex h-64 flex-col items-center justify-center rounded-lg border-2 border-dashed">
            <p className="text-lg text-muted-foreground">You have no past orders.</p>
        </div>
      )}
    </div>
  );
}
