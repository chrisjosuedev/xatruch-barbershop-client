import { useDispatch, useSelector } from 'react-redux';
import { createSetting, getAllSettings } from '../api/fetch';
import { onAddNewSetting, onLoadSettings, onSetActiveSetting } from '../store';

export const useSettingStore = () => {
  const { settings, activeSetting, isLoadingSetting } = useSelector(
    (state) => state.setting
  );

  const dispatch = useDispatch();

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
    try {
      if (setting.id) {
        // update
        return;
      }
      // Save Setting
      const { setting: schedule } = await createSetting(setting);
      dispatch(onAddNewSetting(schedule));
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    // props
    settings,
    activeSetting,
    isLoadingSetting,
    // methods
    startLoadingSettings,
    startSavingSetting,
    startSetActiveSetting,
  };
};
