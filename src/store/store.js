import { configureStore } from "@reduxjs/toolkit";

import { authSlice, serviceSlice, uiSlice, reviewsSlice } from "./";

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    auth: authSlice.reducer,
    service: serviceSlice.reducer,
    review: reviewsSlice.reducer,
  },
});
