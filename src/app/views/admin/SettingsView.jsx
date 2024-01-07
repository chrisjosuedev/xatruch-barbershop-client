import { useEffect, useMemo } from "react";

import { useSettingStore } from "../../../hooks"
import { AddSettingButton, Message, SettingsModal, SettingsTable, SpinnerLoader } from "../../components";

export const SettingsView = () => {
  const { isLoadingSetting, settings, startLoadingSettings } = useSettingStore();

  useEffect(() => {
    startLoadingSettings();
  }, []);

  const renderSettingsReviews = useMemo(() => {
    if (settings.length === 0)
      return (<Message message={"No parece haber nada por aquí... 😔"} type="dark" />);
    return (<SettingsTable data={settings} />)
  }, [settings]);

  return (
    <div className="row">
      <div className="col-md-12">
        <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>Horarios</h3>
        <hr />
      </div>
      <div className="col-md-12 mb-2">
        <AddSettingButton />
      </div>
      <hr />
      <div className="col-md-12">
        {isLoadingSetting ? <SpinnerLoader /> : renderSettingsReviews}
      </div>
      <SettingsModal />
    </div>
  )
}
