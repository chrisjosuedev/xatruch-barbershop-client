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

// GET BARBERS Available
export const getBarbersAvailability = async (barberId, date) => {
  const {
    data: { data },
  } = await xatruchBarberApi.get(
    `/bookings/orders/availability?barberId=${barberId}&date=${date}`
  )
  return data
}

// POST - Create Order
export const createBooking = async (booking) => {
  const {
    data: { data, message },
  } = await xatruchBarberApi.post('/bookings/orders', booking)
  return {
    sessionBooking: data,
    message,
  }
}
