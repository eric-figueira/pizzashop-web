import { api } from "@/lib/axios";

export interface GetMonthlyCancelledOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthlyCancelledOrdersAmount() {
  const response = await api.get<GetMonthlyCancelledOrdersAmountResponse>('/metrics/monthly-cancelled-orders-amount') 

  return response.data
}
