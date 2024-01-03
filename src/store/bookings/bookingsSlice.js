import { createSlice } from '@reduxjs/toolkit';

export const bookingsSlice = createSlice({
  name: 'booking',
  initialState: {
    userBookings: [],
    userbookingDetail: [],
    bookings: [],
    bookingDetail: [],
    activeBooking: null,
    isLoadingBookings: true,
  },
  reducers: {
    onLoadingUserBookings: (state, { payload }) => {
      payload.forEach((booking) => {
        const exists = state.userBookings.some((bookingInStore) => bookingInStore.id === booking.id);
        if (!exists) state.userBookings.push(booking);
      });
      state.isLoadingBookings = false;
    },
    onLogoutUserBookings: (state) => {
      state.userBookings = [];
      state.userbookingDetail = [];
      state.bookings = [];
      state.bookingDetail = [];
      state.activeBooking = null;
      state.isLoadingBookings = true;
    },
  },
});

export const { onLoadingUserBookings, onLogoutUserBookings } = bookingsSlice.actions;
