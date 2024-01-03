import { configureStore } from '@reduxjs/toolkit';

import { authSlice, serviceSlice, uiSlice, reviewsSlice, bookingsSlice } from './';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    booking: bookingsSlice.reducer,
    service: serviceSlice.reducer,
    review: reviewsSlice.reducer,
    ui: uiSlice.reducer,
  },
});
