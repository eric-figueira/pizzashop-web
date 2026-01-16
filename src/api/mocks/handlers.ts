import { signInMock } from './sign-in'
import { registerRestaurantMock } from './register-restaurant'
import { getDailyOrdersAmountMock } from './get-daily-orders-amoun'
import { getMonthlyOrdersAmountMock } from './get-monthly-orders-amount'
import { getMonthlyCancelledOrdersAmountMock } from './get-monthly-cancelled-orders-amount'
import { getMonthlyRevenueMock } from './get-monthly-revenue'
import { getPopularProductsMock } from './get-popular-products'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period'
import { getProfileMock } from './get-profile'
import { getManagedRestaurantMock } from './get-managed-restaurant'
import { updateProfileMock } from './update-profile'
import { getOrdersMock } from './get-orders'
import { getOrderDetailsMock } from './get-order-details'
import { approveOrderMock } from './approve-order'
import { cancelOrderMock } from './cancel-order'
import { deliverOrderMock } from './deliver-order'
import { dispatchOrderMock } from './dispatch-order'

export const handlers = [
  signInMock,
  registerRestaurantMock,
  getDailyOrdersAmountMock,
  getMonthlyOrdersAmountMock,
  getMonthlyCancelledOrdersAmountMock,
  getMonthlyRevenueMock,
  getPopularProductsMock,
  getDailyRevenueInPeriodMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
  approveOrderMock,
  cancelOrderMock,
  dispatchOrderMock,
  deliverOrderMock,
]
