import { createSlice } from '@reduxjs/toolkit'

export const bookingsSlice = createSlice({
  name: 'booking',
  initialState: {
    userBookings: [],
    userbookingDetail: [],
    activeBooking: null,
    bookings: [],
    bookingDetail: [],
    admin: false,
    isLoadingBookings: true,
  },
  reducers: {
    onLoadingUserBookings: (state, { payload }) => {
      payload.forEach((booking) => {
        const exists = state.userBookings.some(
          (bookingInStore) => bookingInStore.id === booking.id
        )
        if (!exists) state.userBookings.push(booking)
      })
      state.isLoadingBookings = false
    },
    onLoadBookings: (state, { payload }) => {
      payload.forEach((booking) => {
        const exists = state.bookings.some(
          (bookingInStore) => bookingInStore.id === booking.id
        )
        if (!exists) state.bookings.push(booking)
      })
      state.isLoadingBookings = false
    },
    onSetUserBookingDetail: (state, { payload }) => {
      state.userbookingDetail = payload
    },
    onSetActiveUserBooking: (state, { payload }) => {
      state.activeBooking = state.userBookings.find((booking) => booking.id === payload)
    },
    onSetActiveBooking: (state, { payload }) => {
      state.activeBooking = state.bookings.find((booking) => booking.id === payload)
    },
    onSetView: (state, { payload }) => {
      state.admin = payload
    },
    onLogoutUserBookings: (state) => {
      state.userBookings = []
      state.userbookingDetail = []
      state.bookings = []
      state.bookingDetail = []
      state.activeBooking = null
      state.isLoadingBookings = true
    },
  },
})

export const {
  onLoadingUserBookings,
  onLogoutUserBookings,
  onSetUserBookingDetail,
  onSetActiveBooking,
  onSetActiveUserBooking,
  onLoadBookings,
  onSetView,
} = bookingsSlice.actions
