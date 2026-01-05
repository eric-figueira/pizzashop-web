import { getDailyOrdersAmount } from "@/api/get-daily-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";

export function DailyOrdersAmountCard() {
  const { data: dailyOrdersAmount } = useQuery({
    queryFn: getDailyOrdersAmount,
    queryKey: ['metrics', 'daily-orders-amount']
  })

  return (
    <Card className="bg-background">
      <CardHeader className="flex-row items-center justify-between space-y-0 pt-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="size-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-2">
        {dailyOrdersAmount && (
          <>
            <span className="text-3xl font-bold tracking-tight block">
              {dailyOrdersAmount?.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-sm text-muted-foreground">
              {dailyOrdersAmount.diffFromYesterday >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{dailyOrdersAmount.diffFromYesterday}%
                  </span> em relação a ontem
                </>
              ) : (
                <>
                <span className="text-rose-500 dark:text-rose-400">
                  {dailyOrdersAmount.diffFromYesterday}%
                </span> em relação a ontem
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
