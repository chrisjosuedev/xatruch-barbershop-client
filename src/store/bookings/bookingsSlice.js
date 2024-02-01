import { createSlice } from '@reduxjs/toolkit'

export const bookingsSlice = createSlice({
  name: 'booking',
  initialState: {
    bookings: [],
    userbookingDetail: [],
    activeBooking: null,
    bookingDetail: [],
    admin: false,
    isLoadingBookings: true,
    isLoadingDetail: false,
  },
  reducers: {
    onLoadBookings: (state, { payload }) => {
      state.bookings = payload
      state.isLoadingBookings = false
    },
    onSetLoadingDetail: (state, { payload }) => {
      state.isLoadingDetail = payload
    },
    onSetUserBookingDetail: (state, { payload }) => {
      state.userbookingDetail = payload
    },
    onSetActiveBooking: (state, { payload }) => {
      state.activeBooking = state.bookings.find((booking) => booking.id === payload)
    },
    onSetView: (state, { payload }) => {
      state.admin = payload
    },
    onLogoutUserBookings: (state) => {
      state.userbookingDetail = []
      state.bookings = []
      state.bookingDetail = []
      state.activeBooking = null
      state.isLoadingBookings = true
    },
  },
})

export const {
  onLoadBookings,
  onLogoutUserBookings,
  onSetActiveBooking,
  onSetUserBookingDetail,
  onSetView,
  onSetLoadingDetail,
} = bookingsSlice.actions
