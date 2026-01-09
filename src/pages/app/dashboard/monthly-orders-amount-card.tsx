import { getMonthlyOrdersAmount } from "@/api/get-monthly-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";
import { MetricCardSkeleton } from "./metric-card-skeleton";

export function MonthlyOrdersAmountCard() {
  const { data: monthlyOrdersAmount } = useQuery({
    queryFn: getMonthlyOrdersAmount,
    queryKey: ['metrics', 'monthly-orders-amount']
  })

  return (
    <Card className="bg-background">
      <CardHeader className="flex-row items-center justify-between space-y-0 pt-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
        <Utensils className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-2">
        {monthlyOrdersAmount ? (
          <>
            <span className="text-3xl font-bold tracking-tight block">
              {monthlyOrdersAmount?.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-sm text-muted-foreground">
              {monthlyOrdersAmount.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{monthlyOrdersAmount.diffFromLastMonth}%
                  </span> em relação ao mês passado
                </>
              ) : (
                <>
                <span className="text-rose-500 dark:text-rose-400">
                  {monthlyOrdersAmount.diffFromLastMonth}%
                </span> em relação ao mês passado
                </>
              )}
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
