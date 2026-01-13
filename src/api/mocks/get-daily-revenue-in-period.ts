import { http, HttpResponse } from 'msw'
import type { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<never, never, GetDailyRevenueInPeriodResponse>('/metrics/daily-revenue-in-period', () => { 
  return HttpResponse.json([
    { date: '01/01/2024', revenue: 4556 },
    { date: '02/01/2024', revenue: 3113 },
    { date: '03/01/2024', revenue: 1977 },
    { date: '04/01/2024', revenue: 2970 },
    { date: '05/01/2024', revenue: 1368 },
    { date: '06/01/2024', revenue: 3394 },
    { date: '07/01/2024', revenue: 1647 },
  ])
})
