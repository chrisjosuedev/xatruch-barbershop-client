import xatruchBarberApi from '../clientApi'

// GET CART
export const getCart = async () => {
  const {
    data: { data },
  } = await xatruchBarberApi.get('/bookings/cart/my-cart')
  return data
}

// POST
export const addToCart = async (serviceId) => {
  const {
    data: { data },
  } = await xatruchBarberApi.post(`/bookings/cart/my-cart?serviceId=${serviceId}`)
  return data
}

// DELETE
export const deleteFromCart = async (serviceId) => {
  const {
    data: { message },
  } = await xatruchBarberApi.delete(`/bookings/cart/my-cart/delete/${serviceId}`)
  return message
}
