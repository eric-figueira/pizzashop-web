import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export function MonthlyCancelledOrdersAmountCard() {
  return (
    <Card className="bg-background">
      <CardHeader className="flex-row items-center justify-between space-y-0 pt-0 pb-2">
        <CardTitle className="text-base font-semibold">Cancelamentos (mês)</CardTitle>
        <DollarSign className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-2">
        <span className="text-3xl font-bold tracking-tight block">32</span>
        <p className="text-sm text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">-20%</span>{" "}
          em relação ao mês passado
        </p>
      </CardContent>
    </Card>
  )
}
