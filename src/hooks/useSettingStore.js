import { useDispatch, useSelector } from 'react-redux';
import { createSetting, getAllSettings, updateSetting } from '../api/fetch';
import {
  onAddNewSetting,
  onFindSetting,
  onLoadSettings,
  onSetActiveSetting,
} from '../store';
import {
  onClearMessage,
  onSetMessage,
  onUpdateSetting,
} from '../store/settings/settingSlice';

export const useSettingStore = () => {
  const { settings, message, activeSetting, isLoadingSetting } = useSelector(
    (state) => state.setting
  );

  const dispatch = useDispatch();

  // Find Setting
  const startFindSetting = (id) => {
    dispatch(onFindSetting({ id }));
  };

  // Set Active Setting
  const startSetActiveSetting = (setting) => {
    dispatch(onSetActiveSetting(setting));
  };

  // Load All Settings
  const startLoadingSettings = async () => {
    const settings = await getAllSettings();
    dispatch(onLoadSettings(settings));
  };

  // Saving Setting
  const startSavingSetting = async (setting) => {
    if (setting.id) {
      // update
      const { setting: schedule, message } = await updateSetting(setting);
      dispatch(onUpdateSetting({ schedule, message }));
      setTimeout(() => {
        dispatch(onClearMessage());
      }, 3000);
      return;
    }
    // Save Setting
    const { setting: schedule, message } = await createSetting(setting);
    dispatch(onAddNewSetting({ schedule, message }));
    setTimeout(() => {
      dispatch(onClearMessage());
    }, 3000);
  };

  return {
    // props
    settings,
    activeSetting,
    isLoadingSetting,
    message,
    // methods
    startLoadingSettings,
    startSavingSetting,
    startSetActiveSetting,
    startFindSetting,
  };
};
