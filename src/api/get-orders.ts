import { api } from "@/lib/axios";

export interface GetOrdersResponse {
  orders: {
    orderId: string,
    createdAt: string,
    status: "pending" | "processing" | "delivering" | "delivered" | "cancelled",
    total: number,
    customerName: string,
  }[],
  meta: {
    pageIndex: number,
    perPage: number,
    totalCount: number,
  }
}

export async function getOrders() {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex: 0,
    }
  })

  return response.data
}
