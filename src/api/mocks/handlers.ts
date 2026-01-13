import { signInMock } from './sign-in'
import { registerRestaurantMock } from './register-restaurant'
import { getDailyOrdersAmountMock } from './get-daily-orders-amoun'
import { getMonthlyOrdersAmountMock } from './get-monthly-orders-amount'
import { getMonthlyCancelledOrdersAmountMock } from './get-monthly-cancelled-orders-amoun'
import { getMonthlyRevenueMock } from './get-monthly-revenue'
import { getPopularProductsMock } from './get-popular-products'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period'

export const handlers = [
  signInMock,
  registerRestaurantMock,
  getDailyOrdersAmountMock,
  getMonthlyOrdersAmountMock,
  getMonthlyCancelledOrdersAmountMock,
  getMonthlyRevenueMock,
  getPopularProductsMock,
  getDailyRevenueInPeriodMock,
]
