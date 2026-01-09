import { getMonthlyRevenue } from "@/api/get-monthly-revenue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";
import { MetricCardSkeleton } from "./metric-card-skeleton";

export function MonthlyRevenueCard() {
  const { data: monthlyRevenue } = useQuery({
    queryFn: getMonthlyRevenue,
    queryKey: ['metrics', 'monthly-revenue']
  })

  return (
    <Card className="bg-background">
      <CardHeader className="flex-row items-center justify-between space-y-0 pt-0 pb-2">
        <CardTitle className="text-base font-semibold">Receita total (mês)</CardTitle>
        <DollarSign className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-2">
        {monthlyRevenue ? (
          <>
            <span className="text-3xl font-bold tracking-tight block">
              {(monthlyRevenue?.revenue / 100).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            <p className="text-sm text-muted-foreground">
              {monthlyRevenue.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{monthlyRevenue.diffFromLastMonth}%
                  </span> em relação ao mês passado
                </>
              ) : (
                <>
                <span className="text-rose-500 dark:text-rose-400">
                  {monthlyRevenue.diffFromLastMonth}%
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
