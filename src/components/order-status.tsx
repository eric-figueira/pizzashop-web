import { cn } from "@/lib/utils"

type OrderStatus = "pending" | "processing" | "delivering" | "delivered" | "cancelled"

interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusTextMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  processing: 'Em preparo',
  delivering: 'Em entrega',
  delivered: 'Entregue',
  cancelled: 'Cancelado'
}

const orderStatusColorMap: Record<OrderStatus, string> = {
  pending: 'bg-slate-400',
  processing: 'bg-amber-500',
  delivering: 'bg-amber-500',
  delivered: 'bg-emerald-500',
  cancelled: 'bg-rose-500'
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span className={cn("size-2 rounded-full", orderStatusColorMap[status])} />
      <span className="font-medium text-muted-foreground">{orderStatusTextMap[status]}</span>
    </div>
  )
}
