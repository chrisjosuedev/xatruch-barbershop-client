import xatruchBarberApi from '../clientApi'

// GET | User
export const getAllUserBookings = async () => {
  const {
    data: { data },
  } = await xatruchBarberApi.get('/bookings/orders/users')
  return data
}

export const getUserBookingDetailById = async (id) => {
  const {
    data: { data },
  } = await xatruchBarberApi.get(`/bookings/orders/users/${id}`)
  return data
}

// GET | Admin
export const getAllBookings = async () => {
  const {
    data: { data },
  } = await xatruchBarberApi.get('/bookings/orders')
  return data
}

export const getBookingDetailById = async (id) => {
  const {
    data: { data },
  } = await xatruchBarberApi.get(`/bookings/orders/${id}`)
  return data
}
