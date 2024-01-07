import { createSlice } from '@reduxjs/toolkit';

export const settingSlice = createSlice({
  name: 'setting',
  initialState: {
    settings: [],
    activeSetting: null,
    isLoadingSetting: true,
  },
  reducers: {
    onSetActiveSetting: (state, { payload }) => {
      state.activeSetting = payload;
    },
    onAddNewSetting: (state, { payload }) => {
      state.settings.push(payload);
    },
    onLoadSettings: (state, { payload }) => {
      payload.forEach((setting) => {
        const exists = state.settings.some(
          (settingInStore) => settingInStore.id === setting.id
        );
        if (!exists) state.settings.push(setting);
      });
      state.isLoadingSetting = false;
    },
    onClearMessage: (state) => {
      state.message = undefined;
    },
  },
});

export const { onLoadSettings, onSetActiveSetting, onAddNewSetting, onClearMessage } =
  settingSlice.actions;
