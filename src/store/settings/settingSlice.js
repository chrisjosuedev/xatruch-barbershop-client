import { createSlice } from '@reduxjs/toolkit';

export const settingSlice = createSlice({
  name: 'setting',
  initialState: {
    settings: [],
    activeSetting: null,
    isLoadingSetting: true,
    message: undefined,
  },
  reducers: {
    onAddNewSetting: (state, { payload }) => {
      state.settings.push(payload.schedule);
      state.message = payload.message;
    },
    onUpdateSetting: (state, { payload }) => {
      state.settings = state.settings.map((setting) => {
        if (setting.id === payload.schedule.id) return payload.schedule;
        return setting;
      });
      state.message = payload.message;
    },
    onFindSetting: (state, { payload }) => {
      state.activeSetting = state.settings.find((setting) => setting.id === payload.id);
    },
    onSetActiveSetting: (state, { payload }) => {
      state.activeSetting = payload;
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
    onSetMessage: (state, { payload }) => {
      state.message = payload;
    },
    onClearMessage: (state) => {
      state.message = undefined;
    },
  },
});

export const {
  onAddNewSetting,
  onClearMessage,
  onFindSetting,
  onLoadSettings,
  onSetActiveSetting,
  onSetMessage,
  onUpdateSetting,
} = settingSlice.actions;
