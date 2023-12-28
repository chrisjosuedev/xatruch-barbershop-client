import { createSlice } from "@reduxjs/toolkit";
import { authStatus } from "../../data/data";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentStatus: authStatus[0],
    user: {},
    message: undefined,
    errors: []
  },
  reducers: {
    onChecking: (state) => {
      state.currentStatus = authStatus[0];
      state.user = {};
      state.message = undefined;
      state.errors = [];
    },
    onLogin: (state, { payload }) => {
      state.currentStatus = authStatus[1];
      state.user = payload.profile;
      state.message = payload.message;
      state.errors = [];
    },
    onLogout: (state) => {
      state.currentStatus = authStatus[2];
      state.user = {};
      state.message = undefined;
      state.errors = [];
    },
    onSetAuthErrors: (state, { payload }) => {
      state.errors = payload.errors;
      state.message = payload.message;
    },
    onClearMessage: (state) => {
      state.message = undefined;
      state.errors = [];
    },
  },
});

export const { onChecking, onLogin, onLogout, onSetAuthErrors } = authSlice.actions;
