import { createSlice } from "@reduxjs/toolkit";

export const serviceSlice = createSlice({
  name: "service",
  initialState: {
    services: [],
    isLoadingServices: true,
  },
  reducers: {
    onLoadServices: (state, { payload }) => {
      payload.forEach((service) => {
        const exists = state.services.some(
          (current) => current.id === service.id
        );
        if (!exists) state.services.push(service);
      });
      state.isLoadingServices = false;
    },
  },
});

export const { onLoadServices } = serviceSlice.actions;
