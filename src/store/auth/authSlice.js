import { createSlice } from "@reduxjs/toolkit";
import { authStatus } from "../../data/data";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentStatus: authStatus[0],
    user: {},
    message: undefined,
  },
  reducers: {
    onChecking: (state) => {
      state.currentStatus = authStatus[0];
      state.user = {};
      state.message = undefined;
    },
    onLogin: (state, { payload }) => {
      state.currentStatus = authStatus[1];
      state.user = payload.profile;
      state.message = payload.message ?? undefined;
    },
    onLogout: (state, { payload }) => {
      state.currentStatus = authStatus[2];
      state.user = {};
      state.message = payload;
    },
    onClearMessage: (state) => {
      state.message = undefined;
    },
  },
});

export const { onChecking, onLogin, onLogout } = authSlice.actions;
