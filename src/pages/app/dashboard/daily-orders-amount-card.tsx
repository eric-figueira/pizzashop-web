import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils } from "lucide-react";

export function DailyOrdersAmountCard() {
  return (
    <Card className="bg-background">
      <CardHeader className="flex-row items-center justify-between space-y-0 pt-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-2">
        <span className="text-3xl font-bold tracking-tight block">14</span>
        <p className="text-sm text-muted-foreground">
          <span className="text-rose-500 dark:text-rose-400">-5%</span>{" "}
          em relação a ontem
        </p>
      </CardContent>
    </Card>
  )
}
