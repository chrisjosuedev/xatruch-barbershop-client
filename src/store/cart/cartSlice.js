import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    message: undefined,
  },
  reducers: {
    onAddToCart: (state, { payload }) => {
      state.cart.push(payload)
    },
    onDeleteFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((servCart) => servCart.serviceId !== payload.id)
      state.message = payload.message
    },
    onLoadCart: (state, { payload }) => {
      payload.forEach((item) => {
        const exists = state.cart.some((inCart) => inCart.serviceId === item.serviceId)
        if (!exists) state.cart.push(item)
      })
    },
    onClearMessage: (state) => {
      state.message = undefined
    },
    onLogoutCart: (state) => {
      state.cart = []
    },
  },
})

export const { onAddToCart, onLoadCart, onLogoutCart, onClearMessage, onDeleteFromCart } =
  cartSlice.actions
