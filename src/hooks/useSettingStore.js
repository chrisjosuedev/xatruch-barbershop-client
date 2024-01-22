import { useDispatch, useSelector } from "react-redux";
import {
  activateSetting,
  createSetting,
  deleteSetting,
  getAllSettings,
  updateSetting,
} from "../api/fetch";
import {
  onAddNewSetting,
  onFindSetting,
  onLoadSettings,
  onSetActiveSetting,
} from "../store";
import {
  onClearErrors,
  onClearMessage,
  onDeleteSetting,
  onSetErrors,
  onSetSettingStatus,
  onUpdateSetting,
} from "../store/settings/settingSlice";

export const useSettingStore = () => {
  const { settings, message, activeSetting, settingErrors, isLoadingSetting } =
    useSelector((state) => state.setting);

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

  // Set Setting Status
  const startSetSettingStatus = async (id) => {
    const { setting, message } = await activateSetting(id);
    dispatch(onSetSettingStatus({ setting, message }));
    setTimeout(() => {
      dispatch(onClearMessage());
    }, 1000);
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

  // Star Deleting Setting
  const startDeleteSetting = async (id) => {
    try {
      const message = await deleteSetting(id);
      dispatch(onDeleteSetting(message));
      setTimeout(() => {
        dispatch(onClearMessage());
      }, 3000);
    } catch (error) {
      const {
        response: {
          data: { errors },
        },
      } = error;
      dispatch(onSetErrors(errors));
      setTimeout(() => {
        dispatch(onClearErrors());
      }, 4000);
    }
  };

  return {
    // props
    settings,
    activeSetting,
    isLoadingSetting,
    message,
    settingErrors,
    // methods
    startLoadingSettings,
    startSavingSetting,
    startSetActiveSetting,
    startFindSetting,
    startDeleteSetting,
    startSetSettingStatus,
  };
};
