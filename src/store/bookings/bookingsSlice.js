import { createSlice } from "@reduxjs/toolkit";

export const bookingsSlice = createSlice({
  name: "booking",
  initialState: {
    userBookings: [],
    userbookingDetail: [],
    activeBooking: null,
    bookings: [],
    bookingDetail: [],
    isLoadingBookings: true,
  },
  reducers: {
    onLoadingUserBookings: (state, { payload }) => {
      payload.forEach((booking) => {
        const exists = state.userBookings.some(
          (bookingInStore) => bookingInStore.id === booking.id,
        );
        if (!exists) state.userBookings.push(booking);
      });
      state.isLoadingBookings = false;
    },
    onSetUserBookingDetail: (state, { payload }) => {
      state.userbookingDetail = payload;
    },
    onSetActiveUserBooking: (state, { payload }) => {
      state.activeBooking = state.userBookings.find(
        (booking) => booking.id === payload,
      );
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

export const {
  onLoadingUserBookings,
  onLogoutUserBookings,
  onSetUserBookingDetail,
  onSetActiveUserBooking,
} = bookingsSlice.actions;
