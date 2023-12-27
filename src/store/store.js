import { configureStore } from "@reduxjs/toolkit";

import { authSlice, serviceSlice } from "./";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    service: serviceSlice.reducer,
  },
});
