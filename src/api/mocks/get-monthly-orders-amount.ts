import { http, HttpResponse } from 'msw'
import type { GetMonthlyOrdersAmountResponse } from '../get-monthly-orders-amount'

export const getMonthlyOrdersAmountMock = http.get<never, never, GetMonthlyOrdersAmountResponse>('/metrics/monthly-orders-amount', () => { 
  return HttpResponse.json({
    amount: 32,
    diffFromLastMonth: -15
  })
})
