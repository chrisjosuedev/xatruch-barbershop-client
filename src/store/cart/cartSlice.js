import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    availableBarbers: [],
    sessionBooked: null,
    isProcessing: false,
    message: undefined,
  },
  reducers: {
    onAddToCart: (state, { payload }) => {
      state.cart.push(payload)
    },
    onProcessing: (state) => {
      state.isProcessing = true
    },
    onAddSession: (state, { payload }) => {
      state.sessionBooked = payload.sessionBooked
      state.message = payload.message
      state.isProcessing = false
      state.cart = []
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
    onLoadAvailableBarbers: (state, { payload }) => {
      state.availableBarbers = payload
    },
    onClearMessage: (state) => {
      state.message = undefined
    },
    onLogoutCart: (state) => {
      state.cart = []
      state.availableBarbers = []
      state.message = undefined
      state.sessionBooked = null
      state.isProcessing = false
    },
  },
})

export const {
  onAddSession,
  onAddToCart,
  onClearMessage,
  onDeleteFromCart,
  onLoadAvailableBarbers,
  onLoadCart,
  onLogoutCart,
  onProcessing,
} = cartSlice.actions
