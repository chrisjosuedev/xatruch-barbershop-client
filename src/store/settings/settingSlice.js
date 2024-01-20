import { createSlice } from "@reduxjs/toolkit";

export const settingSlice = createSlice({
  name: "setting",
  initialState: {
    settings: [],
    activeSetting: null,
    isLoadingSetting: true,
    message: undefined,
    settingErrors: [],
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
      state.activeSetting = state.settings.find(
        (setting) => setting.id === payload.id,
      );
    },
    onDeleteSetting: (state, { payload }) => {
      state.settings = state.settings.filter((setting) => {
        if (setting.id !== state.activeSetting.id) return setting;
      });
      state.message = payload;
    },
    onSetSettingStatus: (state, { payload }) => {
      state.settings = state.settings.map((setting) => {
        if (setting.id === payload.setting.id) return payload.setting;
        setting.isActive = false;
        return setting;
      });
      state.message = payload.message;
    },
    onSetActiveSetting: (state, { payload }) => {
      state.activeSetting = payload;
    },
    onLoadSettings: (state, { payload }) => {
      payload.forEach((setting) => {
        const exists = state.settings.some(
          (settingInStore) => settingInStore.id === setting.id,
        );
        if (!exists) state.settings.push(setting);
      });
      state.isLoadingSetting = false;
    },
    onSetMessage: (state, { payload }) => {
      state.message = payload;
    },
    onSetErrors: (state, { payload }) => {
      state.settingErrors = payload;
    },
    onClearMessage: (state) => {
      state.message = undefined;
      state.settingErrors = [];
    },
    onClearErrors: (state) => {
      state.settingErrors = [];
    },
    onLogoutSettings: (state) => {
      state.settings = [];
      state.activeSetting = null;
      state.isLoadingSetting = true;
      state.message = undefined;
      state.settingErrors = [];
    },
  },
});

export const {
  onAddNewSetting,
  onClearErrors,
  onClearMessage,
  onDeleteSetting,
  onFindSetting,
  onLoadSettings,
  onSetActiveSetting,
  onSetErrors,
  onSetMessage,
  onSetSettingStatus,
  onUpdateSetting,
  onLogoutSettings,
} = settingSlice.actions;
