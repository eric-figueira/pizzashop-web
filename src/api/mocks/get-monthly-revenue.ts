import { http, HttpResponse } from 'msw'
import type { GetMonthlyRevenueResponse } from '../get-monthly-revenue'

export const getMonthlyRevenueMock = http.get<never, never, GetMonthlyRevenueResponse>('/metrics/monthly-revenue', () => { 
  return HttpResponse.json({
    revenue: 89319,
    diffFromLastMonth: 83
  })
})
