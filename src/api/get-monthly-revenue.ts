import { api } from "@/lib/axios";

export interface GetMonthlyRevenueResponse {
  revenue: number
  diffFromLastMonth: number
}

export async function getMonthlyRevenue() {
  const response = await api.get<GetMonthlyRevenueResponse>('/metrics/monthly-revenue') 

  return response.data
}
