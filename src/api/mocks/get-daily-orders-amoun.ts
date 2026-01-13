import { http, HttpResponse } from 'msw'
import type { GetDailyOrdersAmountResponse } from '../get-daily-orders-amount'

export const getDailyOrdersAmountMock = http.get<never, never, GetDailyOrdersAmountResponse>('/metrics/daily-orders-amount', () => { 
  return HttpResponse.json({
    amount: 20,
    diffFromYesterday: 5
  })
})
