import { http, HttpResponse } from 'msw'
import type { GetMonthlyOrdersAmountResponse } from '../get-monthly-orders-amount'

export const getMonthlyCancelledOrdersAmountMock = http.get<never, never, GetMonthlyOrdersAmountResponse>('/metrics/monthly-cancelled-orders-amount', () => { 
  return HttpResponse.json({
    amount: 6,
    diffFromLastMonth: +25
  })
})
