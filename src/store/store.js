import { configureStore } from "@reduxjs/toolkit";

import { serviceSlice } from "./";

export const store = configureStore({
  reducer: {
    service: serviceSlice.reducer,
  },
});
