import { http, HttpResponse } from "msw";
import type { GetProfileResponse } from "../get-profile";

export const getProfileMock = http.get<never, never, GetProfileResponse>('/me', () => {
  return HttpResponse.json({
    id: 'custom-user-id',
    name: 'John Doe',
    email: 'johndoe@pizzashop.com',
    phone: '9181928191',
    role: 'manager',
    createdAt: new Date(),
    updatedAt: new Date(),
  })
})
