import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useUiStore } from "../../../hooks/useUiStore";
import { useSettingStore } from "../../../hooks/useSettingStore";

export const AddSettingButton = () => {
  const { startOpenModal } = useUiStore();
  const { startSetActiveSetting } = useSettingStore();

  const onNewSetting = () => {
    startSetActiveSetting({});
    startOpenModal();
  };

  return (
    <button className="btn btn-dark btn-sm" onClick={onNewSetting}>
      <FontAwesomeIcon icon={faPlus} />
      &nbsp;Nuevo
    </button>
  );
};
